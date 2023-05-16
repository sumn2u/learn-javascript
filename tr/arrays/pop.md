# Pop

`pop()` methodu, bir diziden son elemanı çıkarır ve bu elemanı döndürür. Bu yöntem, dizinin uzunluğunu değiştirir.

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

Ayrıca `pop` yöntemini bir dizideki tüm öğeleri kaldırmak için bir döngü ile birlikte kullanabilirsiniz. İşte bunu nasıl yapabileceğinize dair bir örnek:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Sonuç: []
```

{% hint style="warning" %}
`pop()` yöntemi yalnızca dizilerde çalışır ve diğer dizilere benzer nesnelerde (örneğin, arguments nesneleri veya NodeList nesneleri) çalışmaz. Bu tür nesnelerden elemanları çıkarmak istiyorsanız, önce `Array.prototype.slice()` yöntemini kullanarak onları bir diziye dönüştürmeniz gerekecektir.\

{% endhint %}
