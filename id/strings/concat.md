---
bab: 4
nomor halaman: 28
---

# Concatenation

Penggabungan melibatkan penggabungan dua atau lebih string bersama, menciptakan string yang lebih besar yang berisi data yang digabungkan dari string asli. Penggabungan string adalah menambahkan satu atau lebih string ke string lain. Ini dilakukan dalam JavaScript dengan cara berikut.

- menggunakan operator **`+`**
- menggunakan metode `concat()`
- menggunakan metode `join()` array
- menggunakan literal template (diperkenalkan dalam ES6)

Metode string `concat()` menerima daftar string sebagai parameter dan mengembalikan string baru setelah penggabungan, yaitu gabungan dari semua string tersebut. Sementara metode array `join()` digunakan untuk menggabungkan semua elemen yang ada dalam sebuah array dengan mengubahnya menjadi satu string.

Literal template menggunakan tanda backtick (` `) dan menyediakan cara mudah untuk membuat string multi-baris dan melakukan interpolasi string. Ekspresi dapat digunakan di dalam backtick menggunakan tanda `$` dan kurung kurawal `${ekspresi}`.

```javascript
const icon = "👋";
// menggunakan Template Strings
`hi ${icon}`;

// menggunakan Metode join()
["hi", icon].join(" ");

// menggunakan Metode concat()
"".concat("hi ", icon);

// menggunakan operator +
"hi " + icon;
// hi 👋
```
