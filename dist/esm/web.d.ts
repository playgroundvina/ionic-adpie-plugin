import { WebPlugin } from '@capacitor/core';
import type { CapacitorPluginAdPiePlugin } from './definitions';
export declare class CapacitorPluginAdPieWeb extends WebPlugin implements CapacitorPluginAdPiePlugin {
    isLoadedInterstitial(): Promise<{
        isLoadedInterstitial: boolean;
    }>;
    isLoadedRewardVideoAd(): Promise<{
        isLoadedRewardVideoAd: boolean;
    }>;
    initialize(options: {
        appId: string;
    }): Promise<void>;
    showBanner(options: {
        adBannerId: string;
        position: string;
        margin: number;
    }): Promise<void>;
    hideBanner(): Promise<void>;
    removeBanner(): Promise<void>;
    prepareRewardVideoAd(options: {
        adRewardId: string;
    }): Promise<void>;
    showRewardVideoAd(): Promise<void>;
    prepareInterstitial(options: {
        adInterstitialId: string;
    }): Promise<void>;
    showInterstitial(): Promise<void>;
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
