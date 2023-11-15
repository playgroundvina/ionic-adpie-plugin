package com.mycompany.plugins.example.rewarded;

import android.app.Activity;
import android.content.Context;
import android.text.TextUtils;
import android.util.Log;

import androidx.core.util.Supplier;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.gomfactory.adpie.sdk.RewardedVideoAd;
import com.gomfactory.adpie.sdk.videoads.FinishState;
import com.google.android.gms.common.util.BiConsumer;
import com.mycompany.plugins.example.models.Executor;

public class AdRewardExecutor extends Executor {

    private final JSObject emptyObject = new JSObject();

    public RewardedVideoAd rewardedVideoAd;

    public AdRewardExecutor(
            Supplier<Context> contextSupplier,
            Supplier<Activity> activitySupplier,
            BiConsumer<String, JSObject> notifyListenersFunction,
            String pluginLogTag
    ) {
        super(contextSupplier, activitySupplier, notifyListenersFunction, pluginLogTag, "AdRewardExecutor");
    }

    @PluginMethod
    public void prepareRewardVideoAd(final PluginCall call, BiConsumer<String, JSObject> notifyListenersFunction) {
        String adRewardId = call.getString("adRewardId");
        if (TextUtils.isEmpty(adRewardId)) {
            call.reject("Miss adRewardId");
            return;
        }
        activitySupplier
                .get()
                .runOnUiThread(
                        () -> {
                            try {
                                rewardedVideoAd = new RewardedVideoAd(contextSupplier.get(), adRewardId);
                                rewardedVideoAd.setAdListener(new RewardedVideoAd.RewardedVideoAdListener() {
                                    @Override
                                    public void onRewardedVideoLoaded() {


                                        notifyListenersFunction.accept(RewardAdPluginEvents.AdLoaded, emptyObject);

                                        Log.i("HAOHAO", " rewardListener onRewardedVideoLoaded");
                                        JSObject adInfo = new JSObject();
                                        adInfo.put("rewardListener", RewardAdPluginEvents.AdLoaded);
                                        call.resolve(adInfo);

                                    }

                                    @Override
                                    public void onRewardedVideoFailedToLoad(int errorCode) {

                                        notifyListenersFunction.accept(RewardAdPluginEvents.AdFailedToLoad, emptyObject);

                                        Log.i("HAOHAO", " rewardListener onRewardedVideoFailedToLoad " + errorCode);

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("rewardListener", RewardAdPluginEvents.AdFailedToLoad);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onRewardedVideoClicked() {
                                        notifyListenersFunction.accept(RewardAdPluginEvents.AdClicked, emptyObject);

                                        Log.i("HAOHAO", " rewardListener onRewardedVideoClicked");

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("rewardListener", RewardAdPluginEvents.AdClicked);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onRewardedVideoStarted() {
                                        notifyListenersFunction.accept(RewardAdPluginEvents.AdStarted, emptyObject);

                                        Log.i("HAOHAO", " rewardListener onRewardedVideoStarted");

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("rewardListener", RewardAdPluginEvents.AdStarted);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onRewardedVideoFinished(FinishState finishState) {
                                        notifyListenersFunction.accept(RewardAdPluginEvents.AdFinished, emptyObject);

                                        Log.i("HAOHAO", " rewardListener onRewardedVideoFinished " + finishState.name());

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("rewardListener", RewardAdPluginEvents.AdFinished);
                                        call.resolve(adInfo);
                                        // reload Rewarded Video
                                        if (rewardedVideoAd != null) {
                                            rewardedVideoAd.load();
                                        }
                                    }
                                });

//                        // Insert your SSV User Id (Optional)
                                rewardedVideoAd.setUserIdForSSV("");
//                        // Insert your SSV Custom Data (Optional)
                                rewardedVideoAd.setCustomDataForSSV("");
                                rewardedVideoAd.load();

                            } catch (Exception ex) {
                                call.reject(ex.getLocalizedMessage(), ex);
                            }
                        }
                );
    }


    @PluginMethod
    public void isLoadedRewardVideoAd(final PluginCall call) {
        Log.i("HAOHAO", "isLoadedRewardVideoAd");

        JSObject adInfo = new JSObject();
        if (rewardedVideoAd != null && rewardedVideoAd.isLoaded()) {
            Log.i("HAOHAO", "isLoadedRewardVideoAd true");

            adInfo.put("isLoadedRewardVideoAd", true);
            call.resolve(adInfo);
        } else {
            Log.i("HAOHAO", "isLoadedRewardVideoAd false");

            adInfo.put("isLoadedRewardVideoAd", false);
            call.resolve(adInfo);
        }


    }

    @PluginMethod
    public void showRewardVideoAd(final PluginCall call) {
        if (rewardedVideoAd == null) {
            String errorMessage = "No Reward Video Ad can be show. It was not prepared or maybe it failed to be prepared.";
            call.reject(errorMessage);
        } else {
            if (rewardedVideoAd.isLoaded()) {
                rewardedVideoAd.show();
            } else {
                String errorMessage = "Not ready!";
                call.reject(errorMessage);
            }
        }


    }
}
