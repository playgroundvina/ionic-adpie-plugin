import { WebPlugin } from '@capacitor/core';
export class CapacitorPluginAdPieWeb extends WebPlugin {
    async call_AdPie_bannerAd(options) {
        console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
        console.log('slotID', options.slotID);
    }
    async call_AdPie_nativeAd(options) {
        console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
        console.log('slotID', options.slotID);
    }
    async call_AdPie_interstitialAd(options) {
        console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
        console.log('slotID', options.slotID);
    }
    async call_AdPie_rewardedAd(options) {
        console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
        console.log('slotID', options.slotID);
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async initialize(options) {
        console.log('initialize', options.appId);
    }
    async showBanner(options) {
        console.log('showBanner', options.adBannerId);
        console.log('showBanner', options.position);
        console.log('showBanner', options.margin);
    }
    async hideBanner() {
        console.log('hideBanner');
    }
    async removeBanner() {
        console.log('removeBanner');
    }
    async prepareRewardVideoAd(options) {
        console.log('prepareRewardVideoAd', options.adRewardId);
    }
    async showRewardVideoAd() {
        console.log('showRewardVideoAd');
    }
    async isLoadedRewardVideoAd() {
        console.log('isLoadedRewardVideoAd');
        return { isLoadedRewardVideoAd: false };
    }
    async prepareInterstitial(options) {
        console.log('prepareInterstitial', options.adInterstitialId);
    }
    async showInterstitial() {
        console.log('showInterstitial');
    }
    async isLoadedInterstitial() {
        console.log('isLoadedInterstitial');
        return { isLoadedInterstitial: false };
    }
}
//# sourceMappingURL=web.js.map