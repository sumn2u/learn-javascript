# Popup

Popups are an additional way to show information, take user confirmation, or take user input from additional documents. A popup can navigate to a new URL and send information to the opener window. **Alert box**, **Confirmation box**,  and **Prompt box** are the global functions where we can show the popup information.

पपअपहरू जानकारी देखाउन, प्रयोगकर्ता कन्फर्मेसन लिनुहोस्, वा अतिरिक्त कागजातहरूबाट प्रयोगकर्ता इनपुट लिनुहोस्। एक पपअपले नयाँ यूआरएलमा नेभिगेट गर्न र ओपनर विन्डोमा जानकारी पठाउनुहोस्। ** सचेत बक्स **, ** पुष्टिकरण बक्स **, र ** शीघ्र बक्स ** जहाँ हामी पपअप जानकारी देखाउन सक्छौं जहाँ हामी पपअप जानकारी देखाउन सक्छौं।

1.  **alert()**: It displays information to the user and has an  "**OK**" button to proceed.

1. ** सचेत () **: यसले प्रयोगकर्तालाई जानकारी प्रदर्शन गर्दछ र "** ठीक **" बटन थिच्नुहोस्।

    ```javascript
    alert("Alert message example");
    ```
2.  **confirm()**: Use as a dialog box to confirm or accept something. It has "**Ok**" and "**Cancel**" to proceed. If the user clicks "**Ok**" then it returns `true`, if click "**Cancel**" it returns  `false`.&#x20;

2. ** पुष्टि गर्नुहोस् () **: केहि पुष्टि गर्न वा केहि स्वीकार गर्न एक संवाद बाकस को रूप मा प्रयोग गर्नुहोस्। यो "** ठीक **" र "** रद्द गर्नुहोस् ** रद्द गर्नुहोस्। यदि प्रयोगकर्ता क्लिक गर्दछ "** ठीक **" तब यो `सही" स्वीकार गर्दछ, यदि क्लिक गर्नुहोस् "** रद्द गर्नुहोस् **" क्लिक गर्नुहोस् * `kew`s फर्काउँछ। & # X20;

    ```javascript
    let txt;
    if (confirm("Press a button!")) {

यदि (निश्चित गर्नुहोस् ("बटन थिच्नुहोस्!"))) {
      txt = "You pressed OK!";

txt = "तपाईं ठीक थिच्नुभयो!";
    } else {
      txt = "You pressed Cancel!";

txt = "तपाइँ रद्द गर्नुभयो रद्द गर्नुहोस्!";
    }
    ```
3.  **prompt()**: Takes user input value with "**Ok"** and "**Cancel"** buttons. It returns `null` if the user does not provide any input value.

Stord। ** प्रोम्प्ट () **: "** ठीक छ" ** र "** रद्द गर्नुहोस्" **** रद्द गर्नुहोस्। यो `nullgret फिर्ता गर्दछ यदि प्रयोगकर्ताले कुनै इनपुट मूल्य प्रदान गर्दैन।

    ```javascript
    //syntax 
    //window.prompt("sometext","defaultText");

//window.ppropuatt(ivekevext म ,.iDEFEETETESTES ");

    let person = prompt("Please enter your name", "Harry Potter");

व्यक्तिलाई प्रोम्प्ट गर्नुहोस् = "कृपया तपाईंको नाममा प्रविष्ट गर्नुहोस्", "ह्यारी कुस्टर");

    if (person == null || person == "") {
      txt = "User cancelled the prompt.";

txt = "प्रयोगकर्ता प्रम्प्ट रद्द गरियो।";
    } else {
      txt = "Hello " + person + "! How are you today?";

txt = "नमस्कार" + + + "! आज तपाई कस्तो हुनुहुन्छ?";
    }
    ```









