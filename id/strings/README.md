---
bab: 4
nomor halaman: 23
---

# Bab 4

# String

String dalam JavaScript memiliki banyak kesamaan dengan implementasi string dalam bahasa pemrograman tingkat tinggi lainnya. Mereka mewakili pesan dan data berbasis teks. Dalam kursus ini, kita akan membahas dasar-dasar penggunaan string, bagaimana cara membuat string baru, dan melakukan operasi umum pada string.

Berikut adalah contoh string:

```
"Halo Dunia"
```

Indeks string dimulai dari nol, yang berarti bahwa posisi awal karakter pertama adalah `0`, diikuti oleh karakter lainnya dengan peningkatan urutan. Berbagai metode didukung oleh string dan mengembalikan nilai baru. Metode-metode ini dijelaskan di bawah ini.

| Nama                  | Deskripsi                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------- |
| `charAt()`            | Mengembalikan karakter pada indeks tertentu                                                  |
| `charCodeAt()`        | Mengembalikan karakter Unicode pada indeks tertentu                                          |
| `concat()`            | Mengembalikan dua atau lebih string yang digabungkan                                         |
| `constructor`         | Mengembalikan fungsi konstruktor string                                                      |
| `endsWith()`          | Memeriksa apakah sebuah string diakhiri dengan nilai tertentu                                |
| `fromCharCode()`      | Mengembalikan nilai Unicode sebagai karakter                                                 |
| `includes()`          | Memeriksa apakah sebuah string mengandung nilai tertentu                                     |
| `indexOf()`           | Mengembalikan indeks kemunculan pertama                                                      |
| `lastIndexOf()`       | Mengembalikan indeks kemunculan terakhir                                                     |
| `length`              | Mengembalikan panjang string                                                                 |
| `localeCompare()`     | Membandingkan dua string dengan urutan lokal                                                 |
| `match()`             | Menyesuaikan string dengan sebuah nilai atau ekspresi reguler                                |
| `prototype`           | Digunakan untuk menambahkan properti dan metode dari sebuah objek                            |
| `repeat()`            | Mengembalikan string baru dengan jumlah salinan yang ditentukan                              |
| `replace()`           | Mengembalikan string dengan nilai yang diganti oleh ekspresi reguler atau string lainnya     |
| `search()`            | Mengembalikan indeks berdasarkan kesesuaian string dengan sebuah nilai atau ekspresi reguler |
| `slice()`             | Mengembalikan string yang berisi sebagian dari string                                        |
| `split()`             | Memisahkan string menjadi array substring                                                    |
| `startsWith()`        | Memeriksa apakah string dimulai dengan karakter tertentu                                     |
| `substr()`            | Mengekstrak bagian dari string, dimulai dari indeks awal                                     |
| `substring()`         | Mengekstrak bagian dari string, antara dua indeks                                            |
| `toLocaleLowerCase()` | Mengembalikan string dengan karakter huruf kecil menggunakan bahasa tuan rumah               |
| `toLocaleUpperCase()` | Mengembalikan string dengan karakter huruf besar menggunakan bahasa tuan rumah               |
| `toLowerCase()`       | Mengembalikan string dengan karakter huruf kecil                                             |
| `toString()`          | Mengembalikan string atau objek string sebagai string                                        |
| `toUpperCase()`       | Mengembalikan string dengan karakter huruf besar                                             |
| `trim()`              | Mengembalikan string dengan spasi yang dihapus                                               |
| `trimEnd()`           | Mengembalikan string dengan spasi yang dihapus dari akhir                                    |
| `trimStart()`         | Mengembalikan string dengan spasi yang dihapus dari awal                                     |
| `valueOf()`           | Mengembalikan nilai primitif dari string atau objek string                                   |
