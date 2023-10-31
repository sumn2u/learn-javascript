---
bab: 18
nomor halaman: 89
keterangan: Promise adalah objek yang mewakili penyelesaian (atau kegagalan) dari operasi asinkron dan nilainya yang dihasilkan. Promise menyediakan cara yang lebih terstruktur dan terorganisir untuk menangani operasi asinkron, seperti membuat permintaan jaringan, membaca file, atau berinteraksi dengan database.
---

# Bab 18

# Promise, async/await

Bayangkan Anda adalah seorang penulis buku terkenal, dan Anda berencana untuk merilis buku baru pada suatu hari tertentu. Para pembaca yang tertarik pada buku ini menambahkannya ke daftar keinginan mereka dan diberi tahu ketika buku tersebut diterbitkan atau bahkan jika tanggal rilisnya ditunda. Pada hari rilis, semua orang mendapatkan pemberitahuan dan dapat membeli buku tersebut, membuat semua pihak senang. Ini adalah analogi kehidupan nyata yang terjadi dalam pemrograman.

1. Kode "_produksi_" adalah sesuatu yang membutuhkan waktu dan mencapai sesuatu. Di sini, ini adalah penulis buku.
2. Kode "_konsumsi_" adalah seseorang yang mengonsumsi "kode produksi" begitu sudah siap. Dalam kasus ini, itu adalah seorang "pembaca".
3. Keterkaitan antara "kode produksi" dan "kode konsumsi" dapat disebut sebagai _promise_ karena itu menjamin untuk mendapatkan hasil dari "kode produksi" ke "kode konsumsi".

# Promise

Analogi yang kita buat juga berlaku untuk objek `promise` JavaScript. Sintaks konstruktor untuk objek `promise` adalah:

```javascript
let promise = new Promise(function (resolve, reject) {
  // executor (kode produksi, "penulis")
});
```

Di sini, sebuah fungsi dilewatkan ke `new Promise` yang juga dikenal sebagai _executor_, dan berjalan secara otomatis saat pembuatan. Ini berisi kode produksi yang memberikan hasil. `resolve` dan `reject` adalah argumen yang disediakan oleh JavaScript itu sendiri dan salah satu dari mereka dipanggil saat hasilnya ada.

- `resolve(value):` fungsi panggilan balik yang mengembalikan `value` saat hasil ada.
- `reject(error):` fungsi panggilan balik yang mengembalikan `error` saat terjadi kesalahan, mengembalikan objek kesalahan.

![Promise dengan callback resolve dan reject](../../.gitbook/assets/async_await.png)

Properti internal objek `promise` yang dikembalikan oleh konstruktor `new Promise` adalah sebagai berikut:

- `state` - awalnya `pending,` kemudian berubah menjadi `fulfill` saat `resolve` atau `rejected` saat `reject` dipanggil
- `result` - awalnya `undefined`, kemudian berubah menjadi `value` saat `resolve` atau `error` saat `reject` dipanggil

{% hint style="warning" %}
Tidak dapat mengakses properti `promise`: `state` dan `result`. Diperlukan metode promise untuk menangani promise.
{% endhint %}

Contoh promise.

```javascript
let promiseSatu = new Promise(function (resolve, reject) {
  // fungsi ini dieksekusi secara otomatis saat promise dibuat

  // setelah 1 detik, sinyalkan bahwa pekerjaan selesai dengan hasil "done"
  setTimeout(() => resolve("done"), 1000);
});

let promiseDua = new Promise(function (resolve, reject) {
  // fungsi ini dieksekusi secara otomatis saat promise dibuat

  // setelah 1 detik, sinyalkan bahwa pekerjaan selesai dengan hasil "error"
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
```

Di sini, `promiseSatu` adalah contoh "_promise yang dipenuhi_" karena berhasil memecahkan nilai, sementara `promiseDua` adalah "_promise yang ditolak_" karena ditolak. Promise yang tidak ditolak atau dipenuhi disebut _promise yang diselesaikan_, berbeda dengan promise awalnya _pending_. Fungsi konsumsi dari promise dapat didaftarkan menggunakan metode `.then` dan `.catch`. Kami juga dapat menambahkan metode `.finally` untuk melakukan pembersihan atau penyelesaian setelah metode sebelumnya selesai.

```javascript
let promiseSatu = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve menjalankan fungsi pertama di .then
promiseSatu.then(
  (result) => alert(result), // menampilkan "done!" setelah 1 detik
  (error) => alert(error) // tidak dijalankan
);

let promiseDua = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject menjalankan fungsi kedua di .then
promiseDua.then(
  (result) => alert(result), // tidak dijalankan
  (error) => alert(error) // menampilkan "Error: Whoops!" setelah 1 detik
);

let promiseTiga = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) sama dengan promise.then(null, f)
promiseTiga.catch(alert); // menampilkan "Error: Whoops!" setelah 1 detik
```

{% hint style="warning" %}
Pada metode `Promise.then()`, kedua argumen panggilan balik adalah opsional.
{% endhint %}
