import type { Config as ProviderConfig, Template as ProviderTemplate, TemplateAlias as ProviderTemplateAlias } from '../models/Provider.js';
import type { Connection } from '../models/Connection.js';
import db from '../db/database.js';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { isCloud, dirname } from '../utils/utils.js';
import { NangoError } from '../utils/error.js';
import encryptionManager from '../utils/encryption.manager.js';
import { deleteScheduleForProviderConfig as deleteSyncScheduleForProviderConfig } from '../services/sync/schedule.service.js';
import { deleteSyncFilesForConfig } from '../services/sync/config.service.js';

class ConfigService {
    templates: { [key: string]: ProviderTemplate } | null;

    constructor() {
        this.templates = this.getTemplatesFromFile();
    }

    private getTemplatesFromFile() {
        const templatesPath = path.join(dirname(), '../../../providers.yaml');

        try {
            const fileEntries = yaml.load(fs.readFileSync(templatesPath).toString()) as { [key: string]: ProviderTemplate | ProviderTemplateAlias };

            if (fileEntries == null) {
                throw new NangoError('provider_template_loading_failed');
            }

            for (const key in fileEntries) {
                const entry = fileEntries[key] as ProviderTemplateAlias;

                if (entry?.alias) {
                    let hasOverrides = false;
                    let templateOverrides;
                    if (Object.keys(fileEntries[key] as ProviderTemplate).length > 0) {
                        const { alias, ...overrides } = entry as ProviderTemplateAlias;
                        hasOverrides = true;
                        templateOverrides = overrides;
                    }
                    const aliasData = fileEntries[entry.alias] as ProviderTemplate;
                    if (hasOverrides) {
                        fileEntries[key] = { ...aliasData, ...templateOverrides };
                    }
                }
            }

            return fileEntries as { [key: string]: ProviderTemplate };
        } catch (_) {
            return null;
        }
    }

    async getProviderName(providerConfigKey: string): Promise<string | null> {
        const result = await db.knex.withSchema(db.schema()).select('provider').from<ProviderConfig>(`_nango_configs`).where({ unique_key: providerConfigKey });

        if (result == null || result.length == 0 || result[0] == null) {
            return null;
        }

        return result[0].provider;
    }

    async getProviderConfig(providerConfigKey: string, environment_id: number): Promise<ProviderConfig | null> {
        if (!providerConfigKey) {
            throw new NangoError('missing_provider_config');
        }
        if (!environment_id) {
            throw new NangoError('missing_environment_id');
        }

        const result = await db.knex
            .withSchema(db.schema())
            .select('*')
            .from<ProviderConfig>(`_nango_configs`)
            .where({ unique_key: providerConfigKey, environment_id });

        if (result == null || result.length == 0 || result[0] == null) {
            return null;
        }

        return encryptionManager.decryptProviderConfig(result[0]);
    }

    async listProviderConfigs(environment_id: number): Promise<ProviderConfig[]> {
        return (await db.knex.withSchema(db.schema()).select('*').from<ProviderConfig>(`_nango_configs`).where({ environment_id }))
            .map((config) => encryptionManager.decryptProviderConfig(config))
            .filter((config) => config != null) as ProviderConfig[];
    }

    async createProviderConfig(config: ProviderConfig): Promise<void | Pick<ProviderConfig, 'id'>[]> {
        return db.knex.withSchema(db.schema()).from<ProviderConfig>(`_nango_configs`).insert(encryptionManager.encryptProviderConfig(config), ['id']);
    }

    /**
     * Create Default Provider Config
     * @desc create a default Github config only for the dev environment
     */
    async createDefaultProviderConfig(accountId: number) {
        const environments = await db.knex.withSchema(db.schema()).select('*').from(`_nango_environments`).where({ account_id: accountId, name: 'dev' });
        const devEnvironment = environments[0];

        const config: ProviderConfig = {
            environment_id: devEnvironment.id,
            unique_key: 'demo-github-integration',
            provider: 'github',
            oauth_client_id: process.env['DEFAULT_GITHUB_CLIENT_ID'] || '',
            oauth_client_secret: process.env['DEFAULT_GITHUB_CLIENT_SECRET'] || '',
            oauth_scopes: 'public_repo'
        };

        await this.createProviderConfig(config);
    }

    async deleteProviderConfig(providerConfigKey: string, environment_id: number): Promise<number> {
        await deleteSyncScheduleForProviderConfig(environment_id, providerConfigKey);
        if (isCloud()) {
            const config = await this.getProviderConfig(providerConfigKey, environment_id);
            await deleteSyncFilesForConfig(config?.id as number);
        }

        await db.knex.withSchema(db.schema()).from<Connection>(`_nango_connections`).where({ provider_config_key: providerConfigKey, environment_id }).del();
        return db.knex.withSchema(db.schema()).from<ProviderConfig>(`_nango_configs`).where({ unique_key: providerConfigKey, environment_id }).del();
    }

    async editProviderConfig(config: ProviderConfig) {
        return db.knex
            .withSchema(db.schema())
            .from<ProviderConfig>(`_nango_configs`)
            .where({ unique_key: config.unique_key, environment_id: config.environment_id })
            .update(encryptionManager.encryptProviderConfig(config));
    }

    checkProviderTemplateExists(provider: string) {
        if (this.templates == null) {
            throw new NangoError('provider_template_loading_failed');
        }
        return provider in this.templates;
    }

    getTemplate(provider: string): ProviderTemplate {
        if (this.templates == null) {
            throw new NangoError('unknown_provider_template_in_config');
        }
        const template = this.templates[provider];

        if (template == null) {
            throw new NangoError('unknown_provider_template_in_config');
        }

        return template;
    }

    getTemplates(): { [key: string]: ProviderTemplate } {
        if (this.templates == null) {
            throw new NangoError('provider_template_loading_failed');
        }
        return this.templates;
    }
}

export default new ConfigService();
