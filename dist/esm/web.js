import { WebPlugin } from '@capacitor/core';
export class CapacitorPluginAdPieWeb extends WebPlugin {
    // addListener(eventName: 'bannerAdLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'bannerAdFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'bannerAdClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onRewardedVideoLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onRewardedVideoFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onRewardedVideoClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onRewardedVideoStarted', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onRewardedVideoFinished', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onInterstitialLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onInterstitialFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onInterstitialClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onInterstitialShown', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: 'onInterstitialDismissed', listenerFunc: () => void): Promise<PluginListenerHandle>;
    // addListener(eventName: string, listenerFunc: void): Promise<PluginListenerHandle> {
    //   // Your implementation here
    //   // You can switch on eventName to handle different events if needed
    //   console.log(`Event ${eventName} added.`);
    //   return Promise.resolve(new PluginListenerHandle());
    // }
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