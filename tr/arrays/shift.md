---
chapter: 6
pageNumber: 41  
---

# Shift

`shift` fonksiyonu, bir dizideki ilk elemanı siler ve kalan elemanları sola kaydırır. Orijinal diziyi değiştirir. `shift` fonksiyonunun *syntax*'i:

```c
array.shift();
```

Örneğin:&#x20;

```javascript
let array = [1, 2, 3];
array.shift();

// Sonuç: array = [2,3]
```

Bir dizideki tüm öğeleri kaldırmak için `shift` fonksiyonunu bir döngü ile birlikte de kullanabilirsiniz. Bunu nasıl yapabileceğinize dair bir örnek:

```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Sonuç: []
```

{% hint style="warning" %}
`shift` fonksiyonu yalnızca diziler üzerinde çalışır, argüman nesneleri veya NodeList nesneleri gibi dizilere benzeyen diğer nesneler üzerinde çalışmaz. Bu tür nesnelerden birinin öğelerini kaydırmanız gerekiyorsa, önce `Array.prototype.slice()` fonksiyonunu kullanarak onu bir diziye dönüştürmeniz gerekir.

{% endhint %}
