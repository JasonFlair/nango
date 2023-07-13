import { jest } from '@jest/globals';
import SyncRun from './run.service.js';
import { SyncType } from '../../models/Sync.js';

jest.mock('../activity.service.js');
jest.mock('./job.service.js');
jest.mock('./data-records.service.js');
jest.unstable_mockModule('./config.service.js', () => {
    return {
        getSyncConfig: Promise.resolve({
            integrations: { provider: {} }
        })
    };
});

describe('SyncRun', () => {
    let syncRun: SyncRun;

    const mockConfig = {
        writeToDb: true,
        nangoConnection: {
            provider_config_key: 'provider',
            connection_id: 'test-connection',
            environment_id: 123
        },
        syncName: 'sync1',
        syncType: SyncType.INCREMENTAL
    };

    beforeEach(() => {
        syncRun = new SyncRun(mockConfig);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should instantiate correctly', () => {
        expect(syncRun.writeToDb).toBe(mockConfig.writeToDb);
        expect(syncRun.nangoConnection).toBe(mockConfig.nangoConnection);
        expect(syncRun.syncName).toBe(mockConfig.syncName);
        expect(syncRun.syncType).toBe(mockConfig.syncType);
    });

    describe('run', () => {
        it('should return false if integration not matched', async () => {
            // Now you can control the mock function
            //(getSyncConfig as jest.Mock).mockImplementationOnce(() =>
            //Promise.resolve({
            //integrations: { 'different-provider': {} }
            //})
            //);
            //jest.spyOn(configService, 'getSyncConfig').mockImplementationOnce(() => {
            //return Promise.resolve({
            //integrations: { 'different-provider': {} }
            //} as unknown as NangoConfig);
            //});

            const result = await syncRun.run();

            expect(result).toBe(false);
        });

        // Add more test cases here for various conditions
    });
});
