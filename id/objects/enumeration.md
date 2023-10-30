---
bab: 9
nomor halaman: 63
keterangan: Enumeration merujuk pada proses mengulang properti dari sebuah objek dan melakukan tindakan tertentu untuk setiap properti. Salah satu cara untuk mengenumerasi properti objek adalah dengan menggunakan perulangan `for-in`. Perulangan `for-in` akan mengulang properti yang dapat dienumerasi dari objek dalam urutan sembarangan, dan untuk setiap properti, ia akan menjalankan blok kode yang diberikan.
---

# Enumeration

_Enumeration_ merujuk pada proses mengulang properti dari sebuah objek dan melakukan tindakan tertentu untuk setiap properti. Ada beberapa cara untuk mengenumerasi properti objek dalam JavaScript.

Salah satu cara untuk mengenumerasi properti objek adalah dengan menggunakan perulangan `for-in`. Perulangan `for-in` akan mengulang properti yang dapat dienumerasi dari objek dalam urutan sembarangan, dan untuk setiap properti, ia akan menjalankan blok kode yang diberikan.

Pernyataan `for-in` dapat mengulang semua nama properti dalam objek. Enumeration akan mencakup fungsi dan properti prototipe.

```javascript
let buah = {
    apel: 2,
    jeruk: 5,
    pir: 1,
  },
  kalimat = "Saya punya ",
  jumlah;
for (jenis in buah) {
  jumlah = buah[jenis];
  kalimat += jumlah + " " + jenis + (jumlah === 1 ? "" : "s") + ", ";
}
// Baris berikut menghapus koma di akhir.
kalimat = kalimat.substr(0, kalimat.length - 2) + ".";
// Saya punya 2 apel, 5 jeruk, 1 pir.
```

Cara lain untuk mengenumerasi properti objek adalah dengan menggunakan metode `Object.keys()`, yang mengembalikan sebuah array dari nama properti enumerable objek tersebut.

Sebagai contoh:

```javascript
let objek = {
  foo: "bar",
  baz: "qux",
};

let properti = Object.keys(objek);
properti.forEach(function (prop) {
  console.log(prop + ": " + objek[prop]);
});

// foo: bar
// baz: qux
```
