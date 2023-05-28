---
chapter: अध्याय २
pageNumber: १७
titleIndex: २.४
---
# समानता

प्रोग्रामरहरूमा भ्यारीएबलहरूको सम्बन्धमा समानता निर्धारण गर्नुपर्दछ। यो समानता निर्धारण गर्न समानता अपरेटर प्रयोग गरेर गरिन्छ।

सब भन्दा आधारभूत अपरेटर समानता अपरेटर (`==`) हो। यस अपरेटरले यो निर्धारण गर्दछ कि दुई भ्यारीएबल बराबर छ कि छैन।

उदाहरणका लागि, मान्नुहोस्:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

`foo == bar` को मूल्यांकन गर्दा `साँचो` र `baz == qux` को लागी `झूटा` को मूल्यांकन हुनेछ।`foo` र `Baz`बिभिन्न प्रकारका बावजुद `foo == baz`को मूल्यांकन `साँचो` हुनेछ। दृश्यहरूको पछाडि `==` समानता अपरेटरले आफ्नो समानता निर्धारण गर्नु अघि यसको प्रकारलाई अपरेट गर्दछ। यो `===` समानता अपरेटरको विपरित हो।

 इकुअलिटी अपरेटरले (`===`)  दुई भ्यारीएबल बराबर र समान प्रकारका छन् भन्ने निर्धारण गर्दछ ।

{% exercise %}

समानता अपरेटर (`==` र `===`) प्रयोग गरेर `str` र `str2` को तुलना गर्न प्रयोग गर्नुहोस्।

{% initial %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// compare using ==
let stringResult1 =
let boolResult1 =
// compare using ===
let stringResult1 =
let boolResult2 =
{% solution %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// compare using ==
let stringResult1 = str1 == str2 // false
let boolResult1 =  bool1 == bool2 // true

// compare using ===
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false

{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true &&  boolResult2 === false );

{% context %}
{% endexercise %}
