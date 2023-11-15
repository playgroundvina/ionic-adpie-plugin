import { WebPlugin } from '@capacitor/core';
export class CapacitorPluginAdPieWeb extends WebPlugin {
    addListener(eventName, listenerFunc) {
        throw new Error('Method not implemented.');
    }
    isLoadedInterstitial() {
        console.log('isLoadedInterstitial');
        throw new Error('Method not implemented.');
    }
    isLoadedRewardVideoAd() {
        console.log('isLoadedRewardVideoAd');
        throw new Error('Method not implemented.');
    }
    async initialize(options) {
        console.log('initialize');
    }
    async showBanner(options) {
        console.log('showBanner');
    }
    async hideBanner() {
        console.log('hideBanner');
    }
    async removeBanner() {
        console.log('removeBanner');
    }
    async prepareRewardVideoAd(options) {
        console.log('prepareRewardVideoAd');
    }
    async showRewardVideoAd() {
        console.log('showRewardVideoAd');
    }
    // async  isLoadedRewardVideoAd(): Promise<{ isLoadedRewardVideoAd: boolean; }> {
    //   console.log('isLoadedRewardVideoAd');
    // }
    async prepareInterstitial(options) {
        console.log('prepareInterstitial');
    }
    async showInterstitial() {
        console.log('showInterstitial');
    }
    // async isLoadedInterstitial(): Promise<{ isLoadedInterstitial: boolean; }> {
    //   console.log('isLoadedInterstitial');
    //       // Assuming you have some logic to check if the interstitial is loaded
    //       const isLoaded = true;
    //       return { isLoadedInterstitial: isLoaded };
    // }
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
}
//# sourceMappingURL=web.js.map