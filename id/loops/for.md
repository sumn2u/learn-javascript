---
bab: 7
nomor halaman: 50
keterangan: Perulangan for adalah struktur kontrol yang kuat digunakan untuk mengeksekusi blok kode beberapa kali, baik untuk jumlah iterasi tertentu atau dalam rentang yang ditentukan. Ini sangat serbaguna dan umumnya digunakan untuk mengulangi melalui array, string, dan objek yang dapat diulang lainnya.
---

## For

Bentuk teringan dari perulangan adalah pernyataan for. Ini memiliki sintaksis yang mirip dengan pernyataan if, tetapi dengan lebih banyak pilihan:

### Sintaksis

Sintaksis perulangan `for` dalam javascript diberikan di bawah ini

```javascript
for (inisialisasi; kondisi akhir; perubahan) {
    // lakukan itu, lakukan sekarang
}
```

### Penjelasan:

- Pada bagian `inisialisasi`, yang dieksekusi sebelum iterasi pertama, menginisialisasi variabel perulangan Anda.
- Pada bagian `kondisi akhir`, letakkan kondisi yang mungkin diperiksa sebelum setiap iterasi. Saat kondisi menjadi `false`, perulangan berakhir.
- Pada bagian `perubahan`, beri tahu program cara memperbarui variabel perulangan.
  Mari kita lihat bagaimana mengeksekusi kode yang sama sepuluh kali menggunakan perulangan `for`:

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // lakukan kode ini sepuluh kali
}
```

> _**Catatan**_: `i = i + 1` dapat ditulis sebagai `i++`.

## Perulangan `for...in`

Untuk mengulangi properti yang dapat dihitung dari objek, Anda dapat menggunakan perulangan `for in`. Untuk setiap properti yang berbeda, JavaScript mengeksekusi pernyataan yang ditentukan.

### Sintaksis

```javascript
for (variabel in objek) {
  // iterasi setiap properti dalam objek
}
```

### Contoh

Mari kita anggap kita memiliki objek berikut:

```javascript
const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};
```

Maka, dengan bantuan perulangan `for in`, kita dapat mengulangi objek `person` untuk mengakses propertinya seperti `fname`, `lname`, dan `age` seperti yang ditunjukkan di bawah ini.

```javascript
let info = "";
for (let x in person) {
  console.log(person[x]);
}
```

Hasil dari potongan kode di atas akan:

```javascript
John
Doe
25
```

> **Catatan: Objek yang dapat diulang seperti `Array`, `String`, `Map`, `NodeList` dapat diulang menggunakan pernyataan `for in`.&#x20;**

```javascript
// Contoh dengan Array
const myArray = [1, 2, 3, 4, 5];
for (const item of myArray) {
  console.log(item);
}

// Contoh dengan String
const myString = "Halo, Dunia!";
for (const char of myString) {
  consolesole.log(char);
}

// Contoh dengan Map
const myMap = new Map();
myMap.set("nama", "John");
myMap.set("usia", 30);

for (const [kunci, nilai] of myMap) {
  console.log(kunci, nilai);
}

// Contoh dengan NodeList (elemen HTML)
const paragraf = document.querySelectorAll("p");
for (const paragraph of paragraphs) {
  console.log(paragraph.textContent);
}
```

## Perulangan `for...of`

Perulangan `for...of` diperkenalkan dalam versi JavaScript ES6 yang lebih baru. Pernyataan `for...of` menjalankan perulangan yang beroperasi pada urutan nilai yang bersumber dari objek yang dapat diulang seperti Array, String, TypedArray, Map, Set, NodeList (dan koleksi DOM lainnya).

### Sintaksis

Sintaksis perulangan `for...of` adalah sebagai berikut:

```javascript
for (elemen dari iterable) {
  // tubuh dari for...of
}
```

Di sini,

- **iterable** - objek yang dapat diulang
- **elemen** - item dalam iterable

Dalam bahasa Inggris sederhana, Anda dapat membaca kode di atas sebagai: _"untuk setiap elemen dalam iterable, jalankan tubuh perulangan."_

### Contoh

Mari kita anggap kita memiliki objek berikut:

```javascript
const person = ["John Doe", "Albert", "Neo"];
```

Maka, dengan bantuan perulangan `for of`, kita dapat mengulangi objek `person` untuk mengakses elemennya seperti yang ditunjukkan di bawah ini.

```javascript
let info = "";
for (let x of person) {
  console.log(x);
}
```

Hasil dari potongan kode di atas akan:

```javascript
John Doe
Albert
Neo
```

Penggunaan perulangan `for...of` dengan string, map, dan nodelist diberikan di bawah ini:

```js
// Contoh dengan String
const text = "Halo, Dunia!";
for (const char of text) {
  console.log(char);
}

// Contoh dengan Map
const person = new Map();
person.set("nama", "John");
person.set("usia", 30);
for (const [kunci, nilai] of person) {
  console.log(kunci, nilai);
}

// Contoh dengan NodeList (elemen HTML)
const paragraf = document.querySelectorAll("p");
for (const paragraph of paragraphs) {
  console.log(paragraph.textContent);
}
```
