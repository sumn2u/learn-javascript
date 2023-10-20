---
layout: editorial
bab: 6
nomor halaman: 36
keterangan: Array adalah daftar data dan merupakan bagian fundamental dalam pemrograman. Di sini, kita dapat menyimpan banyak data dari berbagai jenis.
---

# Bab 6

# Arrays

Array adalah bagian fundamental dalam pemrograman. Sebuah array adalah daftar data. Kita dapat menyimpan banyak data dalam satu variabel, yang membuat kode kita lebih mudah dibaca dan dipahami. Ini juga memudahkan kita dalam melakukan operasi pada data terkait.

Data dalam array disebut **elemen**.

Berikut adalah contoh sederhana dari sebuah array:

```javascript
// 1, 1, 2, 3, 5, and 8 are the elements in this array
let numbers = [1, 1, 2, 3, 5, 8];
```

Array dapat dengan mudah dibuat menggunakan literal array atau dengan menggunakan kata kunci `new`.

```javascript
const cars = ["Saab", "Volvo", "BMW"]; // using array literals
const cars = new Array("Saab", "Volvo", "BMW"); // using the new keyword
```

Nomor indeks digunakan untuk mengakses nilai dalam sebuah array. Indeks elemen pertama dalam array selalu `0` karena indeks array dimulai dari `0`. Nomor indeks juga dapat digunakan untuk mengubah elemen-elemen dalam array.

```javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
// Result: Saab

cars[0] = "Opel"; // changing the first element of an array
console.log(cars);
// Result: ['Opel', 'Volvo', 'BMW']
```

{% hint style="warning" %}
Array adalah tipe objek khusus. Anda dapat memiliki [objek](../objects/) dalam sebuah array.
{% endhint %}

&#x20;Properti `length` dari sebuah array mengembalikan jumlah elemen. Metode yang didukung oleh Array ditunjukkan di bawah ini:

| Nama              | Deskripsi                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | Mengembalikan penggabungan dua atau lebih array                                                                                                                      |
| `join()`          | Menggabungkan semua elemen dalam array menjadi sebuah string                                                                                                         |
| `push()`          | Menambahkan satu atau lebih elemen ke ujung array dan mengembalikan panjang array                                                                                    |
| `pop()`           | Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut                                                                                               |
| `shift()`         | Menghapus elemen pertama dari array dan mengembalikan elemen tersebut                                                                                                |
| `unshift()`       | Menambahkan satu atau lebih elemen di depan array dan mengembalikan panjang array                                                                                    |
| `slice()`         | Mengambil sebagian dari array dan mengembalikan array baru                                                                                                           |
| `at()`            | Mengembalikan elemen pada indeks yang ditentukan atau `undefined`                                                                                                    |
| `splice()`        | Menghapus elemen-elemen dari array dan (opsional) menggantikannya, dan mengembalikan array                                                                           |
| `reverse()`       | Membalik urutan elemen dalam array dan mengembalikan referensi ke array                                                                                              |
| `flat()`          | Mengembalikan array baru dengan semua elemen sub-array yang digabungkan menjadi satu secara rekursif hingga kedalaman yang ditentukan                                |
| `sort()`          | Mengurutkan elemen-elemen dalam array di tempatnya, dan mengembalikan referensi ke array                                                                             |
| `indexOf()`       | Mengembalikan indeks pertama dari elemen pencarian                                                                                                                   |
| `lastIndexOf()`   | Mengembalikan indeks terakhir dari elemen pencarian                                                                                                                  |
| `forEach()`       | Mengeksekusi sebuah callback pada setiap elemen dalam array dan mengembalikan `undefined`                                                                            |
| `map()`           | Mengembalikan array baru dengan nilai pengembalian dari menjalankan `callback` pada setiap item array                                                                |
| `flatMap()`       | Menjalankan `map()` diikuti oleh `flat()` dengan kedalaman 1                                                                                                         |
| `filter()`        | Mengembalikan array baru yang berisi elemen-elemen yang `callback` mengembalikan `true`                                                                              |
| `find()`          | Mengembalikan elemen pertama untuk mana `callback` mengembalikan `true`                                                                                              |
| `findLast()`      | Mengembalikan elemen terakhir untuk mana `callback` mengembalikan `true`                                                                                             |
| `findIndex()`     | Mengembalikan indeks pertama untuk mana `callback` mengembalikan `true`                                                                                              |
| `findLastIndex()` | Mengembalikan indeks terakhir untuk mana `callback` mengembalikan `true`                                                                                             |
| `every()`         | Mengembalikan `true` jika `callback` mengembalikan `true` untuk setiap item dalam array                                                                              |
| `some()`          | Mengembalikan `true` jika `callback` mengembalikan `true` untuk setidaknya satu item dalam array                                                                     |
| `reduce()`        | Menggunakan `callback(accumulator, currentValue, currentIndex, array)` untuk tujuan pengurangan dan mengembalikan nilai akhir yang dihasilkan oleh fungsi `callback` |
| `reduceRight()`   | Bekerja mirip dengan `reduce()`, tetapi dimulai dari elemen terakhir                                                                                                 |
