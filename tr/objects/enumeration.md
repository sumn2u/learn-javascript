---
chapter: 9
pageNumber: 63
---

# Enumeration (Numaralandırma)

_Enumeration_ (Numaralandırma), bir objenin özelliklerini yinelemek ve her özellik için belirli bir eylemi gerçekleştirme işlemine atıfta bulunur. JavaScript'te bir objenin özelliklerini numaralandırmanın birkaç yolu vardır.

Bir objenin özelliklerini numaralandırmanın bir yolu, `for-in` döngüsünü kullanmaktır. `for-in` döngüsü, bir objenin enumerable özelliklerini rastgele bir sırayla yineler ve her özellik için bir blok kodunu çalıştırır.

`for in` ifadesi, bir objedeki tüm özellik adlarını yineleyebilir. Numaralandırma, fonksiyonları ve prototip özelliklerini içerecektir.

```javascript
let fruit = {
    apple: 2,
    orange: 5,
    pear: 1,
  },
  sentence = "I have ",
  quantity;
for (kind in fruit) {
  quantity = fruit[kind];
  sentence += quantity + " " + kind + (quantity === 1 ? "" : "s") + ", ";
}
// The following line removes the trailing comma.
sentence = sentence.substr(0, sentence.length - 2) + ".";
// I have 2 apples, 5 oranges, 1 pear.
```

Bir objenin özelliklerini numaralandırmanın başka bir yolu, `Object.keys()` yöntemini kullanmaktır. Bu yöntem, objenin kendi enumerable özellik adlarının bir diziini döndürür.

Örneğin:

```typescript
let object = {
  foo: "bar",
  baz: "qux",
};

let properties = Object.keys(object);
properties.forEach(function (property) {
  console.log(property + ": " + object[property]);
});

// foo: bar
// baz: qux
```
