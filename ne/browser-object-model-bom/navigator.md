# Navigator

# नेभिगेटर 
`window.navigator`  or `navigator`   is a **read-only** property and contains different methods and functions related to the browser.

`window.navigator` वा `navigator`  एक **पढ्न-मात्र** गुण हो र यसले ब्राउजरसँग सम्बन्धित विभिन्न विधिहरू र प्रकार्यहरू समावेश गर्दछ।

Let's look at a  few examples of navigation.

आउनुहोस् नेभिगेसनका केही उदाहरणहरू हेरौं।

1. **navigator.appName**: It gives the name of the browser application

    यसले ब्राउजर एप्लिकेसनको नाम दिन्छ।

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**Note:**_ "Netscape" is the application name for IE11, Chrome, Firefox, and Safari.
    > _**नोट:**_ "नेटस्केप" आईई ११, क्रोम, फायरफक्स र सफारीको लागि अनुप्रयोग नाम हो।

2. **navigator.cookieEnabled**: Returns a boolean value based on the cookie value in the browser.
ब्राउजरमा कुकी मानमा आधारित बुलियन मान फर्काउँछ ।

    ```javascript
    navigator.cookieEnabled;
    //true
    ```
3. **navigator.platform**: Provides information about the browser operating system.

    ब्राउजर अपरेटिङ सिस्टमको बारेमा जानकारी प्रदान गर्दछ ।

    ```javascript
    navigator.patform;
    "MacIntel"
    ```



