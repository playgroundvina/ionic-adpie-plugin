export interface CapacitorPluginAdPiePlugin {
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
    isLoadedRewardVideoAd(): Promise<{
        isLoadedRewardVideoAd: boolean;
    }>;
    prepareInterstitial(options: {
        adInterstitialId: string;
    }): Promise<void>;
    showInterstitial(): Promise<void>;
    isLoadedInterstitial(): Promise<{
        isLoadedInterstitial: boolean;
    }>;
}
