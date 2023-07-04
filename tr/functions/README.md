---
layout: editorial
chapter: 8
pageNumber: 53
---

# Bölüm 8

# Functions (Fonksiyonlar)

Fonksiyonlar programlamadaki en güçlü ve temel kavramlardan biridir. Fonksiyonlar matematiksel fonksiyonlar gibi dönüşümler gerçekleştirir, **arguments** adı verilen girdi değerlerini alır ve bir çıktı değeri **döndürür**(_return_)&#x20;

Fonksiyonlar iki şekilde oluşturulabilir: `function declaration` (_fonksiyon tanımı_) veya `function expression` (_fonksiyon ifadesi_) kullanılarak. Fonksiyon ifadesi kullanıldığında _fonksiyon adı_ atlanarak fonksiyon bir `anonymous function` ( _anonim fonksiyon_) haline getirilebilir. Fonksiyonlar da değişkenler gibi tanımlanmalıdır. Şimdi `x` adında bir _argüman_ kabul eden ve **x'in çiftini** döndüren bir `double` fonksiyonu tanımlayalım:

```javascript
// bir fonksiyon tanımlama örneği
function double(x) {
  return 2 * x;
}
```

> _Note:_ yukarıdaki fonksiyona tanımlanmadan önce **başvurulabilir**.

JavaScript'te fonksiyonlar da değerdir; değişkenlerde saklanabilir (tıpkı sayılar, dizeler vb. gibi) ve diğer fonksiyonlara argüman (_parametre_) olarak verilebilirler:

```javascript
// bir fonksiyon ifadesi örneği
let double = function (x) {
  return 2 * x;
};
```

> _Note:_ yukarıdaki fonksiyon, diğer değişkenler gibi tanımlanmadan önce **referans gösterilemez**.

{% hint style="info" %}
&#x20;Callback, başka bir fonksiyona argüman olarak aktarılan bir fonksiyondur.
{% endhint %}

Bir arrow fonksiyonu, bazı sınırlamalarla birlikte bazı semantik farklılıklara sahip olan geleneksel fonksiyonlara göre kompakt bir alternatiftir. Bu fonksiyonların `this`, `arguments` ve `super` için kendi bağları yoktur ve constructor(_yapıcı_) olarak kullanılamazlar. Bir arrow fonksiyonu örneği:

```javascript
const double = (x) => 2 * x;
```

{% hint style="warning" %}
Arrow fonksiyonundaki `this` anahtar sözcüğü, arrow fonksiyonunu tanımlayan nesneyi temsil eder.&#x20;
{% endhint %}
