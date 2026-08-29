---
chapter: 16
pageNumber: 102
description: navigator என்பது பயனரின் வலை உலாவி (web browser) மற்றும் பயனரின் கணினி பற்றிய தகவல்களை வழங்கும் உள்ளமைக்கப்பட்ட பொருளாகும் (built-in object). உலாவியின் பெயர், பதிப்பு (version), பயனர் முகவர் (user agent), மொழி விருப்பத்தேர்வுகள் மற்றும் பல போன்ற பயனரின் சூழல் பற்றிய தகவல்களை அணுகக்கூடிய பல்வேறு பண்புகள் (properties) மற்றும் முறைகளை (methods) இது கொண்டுள்ளது.
---
# நேவிகேட்டர் (Navigator)

`window.navigator` அல்லது `navigator` என்பது **படிக்க மட்டுமேயான (read-only)** பண்பாகும் மற்றும் உலாவியுடன் தொடர்புடைய வெவ்வேறு முறைகள் மற்றும் செயல்பாடுகளைக் கொண்டுள்ளது.&#x20;

நேவிகேட்டரின் சில எடுத்துக்காட்டுகளைப் பார்ப்போம்.

1.  **navigator.appName**: இது உலாவி பயன்பாட்டின் (browser application) பெயரைக் கொடுக்கிறது

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**குறிப்பு:**_ IE11, Chrome, Firefox மற்றும் Safari க்கான பயன்பாட்டின் பெயர் "Netscape" ஆகும்.
2.  **navigator.cookieEnabled**: உலாவியில் குக்கீ மதிப்பைப் பொறுத்து பூலியன் (boolean) மதிப்பைத் திரும்பப் பெறுகிறது.

    ```javascript
    navigator.cookieEnabled;
    //true
    ```
3.  **navigator.platform**: உலாவி இயக்க முறைமை (operating system) பற்றிய தகவல்களை வழங்குகிறது.

    ```javascript
    navigator.platform;
    "MacIntel"
    ```
