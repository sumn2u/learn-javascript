---
bab: 9
nomor halaman: 61
keterangan: Setiap objek memiliki properti khusus yang disebut prototipe, yang merupakan referensi ke objek lain. Properti prototipe adalah bagian penting dari sistem pewarisan berbasis prototipe dalam JavaScript, dan memungkinkan objek untuk mewarisi properti dan metode dari objek lain.
---

# Prototipe

Setiap objek terhubung ke objek prototipe dari mana objek tersebut mewarisi properti. Objek yang dibuat dari literal objek (`{}`) secara otomatis terhubung ke `Object.prototype`, yang merupakan objek bawaan dalam JavaScript.

Ketika interpreter JavaScript (modul di browser Anda) mencoba untuk menemukan properti yang ingin Anda ambil, seperti dalam kode berikut:

```javascript
let dewasa = { usia: 26 },
  propertiDitemukan = dewasa.usia;
// Baris di atas
```

Pertama, interpreter mencari melalui setiap properti yang dimiliki objek itu sendiri. Misalnya, `dewasa` hanya memiliki satu properti sendiri — `usia`. Tetapi selain itu, sebenarnya ada beberapa properti lain, yang diwarisi dari `Object.prototype.`

```javascript
let representasiString = dewasa.toString();
// variabel tersebut memiliki nilai '[object Object]'
```

`toString` adalah properti Object.prototype, yang diwarisi. Ini memiliki nilai fungsi, yang mengembalikan representasi string dari objek. Jika Anda ingin agar itu mengembalikan representasi yang lebih bermakna, maka Anda dapat menggantinya. Cukup tambahkan properti baru ke objek dewasa.

```javascript
dewasa.toString = function () {
  return "Saya berusia " + this.usia;
};
```

Jika Anda memanggil fungsi `toString` sekarang, interpreter akan menemukan properti baru dalam objek itu sendiri dan berhenti.

Dengan demikian, interpreter mengambil properti pertama yang akan ditemukan dalam perjalanan dari objek itu sendiri dan lebih lanjut melalui prototipnya.

Untuk menetapkan objek khusus Anda sebagai prototipe alih-alih Object.prototype default, Anda dapat memanggil `Object.create` seperti berikut:

```javascript
let anak = Object.create(dewasa);
/* Cara membuat objek seperti ini memungkinkan kita dengan mudah mengganti Object.prototype default dengan yang kita inginkan. Dalam kasus ini, prototipe anak adalah objek dewasa. */
anak.usia = 8;
/* Sebelumnya, anak tidak memiliki properti usianya sendiri, dan interpreter harus melihat lebih lanjut ke prototipe anak untuk menemukannya.
Sekarang, ketika kita menetapkan usia anak sendiri, interpreter tidak akan melanjutkan pencarian.
Catatan: usia dewasa masih 26. */
let representasiString = anak.toString();
// Nilainya adalah "Saya berusia 8".
/* Catatan: kita tidak telah mengganti properti toString anak, sehingga metode dewasa akan dipanggil. Jika dewasa tidak memiliki properti toString, maka metode toString Object.prototype akan dipanggil, dan kita akan mendapatkan "[object Object]" alih-alih "Saya berusia 8" */
```

Prototipe `anak` adalah `dewasa`, yang prototipenya adalah `Object.prototype`. Urutan prototipe ini disebut sebagai **rantai prototipe**.
