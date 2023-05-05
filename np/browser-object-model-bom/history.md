---
description: History object manages the browser's history stack.

वर्णन: ईतिहास वस्तुले ब्राउजरको ईतिहास स्ट्याक राख्दछ।
---

# History

# इतिहास

When we open a web browser and surf a web page it creates a new entry in the history stack. As we keep navigating to different pages new entries get pushed into the stack. 

जब हामी वेब ब्राउजर खोल्छौं र एक वेब पृष्ठ सर्फ गर्दछ यसले ईतिहास स्ट्याकमा नयाँ प्रविष्टि सिर्जना गर्दछ। जब हामी विभिन्न पृष्ठहरू नयाँ प्रविष्टिहरूमा नेभिगेटिरहन्छौं।

To access the history object we can use

हामीले प्रयोग गर्न सक्ने ईतिहास वस्तु पहुँच गर्न

```javascript
window.history
// or
history
```

To navigate  between the different history stack we can use   `go()` , `foward()` and  `back()`methods of **history** object.  

बिभिन्न ईतिहास स्ट्यान्ड बीच नेभिगेट गर्न हामी `जाऊ ()`, `,` पृष्ठ ")` र `फिर्ता ()` - ईतिहास ** वस्तुको विधिहरू।

1. **go\(\)**: It is used to navigate the specific URL of the history stack.

1. ** जानुहोस् \ (\) **:: यो ईतिहास स्ट्याकको विशिष्ट URL नेभिगेट गर्न प्रयोग गरिन्छ।

   ```javascript
   history.go(-1); // moves page backward

इतिहासको (-1); // पृष्ठ पछि पृष्ठ सार्दछ
   history.go(0);  // refreshes the current page

इतिहासको (0); // हालको पृष्ठ रिफ्रेस गर्दछ
   history.go(); // refreshes the current page

ईतिहास.गो (); // हालको पृष्ठ रिफ्रेस गर्दछ
   history.go(1) // moves page forward

ईतिहास.गो (1) // पृष्ठ अगाडि बढ्छ
   ```

   > _**Note:**_ the current  page position in history stack is  **0**.

> _ ** नोट: ** _ _ _ ईतिहास स्ट्याकमा हालको पृष्ठ स्थिति ** 0 ** हो।

2. **back\(\)** : To navigate page backward we use `back()` method.

2. ** पछाडि \ (\) **: पृष्ठ पछाडि नेभिगेट गर्न हामी `पछाडि ()` विधि प्रयोग गर्दछ।

   ```javascript
   history.back();

इतिहास.ब्याक ();
   ```

3. **forward\(\)**: It loads the next list in the browser history. It is similar to clicking the forward button in the browser.

A. ** फर्वार्ड \ (\) **: यसले ब्राउजर ईतिहासमा अर्को सूची भार माथि लोड गर्दछ। यो ब्राउजरमा अगाडि बटन क्लिक गर्नका लागि समान समान छ।

   ```javascript
   history.forward();

इतिहास.forlarr ();
   ```

