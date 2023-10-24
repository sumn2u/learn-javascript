---
layout: editorial
bab: 8
nomor halaman: 53
keterangan: Fungsi adalah blok kode yang melakukan tugas tertentu atau sekumpulan tugas. Mereka adalah unit kode yang dapat digunakan kembali yang dapat dipanggil dan dieksekusi kapan saja dalam sebuah program.
---

# Bab 8

# Fungsi

Fungsi adalah salah satu konsep paling kuat dan esensial dalam pemrograman. Fungsi, seperti fungsi matematika, melakukan transformasi, mereka mengambil nilai masukan yang disebut **argumen** dan **mengembalikan** nilai keluaran. &#x20;

Fungsi dapat dibuat dengan dua cara: menggunakan `deklarasi fungsi` atau `ekspresi fungsi`. _Nama fungsi_ dapat dihilangkan dalam `ekspresi fungsi`, menjadikannya sebagai `fungsi anonim`. Fungsi, seperti variabel, harus dideklarasikan. Mari deklarasikan fungsi `double` yang menerima _argumen_ bernama `x` dan **mengembalikan** nilai ganda dari x:

```javascript
// contoh deklarasi fungsi
function double(x) {
  return 2 * x;
}
```

> _Catatan:_ fungsi di atas **mungkin** dirujuk sebelum didefinisikan.

Fungsi juga merupakan nilai dalam JavaScript; mereka dapat disimpan dalam variabel (seperti angka, string, dll...) dan diberikan kepada fungsi lain sebagai argumen:

```javascript
// contoh ekspresi fungsi
let double = function (x) {
  return 2 * x;
};
```

> _Catatan:_ fungsi di atas **tidak** boleh dirujuk sebelum didefinisikan, sama seperti variabel lainnya.

{% hint style="info" %}
&#x20;Sebuah callback adalah fungsi yang dilewatkan sebagai argumen ke fungsi lain.
{% endhint %}

Fungsi panah adalah alternatif ringkas untuk fungsi tradisional yang memiliki beberapa perbedaan semantik dengan beberapa batasan. Fungsi ini tidak memiliki ikatan mereka sendiri dengan `this`, `arguments`, dan `super`, dan tidak dapat digunakan sebagai konstruktor. Contoh dari fungsi panah.

```javascript
const double = (x) => 2 * x;
```

{% hint style="warning" %}
Kata kunci `this` dalam fungsi panah mewakili objek yang mendefinisikan fungsi panah tersebut.&#x20;
{% endhint %}
