---
chapter: 6
pageNumber: 46  
---

# For Each

`forEach` fonksiyonu dizideki her eleman için aynı fonksiyonu çalıştırır. Örnek olarak:

```javascript
array.forEach(function (element, index, array) {
  // element: dizide işlenmekte olan eleman
  // index: dizide işlenmekte olan geçerli elemanın indeksi
  // array: forEach'in çağrıldığı dizi
});
```

\
Örneğin, sayılardan oluşan bir dizimiz var ve her sayının iki katını console'a yazdırmak istiyoruz. Bu işlemi `forEach` kullanarak şu şekilde yapabiliriz:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number * 2);
});
```

Ayrıca `forEach` fonksiyonuna _arrow function_ ile de fonksiyon verebiliriz.

```typescript
numbers.forEach((number) => {
  console.log(number * 2);
});
```

veya

```typescript
numbers.forEach((number) => console.log(number * 2));
```

&#x20;`forEach` fonksiyonu orijinal diziyi değiştirmez. Sadece dizinin elemanları üzerinde işlem yapar ve her eleman için sağlanan fonksiyonu çalıştırır.

{% hint style="warning" %}
`forEach()` fonksiyonu bu şekilde tek başına çağrılmaz.
{% endhint %}
