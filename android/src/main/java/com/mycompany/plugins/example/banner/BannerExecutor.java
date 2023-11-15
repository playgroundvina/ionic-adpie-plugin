package com.mycompany.plugins.example.banner;

import android.app.Activity;
import android.content.Context;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.RelativeLayout;

import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.util.Supplier;

import com.capacitor.adpie.models.Executor;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.gomfactory.adpie.sdk.AdView;
import com.google.android.gms.common.util.BiConsumer;

import java.util.Objects;

public class BannerExecutor extends Executor {

    private final JSObject emptyObject = new JSObject();
    private RelativeLayout mAdViewLayout;
    private AdView mAdView;

    private ViewGroup mViewGroup;

    public BannerExecutor(
            Supplier<Context> contextSupplier,
            Supplier<Activity> activitySupplier,
            BiConsumer<String, JSObject> notifyListenersFunction,
            String pluginLogTag
    ) {
        super(contextSupplier, activitySupplier, notifyListenersFunction, pluginLogTag, "BannerExecutor");
    }

    public void initialize() {
        mViewGroup = (ViewGroup) ((ViewGroup) activitySupplier.get().findViewById(android.R.id.content)).getChildAt(0);
    }


    @PluginMethod
    public void showBanner(final PluginCall call, BiConsumer<String, JSObject> notifyListenersFunction) {

        String adBannerId = call.getString("adBannerId");
        if (TextUtils.isEmpty(adBannerId)) {
            call.reject("Miss adBannerId");
            return;
        }

        String position = call.getString("position", "BOTTOM_CENTER");
        Integer margin = call.getInt("margin", 0);


        float density = contextSupplier.get().getResources().getDisplayMetrics().density;
        int defaultWidthPixels = contextSupplier.get().getResources().getDisplayMetrics().widthPixels;

        DisplayMetrics metrics = new DisplayMetrics();
        activitySupplier.get().getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
        int realWidthPixels = metrics.widthPixels;

        boolean fullscreen = (activitySupplier.get().getWindow().getAttributes().flags & WindowManager.LayoutParams.FLAG_FULLSCREEN) != 0;

        if (mAdView != null) {
            try {
                mAdView.setAdListener(null);
                mAdViewLayout.removeView(mAdView);
                mViewGroup.removeView(mAdViewLayout);
                mAdView = null;
                Log.d(logTag, "Banner AD Removed");
            } catch (Exception ex) {
                Log.d(logTag, "ignored " + ex);

            }
        }

        // Why a try catch block?
        try {
            mAdView = new AdView(contextSupplier.get());


            // Setup AdView Layout
            mAdViewLayout = new RelativeLayout(contextSupplier.get());
            mAdViewLayout.setHorizontalGravity(Gravity.CENTER_HORIZONTAL);
            mAdViewLayout.setVerticalGravity(Gravity.BOTTOM);

            final CoordinatorLayout.LayoutParams mAdViewLayoutParams = new CoordinatorLayout.LayoutParams(
                    CoordinatorLayout.LayoutParams.WRAP_CONTENT,
                    CoordinatorLayout.LayoutParams.WRAP_CONTENT
            );

            // TODO: Make an enum like the AdSizeEnum?
            switch (Objects.requireNonNull(position)) {
                case "TOP_CENTER":
                    mAdViewLayoutParams.gravity = Gravity.TOP;
                    break;
                case "CENTER":
                    mAdViewLayoutParams.gravity = Gravity.CENTER;
                    break;
                default:
                    mAdViewLayoutParams.gravity = Gravity.BOTTOM;
                    break;
            }

            mAdViewLayout.setLayoutParams(mAdViewLayoutParams);

            int densityMargin = (int) (margin * density);

            // Center Banner Ads
            int adWidth = (int) (mAdViewLayout.getWidth() * density);

            if (adWidth <= 0) {
                margin = 0;
                if (fullscreen) {
                    margin = (realWidthPixels - defaultWidthPixels) / 2;
                }
                mAdViewLayoutParams.setMargins(margin, densityMargin, margin, densityMargin);
            } else {
                int sideMargin = ((int) defaultWidthPixels - adWidth) / 2;
                if (fullscreen) {
                    sideMargin = (realWidthPixels - adWidth) / 2;
                }
                mAdViewLayoutParams.setMargins(sideMargin, densityMargin, sideMargin, densityMargin);
            }

            activitySupplier
                    .get()
                    .runOnUiThread(
                            () -> {
                                mAdView.setSlotId(adBannerId);
                                mAdView.setScaleUp(true);
                                // Add the AdView to the view hierarchy.
                                mAdViewLayout.addView(mAdView);
                                // Start loading the ad.
                                mAdView.load();


                                mAdView.setAdListener(new AdView.AdListener() {

                                    @Override
                                    public void onAdLoaded() {

                                        notifyListenersFunction.accept(BannerAdPluginEvents.AdLoaded, emptyObject);
                                        Log.i("HAOHAO", " bannerListener onAdLoaded");
                                        JSObject adInfo = new JSObject();
                                        adInfo.put("bannerListener", BannerAdPluginEvents.AdLoaded);
                                        call.resolve(adInfo);

                                    }

                                    @Override
                                    public void onAdFailedToLoad(int errorCode) {

                                        if (mAdView != null) {
                                            mViewGroup.removeView(mAdViewLayout);
                                            mAdViewLayout.removeView(mAdView);
                                            mAdView.destroy();
                                            mAdView = null;
                                        }
                                        notifyListenersFunction.accept(BannerAdPluginEvents.AdFailedToLoad, emptyObject);
                                        Log.i("HAOHAO", " bannerListener onAdFailedToLoad");
                                        JSObject adInfo = new JSObject();
                                        adInfo.put("bannerListener", BannerAdPluginEvents.AdFailedToLoad);
                                        call.resolve(adInfo);
                                    }

                                    @Override
                                    public void onAdClicked() {
                                        notifyListenersFunction.accept(BannerAdPluginEvents.AdClicked, emptyObject);
                                        Log.i("HAOHAO", " bannerListener onAdClicked");
                                        JSObject adInfo = new JSObject();
                                        adInfo.put("bannerListener", BannerAdPluginEvents.AdClicked);
                                        call.resolve(adInfo);
                                    }
                                });


                                // Add AdViewLayout top of the WebView
                                mViewGroup.addView(mAdViewLayout);
                            }
                    );

            call.resolve();
        } catch (Exception ex) {
            call.reject(ex.getLocalizedMessage(), ex);
        }
    }

    @PluginMethod
    public void hideBanner(final PluginCall call) {
        if (mAdView == null) {
            call.reject("You tried to hide a banner that was never shown");
            return;
        }

        try {
            activitySupplier
                    .get()
                    .runOnUiThread(
                            () -> {
                                if (mAdViewLayout != null) {
                                    mAdViewLayout.setVisibility(View.GONE);
                                    call.resolve();
                                }
                            }
                    );
        } catch (Exception ex) {
            call.reject(ex.getLocalizedMessage(), ex);
        }
    }

    @PluginMethod
    public void removeBanner(final PluginCall call) {
        try {
            if (mAdView != null) {
                activitySupplier
                        .get()
                        .runOnUiThread(
                                () -> {
                                    if (mAdView != null) {
                                        try {
                                            mAdView.setAdListener(null);
                                            mAdViewLayout.removeView(mAdView);
                                            mViewGroup.removeView(mAdViewLayout);
                                            mAdView = null;
                                            Log.d(logTag, "Banner AD Removed");
                                        } catch (Exception ex) {
                                            Log.d(logTag, "ignored " + ex);

                                        }
                                    }
                                }
                        );
            }

            call.resolve();
        } catch (Exception ex) {
            call.reject(ex.getLocalizedMessage(), ex);
        }
    }


}
