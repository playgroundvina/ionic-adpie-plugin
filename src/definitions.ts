export interface CapacitorPluginAdPiePlugin {
 
  call_AdPie_bannerAd(AdPieSDK_MediaId: string, slotID: string): Promise<void>;
  call_AdPie_nativeAd(AdPieSDK_MediaId: string, slotID: string): Promise<void>;
  call_AdPie_interstitialAd(AdPieSDK_MediaId: string, slotID: string): Promise<void>;
  call_AdPie_rewardedAd(AdPieSDK_MediaId: string, slotID: string): Promise<void>;

}
