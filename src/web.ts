import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginAdPiePlugin } from './definitions';

export class CapacitorPluginAdPieWeb
  extends WebPlugin
  implements CapacitorPluginAdPiePlugin
{
  async call_AdPie_bannerAd(AdPieSDK_MediaId: string, slotID: string): Promise<void> {
    console.log('AdPieSDK_MediaId', AdPieSDK_MediaId);
    console.log('slotID', slotID);
  }
  async call_AdPie_nativeAd(AdPieSDK_MediaId: string, slotID: string): Promise<void> {
    console.log('AdPieSDK_MediaId', AdPieSDK_MediaId);
    console.log('slotID', slotID);
  }
  async call_AdPie_interstitialAd(AdPieSDK_MediaId: string, slotID: string): Promise<void> {
    console.log('AdPieSDK_MediaId', AdPieSDK_MediaId);
    console.log('slotID', slotID);
  }
  async call_AdPie_rewardedAd(AdPieSDK_MediaId: string, slotID: string): Promise<void> {
    console.log('AdPieSDK_MediaId', AdPieSDK_MediaId);
    console.log('slotID', slotID);
  }
 
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
