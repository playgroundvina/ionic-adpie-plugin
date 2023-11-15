import {PluginListenerHandle, WebPlugin } from '@capacitor/core';

import type { CapacitorPluginAdPiePlugin } from './definitions';

export class CapacitorPluginAdPieWeb
  extends WebPlugin
  implements CapacitorPluginAdPiePlugin
{
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
  async  initialize(options: { appId: string; }): Promise<void> {
    console.log('initialize',options.appId);

  }
  async showBanner(options: { adBannerId: string; position: string; margin: number; }): Promise<void> {
    console.log('showBanner',options.adBannerId);
    console.log('showBanner',options.position);
    console.log('showBanner',options.margin);

  }
  async hideBanner(): Promise<void> {
    console.log('hideBanner');
  }

  async removeBanner(): Promise<void> {
    console.log('removeBanner');
  }

  async prepareRewardVideoAd(options: { adRewardId: string; }): Promise<void> {
    console.log('prepareRewardVideoAd',options.adRewardId);
  }
  async showRewardVideoAd(): Promise<void> {
    console.log('showRewardVideoAd');
  }
  async isLoadedRewardVideoAd(): Promise<{ isLoadedRewardVideoAd: boolean; }> {
    console.log('isLoadedRewardVideoAd');
    return {isLoadedRewardVideoAd:false};

  }
  async prepareInterstitial(options: { adInterstitialId: string; }): Promise<void> {
    console.log('prepareInterstitial',options.adInterstitialId);
  }
  async showInterstitial(): Promise<void> {
    console.log('showInterstitial');
  }
  async isLoadedInterstitial(): Promise<{ isLoadedInterstitial: boolean; }> {
    console.log('isLoadedInterstitial');
    return {isLoadedInterstitial:false};
  }


  async addListener(eventName: 'bannerAdLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'bannerAdFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'bannerAdClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onRewardedVideoLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async  addListener(eventName: 'onRewardedVideoFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onRewardedVideoClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onRewardedVideoStarted', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onRewardedVideoFinished', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onInterstitialLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onInterstitialFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onInterstitialClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onInterstitialShown', listenerFunc: () => void): Promise<PluginListenerHandle>;
  async addListener(eventName: 'onInterstitialDismissed', listenerFunc: () => void): Promise<PluginListenerHandle>;
 


 
}
