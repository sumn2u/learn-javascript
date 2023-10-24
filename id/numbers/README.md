---
layout: editorial
bab: 3
nomor halaman: 16
keterangan: Angka mengacu pada tipe data yang digunakan untuk mewakili nilai numerik. Angka dalam JavaScript dapat berupa bilangan bulat (bilangan bulat) atau bilangan pecahan (bilangan desimal)
---

# Bab 3

# Angka

JavaScript memiliki **hanya satu jenis angka** - titik apung 64 bit. Ini sama dengan `double` di Java. Berbeda dengan sebagian besar bahasa pemrograman lain, tidak ada tipe bilangan bulat terpisah, jadi 1 dan 1.0 adalah nilai yang sama. Membuat angka cukup mudah, bisa dilakukan seperti tipe variabel lainnya dengan menggunakan kata kunci `var`.

Angka dapat dibuat dari nilai konstan:

```javascript
// Ini adalah angka desimal:
let a = 1.2;

// Ini adalah angka bulat:
let b = 10;
```

Atau, dari nilai variabel lain:

```javascript
let a = 2;
let b = a;
```

Presisi bilangan bulat akurat hingga 15 digit dan angka maksimum adalah 17.

```javascript
let x = 999999999999999; // x akan menjadi 999999999999999
let y = 9999999999999999; // y akan menjadi 10000000000000000
```

Konstanta numerik diinterpretasikan sebagai heksadesimal jika diawali dengan `0x`.

```javascript
let z = 0xff; // 255
```
