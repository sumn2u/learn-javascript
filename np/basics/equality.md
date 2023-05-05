# Equality

# समानता

Programmers frequently need to determine the equality of variables in relation to other variables. This is done using an equality operator.

प्रोग्रामरहरू प्राय: अन्य भ्यारीएबलहरूको सम्बन्धमा भ्यारीएबलको समानता निर्धारण गर्नुपर्दछ। यो समानता अपरेटर प्रयोग गरेर गरिन्छ।

The most basic equality operator is the `==` operator. This operator does everything it can to determine if two variables are equal, even if they are not of the same type.

सब भन्दा आधारभूत समानता अपरेटर `==` अपरेटर हो। यस अपरेटरले यो निर्धारण गर्न सक्दछ कि दुई भ्यारीएबल बराबर छ कि छैन, यदि तिनीहरू समान प्रकारको छैनन् भने पनि।

For example, assume:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

`foo == bar` will evaluate to `true` and `baz == qux` will evaluate to `false`, as one would expect. However, `foo == baz` will _also_ evaluate to `true` despite `foo` and `baz` being different types. Behind the scenes the `==` equality operator attempts to force its operands to the same type before determining their equality. This is in contrast to the `===` equality operator.

`foo == बार` को मूल्यांकन गर्न` साँचो "=` `Qux == क्विक्स` को लागी` झूटा को मूल्यांकन हुनेछ, एकले अपेक्षा गर्दछ। जे होस्, `foo == बाज` हुनेछ _ पूल_` foo` को बावजुद `foo` र` Baz 'बिभिन्न प्रकारका। दृश्यहरूको पछाडि `==` E` EXITION अपरेटरले आफ्नो समानता निर्धारण गर्नु अघि यसको प्रकारलाई अपरेट गर्दछ। यो `===` `` णी संदिग्व अपरेटर को विपरित छ।

The `===` equality operator determines that two variables are equal if they are of the same type _and_ have the same value. With the same assumptions as before, this means that `foo === bar` will still evaluate to `true`, but `foo === baz` will now evaluate to `false`. `baz === qux` will still evaluate to `false`.

`=== k` ईन्टालिटी अपरेटरले निर्धारण गर्दछ कि दुई भ्यारीएबल बराबर छन् यदि तिनीहरू समान प्रकारका छन् _ र on ्गको समान मान छ। यसैको रूपमा उही धारणाको साथ यसको मतलब यो हो कि `FOO === बार" अझै `सही छ, तर` Foo = Boz`e अब `LIN` को लागी। `Baz === क्विक्स अझै अझै मूल्या act ्कन गर्नुहोस्` झूटो।

{% exercise %}
Use the `==` and `===` operator to compare the values of `str1` and `str2`.

`==` `` ==== `` अपरेटरलाई `str`` र` stron``` को तुलना गर्न प्रयोग गर्नुहोस्।

{% initial %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// compare using ==

// प्रयोग गरेर == प्रयोग गर्नुहोस्
let stringResult1 =
let boolResult1 =
// compare using ===

// प्रयोग गरेर === तुलना गर्नुहोस्
let stringResult1 =
let boolResult2 = 
{% solution %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// compare using ==

// प्रयोग गरेर == प्रयोग गर्नुहोस्
let stringResult1 = str1 == str2 // false
let boolResult1 =  bool1 == bool2 // true

बोईसस्लोज 1 = BOOL1 == BOOL2 // सहि गरौं

// compare using ===

// प्रयोग गरेर === तुलना गर्नुहोस्
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false

बोईसौंसन 2 = BOOL1 === BOOL2 // झूटा


{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true &&  boolResult2 === false );

जोड (स्ट्रिरेसंडल 1 === Deilres & & stresse र & Bulressuld1 == BROWRSOULIULIONE1 ===== mirsullult);

{% context %}
{% endexercise %}
