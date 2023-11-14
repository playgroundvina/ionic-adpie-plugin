import Foundation
import AppTrackingTransparency
import Capacitor
import AdPieSDK
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPluginAdPiePlugin)
public class CapacitorPluginAdPiePlugin: CAPPlugin {
    private let implementation = CapacitorPluginAdPie()

   
    @objc func call_AdPie_rewardedAd(_ call: CAPPluginCall) {
        /*let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])*/
        print(call)
        print(call.options)
        print(call.dictionaryRepresentation)
        let caller_AdPieSDK_MediaId = call.getString("AdPieSDK_MediaId")
        print(caller_AdPieSDK_MediaId)
        let caller_slotID = call.getString("slotID")
        print(caller_slotID)
        DispatchQueue.main.sync {
            let cv = RewardedAdViewContoller(AdPieSDK_MediaId: caller_AdPieSDK_MediaId!, slotId: caller_slotID!)
            // Modally present the player and call the player's play() method when complete.
            self.bridge?.viewController?.present(cv, animated: true) {
                  print("show RewardedAdViewContoller completed")
            }
        }
    }//end call_AdPie_rewardedAd func
    
    @objc func call_AdPie_interstitialAd(_ call: CAPPluginCall) {
        /*let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])*/
        print(call)
        print(call.options)
        print(call.dictionaryRepresentation)
        let caller_AdPieSDK_MediaId = call.getString("AdPieSDK_MediaId")
        print(caller_AdPieSDK_MediaId)
        let caller_slotID = call.getString("slotID")
        print(caller_slotID)
        DispatchQueue.main.sync {
            let cv = InterstitialAD_ViewContoller(AdPieSDK_MediaId: caller_AdPieSDK_MediaId!, slotId: caller_slotID!)
            // Modally present the player and call the player's play() method when complete.
            self.bridge?.viewController?.present(cv, animated: true) {
                  print("show InterstitialAD_ViewContoller completed")
            }
        }
    }//end call_AdPie_interstitialAd func
    
    @objc func call_AdPie_nativeAd(_ call: CAPPluginCall) {
        /*let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])*/
        print(call)
        print(call.options)
        print(call.dictionaryRepresentation)
        let caller_AdPieSDK_MediaId = call.getString("AdPieSDK_MediaId")
        print(caller_AdPieSDK_MediaId)
        let caller_slotID = call.getString("slotID")
        print(caller_slotID)
        DispatchQueue.main.sync {
            let cv = NativeAD_ViewController(AdPieSDK_MediaId: caller_AdPieSDK_MediaId!, slotId: caller_slotID!)
            if #available(iOS 15.0, *) {
                if let presentationController = cv.presentationController as? UISheetPresentationController {
                    presentationController.detents = [.medium()]
                }
            } else {
                // Fallback on earlier versions
            }
            // Modally present the player and call the player's play() method when complete.
            self.bridge?.viewController?.present(cv, animated: true) {
                  print("show NativeAD_ViewController completed")
            }
        }
    }//end call_AdPie_nativeAd func
    
    @objc func call_AdPie_bannerAd(_ call: CAPPluginCall) {
        /*let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])*/
        print(call)
        print(call.options)
        print(call.dictionaryRepresentation)
        let caller_AdPieSDK_MediaId = call.getString("AdPieSDK_MediaId")
        print(caller_AdPieSDK_MediaId)
        let caller_slotID = call.getString("slotID")
        print(caller_slotID)
        DispatchQueue.main.sync {
            let cv = BannerAdViewContoller(AdPieSDK_MediaId: caller_AdPieSDK_MediaId!, slotId: caller_slotID!)
         
            // Modally present the player and call the player's play() method when complete.
            self.bridge?.viewController?.view.addSubview(cv.view)
            //self.bridge?.viewController?.present(cv, animated: true) {
                  //print("show call_AdPie_bannerAd completed")
            //}
        }
    }//end call_AdPie_bannerAd func
    
}//end class


///////==========NativeAD==============///////////////
class NativeAD_ViewController: UIViewController, APNativeDelegate   {
    var AdPieSDK_MediaId :String = ""
    var slotId:String = ""
    init(AdPieSDK_MediaId:String, slotId:String) {
        
        super.init(nibName: nil, bundle: nil)
        self.AdPieSDK_MediaId = AdPieSDK_MediaId
        self.slotId = slotId
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    func nativeDidLoad(_ nativeAd: APNativeAd!) {
        print("OK")
        let nativeAdViewX = Bundle.main.loadNibNamed("AdPieNativeAdView", owner: nil, options: nil)?[0]
        print(nativeAdViewX)
        let nativeAdView  =  nativeAdViewX as! APNativeAdView
        view.addSubview(nativeAdView)
        
        var viewDictionary = [String: AnyObject]()
        viewDictionary["nativeAdView"] = nativeAdView
        
        view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:|[nativeAdView]|", options: [], metrics: nil, views: viewDictionary))
        
        view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:|[nativeAdView]|", options: [], metrics: nil, views: viewDictionary))
        
        // 광고뷰에 데이터 표출
        if nativeAdView.fillAd(nativeAd.nativeAdData) {
            // 광고 클릭 이벤트 수신을 위해 등록
            nativeAd.registerView(forInteraction: nativeAdView)
        } else {
            nativeAdView.removeFromSuperview()
            
            let errorMessage = "Failed to fill native ads data. Check your xib file."
            
            alertMessage(errorMessage)
        }
    }
    
    func nativeDidFail(toLoad nativeAd: APNativeAd!, withError error: Error!) {
        print("FAIL", error.localizedDescription)
        let errorMessage = "Failed to load native ads." + "(code : " + String(error._code) + ", message : " + error.localizedDescription + ")"
        
        alertMessage(errorMessage)
    }
    
    
    func alertMessage(_ errorMessage : String) {
        if #available(iOS 8.0, *) {
            let alertController = UIAlertController(title: "Error", message: errorMessage, preferredStyle: .alert)
            let defaultAction = UIAlertAction(title: "OK", style: .default, handler: nil)
            alertController.addAction(defaultAction)
            
            present(alertController, animated: true, completion: nil)
        } else {
            let alertView = UIAlertView(title: "Error", message: errorMessage, delegate: nil, cancelButtonTitle: "OK")
            alertView.alertViewStyle = .default
            alertView.show()
        }
    }
  
    var cluesLabel: UILabel!
    var answersLabel: UILabel!
    var currentAnswer: UITextField!
    var scoreLabel: UILabel!
    var letterButtons = [UIButton]()
   // var nativeAd : APNativeAd = APNativeAd(slotId: "580491a37174ea5279c5d09b")
    var nativeAd : APNativeAd = APNativeAd()
   
    override func viewDidLoad() {
        super.viewDidLoad()
        self.modalPresentationStyle = .overCurrentContext
        self.view.backgroundColor = .white
        self.view.isOpaque = false
         nativeAd  = APNativeAd(slotId: self.slotId)
        
        print("myAD load ok: ->", nativeAd.slotId as Any)
        
        // 델리게이트 등록
        nativeAd.delegate = self
        
        // 광고 요청
        nativeAd.load()
        
        // 광고 요청
        //myADVIEW.load()
        
        //myADVIEW.backgroundColor = .green
        //myADVIEW.translatesAutoresizingMaskIntoConstraints = false
        
       /* NSLayoutConstraint.activate([
            myADVIEW.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            myADVIEW.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            myADVIEW.widthAnchor.constraint(equalToConstant:  300),
            myADVIEW.heightAnchor.constraint(equalToConstant: 300)
        ])*/
    }
    
    
    override func viewWillAppear(_ animated: Bool) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
        // 디버깅 적용
        AdPieSDK.sharedInstance().logging()
        
        if #available(iOS 14, *) {
            // ATT 알림을 통한 권한 요청
            ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
                // SDK 초기화
                if AdPieSDK.sharedInstance().isInitialized == false {
                    //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                    AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
                }
            })
        } else {
            // SDK 초기화
            if AdPieSDK.sharedInstance().isInitialized == false {
                //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
            }
        }
    }
}


///////==========InterstitialAD==============///////////////
class InterstitialAD_ViewContoller: UIViewController, APInterstitialDelegate {
    var AdPieSDK_MediaId :String = ""
    var slotId:String = ""
    var interstitial: APInterstitial!
    init(AdPieSDK_MediaId:String, slotId:String) {
        
        super.init(nibName: nil, bundle: nil)
        self.AdPieSDK_MediaId = AdPieSDK_MediaId
        self.slotId = slotId
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    override func viewWillAppear(_ animated: Bool) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
        // 디버깅 적용
        AdPieSDK.sharedInstance().logging()
        
        if #available(iOS 14, *) {
            // ATT 알림을 통한 권한 요청
            ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
                // SDK 초기화
                if AdPieSDK.sharedInstance().isInitialized == false {
                    //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                    AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
                }
            })
        } else {
            // SDK 초기화
            if AdPieSDK.sharedInstance().isInitialized == false {
                //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
            }
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        self.modalPresentationStyle = .overCurrentContext
        self.view.backgroundColor = .clear
        self.view.isOpaque = false
        
        //interstitial = APInterstitial(slotId: "573430057174ea39844cac16")
        interstitial = APInterstitial(slotId: self.slotId)
        interstitial.delegate = self
        
        print("myAD load ok: ->", interstitial.slotId as Any)
       
        interstitial.load()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
       
    }
    
    func interstitialDidLoadAd(_ interstitial: APInterstitial!) {
        // 광고 요청 후 즉시 노출하고자 할 경우 아래의 코드를 추가한다.
        if interstitial.isReady() {
            // 광고 표출
            interstitial.present(fromRootViewController: self)
        }
    }
    
    func interstitialDidFail(toLoadAd interstitial: APInterstitial!, withError error: Error!) {
        let errorMessage = "Failed to load interstitial ads." + "(code : " + String(error._code) + ", message : " + error.localizedDescription + ")"
        
        if #available(iOS 8.0, *) {
            let alertController = UIAlertController(title: "Error", message: errorMessage, preferredStyle: .alert)
            let defaultAction = UIAlertAction(title: "OK", style: .default, handler: nil)
            alertController.addAction(defaultAction)
            
            present(alertController, animated: true, completion: nil)
        } else {
            let alertView = UIAlertView(title: "Error", message: errorMessage, delegate: nil, cancelButtonTitle: "OK")
            alertView.alertViewStyle = .default
            alertView.show()
        }
       
    }
    
    func interstitialWillPresentScreen(_ interstitial: APInterstitial!) {
       
    }
    
    
    func interstitialWillDismissScreen(_ interstitial: APInterstitial!) {
       
    }
    
    func interstitialDidDismissScreen(_ interstitial: APInterstitial!) {
       
    }
    
    func interstitialWillLeaveApplication(_ interstitial: APInterstitial!) {
       
    }
    
    
}//end class

//===REWARD AD========/////
class RewardedAdViewContoller: UIViewController, APRewardedAdDelegate {
    var AdPieSDK_MediaId :String = ""
    var slotId:String = ""
    init(AdPieSDK_MediaId:String, slotId:String) {
        
        super.init(nibName: nil, bundle: nil)
        self.AdPieSDK_MediaId = AdPieSDK_MediaId
        self.slotId = slotId
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    var rewardedAd: APRewardedAd!
    override func viewWillAppear(_ animated: Bool) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
        // 디버깅 적용
        AdPieSDK.sharedInstance().logging()
        
        if #available(iOS 14, *) {
            // ATT 알림을 통한 권한 요청
            ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
                // SDK 초기화
                if AdPieSDK.sharedInstance().isInitialized == false {
                    //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                    AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
                }
            })
        } else {
            // SDK 초기화
            if AdPieSDK.sharedInstance().isInitialized == false {
                //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
            }
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        self.modalPresentationStyle = .overCurrentContext
        self.view.backgroundColor = .clear
        self.view.isOpaque = false
        // Do any additional setup after loading the view.
        
        // 광고 객체 생성 (Slot ID 입력)
        //rewardedAd = APRewardedAd(slotId: "61de726d65a17f71c7896827")
        rewardedAd = APRewardedAd(slotId: self.slotId)
        // 델리게이트 등록
        rewardedAd.delegate = self
        
       
        rewardedAd.load()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    /*
     // MARK: - Navigation
     
     // In a storyboard-based application, you will often want to do a little preparation before navigation
     override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
     // Get the new view controller using segue.destinationViewController.
     // Pass the selected object to the new view controller.
     }
     */
    
 
    
    // MARK: - APRewardedAdDelegate delegates
    func rewardedAdDidLoad(_ rewardedAd: APRewardedAd!) {
        // 광고 로딩 완료 후 이벤트 발생
        
        // 광고 요청 후 즉시 노출하고자 할 경우 아래의 코드를 추가한다.
        if rewardedAd.isReady() {
            // 광고 표출
            rewardedAd.present(fromRootViewController: self)
        }
    }
    
    func rewardedAdDidFail(toLoad rewardedAd: APRewardedAd!, withError error: Error!) {
        // 광고 요청 또는 표출 실패 후 이벤트 발생
        // error code : error._code
        // error message : error.localizedDescription
        
        let errorMessage = "Failed to load interstitial ads." + "(code : " + String(error._code) + ", message : " + error.localizedDescription + ")"
        
        if #available(iOS 8.0, *) {
            let alertController = UIAlertController(title: "Error", message: errorMessage, preferredStyle: .alert)
            let defaultAction = UIAlertAction(title: "OK", style: .default, handler: nil)
            alertController.addAction(defaultAction)
            
            present(alertController, animated: true, completion: nil)
        } else {
            let alertView = UIAlertView(title: "Error", message: errorMessage, delegate: nil, cancelButtonTitle: "OK")
            alertView.alertViewStyle = .default
            alertView.show()
        }
    }
    
    func rewardedAdWillPresentScreen(_ rewardedAd: APRewardedAd!) {
        // 리워드광고 표출 알림
    }
    
    func rewardedAdWillDismissScreen(_ rewardedAd: APRewardedAd!) {
        // 리워드광고 종료 예정 알림
    }
    
    func rewardedAdDidDismissScreen(_ rewardedAd: APRewardedAd!) {
        // 리워드광고 종료 완료 알림
    }
    
    func rewardedAdDidEarnReward(_ rewardedAd: APRewardedAd!) {
        // 리워드광고 보상 알림
    }
    
    func rewardedAdWillLeaveApplication(_ rewardedAd: APRewardedAd!) {
        // 리워드광고 클릭 알림
    }
}

//===BANNER AD====///
class BannerAdViewContoller: UIViewController, APAdViewDelegate {
    var AdPieSDK_MediaId :String = ""
    var slotId:String = ""
    init(AdPieSDK_MediaId:String, slotId:String) {
        
        super.init(nibName: nil, bundle: nil)
        self.AdPieSDK_MediaId = AdPieSDK_MediaId
        self.slotId = slotId
        
        self.view.frame = CGRect(x: 0,y: UIScreen.main.bounds.height - 150,width: UIScreen.main.bounds.width, height: 60)
        self.view.backgroundColor = .clear
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
   
    
    override func viewWillAppear(_ animated: Bool) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
        // 디버깅 적용
        AdPieSDK.sharedInstance().logging()
        
        if #available(iOS 14, *) {
            // ATT 알림을 통한 권한 요청
            ATTrackingManager.requestTrackingAuthorization(completionHandler: { status in
                // SDK 초기화
                if AdPieSDK.sharedInstance().isInitialized == false {
                    //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                    AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
                }
            })
        } else {
            // SDK 초기화
            if AdPieSDK.sharedInstance().isInitialized == false {
                //AdPieSDK.sharedInstance().initWithMediaId("57342d787174ea39844cac11")
                AdPieSDK.sharedInstance().initWithMediaId(self.AdPieSDK_MediaId)
            }
        }
    }
    func alertMessage(_ errorMessage : String) {
        if #available(iOS 8.0, *) {
            let alertController = UIAlertController(title: "Error", message: errorMessage, preferredStyle: .alert)
            let defaultAction = UIAlertAction(title: "OK", style: .default, handler: nil)
            alertController.addAction(defaultAction)
            
            present(alertController, animated: true, completion: nil)
        } else {
            let alertView = UIAlertView(title: "Error", message: errorMessage, delegate: nil, cancelButtonTitle: "OK")
            alertView.alertViewStyle = .default
            alertView.show()
        }
    }
    
    var adView: APAdView = APAdView()
    //var adView = UIView()
    override func viewDidLoad() {
        super.viewDidLoad()
        /*
           let testview = UIView(frame: CGRect(x: 0, y: 0, width: 120, height: 400))
       
        self.view.addSubview(testview)
        testview.backgroundColor = .red
        testview.translatesAutoresizingMaskIntoConstraints = false
        
        testview.widthAnchor.constraint(equalToConstant: UIScreen.main.bounds.width).isActive = true
        testview.heightAnchor.constraint(equalToConstant: 60).isActive = true
        testview.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
        */
        
        let adView = APAdView(frame: CGRect(x: 0, y: 0, width: 120, height: 400))
    
     self.view.addSubview(adView)
        adView.backgroundColor = .red
        adView.translatesAutoresizingMaskIntoConstraints = false
     
        adView.widthAnchor.constraint(equalToConstant: UIScreen.main.bounds.width).isActive = true
        adView.heightAnchor.constraint(equalToConstant: 60).isActive = true
        adView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
        
        adView.slotId = self.slotId
        
        adView.rootViewController = self
        adView.load()
        //testview.bottomAnchor.constraint(equalTo: self.view.bottomAnchor).isActive = true
        
        /*
        self.modalPresentationStyle = .overCurrentContext
        self.view.backgroundColor = .clear
        self.view.isOpaque = false
        
        self.view.addSubview(adView)
        adView.translatesAutoresizingMaskIntoConstraints = false
        adView.backgroundColor = .green
        NSLayoutConstraint.activate([
           
            adView.bottomAnchor.constraint(equalTo: view.bottomAnchor,constant: -80),
            adView.widthAnchor.constraint(equalToConstant:  400),
            adView.heightAnchor.constraint(equalToConstant: 50)
         ])
        
        // 광고뷰에 Slot ID 입력
        //adView.slotId = "57342fdd7174ea39844cac15"
        adView.slotId = self.slotId
        // 광고뷰의 RootViewController 등록 (Refresh를 위해 필요)
        //adView.rootViewController = self
        // 델리게이트 등록
        adView.delegate = self
        
        // 광고 요청
        adView.load()
        
     */
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    /*
     // MARK: - Navigation
     
     // In a storyboard-based application, you will often want to do a little preparation before navigation
     override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
     // Get the new view controller using segue.destinationViewController.
     // Pass the selected object to the new view controller.
     }
     */
    
    // MARK: - APAdView delegates
    
    func adViewDidLoadAd(_ view: APAdView!) {
        // 광고 표출 성공 후 이벤트 발생
    }
    
    func adViewDidFail(toLoadAd view: APAdView!, withError error: Error!) {
        // 광고 요청 또는 표출 실패 후 이벤트 발생
        // error code : error._code
        // error message : error.localizedDescription
        print("FAIL", error.localizedDescription)
        let errorMessage = "Failed to load native ads." + "(code : " + String(error._code) + ", message : " + error.localizedDescription + ")"
        
        alertMessage(errorMessage)
    
    }
    
    func adViewWillLeaveApplication(_ view: APAdView!) {
        // 광고 클릭 후 이벤트 발생
    }
}

