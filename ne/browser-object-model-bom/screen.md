# Screen

# स्क्रिन

The `screen` object contains the information about the screen on which the current window is being rendered. To access `screen` object we can use the `screen` property of `window` object.

`स्क्रिन (screen)` वस्तुले हालको सञ्झ्याल रेन्डर गरिएको पर्दाको बारेमा जानकारी समावेश गर्दछ । 'स्क्रिन' वस्तु पहुँच गर्न हामी `सञ्झ्याल` वस्तुको 'स्क्रिन' गुण प्रयोग गर्न सक्छौं।

```javascript
window.screen
//or
screen
```

The `window.screen` object has different properties, some of them are listed here:

`window.screen` वस्तुसँग विभिन्न गुणहरू छन्, तीमध्ये केही यहाँ सूचीबद्ध छन्:

| Property | Description |
| :--- | :--- |
| `height` | Represents the pixel height of the screen. |
| `left` | Represents the pixel distance of the current screen’s left side. |
| `pixelDepth` | A read-only property that returns the bit depth of the screen. |
| `top` | Represents the pixel distance of the current screen’s top. |
| `width` | Represents the pixel width of the screen. |
| `orientation` |  Returns the screen orientation as specified in the Screen Orientation API |
| `availTop` | A read-only property that returns the first pixel from the top that is not taken up by system elements. |
| `availWidth` | A read-only property that returns the pixel width of the screen excluding system elements. |
| `colorDepth` | A read-only property that returns the number of bits used to represent colors. |
| `height` | Represents the pixel height of the screen. |
| `left` | Represents the pixel distance of the current screen’s left side. |
| `pixelDepth` | A read-only that returns the bit depth of the screen. |
| `top` | Represents the pixel distance of the current screen’s top. |
| `width` | Represents the pixel width of the screen. |
| `orientation` |  Returns the screen orientation as specified in the Screen Orientation API |


| गुण  | विवरण |
| :--- | :--- |
| `height` | स्क्रिनको पिक्सेल उचाइ प्रतिनिधित्व गर्दछ  |
| `left` | हालको स्क्रिनको बायाँ पट्टिको पिक्सेल दूरी प्रतिनिधित्व गर्दछ |
| `pixelDepth` | पढ्ने मात्र गुण जसले पर्दाको बिट गहिराइ फर्काउँछ  |
| `top` | हालको स्क्रिनको माथिल्लो भागको पिक्सेल दूरी प्रतिनिधित्व गर्दछ  |
| `width` | स्क्रिनको पिक्सेल चौडाइ प्रतिनिधित्व गर्दछ  |
| `orientation` |  पर्दा अभिमुखीकरण एपीआईमा निर्दिष्ट गरिए अनुसार पर्दा अभिमुखीकरण फर्काउँछ |
| `availTop` | पढ्ने मात्र गुण जसले माथिबाट पहिलो पिक्सेल फर्काउँछ जुन प्रणाली तत्वहरू द्वारा लिइएको छैन |
| `availWidth` | पढ्ने मात्र गुण जसले प्रणाली तत्वहरू बाहेक स्क्रिनको पिक्सेल चौडाइ फर्काउँछ  |
| `colorDepth` | पढ्ने मात्र गुण जसले रङहरू प्रतिनिधित्व गर्न प्रयोग गरिने बिटहरूको सङ्ख्या फर्काउँछ  |
| `height` | स्क्रिनको पिक्सेल उचाइ प्रतिनिधित्व गर्दछ  |
| `left` | हालको स्क्रिनको बायाँ पट्टिको पिक्सेल दूरी प्रतिनिधित्व गर्दछ  |
| `pixelDepth` | पढ्ने मात्र जसले पर्दाको बिट गहिराइ फर्काउँछ  |
| `top` | हालको स्क्रिनको माथिल्लो भागको पिक्सेल दूरी प्रतिनिधित्व गर्दछ  |
| `width` | स्क्रिनको पिक्सेल चौडाइ प्रतिनिधित्व गर्दछ  |
| `orientation` |  पर्दा अभिमुखीकरण एपीआईमा निर्दिष्ट गरिए अनुसार पर्दा अभिमुखीकरण फर्काउँछ |


