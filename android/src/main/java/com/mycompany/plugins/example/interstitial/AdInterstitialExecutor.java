package com.mycompany.plugins.example.interstitial;

import android.app.Activity;
import android.content.Context;
import android.text.TextUtils;
import android.util.Log;

import androidx.core.util.Supplier;

import com.capacitor.adpie.models.Executor;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.gomfactory.adpie.sdk.InterstitialAd;
import com.google.android.gms.common.util.BiConsumer;

public class AdInterstitialExecutor extends Executor {

    private final JSObject emptyObject = new JSObject();
    public InterstitialAd interstitialAd;

    public AdInterstitialExecutor(
            Supplier<Context> contextSupplier,
            Supplier<Activity> activitySupplier,
            BiConsumer<String, JSObject> notifyListenersFunction,
            String pluginLogTag
    ) {
        super(contextSupplier, activitySupplier, notifyListenersFunction, pluginLogTag, "AdInterstitialExecutor");
    }

    @PluginMethod
    public void prepareInterstitial(final PluginCall call, BiConsumer<String, JSObject> notifyListenersFunction) {
        String adInterstitialId = call.getString("adInterstitialId");
        if (TextUtils.isEmpty(adInterstitialId)) {
            call.reject("Miss adInterstitialId");
            return;
        }
        activitySupplier
                .get()
                .runOnUiThread(
                        () -> {
                            try {
                                interstitialAd = new InterstitialAd(contextSupplier.get(), adInterstitialId);

                                interstitialAd.setAdListener(new InterstitialAd.InterstitialAdListener() {
                                    @Override
                                    public void onAdLoaded() {
                                        notifyListenersFunction.accept(InterstitialAdPluginEvents.AdLoaded, emptyObject);

                                        Log.i("HAOHAO", " interstitialListener onInterstitialLoaded");
                                        JSObject adInfo = new JSObject();
                                        adInfo.put("interstitialListener", InterstitialAdPluginEvents.AdLoaded);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onAdFailedToLoad(int i) {
                                        notifyListenersFunction.accept(InterstitialAdPluginEvents.AdFailedToLoad, emptyObject);

                                        Log.i("HAOHAO", " interstitialListener onInterstitialFailedToLoad " + i);

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("interstitialListener", InterstitialAdPluginEvents.AdFailedToLoad);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onAdShown() {
                                        notifyListenersFunction.accept(InterstitialAdPluginEvents.AdShown, emptyObject);

                                        Log.i("HAOHAO", " interstitialListener onInterstitialShown");

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("interstitialListener", InterstitialAdPluginEvents.AdShown);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onAdClicked() {
                                        notifyListenersFunction.accept(InterstitialAdPluginEvents.AdClicked, emptyObject);

                                        Log.i("HAOHAO", " interstitialListener onInterstitialClicked");

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("interstitialListener", InterstitialAdPluginEvents.AdClicked);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onAdDismissed() {

                                        notifyListenersFunction.accept(InterstitialAdPluginEvents.AdDismissed, emptyObject);

                                        Log.i("HAOHAO", " interstitialListener onInterstitialDismissed ");

                                        JSObject adInfo = new JSObject();
                                        adInfo.put("interstitialListener", InterstitialAdPluginEvents.AdDismissed);
                                        call.resolve(adInfo);
                                        // reload Interstitialed Video
                                        if (interstitialAd != null) {
                                            interstitialAd.load();
                                        }
                                    }
                                });


                                interstitialAd.load();

                            } catch (Exception ex) {
                                call.reject(ex.getLocalizedMessage(), ex);
                            }
                        }
                );

    }

    @PluginMethod
    public void isLoadedInterstitial(final PluginCall call) {
        Log.i("HAOHAO", "isLoadedInterstitialVideoAd");

        JSObject adInfo = new JSObject();
        if (interstitialAd != null && interstitialAd.isLoaded()) {
            Log.i("HAOHAO", "isLoadedInterstitialVideoAd true");

            adInfo.put("isLoadedInterstitial", true);
            call.resolve(adInfo);
        } else {
            Log.i("HAOHAO", "isLoadedInterstitialVideoAd false");

            adInfo.put("isLoadedInterstitial", false);
            call.resolve(adInfo);
        }


    }

    @PluginMethod
    public void showInterstitial(final PluginCall call) {
        if (interstitialAd == null) {
            String errorMessage = "No Interstitial can be show. It was not prepared or maybe it failed to be prepared.";
            call.reject(errorMessage);
        } else {
            if (interstitialAd.isLoaded()) {
                interstitialAd.show();
            } else {
                String errorMessage = "Not ready!";
                call.reject(errorMessage);
            }
        }
    }


}
