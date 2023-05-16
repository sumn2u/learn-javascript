# Spread

Bir dizi veya nesne, Spread(_Yayma_) Operatörü (...) kullanılarak hızlı bir şekilde başka bir dizi veya nesneye kopyalanabilir.

Bazı örnekleri:

```javascript
let dizi1 = [1, 2, 3, 4, 5];

console.log(...dizi1);
// Sonuç: 1 2 3 4 5

let dizi2;
dizi2 = [...dizi1]; //dizi1'i, dizi2'ye kopyalama

console.log(dizi2); //Sonuç: [1, 2, 3, 4, 5]

dizi2 = [6, 7];
dizi1 = [...dizi1, ...dizi2];

console.log(dizi1); //Sonuç: [1, 2, 3, 4, 5, 6, 7]
```

{% hint style="warning" %}
Spread operatörü yalnızca bu özelliği destekleyen modern tarayıcılarda çalışır. Daha eski tarayıcıları desteklemeniz gerekiyorsa, spread operatörü sözdizimini eşdeğer ES5 koduna dönüştürmek için Babel gibi bir _transpiler_ kullanmanız gerekecektir.

{% endhint %}
