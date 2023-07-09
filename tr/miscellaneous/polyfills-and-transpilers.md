---
chapter: 19
pageNumber: 96
---

# Polyfills and Transpilers

JavaScript belirli aralıklarla gelişmektedir. Düzenli olarak yeni dil önerileri sunulur, analiz edilir ve [https://tc39.github.io/ecma262/](https://tc39.github.io/ecma262/)adresine eklenir ve ardından spesifikasyona dahil edilir. Tarayıcıya bağlı olarak JavaScript motorlarında nasıl uygulandığı konusunda farklılıklar olabilir. Bazıları taslak önerileri uygularken, diğerleri tüm spesifikasyon yayınlanana kadar bekleyebilir. Yeni şeyler tanıtıldıkça geriye dönük uyumluluk sorunları ortaya çıkar.&#x20;

Eski tarayıcılarda modern kodu desteklemek için iki araç kullanırız: `transpilers` ve `polyfills`.

**Transpilers**

Modern kodu çeviren ve eski sözdizimi yapılarını kullanarak yeniden yazan bir programdır, böylece eski motor bunu anlayabilir. Örneğin, "`nullish` birleştirme operatörü" `??` 2020'de tanıtıldı ve eski tarayıcılar bunu anlayamıyor.&#x20;

Şimdi, `nullish` birleştirme operatörünü" `??` eski tarayıcılar için anlaşılabilir hale getirmek transpiler'ın işidir.&#x20;

```javascript
// transpiler'i çalıştırmadan önce
height = height ?? 200;

// transpiler çalıştırıldıktan sonra
height = height !== undefined && height !== null ? height : 200;
```

{% hint style="info" %}
[Babel](https://babeljs.io/) en önde gelen transpile araçlarından biridir. Geliştirme sürecinde, kodu transpile etmek için [webpack](https://webpack.js.org/) veya [parcel](https://parceljs.org/) gibi derleme araçlarını kullanabiliriz.
{% endhint %}

**Polyfills**

Yeni fonksiyonların eski tarayıcı motorlarında mevcut olmadığı durumlar vardır. Bu durumda, yeni fonksiyonu kullanan kod çalışmayacaktır. Boşlukları doldurmak için, `polyfill` olarak adlandırılan eksik fonksiyonu ekleriz. Örneğin, `filter()` yöntemi ES5'te tanıtıldı ve bazı eski tarayıcılarda desteklenmiyor. Bu yöntem bir fonksiyon kabul eder ve sadece fonksiyonun `true` döndürdüğü orijinal dizinin değerlerini içeren bir dizi döndürür.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // çift sayıyı filtreler
console.log(filtered);

// [2, 4, 6]
```

`filter` fonksiyonu için polyfill şu şekildedir.

```javascript
Array.prototype.filter = function (callback) {
  //  Yeni diziyi saklar
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // callback'i geçerli öğe, dizin ve bağlam ile çağırır.
    // verilen şartı sağlarsa yeni diziye ekler.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  // diziyi döndürür
  return result;
};
```

{% hint style="info" %}
[caniuse](https://caniuse.com/) farklı tarayıcı motorları tarafından desteklenen güncellenmiş fonksiyonları ve sözdizimini gösterir.
{% endhint %}
