# capacitor-plugin-adpie

plugin adpie ios

## Install

```bash
npm install capacitor-plugin-adpie
npx cap sync
```

## API

<docgen-index>

* [`call_AdPie_bannerAd(...)`](#call_adpie_bannerad)
* [`call_AdPie_nativeAd(...)`](#call_adpie_nativead)
* [`call_AdPie_interstitialAd(...)`](#call_adpie_interstitialad)
* [`call_AdPie_rewardedAd(...)`](#call_adpie_rewardedad)
* [`initialize(...)`](#initialize)
* [`showBanner(...)`](#showbanner)
* [`hideBanner()`](#hidebanner)
* [`removeBanner()`](#removebanner)
* [`prepareRewardVideoAd(...)`](#preparerewardvideoad)
* [`showRewardVideoAd()`](#showrewardvideoad)
* [`isLoadedRewardVideoAd()`](#isloadedrewardvideoad)
* [`prepareInterstitial(...)`](#prepareinterstitial)
* [`showInterstitial()`](#showinterstitial)
* [`isLoadedInterstitial()`](#isloadedinterstitial)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### call_AdPie_bannerAd(...)

```typescript
call_AdPie_bannerAd(options: { AdPieSDK_MediaId: string; slotID: string; }) => Promise<void>
```

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ AdPieSDK_MediaId: string; slotID: string; }</code> |

--------------------


### call_AdPie_nativeAd(...)

```typescript
call_AdPie_nativeAd(options: { AdPieSDK_MediaId: string; slotID: string; }) => Promise<void>
```

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ AdPieSDK_MediaId: string; slotID: string; }</code> |

--------------------


### call_AdPie_interstitialAd(...)

```typescript
call_AdPie_interstitialAd(options: { AdPieSDK_MediaId: string; slotID: string; }) => Promise<void>
```

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ AdPieSDK_MediaId: string; slotID: string; }</code> |

--------------------


### call_AdPie_rewardedAd(...)

```typescript
call_AdPie_rewardedAd(options: { AdPieSDK_MediaId: string; slotID: string; }) => Promise<void>
```

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ AdPieSDK_MediaId: string; slotID: string; }</code> |

--------------------


### initialize(...)

```typescript
initialize(options: { appId: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ appId: string; }</code> |

--------------------


### showBanner(...)

```typescript
showBanner(options: { adBannerId: string; position: string; margin: number; }) => Promise<void>
```

| Param         | Type                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ adBannerId: string; position: string; margin: number; }</code> |

--------------------


### hideBanner()

```typescript
hideBanner() => Promise<void>
```

--------------------


### removeBanner()

```typescript
removeBanner() => Promise<void>
```

--------------------


### prepareRewardVideoAd(...)

```typescript
prepareRewardVideoAd(options: { adRewardId: string; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ adRewardId: string; }</code> |

--------------------


### showRewardVideoAd()

```typescript
showRewardVideoAd() => Promise<void>
```

--------------------


### isLoadedRewardVideoAd()

```typescript
isLoadedRewardVideoAd() => Promise<{ isLoadedRewardVideoAd: boolean; }>
```

**Returns:** <code>Promise&lt;{ isLoadedRewardVideoAd: boolean; }&gt;</code>

--------------------


### prepareInterstitial(...)

```typescript
prepareInterstitial(options: { adInterstitialId: string; }) => Promise<void>
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ adInterstitialId: string; }</code> |

--------------------


### showInterstitial()

```typescript
showInterstitial() => Promise<void>
```

--------------------


### isLoadedInterstitial()

```typescript
isLoadedInterstitial() => Promise<{ isLoadedInterstitial: boolean; }>
```

**Returns:** <code>Promise&lt;{ isLoadedInterstitial: boolean; }&gt;</code>

--------------------

</docgen-api>
