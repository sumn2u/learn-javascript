---
chapter: अध्याय १६
pageNumber: ८४
titleIndex: १६.४
---
# नेभिगेटर

`window.navigator` वा `navigator`  एक **पढ्न-मात्र** गुण हो र यसले ब्राउजरसँग सम्बन्धित विभिन्न विधिहरू र प्रकार्यहरू समावेश गर्दछ।

आउनुहोस् नेभिगेसनका केही उदाहरणहरू हेरौं।

1. **navigator.appName**: यसले ब्राउजर एप्लिकेसनको नाम दिन्छ।

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**नोट:**_ "नेटस्केप" आईई ११, क्रोम, फायरफक्स र सफारीको लागि अनुप्रयोग नाम हो।

2. **navigator.cookieEnabled**: ब्राउजरमा कुकी मानमा आधारित बुलियन मान फर्काउँछ ।

    ```javascript
    navigator.cookieEnabled;
    //true
    ```
3. **navigator.platform**: ब्राउजर अपरेटिङ सिस्टमको बारेमा जानकारी प्रदान गर्दछ ।

    ```javascript
    navigator.patform;
    "MacIntel"
    ```