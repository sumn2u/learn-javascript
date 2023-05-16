# Pop

`pop()` fonksiyonu, bir diziden son elemanı çıkarır ve bu elemanı döndürür. Bu fonksiyon, dizinin uzunluğunu değiştirir.

`pop()` kullanımı için syntax şu şekildedir:

```c
array.pop();
```

Örneğin:

```javascript
let arr = ["one", "two", "three", "four", "five"];
arr.pop();

console.log(arr);

// Sonuç: ['one', 'two', 'three', 'four']
```

Ayrıca `pop` fonksiyonunu bir dizideki tüm öğeleri kaldırmak için bir döngü ile birlikte kullanabilirsiniz. Bunu nasıl yapabileceğinize dair bir örnek:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Sonuç: []
```

{% hint style="warning" %}
`pop()` fonksiyonu yalnızca dizilerde çalışır ve diğer dizilere benzer nesnelerde (örneğin, arguments nesneleri veya NodeList nesneleri) çalışmaz. Bu tür nesnelerden elemanları çıkarmak istiyorsanız, önce `Array.prototype.slice()` fonksiyonunu kullanarak onları bir diziye dönüştürmeniz gerekecektir.\

{% endhint %}
