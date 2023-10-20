---
bab: 6
nomor halaman: 46
keterangan: Metode forEach menjalankan sebuah fungsi yang disediakan sekali untuk setiap elemen dalam array.
---

# For Each

Metode `forEach` menjalankan sebuah fungsi yang disediakan sekali untuk setiap elemen dalam array. Berikut adalah sintaks untuk menggunakan `forEach`:

```javascript
array.forEach(function (element, index, array) {
  // element: elemen saat ini yang sedang diproses dalam array
  // index: indeks elemen saat ini yang sedang diproses dalam array
  // array: array yang digunakan sebagai panggilan forEach
});
```

Sebagai contoh, katakanlah Anda memiliki sebuah array angka dan ingin mencetak dua kali lipat dari setiap angka ke konsol. Anda dapat melakukannya menggunakan `forEach` seperti ini:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number * 2);
});
```

Anda juga dapat menggunakan sintaks fungsi panah (arrow function) untuk mendefinisikan fungsi yang dilewatkan ke `forEach`:

```typescript
numbers.forEach((number) => {
  console.log(number * 2);
});
```

or

```typescript
numbers.forEach((number) => console.log(number * 2));
```

Metode `forEach` tidak memodifikasi array asli. Ia hanya mengulanginya melalui elemen-elemen dalam array dan menjalankan fungsi yang diberikan untuk setiap elemen.

{% hint style="warning" %}
Metode `forEach()` tidak akan dieksekusi jika tidak ada pernyataan (statement) dalamnya.
{% endhint %}
