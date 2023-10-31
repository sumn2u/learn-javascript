---
bab: 7
nomor halaman: 52
keterangan: Pernyataan do...while membuat perulangan yang mengeksekusi pernyataan blok yang ditentukan sampai kondisi uji dievaluasi sebagai salah. Kondisi dievaluasi setelah mengeksekusi blok.
---

# Do...While

Pernyataan do...while membuat perulangan yang mengeksekusi pernyataan blok yang ditentukan sampai kondisi uji dievaluasi sebagai salah. Kondisi dievaluasi setelah mengeksekusi blok. Sintaksis untuk do...while adalah

```javascript
do {
  // pernyataan
} while (ekspresi);
```

Mari sebagai contoh lihat bagaimana mencetak angka kurang dari 10 menggunakan perulangan `do...while`:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // menambahkan i sebanyak 1
} while (i < 10);
```

> _**Catatan**_: `i = i + 1` dapat ditulis sebagai `i++`.
