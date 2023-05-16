# For Each

`forEach` methodu dizideki her eleman için aynı fonksiyonu çalıştırır. Örnek olarak:

```javascript
array.forEach(function (element, index, array) {
  // element: dizide işlenmekte olan eleman
  // index: dizide işlenmekte olan geçerli elemanın indeksi
  // array: forEach'in çağrıldığı dizi
});
```

\
Örneğin, sayılardan oluşan bir diziniz var ve her sayının iki katını console'a yazdırmak istiyorsunuz. Bu işlemi `forEach` kullanarak şu şekilde yapabilirsiniz:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number * 2);
});
```

Ayrıca `forEach` methoduna _arrow function_ ile de fonksiyon verebilirsiniz.

```typescript
numbers.forEach((number) => {
  console.log(number * 2);
});
```

veya

```typescript
numbers.forEach((number) => console.log(number * 2));
```

&#x20;`forEach` methodu orijinal diziyi değiştirmez. Sadece dizinin elemanları üzerinde işlem yapar ve her eleman için sağlanan fonksiyonu çalıştırır.

{% hint style="warning" %}
`forEach()` methodu bu şekilde tek başına çağrılmaz.
{% endhint %}
