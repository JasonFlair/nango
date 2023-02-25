import type { ProviderConfig, ProviderTemplate } from '../models.js';
import db from '../db/database.js';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { dirname } from '../utils/utils.js';

class ConfigService {
    templates: { [key: string]: ProviderTemplate };

    constructor() {
        let templatesPath = path.join(dirname(), '../../providers.yaml');
        this.templates = yaml.load(fs.readFileSync(templatesPath).toString()) as { string: ProviderTemplate };
    }

    async getProviderConfig(providerConfigKey: string, accountId: number): Promise<ProviderConfig | null> {
        let result = await db.knex
            .withSchema(db.schema())
            .select('*')
            .from<ProviderConfig>(`_nango_configs`)
            .where({ unique_key: providerConfigKey, account_id: accountId });

        if (result == null || result.length == 0 || result[0] == null) {
            return null;
        }

        return result[0];
    }

    async listProviderConfigs(accountId: number): Promise<ProviderConfig[]> {
        return db.knex.withSchema(db.schema()).select('*').from<ProviderConfig>(`_nango_configs`).where({ account_id: accountId });
    }

    async createProviderConfig(config: ProviderConfig): Promise<void | Pick<ProviderConfig, 'id'>[]> {
        return db.knex.withSchema(db.schema()).from<ProviderConfig>(`_nango_configs`).insert(config, ['id']);
    }

    async deleteProviderConfig(providerConfigKey: string, accountId: number): Promise<number> {
        return db.knex.withSchema(db.schema()).from<ProviderConfig>(`_nango_configs`).where({ unique_key: providerConfigKey, account_id: accountId }).del();
    }

    async editProviderConfig(config: ProviderConfig) {
        return db.knex.withSchema(db.schema()).from<ProviderConfig>(`_nango_configs`).where({ unique_key: config.unique_key }).update({
            provider: config.provider,
            oauth_client_id: config.oauth_client_id,
            oauth_client_secret: config.oauth_client_secret,
            oauth_scopes: config.oauth_scopes
        });
    }

    getTemplates(): { [key: string]: ProviderTemplate } {
        return this.templates;
    }

    checkProviderTemplateExists(provider: string) {
        return provider in this.templates;
    }
}

export default new ConfigService();
