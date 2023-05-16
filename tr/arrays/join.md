# Join

`join` methodu, dizide bulunan öğeleri tek bir string'e dönüştürür. Orijinal diziyi değiştirmez. `join` methodunun syntax'i ise şu şekildedir:

```c
array.join([separator]);
```

`seperator` değişkeni isteğe bağlıdır ve dizi elemanlarını hangi karakter ile birbirine bağlayacağını belirtir. Eğer bu değişken verilmezse, dizi elemanları virgül(,) ile ayrılır.

Örneğin:

```javascript
let array = ["bir", "iki", "üç", "dört"];

console.log(array.join(" "));

// Sonuç: bir iki üç dört
```

{% hint style="warning" %}
Herhangi bir ayırıcı belirtilebilir, ancak varsayılanı virgüldür (,).
{% endhint %}

Yukarıdaki örnekte boşluk bir ayraç olarak kullanıldı. Ayrıca, dizi benzeri bir nesneyi (arguments nesnesi veya NodeList nesnesi gibi) önce `Array.prototype.slice()` yöntemini kullanarak bir diziye dönüştürmek için de `join` kullanabilirsiniz:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(", "));
}

printArguments("a", "b", "c"); // Sonuç: "a, b, c"
```
