'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorPluginAdPie = core.registerPlugin('CapacitorPluginAdPie', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorPluginAdPieWeb()),
});

class CapacitorPluginAdPieWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorPluginAdPieWeb: CapacitorPluginAdPieWeb
});

exports.CapacitorPluginAdPie = CapacitorPluginAdPie;
//# sourceMappingURL=plugin.cjs.js.map
