---
description: History object manages the browser's history stack.

वर्णन: ईतिहास वस्तुले ब्राउजरको ईतिहास स्ट्याक राख्दछ।
---

# History

# इतिहास

When we open a web browser and surf a web page it creates a new entry in the history stack. As we keep navigating to different pages new entries get pushed into the stack. 

जब हामी वेब ब्राउजर खोल्छौं र वेब पृष्ठ सर्फ गर्छौं यसले इतिहास स्ट्याकमा नयाँ प्रविष्टि सिर्जना गर्दछ। जब हामी विभिन्न पृष्ठहरूमा नेभिगेट गरिरहन्छौं नयाँ प्रविष्टिहरू स्ट्याकमा धकेलिन्छन्।

To access the history object we can use

हामीले प्रयोग गर्न सक्ने इतिहास वस्तुमा पहुँच गर्न

```javascript
window.history
// or
history
```

To navigate  between the different history stack we can use   `go()` , `foward()` and  `back()`methods of **history** object.  

विभिन्न इतिहास स्ट्याकबीच नेभिगेट गर्न हामी **इतिहास** वस्तुको `go()`, `foward()` र `back()` विधिहरू प्रयोग गर्न सक्छौं।

1. **go\(\)**: It is used to navigate the specific URL of the history stack.

   यो इतिहास स्ट्याकको विशिष्ट यूआरएल नेभिगेट गर्न प्रयोग गरिन्छ।

    ```javascript
   history.go(-1); // moves page backward
   history.go(0);  // refreshes the current page
   history.go(); // refreshes the current page
   history.go(1) // moves page forward
   ```

   > _**Note:**_ the current  page position in history stack is  **0**.

   > _**Note:**_ इतिहास स्ट्याकमा हालको पृष्ठ स्थिति **0** हो।

2. **back\(\)** : To navigate page backward we use `back()` method.

   पृष्ठ पछाडि नेभिगेट गर्न हामी `back()` विधि प्रयोग गर्दछौं।

   ```javascript
   history.back();
   ```

3. **forward\(\)**: It loads the next list in the browser history. It is similar to clicking the forward button in the browser.

यसले ब्राउजर इतिहासमा पछिल्लो सूची लोड गर्दछ । यो ब्राउजरमा फरवार्ड बटन क्लिक गर्नु जस्तै हो ।

   ```javascript
   history.forward();
   ```

