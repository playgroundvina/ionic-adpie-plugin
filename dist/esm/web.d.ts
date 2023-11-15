import { PluginListenerHandle, WebPlugin } from '@capacitor/core';
import type { CapacitorPluginAdPiePlugin } from './definitions';
export declare class CapacitorPluginAdPieWeb extends WebPlugin implements CapacitorPluginAdPiePlugin {
    call_AdPie_bannerAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    call_AdPie_nativeAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    call_AdPie_interstitialAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    call_AdPie_rewardedAd(options: {
        AdPieSDK_MediaId: string;
        slotID: string;
    }): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initialize(options: {
        appId: string;
    }): Promise<void>;
    showBanner(options: {
        adBannerId: string;
        position: string;
        margin: number;
    }): Promise<void>;
    hideBanner(): Promise<void>;
    removeBanner(): Promise<void>;
    prepareRewardVideoAd(options: {
        adRewardId: string;
    }): Promise<void>;
    showRewardVideoAd(): Promise<void>;
    isLoadedRewardVideoAd(): Promise<{
        isLoadedRewardVideoAd: boolean;
    }>;
    prepareInterstitial(options: {
        adInterstitialId: string;
    }): Promise<void>;
    showInterstitial(): Promise<void>;
    isLoadedInterstitial(): Promise<{
        isLoadedInterstitial: boolean;
    }>;
    addListener(eventName: 'bannerAdLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'bannerAdFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'bannerAdClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onRewardedVideoLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onRewardedVideoFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onRewardedVideoClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onRewardedVideoStarted', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onRewardedVideoFinished', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onInterstitialLoaded', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onInterstitialFailedToLoad', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onInterstitialClicked', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onInterstitialShown', listenerFunc: () => void): Promise<PluginListenerHandle>;
    addListener(eventName: 'onInterstitialDismissed', listenerFunc: () => void): Promise<PluginListenerHandle>;
}
