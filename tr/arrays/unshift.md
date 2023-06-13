---
chapter: 6
pageNumber: 38  
---

# Unshift

`unshift` fonksiyonu, yeni öğeleri sırayla dizi başına ekler. Bu, orijinal diziyi değiştirir ve dizinin yeni uzunluğunu döndürür. Örneğin:

```javascript
let array = [0, 5, 10];
array.unshift(-5); // 4

// Sonuç: array = [-5 , 0, 5, 10];
```

{% hint style="warning" %}
`unshift()` fonksiyonu, orijinal diziyi değiştirir.
{% endhint %}

`unshift` fonksiyonu, dizinin başına eklenecek elemanları temsil eden bir veya daha fazla argüman alır. Elemanları verildikleri sırayla ekler, böylece ilk eleman dizinin ilk elemanı olur.

Bir diziye birden fazla eleman eklemek için `unshift` kullanımına bir örnek:

```javascript
const sayilar = [1, 2, 3];
const yeniUzunluk = sayilar.unshift(-1, 0);
console.log(sayilar); // [-1, 0, 1, 2, 3]
console.log(yeniUzunluk); // 5
```
