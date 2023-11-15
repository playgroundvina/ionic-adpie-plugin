import { PluginListenerHandle, WebPlugin } from '@capacitor/core';

import type { CapacitorPluginAdPiePlugin } from './definitions';

export class CapacitorPluginAdPieWeb
  extends WebPlugin
  implements CapacitorPluginAdPiePlugin
{
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
  

  isLoadedInterstitial(): Promise<{ isLoadedInterstitial: boolean; }> {
    console.log('isLoadedInterstitial');
    throw new Error('Method not implemented.');
  }
  isLoadedRewardVideoAd(): Promise<{ isLoadedRewardVideoAd: boolean; }> {
    console.log('isLoadedRewardVideoAd');
    throw new Error('Method not implemented.');
  }


  async  initialize(options: { appId: string; }): Promise<void> {
    console.log('initialize');

  }
  async showBanner(options: { adBannerId: string; position: string; margin: number; }): Promise<void> {
    console.log('showBanner');

  }
  async  hideBanner(): Promise<void> {
    console.log('hideBanner');

  }
  async removeBanner(): Promise<void> {
    console.log('removeBanner');

  }


  async prepareRewardVideoAd(options: { adRewardId: string; }): Promise<void> {
    console.log('prepareRewardVideoAd');
  }
  async showRewardVideoAd(): Promise<void> {
    console.log('showRewardVideoAd');
  }
  // async  isLoadedRewardVideoAd(): Promise<{ isLoadedRewardVideoAd: boolean; }> {
  //   console.log('isLoadedRewardVideoAd');
  // }
  async  prepareInterstitial(options: { adInterstitialId: string; }): Promise<void> {
    console.log('prepareInterstitial');
  }
  async  showInterstitial(): Promise<void> {
    console.log('showInterstitial');
  }
  // async isLoadedInterstitial(): Promise<{ isLoadedInterstitial: boolean; }> {
  //   console.log('isLoadedInterstitial');
  //       // Assuming you have some logic to check if the interstitial is loaded
  //       const isLoaded = true;

  //       return { isLoadedInterstitial: isLoaded };
    
  // }
  async call_AdPie_bannerAd(options: {AdPieSDK_MediaId: string, slotID: string}): Promise<void> {
    console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
    console.log('slotID', options.slotID);
  }
  async call_AdPie_nativeAd(options: {AdPieSDK_MediaId: string, slotID: string}): Promise<void> {
    console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
    console.log('slotID', options.slotID);
  }
  async call_AdPie_interstitialAd(options: {AdPieSDK_MediaId: string, slotID: string}): Promise<void> {
    console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
    console.log('slotID', options.slotID);
  }
  async call_AdPie_rewardedAd(options: {AdPieSDK_MediaId: string, slotID: string}): Promise<void> {
    console.log('AdPieSDK_MediaId', options.AdPieSDK_MediaId);
    console.log('slotID', options.slotID);
  }
 
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
