# Shift

`shift` methodu, bir dizideki ilk elemanı siler ve kalan elemanları sola kaydırır. Orijinal diziyi değiştirir. `shift` için syntax şu şekilde:

```c
array.shift();
```

Örneğin:&#x20;

```javascript
let array = [1, 2, 3];
array.shift();

// Sonuç: array = [2,3]
```

Bir dizideki tüm öğeleri kaldırmak için `shift` yöntemini bir döngü ile birlikte de kullanabilirsiniz. İşte bunu nasıl yapabileceğinize dair bir örnek:

```c
while (array.length > 0) {
  array.shift();
}

console.log(array); // Sonuç: []
```

{% hint style="warning" %}
`shift` yöntemi yalnızca diziler üzerinde çalışır, argüman nesneleri veya NodeList nesneleri gibi dizilere benzeyen diğer nesneler üzerinde çalışmaz. Bu tür nesnelerden birinin öğelerini kaydırmanız gerekiyorsa, önce `Array.prototype.slice()` yöntemini kullanarak onu bir diziye dönüştürmeniz gerekir.

{% endhint %}
