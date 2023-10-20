---
bab: 2
nomor halaman: 10
keterangan: Komentar digunakan untuk menandai catatan bagi para programmer lain atau deskripsi kecil tentang kode yang membantu orang lain memahaminya. Pernyataan ini tidak dieksekusi oleh interpreter.
---

# Comments

Komentar adalah pernyataan yang tidak akan dieksekusi oleh interpreter. Komentar digunakan untuk menandai catatan bagi para programmer lain atau memberikan deskripsi singkat tentang apa yang dilakukan kode, sehingga memudahkan orang lain memahami apa yang dilakukan kode Anda. Komentar juga digunakan untuk sementara menonaktifkan kode tanpa memengaruhi alur kendali program.

Di JavaScript, komentar dapat ditulis dalam 2 cara berbeda:

- _Komentar satu baris_: Dimulai dengan dua garis miring ke depan (`//`) dan berlanjut hingga akhir baris. Apa pun yang berada setelah garis miring tersebut diabaikan oleh interpreter JavaScript. Contoh:

```javascript
// Ini adalah komentar, akan diabaikan oleh interpreter
let a =
  "Ini adalah sebuah variabel yang didefinisikan dalam sebuah pernyataan.";
```

- _Komentar multi-baris_: Dimulai dengan garis miring dan tanda asterisk (`/*`) dan diakhiri dengan tanda asterisk dan garis miring (`*/`). Apa pun yang berada di antara tanda pembuka dan penutup tersebut diabaikan oleh interpreter JavaScript. Contoh:

```javascript
/*
Ini adalah komentar multi-baris,
akan diabaikan oleh interpreter
*/
let a =
  "Ini adalah sebuah variabel yang didefinisikan dalam sebuah pernyataan.";
```

Termasuk komentar dalam kode sangat penting untuk menjaga kualitas kode, mendorong kolaborasi, dan menyederhanakan proses debugging. Dengan memberikan konteks dan penjelasan untuk berbagai bagian program, komentar membuatnya lebih mudah dipahami dalam jangka waktu yang lebih lama. Oleh karena itu, memasukkan komentar dalam kode dianggap sebagai praktik yang bermanfaat.
