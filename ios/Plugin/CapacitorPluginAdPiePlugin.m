#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(CapacitorPluginAdPiePlugin, "CapacitorPluginAdPie",
           CAP_PLUGIN_METHOD(call_AdPie_rewardedAd, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(call_AdPie_interstitialAd, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(call_AdPie_nativeAd, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(call_AdPie_bannerAd, CAPPluginReturnPromise);
           
)
