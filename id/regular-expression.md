---
layout: editorial
bab: 14
nomor halaman: 73
keterangan: A regular expression, often abbreviated as "regex," is a powerful tool for pattern matching and searching within strings. It provides a concise and flexible way to search, match, and manipulate text based on specific patterns.
---

# Bab 14

# Ekspresi Reguler

Ekspresi reguler adalah objek yang dapat dibuat dengan konstruktor `RegEx` atau ditulis sebagai nilai literal dengan menutupi pola di antara karakter garis miring ke depan (`/`). Berikut adalah sintaksis untuk membuat ekspresi reguler:

```javascript
// menggunakan konstruktor ekspresi reguler
new RegExp(pola[, tanda]);

// menggunakan literal
/pola/modifier
```

Tanda tersebut bersifat opsional saat membuat ekspresi reguler menggunakan literal. Contoh pembuatan ekspresi reguler yang identik menggunakan kedua metode di atas adalah sebagai berikut.

```javascript
let re1 = new RegExp("xyz");
let re2 = /xyz/;
```

Kedua cara tersebut akan membuat objek regex dan memiliki metode dan properti yang sama. Ada kasus di mana kita mungkin perlu nilai dinamis untuk membuat ekspresi reguler, dalam hal ini, literal tidak akan berfungsi, dan kita harus menggunakan konstruktor.

{% hint style="info" %}
Dalam kasus di mana kita ingin garis miring menjadi bagian dari ekspresi reguler, kita harus melarikan diri dari garis miring (`/`) dengan menggunakan garis miring terbalik (`\`).
{% endhint %}

Berbagai modifier yang digunakan untuk melakukan pencarian yang tidak memperhatikan kasus adalah:

- `g` - pencarian global (menemukan semua kecocokan daripada berhenti setelah kecocokan pertama)
- `i` - pencarian yang tidak memperhatikan huruf besar kecil
- `m` - pencocokan beberapa baris

_Kurung_ digunakan dalam ekspresi reguler untuk menemukan rentang karakter. Beberapa di antaranya adalah:

- `[abc]` - temukan karakter apa pun di antara tanda kurung
- `[^abc]` - temukan karakter apa pun, tidak ada di antara tanda kurung
- `[0-9]` - temukan angka apa pun di antara tanda kurung
- `[^0-9]` - temukan karakter apa pun, tidak ada di antara tanda kurung (bukan angka)
- `(x|y)` - temukan salah satu alternatif yang dipisahkan oleh |

_Metakarakter_ adalah karakter khusus yang memiliki makna khusus dalam ekspresi reguler. Karakter-karakter ini lebih lanjut dijelaskan di bawah ini:

| Metakarakter | Deskripsi                                                                   |
| ------------ | --------------------------------------------------------------------------- |
| `.`          | Cocokkan satu karakter kecuali karakter baris baru atau terminator          |
| `\w`         | Cocokkan karakter kata (karakter alfanumerik `[a-zA-Z0–9_]`)                |
| `\W`         | Cocokkan karakter bukan kata (sama dengan `[^a-zA-Z0–9_]`)                  |
| `\d`         | Cocokkan karakter angka apa pun (sama dengan `[0-9]`)                       |
| `\D`         | Cocokkan karakter bukan digit                                               |
| `\s`         | Cocokkan karakter spasi (spasi, tab, dll.)                                  |
| `\S`         | Cocokkan karakter bukan spasi                                               |
| `\b`         | Cocokkan di awal / akhir kata                                               |
| `\B`         | Cocokkan tetapi bukan di awal / akhir kata                                  |
| `\0`         | Cocokkan karakter `NULL`                                                    |
| `\n`         | Cocokkan karakter baris baru                                                |
| `\f`         | Cocokkan karakter makanan bentuk                                            |
| `\r`         | Cocokkan karakter kembali karbon                                            |
| `\t`         | Cocokkan karakter tab                                                       |
| `\v`         | Cocokkan karakter tab vertikal                                              |
| `\xxx`       | Cocokkan karakter yang ditentukan oleh bilangan oktal `xxx`                 |
| `\xdd`       | Cocokkan karakter yang ditentukan oleh bilangan heksadesimal `dd`           |
| `\udddd`     | Cocokkan karakter Unicode yang ditentukan oleh bilangan heksadesimal `dddd` |

Properti dan metode yang didukung oleh RegEx tercantum di bawah ini.

| Nama          | Deskripsi                                                     |
| ------------- | ------------------------------------------------------------- |
| `constructor` | Mengembalikan fungsi yang membuat prototipe objek RegExp      |
| `global`      | Memeriksa apakah pengubah `g` diatur                          |
| `ignoreCase`  | Memeriksa apakah pengubah `i` diatur                          |
| `lastIndex`   | Menentukan indeks di mana pencocokan berikutnya harus dimulai |
| `multiline`   | Memeriksa apakah pengubah `m` diatur                          |

                                            |

| `source` | Mengembalikan teks string |
| `exec()` | Uji kecocokan dan mengembalikan kecocokan pertama, jika tidak ada kecocokan maka mengembalikan `null` |
| `test()` | Uji kecocokan dan mengembalikan `true` atau `false` |
| `toString()` | Mengembalikan nilai string dari ekspresi reguler |

{% hint style="warning" %}
Metode `complie()` mengompilasi ekspresi reguler dan sudah tidak digunakan lagi.
{% endhint %}

Beberapa contoh ekspresi reguler ditunjukkan di sini.

```javascript
let text = "The best things in life are free";
let result = /e/.exec(text); // mencari kecocokan huruf e dalam string
// Hasil: e

let helloWorldText = "Hello world!";
// Mencari "Hello"
let pola1 = /Hello/g;
let hasil1 = pola1.test(helloWorldText);
// Hasil1: true

let pola1String = pola1.toString();
// pola1String : '/Hello/g'
```
