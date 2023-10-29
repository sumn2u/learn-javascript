---
layout: editorial
bab: 20
nomor halaman: 104
---

# Node.js

**Node.js** adalah lingkungan runtime JavaScript yang memungkinkan pengembang menjalankan kode JavaScript di luar peramban web. Ini dibangun di atas mesin JavaScript V8, yang merupakan mesin yang sama yang digunakan oleh Google Chrome. Node.js adalah sumber terbuka dan lintas platform, yang berarti itu dapat berjalan di Windows, macOS, dan Linux.

## Node.js bukan bahasa pemrograman

Banyak orang keliru percaya bahwa Node.js adalah bahasa pemrograman. Ini tidak benar. Node.js adalah lingkungan runtime JavaScript, yang berarti ia menyediakan lingkungan untuk menjalankan kode JavaScript. Ini bukan bahasa pemrograman itu sendiri.

Node.js **bukan** satu-satunya lingkungan runtime JavaScript. Ada banyak lainnya, termasuk Deno, Nashorn, dan yang paling baru, Bun. Tetapi Node.js adalah jauh yang paling populer dan paling banyak digunakan lingkungan runtime JavaScript.

## Memulai dengan Node.js

Untuk memulai dengan Node.js, Anda perlu menginstalnya di komputer Anda. Anda dapat mengunduh versi terbaru Node.js dari situs web resmi di [nodejs.org](https://nodejs.org/en/). Setelah Anda mengunduh dan menginstal Node.js, Anda dapat memverifikasi instalasi dengan menjalankan perintah berikut di terminal Anda:

```bash
node --version
```

Ini seharusnya mencetak nomor versi Node.js seperti ini:

```bash
v20.7.0
```

## Menulis program Node.js pertama Anda

Sekarang setelah Anda menginstal Node.js, mari tulis program Node.js pertama kita. Buat file baru bernama `hello.js` dan tambahkan kode berikut:

```js
console.log("Halo Dunia!");
```

Untuk menjalankan program ini, buka terminal Anda dan navigasikan ke direktori di mana Anda menyimpan file `hello.js`. Kemudian jalankan perintah berikut:

```bash
node hello.js
```

Ini seharusnya mencetak keluaran berikut:

```bash
Halo Dunia!
```

## Menulis server web sederhana menggunakan Express dan Node.js

Express adalah kerangka web populer untuk Node.js. Ini menyediakan API yang sederhana dan elegan untuk membangun aplikasi web. Mari gunakan Express untuk membuat server web sederhana yang akan merespons permintaan HTTP dengan pesan "Halo Dunia!".

Pertama, kita perlu menginstal Express. Untuk melakukannya, jalankan perintah berikut di terminal Anda:

```bash
npm install express
```

Ini akan menginstal Express dan semua dependensinya. Setelah instalasi selesai, buat file baru bernama `server.js` dan tambahkan kode berikut:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Halo Dunia!");
});

app.listen(3000, () => {
  console.log("Server mendengarkan di port 3000");
});
```

Kode ini membuat aplikasi Express baru dan menentukan rute untuk jalur akar (`/`). Ketika permintaan dibuat ke rute ini, server akan merespons dengan pesan "Halo Dunia!".

Untuk menjalankan program ini, buka terminal Anda dan navigasikan ke direktori di mana Anda menyimpan file `server.js`. Kemudian jalankan perintah berikut:

```bash
node server.js
```

Ini seharusnya mencetak keluaran berikut:

```bash
Server mendengarkan di port 3000
```

Sekarang buka peramban web Anda dan buka [http://localhost:3000](http://localhost:3000). Anda seharusnya melihat pesan "Halo Dunia!".
