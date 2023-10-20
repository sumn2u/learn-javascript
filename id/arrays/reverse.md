---
bab: 6
nomor halaman: 47
keterangan: Untuk menambahkan elemen di awal array, kita dapat menggunakan metode reverse. Ini mengubah array asli dan mengembalikan panjang array baru.
---

# Reverse

Metode `reverse` dapat digunakan pada jenis array apa pun, termasuk array string, array angka, dan array objek. Sebagai contoh.

```javascript
let users = [
  {
    name: "John Smith",
    age: 30,
  },
  {
    name: "Jane Doe",
    age: 25,
  },
];

users.reverse();

console.log(users);

// RESULT:
[
  {
    name: "Jane Doe",
    age: 25,
  },
  {
    name: "John Smith",
    age: 30,
  },
];
```

Metode `reverse` mengubah urutan elemen dari objek array yang memanggilnya, memodifikasi array tersebut, dan mengembalikan referensi ke array tersebut. Berikut contoh penggunaan `reverse` pada sebuah array:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.reverse();
console.log(numbers); // [3, 2, 1]
```
