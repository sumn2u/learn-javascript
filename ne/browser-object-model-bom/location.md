# स्थान

'स्थान' वस्तु कागजातको हालको स्थान (यूआरएल) पुन: प्राप्त गर्न प्रयोग गरिन्छ र कागजात स्थान हेरफेर गर्न विभिन्न विधिहरू प्रदान गर्दछ। एक द्वारा हालको स्थान पहुँच गर्न सकिन्छ

```javascript
window.location
//or
document.location
//or
location
```
> _**नोट**_: `window.location` र `document.location` ले एउटै स्थान वस्तुलाई सन्दर्भ गर्दछ।

निम्न यूआरएलको उदाहरण लिऔं र 'स्थान' को विभिन्न गुणहरू अन्वेषण गरौं

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)


```javascript
location.href // हालको कागजात यूआरएल मुद्रण गर्दछ
location.protocol // http: वा https: जस्तै प्रोटोकल मुद्रण गर्दछ
location.host // लोकलहोस्ट वा लोकलहोस्ट जस्तै पोर्टसँग होस्टनाम मुद्रण गर्दछ:३०००
location.hostname // स्थानीय होस्ट वा www.example.com जस्तै होस्टनाम मुद्रण गर्दछ
location.port // ३००० जस्तै पोर्ट नम्बर मुद्रण गर्दछ
location.pathname // जस्तै /js/index.html जस्तै पाथनाम मुद्रण गर्दछ 
location.search // क्वेरी स्ट्रिङ मुद्रण गर्दछ जस्तै ?प्रकार=सूचीकरण र पृष्ठ=२
location.hash // #title जस्तै खण्ड पहिचानकर्ता मुद्रण गर्दछ
```
