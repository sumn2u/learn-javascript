---
chapter: 2
pageNumber: 15
---

# Eşitlik

Bir program yazarken sık sık değişkenlerin diğer değişkenlere göre eşitliğini belirlememiz gerekir. Bu, bir eşitlik operatörü kullanılarak yapılır. En temel eşitlik operatörü `==` operatörüdür. Bu operatör, aynı türden olmasalar bile iki değişkenin eşit olup olmadığını belirlemek kullanılır.

Örneğin, varsayalım:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

Bekleneceği gibi `foo == bar` `true` ve `baz == qux` `false` olarak değerlendirilecektir. Ancak, `foo` ve `baz` farklı türler olmasına rağmen `foo == baz` da `true` olarak değerlendirilecektir. Perde arkasında `==` eşitlik operatörü, eşitliklerini belirlemeden önce işlenenlerini aynı türe zorlamaya çalışır. Bu, `===` eşitlik operatörünün tersidir.

Eşitlik operatörü `===` iki değişkenin aynı tipte _ve_ aynı değere sahip olmaları durumunda eşit olduğunu belirler. Daha önce olduğu gibi aynı varsayımlarla, bu `foo === bar` hala `true` olarak değerlendirileceği, ancak `foo === baz` artık `false` olarak değerlendirileceği anlamına gelir. `baz === qux` ise yine  `false` olarak değerlendirilecektir.

{% exercise %}
`str1` ve `str2` değerlerini karşılaştırmak için `==` ve `===` operatörlerini kullanın.


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
