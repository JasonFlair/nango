import { jest } from '@jest/globals';
import SyncRun from './run.service.js';
import { SyncType } from '../../models/Sync.js';
import type { NangoConfig } from '../../integrations/index.js';

jest.mock('../activity.service.js');
jest.mock('./job.service.js');
jest.mock('./data-records.service.js');
jest.unstable_mockModule('./config.service.js', () => ({
    getSyncConfig: jest.fn().mockImplementation(() => {
        return Promise.resolve({
            integrations: { provider: {} }
        } as unknown as NangoConfig);
    }),
    getProviderConfig: jest.fn(() => {
        return Promise.resolve({
            integrations: { provider: {} }
        } as unknown as NangoConfig);
    })
}));

//
// @ts-ignore
const { getSyncConfig } = await import('./config.service.js');

//import { getSyncConfig } from './config.service.js';

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
            //await (getSyncConfig as jest.Mock).mockImplementation(() =>
            //Promise.resolve({
            //integrations: { 'different-provider': {} }
            //})
            //);
            //jest.spyOn(configService, 'getSyncConfig').mockImplementationOnce(() => {
            //return Promise.resolve({
            //integrations: { 'different-provider': {} }
            //} as unknown as NangoConfig);
            //});

            //console.log(getSyncConfig);
            //// @ts-ignore
            //getSyncConfig.mockResolvedValue({
            //// @ts-ignore
            //integrations: { 'different-provider': {} }
            //});
            console.log(getSyncConfig);
            // @ts-ignore
            console.log(getSyncConfig());
            //jest.spyOn(getSyncConfig, 'mockResolvedValue').mockResolvedValue(getSyncConfig().getMockImplementation()());

            const result = await syncRun.run();

            expect(result).toBe(false);
        });

        // Add more test cases here for various conditions
    });
});
