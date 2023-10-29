---
bab: 9
nomor halaman: 57
keterangan: Objek adalah tipe data komposit yang memungkinkan Anda untuk menyimpan dan mengatur data dalam pasangan kunci-nilai. Setiap pasangan kunci-nilai dalam objek disebut sebagai properti. Properti digunakan untuk mewakili karakteristik, atribut, atau fitur objek.
---

# Properti

Properti objek adalah pasangan `namaProperti`: `nilaiProperti`, di mana **nama properti hanya dapat berupa string**. Jika bukan string, itu akan diubah menjadi string. Anda dapat menentukan properti **saat membuat** objek **atau nanti**. Bisa ada nol atau lebih properti yang dipisahkan oleh koma.

```javascript
let bahasa = {
  nama: "JavaScript",
  didukungOlehBrowser: true,
  diciptakanPadaTahun: 1995,
  penulis: {
    namaDepan: "Brendan",
    namaBelakang: "Eich",
  },
  // Ya, objek bisa bersarang!
  dapatkanNamaPenulis: function () {
    return this.penulis.namaDepan + " " + this.penulis.namaBelakang;
  },
  // Ya, fungsi juga bisa menjadi nilai!
};
```

Kode berikut mendemonstrasikan cara **mendapatkan** nilai properti.

```javascript
let variabel = bahasa.nama;
// variabel sekarang berisi string "JavaScript".
variabel = bahasa["nama"];
// Baris di atas melakukan hal yang sama. Perbedaannya adalah yang kedua memungkinkan Anda menggunakan string apa pun sebagai nama properti, tetapi kurang mudah dibaca.
variabel = bahasa.propertiBaru;
// variabel sekarang tidak terdefinisi, karena kami belum menetapkan properti ini.
```

Contoh berikut menunjukkan cara **menambahkan** properti **atau mengubah** yang sudah ada.

```javascript
bahasa.propertiBaru = "nilai baru";
// Sekarang objek memiliki properti baru. Jika properti sudah ada, nilainya akan diganti.
bahasa["propertiBaru"] = "nilai diubah";
// Sekali lagi, Anda bisa mengakses properti kedua cara. Yang pertama (notasi titik) lebih disarankan.
```
