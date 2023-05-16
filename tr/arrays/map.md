# Map

`Array.prototype.map()` fonksiyonu, bir dizi üzerinde yineleme yapar ve _callback function_ kullanarak dizi elemanlarını değiştirir. _callback function_ daha sonra dizinin her elemanına uygulanır.

`map` kullanımına bir örnek:

```javascript
let newArray = oldArray.map(function (element, index, array) {
  // element: dizi içerisindeki işlenen geçerli öğe
  // index: dizi içinde işlenen geçerli öğenin indeksi
  // array: map methodunun çağrıldığı dizi
  // Yeni diziye eklenecek elemanı döndürün
});
```

Örneğin, sayılardan oluşan bir diziniz var. Siz bu sayı değerlerinin iki katını içeren yeni bir dizi oluşturmak istediğinizi varsayalım. Bunu `map` fonksiyonunu kullanarak şu şekilde yapabilirsiniz:

```javascript
const sayilar = [2, 4, 6, 8];

const ikiKatiSayilar = sayilar.map((sayi) => sayi * 2);

console.log(ikiKatiSayilar);

// Result: [4, 8, 12, 16]
```

Ayrıca `map` fonksiyonunu _arrow function_ syntax'i ile de kullanabilirsiniz.

<pre class="language-typescript"><code class="lang-typescript"><strong>let ikiKatiSayilar = sayilar.map((sayi) => {
</strong>  return sayi * 2;
});
</code></pre>

or

```typescript
let ikiKatiSayilar = sayilar.map((sayi) => sayi * 2);
```

{% hint style="info" %}
`map` fonksiyonu, boş elemanlar için uygulanmaz ve orijinal diziyi değiştirmez.
{% endhint %}
