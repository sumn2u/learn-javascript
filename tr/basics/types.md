---
chapter: 2
pageNumber: 13
---

# Türler

Bilgisayarlar karmaşıktır ve sayılardan daha karmaşık değişkenler kullanabilirler. İşte bu noktada değişken türleri devreye girer. Değişkenlerin çeşitli türleri vardır ve farklı diller farklı türleri destekler.

En yaygın türler şunlardır:

* **Number**: Sayılar tam sayılar (örneğin, `1`, `-5`, `100`) veya yüzdeli değerler (örneğin, `3.14`, `-2.5`, `0.01`) olabilir. JavaScript tamsayılar ve yüzdeli değerler için ayrı bir türe sahip değildir; her ikisini de sayı olarak ele alır.
* **String**: Stringler, tek tırnak (örneğin, `'hello'`) veya çift tırnak (örneğin, `"world"`) ile temsil edilen karakter dizileridir.
* **Boolean**: Boolean'lar doğru veya yanlış bir değeri temsil eder. Bunlar `true` veya `false` olarak yazılabilir (tırnak işaretleri olmadan).
* **Null**: Null türü, "değer yok" anlamına gelen bir null değerini temsil eder. Tırnak işaretleri olmadan `null` şeklinde yazılabilir.
* **Undefined**: Undefined türü, atanmamış bir değeri temsil eder. Bir değişken tanımlanmış, ancak bir değer atanmamışsa, `undefined`dır.
* **Object**: Obje, her biri bir ad ve değere sahip olan bir özellikler topluluğudur. Küme parantezleri (`{}`) kullanarak bir nesne oluşturabilir ve isim-değer çiftleri kullanarak ona özellikler atayabilirsiniz.
* **Array**: Dizi, bir öğe koleksiyonunu tutabilen özel bir obje türüdür. Köşeli parantez (`[]`) kullanarak bir dizi oluşturabilir ve ona bir değerler atayabilirsiniz.
* **Function**: Fonksiyon, tanımlanabilen ve daha sonra adıyla çağrılabilen bir kod bloğudur. Fonksiyonlar argüman (girdi) kabul edebilir ve bir değer (çıktı) döndürebilir. Bir fonksiyonu `function` anahtar sözcüğünü kullanarak oluşturabilirsiniz.

JavaScript, açık bir şekilde değişkenlerin hangi veri türünü kullandığını belirtmek için ayrıca bir deklarasyon yapmaya gerek duymadan (*_loosely typed_*) *"gevşek bir şekilde yazılmış"* bir dildir. Sadece bir değişkenin tanımlandığını belirtmek için `var` anahtar kelimesini kullanmanız yeterlidir ve yorumlayıcı, veri türünü bağlama ve alıntıların kullanımına dayanarak belirleyecektir.


{% exercise %}
Aşağıdaki değerlerle üç değişken tanımlayın ve onlara başlangıç değerleri atayın: `age` bir sayı, `name` bir string (dize) ve `isMarried` bir boolean (mantıksal değer) olsun.
{% initial %}
let age =
let name = 
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true

{% validation %}
assert(typeof age === "number" && typeof name === "string" && typeof isMarried === "boolean");

{% context %}
{% endexercise %}

`typeof` operatörü, bir değişkenin veri türlerini kontrol etmek için kullanılır.
```javascript
typeof "John"                 // "string" döndürür
typeof 3.14                   // "number" döndürür
typeof NaN                    // "number" döndürür
typeof false                  // "boolean" döndürür
typeof [1,2,3,4]              // "object" döndürür
typeof {name:'John', age:34}  // "object" döndürür
typeof new Date()             // "object" döndürür
typeof function () {}         // "function" döndürür
typeof myCar                  // "undefined" döndürür
typeof null                   // "object döndürür
```

JavaScript'de kullanılan veri tipleri, içerdikleri değerlere göre iki kategoriye ayrılabilir.

Değer içerebilen veri türleri:

* `string`
* `number`
* `boolean`
* `object`
* `function`

{% hint style="info" %}
JavaScript'te kullanılabilen nesne türleri `Object`, `Date`, `Array`, `String`, `Number` ve `Boolean`'dır.{% endhint %}

Değer içeremeyen veri türleri:

* `null`
* `undefined`

Primitive (*İlkel*) veri değeri, ek özellikleri ve yöntemleri olmayan basit bir veri değeridir ve bir obje değildir. Primitive veri değerleri değiştirilemezlerdir. 7 Primitive veri türü vardır:

* string
* number
* bigint
* boolean
* undefined
* symbol
* null

{% exercise %}
`person`adında bir değişken tanımlayın ve içinde aşağıdaki özellikleri içeren bir nesneyle başlatalım: `age`(sayı), `name` (dize) ve `isMarried` (boolean).
{% initial %}
let person =

{% solution %}
let person = {
  name: "Mary",
  age: 25,
  isMarried: false
};

{% validation %}
assert(typeof person.age === "number" && typeof person.name === "string" && typeof person.isMarried === "boolean");

{% context %}
{% endexercise %}
