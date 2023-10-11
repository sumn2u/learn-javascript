---
chapter: अध्याय २
pageNumber: १७
titleIndex: २.४
---
# समानता(Equility)

प्रोग्रामरहरूमा भ्यारीएबलहरूको सम्बन्धमा समानता निर्धारण गर्नुपर्दछ। यो समानता निर्धारण  इकुअलिटी(equality) अपरेटर प्रयोग गरेर गरिन्छ।

सबै भन्दा आधारभूत  इकुअलिटी अपरेटर (`==`) हो। यस अपरेटरले यो निर्धारण गर्दछ कि दुई भ्यारीएबल बराबर छन् कि छैन।

उदाहरणका लागि, मान्नुहोस्:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
console.log(foo == bar)  // true
console.log(baz == qux)  // false
```

`foo == bar` को मूल्यांकन गर्दा `true` र `baz == qux` को लागी `false` को मूल्यांकन हुनेछ।`foo` र `Baz`बिभिन्न प्रकारका बावजुद `foo == baz`को मूल्यांकन `true` हुनेछ। दृश्यहरूको पछाडि `==` समानता अपरेटरले आफ्नो समानता निर्धारण गर्नु अघि यसको प्रकारलाई अपरेट गर्दछ। यो `===` समानता अपरेटरको विपरित हो।

 इकुअलिटी अपरेटरले (`===`)  दुई भ्यारीएबल बराबर र समान प्रकारका छन् भन्ने निर्धारण गर्दछ । पहिले जस्तै, यसको मतलब यो हो कि `foo === bar` अझै पनि `true` मा मूल्याङ्कन हुनेछ, तर `foo === baz` ले अब `false` मा मूल्याङ्कन गर्नेछ। `baz === qux` अझै पनि `false` मा मूल्याङ्कन हुनेछ।

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
