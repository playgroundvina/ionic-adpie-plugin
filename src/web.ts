import { WebPlugin } from '@capacitor/core';

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

  
}
