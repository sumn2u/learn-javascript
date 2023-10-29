---
bab: 6
nomor halaman: 39
keterangan: Metode map mengulangi sebuah array dan memodifikasi elemennya menggunakan sebuah fungsi callback. Fungsi callback ini diterapkan pada setiap elemen dalam array.
---

# Map

Metode `Array.prototype.map()` mengulangi sebuah array dan memodifikasi elemennya menggunakan sebuah fungsi callback. Fungsi callback ini kemudian diterapkan pada setiap elemen dari array.

Berikut adalah sintaks penggunaan `map`.

```javascript
let newArray = oldArray.map(function (element, index, array) {
  // element: elemen saat ini yang sedang diproses dalam array
  // index: indeks dari elemen saat ini yang sedang diproses dalam array
  // array: array yang menggunakan metode map
  // Kembalikan elemen yang akan ditambahkan ke newArray
});
```

Sebagai contoh, katakanlah Anda memiliki sebuah array angka dan ingin membuat array baru yang menggandakan nilai-nilai angka dalam array asli. Anda dapat melakukannya menggunakan `map` seperti ini.

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// Result: [4, 8, 12, 16]
```

Anda juga dapat menggunakan sintaks fungsi panah (arrow function) untuk mendefinisikan fungsi yang dilewatkan ke `map`.

<pre class="language-typescript"><code class="lang-typescript"><strong>let doubledNumbers = numbers.map((number) => {
</strong>  return number * 2;
});
</code></pre>

atau

```typescript
let doubledNumbers = numbers.map((number) => number * 2);
```

{% hint style="info" %}
Metode `map()` tidak menjalankan fungsi untuk elemen yang kosong dan tidak mengubah array asli.
{% endhint %}
