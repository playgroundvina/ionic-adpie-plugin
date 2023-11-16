import { WebPlugin } from '@capacitor/core';
export class CapacitorPluginAdPieWeb extends WebPlugin {
    call_AdPie_bannerAd(options) {
        console.log('call_AdPie_bannerAd', options.AdPieSDK_MediaId);
        console.log('call_AdPie_bannerAd', options.slotID);
        throw new Error('Method not implemented.');
    }
    call_AdPie_nativeAd(options) {
        console.log('call_AdPie_nativeAd', options.AdPieSDK_MediaId);
        console.log('call_AdPie_nativeAd', options.slotID);
        throw new Error('Method not implemented.');
    }
    call_AdPie_interstitialAd(options) {
        console.log('call_AdPie_interstitialAd', options.AdPieSDK_MediaId);
        console.log('call_AdPie_interstitialAd', options.slotID);
        throw new Error('Method not implemented.');
    }
    call_AdPie_rewardedAd(options) {
        console.log('call_AdPie_interstitialAd', options.AdPieSDK_MediaId);
        console.log('call_AdPie_interstitialAd', options.slotID);
        throw new Error('Method not implemented.');
    }
    initialize(options) {
        console.log('initialize', options.appId);
        throw new Error('Method not implemented.');
    }
    showBanner(options) {
        console.log('initialize', options.adBannerId);
        console.log('initialize', options.position);
        console.log('initialize', options.margin);
        throw new Error('Method not implemented.');
    }
    hideBanner() {
        throw new Error('Method not implemented.');
    }
    resumeBanner() {
        throw new Error('Method not implemented.');
    }
    removeBanner() {
        throw new Error('Method not implemented.');
    }
    prepareRewardVideoAd(options) {
        console.log('initialize', options.adRewardId);
        throw new Error('Method not implemented.');
    }
    showRewardVideoAd() {
        throw new Error('Method not implemented.');
    }
    isLoadedRewardVideoAd() {
        throw new Error('Method not implemented.');
    }
    prepareInterstitial(options) {
        console.log('initialize', options.adInterstitialId);
        throw new Error('Method not implemented.');
    }
    showInterstitial() {
        throw new Error('Method not implemented.');
    }
    isLoadedInterstitial() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map