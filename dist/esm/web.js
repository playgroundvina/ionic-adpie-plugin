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
}
//# sourceMappingURL=web.js.map