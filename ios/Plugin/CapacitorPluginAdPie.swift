import Foundation

@objc public class CapacitorPluginAdPie: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
