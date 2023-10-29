---
bab: 6
nomor halaman: 40
keterangan: Operator spread memungkinkan array atau objek untuk dengan cepat memanipulasi array dan objek. Ini memberikan sintaks yang ringkas untuk menyalin, menggabungkan, atau mengekstrak elemen dari array, dan untuk menyalin properti dari objek.
---

# Spread

Sebuah array atau objek dapat dengan cepat disalin ke array atau objek lain dengan menggunakan Operator Spread `(...)`. Ini memungkinkan iterable seperti array untuk diperluas di tempat-tempat di mana diharapkan nol atau lebih argumen (untuk pemanggilan fungsi) atau elemen (untuk literal array), atau ekspresi objek untuk diperluas di tempat-tempat di mana diharapkan nol atau lebih pasangan kunci-nilai (untuk literal objek).

Berikut beberapa contoh penggunaannya:

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(...arr);
// Hasil: 1 2 3 4 5

let arr1;
arr1 = [...arr]; // menyalin arr ke arr1

console.log(arr1); //Hasil: [1, 2, 3, 4, 5]

arr1 = [6, 7];
arr = [...arr, ...arr1];

console.log(arr); //Hasil: [1, 2, 3, 4, 5, 6, 7]
```

{% hint style="warning" %}
Operator spread hanya berfungsi di peramban modern yang mendukung fitur tersebut. Jika Anda perlu mendukung peramban yang lebih tua, Anda perlu menggunakan transpiler seperti Babel untuk mengonversi sintaks operator spread menjadi kode ES5 yang setara.
{% endhint %}
