---
chapter: 9
pageNumber: 59
---

# Reference (Referans)

Objeler **asla kopyalanmaz**. Referansla iletilir. Obje referansı, bir nesneye atıfta bulunan bir değerdir. `new` operatörü veya nesne literal sözdizimi kullanarak bir nesne oluşturduğunuzda, JavaScript bir nesne oluşturur ve ona bir referans atar.

İşte obje literal sözdizimi kullanarak bir nesne oluşturma örneği:

```css
var object = {
  foo: "bar";
}
```

İşte `new` operatörü kullanarak bir nesne oluşturma örneği:

```typescript
var object = new Object();
object.foo = "bar";
```

Bir nesne referansını bir değişkene atadığınızda, değişken yalnızca nesneye referans tutar, nesneyi kendisini değil. Bu, nesne referansını başka bir değişkene atarsanız, her iki değişkenin de aynı nesneye işaret edeceği anlamına gelir.

Örneğin:

```javascript
var object1 = {
  foo: "bar",
};

var object2 = object1;

console.log(object1 === object2); // Sonuç: true
```

Yukarıdaki örnekte, `obje1` ve `obje2` hem aynı nesneye referans tutan değişkenlerdir. `===` operatörü referansları karşılaştırmak için kullanılır, nesneleri değil ve her iki değişkenin de aynı nesneye referans tuttuğu için `true` döndürür.

{% hint style="info" %}
`Object.assign()` yöntemini kullanarak, var olan bir nesnenin kopyası olan yeni bir nesne oluşturabilirsiniz.
{% endhint %}

Aşağıda referansla bir nesne örneği verilmiştir.

```javascript
// Bir pizzam olduğunu düşünelim
let myPizza = { slices: 5 };
// Ve onu sizinle paylaştım
let yourPizza = myPizza;
// Ben bir dilim daha yiyorum
myPizza.slices = myPizza.slices - 1;
let numberOfSlicesLeft = yourPizza.slices;
// Şimdi 4 dilimiz var çünkü myPizza ve yourPizza
// aynı pizza nesnesine referans verin.
let a = {},
  b = {},
  c = {};
// a, b ve c her biri
// farklı boş nesne
a = b = c = {};
// a, b ve c hepsi
// aynı boş nesneye referans verin
```
