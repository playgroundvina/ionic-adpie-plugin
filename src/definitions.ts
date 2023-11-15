import { PluginListenerHandle, registerPlugin } from '@capacitor/core';

export interface CapacitorPluginAdPiePlugin {
 
  call_AdPie_bannerAd(options: { AdPieSDK_MediaId: string, slotID: string }): Promise<void>;
 
  call_AdPie_nativeAd(options: { AdPieSDK_MediaId: string, slotID: string }): Promise<void>;
  call_AdPie_interstitialAd(options: { AdPieSDK_MediaId: string, slotID: string }): Promise<void>;
  call_AdPie_rewardedAd(options: { AdPieSDK_MediaId: string, slotID: string }): Promise<void>;



  //App
  initialize(options: { appId: string }): Promise<void>;
 

  // Banner
  showBanner(options: { adBannerId: string ,position: string, margin: number }): Promise<void>; // position : TOP_CENTER, CENTER, default: BOTTOM_CENTER ; margin only for BOTTOM_CENTER or TOP_CENTER, default value =0.  
  hideBanner(): Promise<void>;
  removeBanner(): Promise<void>;

  addListener(eventName: "bannerAdLoaded", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "bannerAdFailedToLoad", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "bannerAdClicked", listenerFunc: () => void): Promise<PluginListenerHandle> ;



  // Reward
  prepareRewardVideoAd(options: { adRewardId: string }): Promise<void>;
  showRewardVideoAd(): Promise<void>;
  isLoadedRewardVideoAd(): Promise<{ isLoadedRewardVideoAd: boolean }>;

  addListener(eventName: "onRewardedVideoLoaded", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onRewardedVideoFailedToLoad", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onRewardedVideoClicked", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onRewardedVideoStarted", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onRewardedVideoFinished", listenerFunc: () => void): Promise<PluginListenerHandle> ;


  // Interstitial
  prepareInterstitial(options: { adInterstitialId: string }): Promise<void>;
  showInterstitial(): Promise<void>;
  isLoadedInterstitial(): Promise<{ isLoadedInterstitial: boolean }>;


  addListener(eventName: "onInterstitialLoaded", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onInterstitialFailedToLoad", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onInterstitialClicked", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onInterstitialShown", listenerFunc: () => void): Promise<PluginListenerHandle> ;
  addListener(eventName: "onInterstitialDismissed", listenerFunc: () => void): Promise<PluginListenerHandle> ;
}
