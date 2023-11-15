import { WebPlugin } from '@capacitor/core';
import type { CapacitorPluginAdPiePlugin } from './definitions';
export declare class CapacitorPluginAdPieWeb extends WebPlugin implements CapacitorPluginAdPiePlugin {
    call_AdPie_bannerAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    call_AdPie_nativeAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    call_AdPie_interstitialAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    call_AdPie_rewardedAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
