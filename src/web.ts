import {  WebPlugin } from '@capacitor/core';

import type { CapacitorPluginAdPiePlugin } from './definitions';

export class CapacitorPluginAdPieWeb
  extends WebPlugin
  implements CapacitorPluginAdPiePlugin
{
  call_AdPie_bannerAd(options: { AdPieSDK_MediaId: string; slotID: string; }): Promise<void> {
    console.log('call_AdPie_bannerAd',options.AdPieSDK_MediaId)
    console.log('call_AdPie_bannerAd',options.slotID)

    throw new Error('Method not implemented.');
  }
  call_AdPie_nativeAd(options: { AdPieSDK_MediaId: string; slotID: string; }): Promise<void> {
    console.log('call_AdPie_nativeAd',options.AdPieSDK_MediaId)
    console.log('call_AdPie_nativeAd',options.slotID)

    throw new Error('Method not implemented.');
  }
  call_AdPie_interstitialAd(options: { AdPieSDK_MediaId: string; slotID: string; }): Promise<void> {
    console.log('call_AdPie_interstitialAd',options.AdPieSDK_MediaId)
    console.log('call_AdPie_interstitialAd',options.slotID)

    throw new Error('Method not implemented.');
  }
  call_AdPie_rewardedAd(options: { AdPieSDK_MediaId: string; slotID: string; }): Promise<void> {
    console.log('call_AdPie_interstitialAd',options.AdPieSDK_MediaId)
    console.log('call_AdPie_interstitialAd',options.slotID)

    throw new Error('Method not implemented.');
  }
  initialize(options: { appId: string; }): Promise<void> {
    console.log('initialize',options.appId)
    throw new Error('Method not implemented.');
  }
  showBanner(options: { adBannerId: string; position: string; margin: number; }): Promise<void> {
    console.log('initialize',options.adBannerId)
    console.log('initialize',options.position)
    console.log('initialize',options.margin)

    throw new Error('Method not implemented.');
  }
  hideBanner(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeBanner(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  prepareRewardVideoAd(options: { adRewardId: string; }): Promise<void> {
    console.log('initialize',options.adRewardId)

    throw new Error('Method not implemented.');
  }
  showRewardVideoAd(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  isLoadedRewardVideoAd(): Promise<{ isLoadedRewardVideoAd: boolean; }> {
    throw new Error('Method not implemented.');
  }
  prepareInterstitial(options: { adInterstitialId: string; }): Promise<void> {
    console.log('initialize',options.adInterstitialId)

    throw new Error('Method not implemented.');
  }
  showInterstitial(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  isLoadedInterstitial(): Promise<{ isLoadedInterstitial: boolean; }> {
    throw new Error('Method not implemented.');
  }
  
}
