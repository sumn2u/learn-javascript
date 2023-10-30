---
layout: editorial
bab: 10
nomor halaman: 64
keterangan: Objek tanggal menyimpan tanggal dan waktu serta menyediakan metode untuk mengelolanya. Objek tanggal bersifat statis dan menggunakan zona waktu default browser untuk menampilkan tanggal sebagai string teks penuh.
---

# Bab 10

# Tanggal dan Waktu

Objek `Date` menyimpan tanggal dan waktu serta menyediakan metode untuk mengelolanya. Objek tanggal bersifat statis dan menggunakan zona waktu default browser untuk menampilkan tanggal sebagai string teks penuh.

Untuk membuat objek `Date`, kita menggunakan konstruktor `new Date()` dan dapat dibuat dengan cara berikut.

```javascript
new Date()
new Date(string tanggal)
new Date(tahun, bulan)
new Date(tahun, bulan, hari)
new Date(tahun, bulan, hari, jam)
new Date(tahun, bulan, hari, jam, menit)
new Date(tahun, bulan, hari, jam, menit, detik)
new Date(tahun, bulan, hari, jam, menit, detik, ms)
new Date(milidetik)
```

{% hint style="warning" %}
Bulan dapat ditentukan dari `0` hingga `11`, lebih dari itu akan mengakibatkan overflow ke tahun berikutnya.
{% endhint %}

Metode dan properti yang didukung oleh objek tanggal dijelaskan di bawah ini:

| Nama                   | Deskripsi                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `constructor`          | Mengembalikan fungsi yang membuat prototipe objek Tanggal                                                  |
| `getDate()`            | Mengembalikan tanggal (1-31) dari bulan                                                                    |
| `getDay()`             | Mengembalikan hari (0-6) dari minggu                                                                       |
| `getFullYear()`        | Mengembalikan tahun (4 digit)                                                                              |
| `getHours()`           | Mengembalikan jam (0-23)                                                                                   |
| `getMilliseconds()`    | Mengembalikan milidetik (0-999)                                                                            |
| `getMinutes()`         | Mengembalikan menit (0-59)                                                                                 |
| `getMonth()`           | Mengembalikan bulan (0-11)                                                                                 |
| `getSeconds()`         | Mengembalikan detik (0-59)                                                                                 |
| `getTime()`            | Mengembalikan nilai numerik dari tanggal yang ditentukan dalam milidetik sejak tengah malam 1 Januari 1970 |
| `getTimezoneOffset()`  | Mengembalikan perbedaan zona waktu dalam menit                                                             |
| `getUTCDate()`         | Mengembalikan tanggal (1-31) dari bulan menurut waktu universal                                            |
| `getUTCDay()`          | Mengembalikan hari (0-6) menurut waktu universal                                                           |
| `getUTCFullYear()`     | Mengembalikan tahun (4 digit) menurut waktu universal                                                      |
| `getUTCHours()`        | Mengembalikan jam (0-23) menurut waktu universal                                                           |
| `getUTCMilliseconds()` | Mengembalikan milidetik (0-999) menurut waktu universal                                                    |
| `getUTCMinutes()`      | Mengembalikan menit (0-59) menurut waktu universal                                                         |
| `getUTCMonth()`        | Mengembalikan bulan (0-11) menurut waktu universal                                                         |
| `getUTCSeconds()`      | Mengembalikan detik (0-59) menurut waktu universal                                                         |
| `now()`                | Mengembalikan nilai numerik dalam milidetik sejak tengah malam 1 Januari 1970                              |
| `parse()`              | Mengurai string tanggal dan mengembalikan nilai numerik dalam milidetik sejak tengah malam 1 Januari 1970  |
| `prototype`            | Memungkinkan penambahan properti                                                                           |
| `setDate()`            | Mengatur tanggal bulan                                                                                     |
| `setFullYear()`        | Mengatur tahun                                                                                             |
| `setHours()`           | Mengatur jam                                                                                               |
| `setMilliseconds()`    | Mengatur milidetik                                                                                         |
| `setMinutes()`         | Mengatur menit                                                                                             |
| `setMonth()`           | Mengatur bulan                                                                                             |
| `setSeconds()`         | Mengatur detik                                                                                             |
| `setTime()`            | Mengatur waktu                                                                                             |
| `setUTCDate()`         | Mengatur tanggal bulan menurut waktu universal                                                             |
| `setUTCFullYear()`     | Mengatur tahun menurut waktu universal                                                                     |
| `setUTCHours()`        | Mengatur jam menurut waktu universal                                                                       |
| `setUTCMilliseconds()` | Mengatur milidetik menurut waktu universal                                                                 |
| `setUTCMinutes()`      | Mengatur menit menurut waktu universal                                                                     |
| `setUTCMonth()`        | Mengatur bulan menurut waktu universal                                                                     |
| `setUTCSeconds()`      | Mengatur detik menurut waktu universal                                                                     |
| `toDateString()`       | Mengembalikan tanggal dalam format yang mudah dibaca                                                       |
| `toISOString()`        | Mengembalikan tanggal sesuai dengan format                                                                 |

ISO |
| `toJSON()` | Mengembalikan tanggal dalam bentuk string, diformat sebagai tanggal JSON |
| `toLocaleDateString()` | Mengembalikan tanggal dalam bentuk string menggunakan konvensi lokal |
| `toLocaleTimeString()` | Mengembalikan waktu dalam bentuk string menggunakan konvensi lokal |
| `toLocaleString()` | Mengembalikan tanggal menggunakan konvensi lokal |
| `toString()` | Mengembalikan representasi string dari tanggal yang ditentukan |
| `toTimeString()` | Mengembalikan bagian _waktu_ dalam format yang mudah dibaca |
| `toUTCString()` | Mengubah tanggal menjadi string sesuai dengan format universal |
| `toUTC()` | Mengembalikan milidetik sejak tengah malam 1 Januari 1970 dalam format UTC |
| `valueOf()` | Mengembalikan nilai primitif dari `Date` |
