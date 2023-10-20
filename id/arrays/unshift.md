---
bab: 6
nomor halaman: 38
keterangan: Untuk menambahkan elemen di awal array, kita dapat menggunakan metode `unshift`. Ini mengubah array asli dan mengembalikan panjang array baru.
---

# Unshift

Metode `unshift` menambahkan elemen-elemen baru secara berurutan di bagian depan array. Ini mengubah array asli dan mengembalikan panjang array yang baru. Sebagai contoh:

```javascript
let array = [0, 5, 10];
array.unshift(-5); // 4

// HASIL: array = [-5 , 0, 5, 10];
```

{% hint style="warning" %}
Metode `unshift()` menimpa array asli.
{% endhint %}

Metode `unshift` menerima satu atau lebih argumen, yang mewakili elemen-elemen yang akan ditambahkan di awal array. Itu menambahkan elemen-elemen sesuai urutan yang diberikan, sehingga elemen pertama akan menjadi elemen pertama dalam array.

Berikut contoh penggunaan `unshift` untuk menambahkan beberapa elemen ke dalam array:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3]
console.log(newLength); // 5
```
