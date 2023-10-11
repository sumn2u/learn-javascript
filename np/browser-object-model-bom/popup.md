---
chapter: अध्याय १६
pageNumber: ८२
titleIndex: १६.२
---
# पपअप

पपअपहरू जानकारी देखाउन, प्रयोगकर्ता पुष्टिकरण लिन, वा थप कागजातहरूबाट प्रयोगकर्ता इनपुट लिनको लागि एक अतिरिक्त तरिका हो। पपअपले नयाँ यूआरएलमा नेभिगेट गर्न सक्दछ र ओपनर सञ्झ्यालमा सूचना पठाउन सक्छ। **चेतावनी बाकस**, **पुष्टि बाकस**, र **प्रॉम्प्ट बक्स** विश्वव्यापी प्रकार्यहरू हुन् जहाँ हामी पपअप जानकारी देखाउन सक्छौं।

1. **alert()**: यसले प्रयोगकर्तालाई जानकारी प्रदर्शित गर्दछ र अगाडि बढ्नका लागि "**OK**" बटन छ।

    ```javascript
    alert("Alert message example");
    ```
2.  **confirm()**: कुनै कुरा पुष्टि गर्न वा स्वीकार गर्न संवाद बाकसको रूपमा प्रयोग गर्नुहोस् । यसमा "**OK**" र "**Cancel**" अगाडि बढ्नको लागि छ। यदि प्रयोगकर्ताले "**OK**" क्लिक गर्दछ भने यसले 'सत्य' फर्काउँछ, यदि "**Cancel**" क्लिक गर्दा यसले 'गलत' फर्काउँछ।

     ```javascript
    let txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    ```
3.  **prompt()**: "**OK"** र "**Cancel"** बटनसँग प्रयोगकर्ता आगत मान लिन्छ। यदि प्रयोगकर्ताले कुनै आगत मान प्रदान गरेन भने यसले 'नल' फर्काउँछ ।

    ```javascript
    //syntax 
    //window.prompt("sometext","defaultText");

    let person = prompt("Please enter your name", "Harry Potter");

    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    ```









