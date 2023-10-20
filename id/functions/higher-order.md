---
bab: 8
nomor halaman: 54
keterangan: Fungsi orde tinggi adalah fungsi yang memanipulasi fungsi lain. Ini memiliki kekuatan yang cukup besar karena memungkinkan komposisi fungsional, abstraksi, dan kemampuan menghasilkan kode yang serbaguna dan mudah digunakan.
---

# Fungsi Orde Tinggi

Fungsi orde tinggi adalah fungsi yang memanipulasi fungsi lain. Misalnya, sebuah fungsi dapat menerima fungsi-fungsi lain sebagai argumen dan/atau menghasilkan sebuah fungsi sebagai nilai kembali. Teknik-teknik fungsional yang _kreatif_ seperti ini adalah konstruk kuat yang tersedia bagi Anda dalam JavaScript dan bahasa tingkat tinggi lainnya seperti python, lisp, dll.

Sekarang kita akan membuat dua fungsi sederhana, `add_2` dan `double`, serta sebuah fungsi orde tinggi yang disebut `map`. `map` akan menerima dua argumen, `func` dan `list` (deklarasinya akan dimulai dengan `map(func, list)`), dan mengembalikan sebuah array. `func` (argumen pertama) akan menjadi sebuah fungsi yang akan diterapkan pada setiap elemen dalam array `list` (argumen kedua).

```javascript
// Mendefinisikan dua fungsi sederhana
let add_2 = function (x) {
  return x + 2;
};
let double = function (x) {
  return 2 * x;
};

// map adalah fungsi keren yang menerima 2 argumen:
//  func    fungsi yang akan dipanggil
//  list    array nilai yang akan dipanggil oleh func
let map = function (func, list) {
  let output = []; // daftar keluaran
  for (idx in list) {
    output.push(func(list[idx]));
  }
  return output;
};

// Kami menggunakan map untuk menerapkan sebuah fungsi pada seluruh daftar masukan
// untuk "memetakkannya" menjadi daftar keluaran yang sesuai
map(add_2, [5, 6, 7]); // => [7, 8, 9]
map(double, [5, 6, 7]); // => [10, 12, 14]
```

Fungsi dalam contoh di atas sederhana. Namun, ketika digunakan sebagai argumen untuk fungsi lain, mereka dapat digabungkan dengan cara yang tidak terduga untuk membangun fungsi yang lebih kompleks.

Sebagai contoh, jika kita memperhatikan bahwa kita menggunakan pemanggilan `map(add_2, ...)` dan `map(double, ...)` sangat sering dalam kode kita, kita bisa memutuskan untuk membuat dua fungsi pemrosesan daftar yang bersifat khusus dan memiliki operasi yang diinginkan tertanam di dalamnya. Dengan menggunakan komposisi fungsi, kita bisa melakukannya sebagai berikut:

```javascript
process_add_2 = function (list) {
  return map(add_2, list);
};
process_double = function (list) {
  return map(double, list);
};
process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Sekarang mari kita membuat fungsi yang disebut `buildProcessor` yang mengambil sebuah fungsi `func` sebagai input dan mengembalikan pemroses `func`, yaitu, sebuah fungsi yang menerapkan `func` pada setiap masukan dalam daftar.

```javascript
// sebuah fungsi yang menghasilkan pemroses daftar yang melakukan
let buildProcessor = function (func) {
  let process_func = function (list) {
    return map(func, list);
  };
  return process_func;
};
// memanggil buildProcessor mengembalikan sebuah fungsi yang dipanggil dengan masukan daftar

// dengan menggunakan buildProcessor, kita bisa menghasilkan pemroses daftar add_2 dan double seperti ini:
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Mari kita lihat contoh lain. Kita akan membuat sebuah fungsi yang disebut `buildMultiplier` yang mengambil sebuah angka `x` sebagai masukan dan mengembalikan sebuah fungsi yang mengalikan argumennya dengan `x`:

```javascript
let buildMultiplier = function (x) {
  return function (y) {
    return x * y;
  };
};

let double = buildMultiplier(2);
let triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```
