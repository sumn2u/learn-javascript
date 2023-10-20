---
bab: 12
nomor halaman: 69
keterangan: Dengan try catch finally, pengembang dapat menangani pengecualian (kesalahan) yang mungkin terjadi selama eksekusi blok kode dan memastikan bahwa tindakan pembersihan tertentu selalu dijalankan, terlepas dari apakah pengecualian dilemparkan atau tidak.
---

# try...catch...finally

Kita dapat menambahkan satu konstruksi lagi ke `try...catch` yang disebut `finally`, kode ini dieksekusi dalam semua situasi. Artinya, setelah `try` ketika tidak ada kesalahan dan setelah `catch` dalam kasus kesalahan. Berikut adalah sintaks untuk `try...catch...finally`.

```javascript
try {
  // coba eksekusi kode
} catch (err) {
  // tangani kesalahan
} finally {
  // selalu dieksekusi
}
```

Menjalankan contoh kode dunia nyata.

```javascript
try {
  alert("try");
} catch (err) {
  alert("catch");
} finally {
  alert("finally");
}
```

Di contoh di atas, blok `try` dieksekusi terlebih dahulu, yang kemudian diikuti oleh `finally` karena tidak ada kesalahan.

{% exercise %}
Buatlah fungsi `divideNumbers()` yang mengambil dua argumen, yaitu pembilang (numerator) dan penyebut (denominator), dan mengembalikan hasil pembagian pembilang dengan penyebut dengan pengaturan berikut.

{% initial %}
function divideNumbers(pembilang, penyebut) {
try {
// pernyataan try untuk membagi pembilang dengan penyebut.
} catch (error) {
// mencetak pesan kesalahan
} finally {
// mencetak bahwa eksekusi telah selesai
}
// mengembalikan hasil
}
let jawaban = divideNumbers(10, 2);

{% solution %}
function divideNumbers(pembilang, penyebut) {
let hasil;
try {
hasil = pembilang / penyebut;
} catch (error) {
console.error(`Kesalahan: ${error}`);
} finally {
console.log('Fungsi telah selesai dieksekusi');
}
return hasil;
}
let jawaban = divideNumbers(10, 2);
{% validation %}
assert(jawaban == 5);

{% context %}
{% endexercise %}
