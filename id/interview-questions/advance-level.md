---
layout: editorial
title: Pertanyaan Wawancara JavaScript Tingkat Lanjut
keterangan: Telusuri pertanyaan wawancara tingkat lanjut yang rumit mengenai JavaScript untuk menilai kedalaman pengetahuan dan keahlian calon kandidat.
---

# Pertanyaan Wawancara JavaScript Tingkat Lanjut

## 1. Closures dan Ruang Lingkup

### 1.1. Apa itu closure dalam JavaScript? Berikan contoh di mana penggunaan closure dapat bermanfaat.

**Jawaban:**

Closure dalam JavaScript adalah fungsi yang memiliki akses ke variabel-variabel dalam ruang lingkup yang mengelilinginya, bahkan setelah fungsi luar selesai dieksekusi. Mekanisme ini memungkinkan fungsi untuk mempertahankan status antara eksekusi.

**Contoh:**
Salah satu penggunaan umum dari closure adalah untuk membuat fungsi pabrik atau variabel privat. Misalnya, jika kita ingin menghasilkan nilai ID unik untuk elemen:

### 1.2. Bagaimana keterkaitan antara closure dengan ruang lingkup dan masa pakai variabel?

**Jawaban:**

Closure memungkinkan suatu fungsi untuk mengakses semua variabel, serta fungsi, yang berada dalam ruang lingkup leksikalnya, bahkan setelah fungsi luar selesai dieksekusi. Hal ini mengakibatkan variabel-variabel tersebut tetap ada dalam memori, yang efektif memungkinkan variabel memiliki masa pakai yang lebih lama dibandingkan dengan variabel lokal standar yang biasanya akan dihapuskan setelah fungsi utamanya dieksekusi.

### 1.3. Berikan beberapa contoh penggunaan closure dalam JavaScript.

**Jawaban:**

Berikut beberapa contoh penggunaan closure:

- Pola Desain Modul.
- Currying.
- Memoisasi

## 2. Pewarisan Prototipal

### 2.1. Jelaskan perbedaan antara pewarisan klasik dan pewarisan prototipal.

**Jawaban:**

Pewarisan klasik adalah konsep yang paling sering ditemukan dalam bahasa pemrograman berorientasi objek tradisional seperti Java atau C++, di mana sebuah kelas dapat mewarisi properti dan metode dari kelas induk. Pewarisan prototipal, di sisi lain, unik untuk JavaScript. Dalam JavaScript, setiap objek dapat memiliki objek lain sebagai prototipnya, dan dapat mewarisi properti dari prototipnya.

Perbedaan utama adalah bahwa pewarisan klasik berbasis kelas, sedangkan pewarisan prototipal berbasis objek. Meskipun ES6 memperkenalkan kata kunci `class` ke JavaScript, ini hanyalah gula sintaksis di atas pewarisan prototipal yang ada.

### 2.2. Bagaimana Anda dapat memperluas objek JavaScript bawaan?

**Jawaban:**

Untuk memperluas objek JavaScript bawaan, kita dapat menambahkan metode atau properti ke prototip mereka. Namun, umumnya tidak disarankan untuk memodifikasi prototip bawaan karena dapat mengakibatkan masalah kompatibilitas dan perilaku yang tidak terduga, terutama jika ada perubahan di spesifikasi JavaScript di masa depan.

## 3. JavaScript Asynchronous

### 3.1. Jelaskan loop acara dalam JavaScript. Bagaimana hubungannya dengan tumpukan panggilan?

**Jawaban:**

Loop acara adalah konsep dasar dalam JavaScript yang bertanggung jawab untuk mengelola eksekusi beberapa bagian program dari waktu ke waktu, masing-masing dieksekusi hingga selesai. Ini bekerja sebagai loop yang terus memeriksa apakah ada tugas yang menunggu dalam antrean pesan. Jika ada tugas dan tumpukan panggilan utama (tumpukan panggilan) kosong, maka tugas tersebut diambil dari antrean dan dieksekusi.

Tumpukan panggilan adalah struktur data yang melacak eksekusi fungsi dalam program. Ketika sebuah fungsi dipanggil, ia ditambahkan ke tumpukan panggilan, dan ketika selesai dieksekusi, ia dihapus dari tumpukan. Dalam konteks JavaScript, loop acara terus-menerus memeriksa tumpukan panggilan untuk menentukan apakah tumpukan tersebut kosong. Jika tumpukan kosong dan ada fungsi callback yang menunggu dalam antrean pesan, callback tersebut dieksekusi.

### 3.2. Apa itu promise, dan bagaimana perbedaannya dengan callback dalam mengelola operasi asinkron?

**Jawaban:**

Promise adalah objek yang mewakili penyelesaian (atau kegagalan) dari operasi asinkron serta hasilnya. Sebuah `Promise` dapat berada dalam salah satu dari tiga keadaan:

- `pending`: keadaan awal, belum terpenuhi atau terpenuhi.
- `fulfilled`: artinya operasi asinkron telah selesai dan `Promise` memiliki hasilnya.
- `rejected`: artinya operasi asinkron gagal, dan `Promise` tidak memiliki hasil.

Callback adalah fungsi yang diberikan ke fungsi lain sebagai argumen dan dieksekusi setelah fungsi luar selesai. Meskipun baik promise dan callback dapat mengelola operasi asinkron, promise menyediakan cara yang lebih kuat dan terstruktur untuk mengelola operasi tersebut.

Perbedaan utama antara keduanya meliputi:

- Promise memungkinkan rantai operasi asinkron yang lebih baik.
- Callback dapat mengarah pada callback hell atau pyramid of doom, di mana kode menjadi sulit dibaca dan dikelola karena callback bertingkat.
- Promise memiliki mekanisme penanganan kesalahan yang terstandarisasi menggunakan `.then` dan `.catch`.

### 3.3. Jelaskan async/await. Bagaimana cara membuat kode asinkron lebih sederhana?

**Jawaban:**

`async/await` adalah fitur sintaksis yang diperkenalkan di ES8 (atau ES2017) untuk mengelola kode asinkron dengan cara yang lebih mirip dengan kode sinkron. Ini memungkinkan penulisan operasi asinkron dengan cara linier tanpa menggunakan callback, menghasilkan kode yang lebih bersih dan mudah dibaca.

Kata kunci `async` digunakan untuk mendeklarasikan fungsi asinkron, yang memastikan bahwa fungsi mengembal

ikan promise. Kata kunci `await` digunakan dalam fungsi asinkron untuk menghentikan eksekusi hingga promise diselesaikan atau ditolak.

Menggunakan `async/await` menyederhanakan penanganan kesalahan, karena kita dapat menggunakan blok `try/catch` tradisional alih-alih `.catch` dengan promise.

## 4. Metode Array Lanjutan

### 4.1. Jelaskan fungsi `map`, `reduce`, dan `filter`. Berikan contoh penggunaan praktis untuk masing-masing.

**Jawaban:**

- `map`: Fungsi ini mengubah setiap elemen dalam array berdasarkan sebuah fungsi, mengembalikan array baru dengan panjang yang sama.
  **Contoh:** Menggandakan setiap angka dalam array.
  ```javascript
  const angka = [1, 2, 3, 4];
  const hasilGanda = angka.map((num) => num * 2); // [2, 4, 6, 8]
  ```

### 4.2. Apa keterbatasan atau potensi kesalahan saat menggunakan fungsi panah?

**Jawaban:**

Fungsi panah memperkenalkan cara ringkas untuk menulis fungsi dalam JavaScript, namun mereka memiliki beberapa keterbatasan:

1. **Tidak Ada Pengikatan `this`**: Fungsi panah tidak mengikat `this` mereka sendiri. Mereka mewarisi pengikatan `this` dari ruang lingkup sekitarnya. Ini dapat menjadi masalah, terutama saat menggunakannya sebagai metode dalam objek atau sebagai penangan acara.

2. **Tidak Ada Objek `arguments`**: Fungsi panah tidak memiliki objek `arguments` sendiri. Jika kita perlu mengakses objek `arguments`, kita harus menggunakan fungsi ekspresi biasa.

3. **Tidak Bisa Digunakan Sebagai Konstruktor**: Fungsi panah tidak dapat digunakan sebagai konstruktor dengan kata kunci `new` karena mereka tidak memiliki metode internal `[[Construct]]`.

4. **Tidak Ada Properti `prototype`**: Berbeda dengan fungsi biasa, fungsi panah tidak memiliki properti `prototype`.

5. **Kurang Mudah Dibaca untuk Logika yang Kompleks**: Untuk operasi sederhana, sintaks yang ringkas adalah keuntungan. Namun, untuk fungsi yang mengandung logika yang kompleks, sintaks yang ringkas bisa membuat kode kurang mudah dibaca.

## 5. Kata Kunci "this"

### 5.1. Jelaskan perilaku kata kunci `this` dalam konteks yang berbeda, seperti dalam sebuah metode, fungsi mandiri, fungsi panah, dan penangan acara.

**Jawaban:** Kata kunci `this` dapat berbeda tergantung pada konteksnya:

- Dalam Metode: Merujuk ke objek yang metode tersebut dipanggil padanya.

```js
const person = {
  name: "Alice",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.sayHello(); // Output: Hello, my name is Alice
```

- Dalam Fungsi Mandiri: Perilaku `this` tergantung pada cara fungsi tersebut dipanggil. Jika fungsi dipanggil dalam lingkup global, `this` merujuk ke objek global (misalnya, `window` di peramban web).

```js
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const name = "Alice";
greet(); // Output: Hello, my name is Alice
```

- Dalam Fungsi Panah: Fungsi panah menangkap nilai `this` dari lingkup leksikalnya, tidak memiliki `this` sendiri.

```js
const person = {
  name: "Bob",
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.sayHello(); // Output: Hello, my name is undefined
```

### 5.2. Bagaimana Anda dapat memastikan bahwa suatu fungsi menggunakan objek tertentu sebagai nilai `this`-nya?

**Jawaban:**

Anda dapat memastikan bahwa suatu fungsi menggunakan objek tertentu sebagai nilai `this` dengan menggunakan metode seperti bind, fungsi panah, call, apply, atau dengan mendefinisikan metode dalam kelas ES6. Teknik-teknik ini memungkinkan kita mengendalikan konteks di mana fungsi beroperasi dan memastikan bahwa ia mengakses properti dan metode objek yang diinginkan.

## 6. Pengelolaan Memori

### 6.1. Apa yang dimaksud dengan kebocoran memori dalam JavaScript? Diskusikan penyebab potensial dan cara untuk mencegahnya.

**Jawaban:**

Kebocoran memori dalam JavaScript terjadi saat program dengan tidak sengaja mempertahankan referensi ke objek yang tidak lagi diperlukan, mengakibatkan penggunaan memori yang berlebihan dan masalah potensial dalam aplikasi. Penyebab umum kebocoran meliputi variabel yang tidak terpakai, closure, listener acara, dan referensi berulang. Untuk mencegah kebocoran memori, pengembang harus dengan jelas menghapus referensi yang tidak diperlukan, mengelola listener acara, menghindari dependensi berulang, menggunakan referensi lemah, melakukan profil memori, melakukan pengujian dan peninjauan kode, dan menggunakan linter dan alat analisis statis untuk mendeteksi masalah potensial sejak awal dalam proses pengembangan.

### 6.2. Jelaskan perbedaan antara salinan dangkal dan salinan dalam JavaScript. Bagaimana cara mencapainya?

**Jawaban:**

Salinan dangkal dan salinan dalam adalah metode untuk menggandakan objek atau array dalam JavaScript.

Salinan dangkal menggandakan struktur paling atas dan nilai-nilai objek atau array tetapi mempertahankan referensi ke objek atau array yang bersarang. Perubahan pada struktur bersarang akan memengaruhi objek asli dan salinannya.

Salinan dalam menciptakan objek atau array baru dan menggandakan semua tingkatan struktur bersarang secara rekursif. Ini memastikan bahwa perubahan pada salinan tidak memengaruhi objek asli.

Untuk mencapai salinan dangkal, kita dapat menggunakan metode seperti operator penyebaran atau slice(). Untuk salinan dalam, kita perlu menggunakan logika k

ustom atau pustaka seperti lodash's cloneDeep karena JavaScript tidak memiliki metode bawaan untuk menggandakan objek secara dalam.

## 7. ES6 dan Lebih Lanjut

### 7.1. Jelaskan tujuan dan penggunaan destrukturisasi dalam JavaScript.

**Jawaban:**

Destrukturisasi dalam JavaScript adalah fitur yang menyederhanakan pengambilan nilai dari objek atau array dengan cara yang lebih konsis dan mudah dibaca. Ini memungkinkan kita untuk mengaitkan nilai-nilai tersebut dengan variabel berdasarkan nama properti atau posisi dalam objek atau array. Destrukturisasi juga dapat digunakan dalam parameter fungsi dan mendukung sintaksis istimewa seperti rest untuk menangkap elemen yang tersisa.

### 7.2. Jelaskan pentingnya modul JavaScript dan sintaksis `import/export` ES6.

**Jawaban:**

Modul JavaScript, bersama dengan sintaksis `import/export` ES6, penting untuk pengembangan JavaScript modern. Mereka memungkinkan pengembang untuk mengatur, mengulang, dan mempertahankan kode dengan efektif. Modul mengemas kode yang berkaitan, mempromosikan reusabilitas kode, mengelola dependensi, dan meningkatkan skalabilitas kode. Sintaksis `import/export` ES6 memberikan cara standar untuk mendeklarasikan dan menggunakan modul, membuat lebih mudah mengorganisasi dan berbagi kode dengan cara yang bersih dan mudah dipelihara. Fitur-fitur ini telah menjadi penting dalam membangun aplikasi JavaScript yang modular dan mudah dipelihara, baik di sisi klien maupun server.

### 7.3. Bagaimana templat literal meningkatkan manipulasi string dalam ES6? Berikan contoh.

**Jawaban:**

Templat literal dalam ES6 meningkatkan manipulasi string dengan memungkinkan pengembang untuk membuat string dengan ekspresi tersemat dan konten yang melintasi beberapa baris dengan cara yang lebih mudah dibaca dan fleksibel. Mereka mendukung interpolasi variabel, string multi-baris, evaluasi ekspresi, panggilan fungsi, dan bahkan penggunaan lanjutan seperti templat yang diberi tag. Fitur ini meningkatkan keterbacaan dan pemeliharaan kode saat bekerja dengan string kompleks yang melibatkan konten dinamis atau ekspresi.

## 8. Pemrograman Fungsional

### 8.1. Bagaimana pemrograman fungsional berbeda dari pemrograman imperatif dalam JavaScript?

**Jawaban:**

Pemrograman fungsional dan pemrograman imperatif adalah dua paradigma pemrograman dominan.

- **Pemrograman Imperatif**: Paradigma ini berfokus pada memberi tahu komputer "bagaimana" melakukan sesuatu dan mengandalkan pernyataan yang mengubah status program. Ini sering melibatkan penggunaan loop, kondisional, dan pernyataan yang mengubah variabel.

- **Pemrograman Fungsional (FP)**: FP lebih berfokus pada memberi tahu komputer "apa" yang harus dilakukan daripada "bagaimana" melakukannya. Ini memperlakukan tugas komputasi sebagai evaluasi fungsi matematika dan menghindari penggunaan data mutabel dan perubahan status. Dalam konteks JavaScript, fitur-fitur FP termasuk fungsi murni, data yang tidak berubah, dan fungsi tingkat tinggi seperti map dan reduce.

### 8.2. Jelaskan fungsi kelas pertama dan pentingnya dalam pemrograman fungsional.

**Jawaban:**

Dalam JavaScript dan banyak bahasa pemrograman lainnya, fungsi dianggap sebagai "warga negara kelas pertama." Ini berarti fungsi dapat:

- Diberikan kepada variabel.
- Diteruskan sebagai argumen ke fungsi lain.
- Dikembalikan dari fungsi lain sebagai nilai.
- Disimpan dalam struktur data seperti array dan objek.

Berikut contoh sederhana yang menunjukkan properti-properti ini:

```javascript
// Memberikan fungsi kepada variabel
const sapa = function(nama) {
  return "Halo, " + nama;
}
// Mengirimkan fungsi sebagai argumen ke fungsi lain
function jalankanFungsi(fn, nilai) {
  return fn(nilai);
}
jalankanFungsi(sapa, 'John'); // Mengembalikan: "Halo, John"
// Mengembalikan fungsi dari fungsi lain
function pengganda(faktor) {
  return function(angka) {
    return angka \* faktor;
  }
}
const duaKali = pengganda(2);
duaKali(5); // Mengembalikan: 10
// Menyimpan fungsi dalam array
const fungsi = [sapa, duaKali];
```

## 9. Menyimpan Data di Browser

### A. Penyimpanan Lokal dan Penyimpanan Sesi

### 9.1 Apa perbedaan utama antara Penyimpanan Lokal dan Penyimpanan Sesi?

**Jawaban:**

Penyimpanan Web adalah API web yang menyediakan dua mekanisme untuk menyimpan data di browser web: Penyimpanan Lokal dan Penyimpanan Sesi. Perbedaan utamanya adalah:

- Masa Hidup: Data Penyimpanan Lokal tetap ada bahkan setelah browser ditutup, sementara data Penyimpanan Sesi hanya tersedia selama sesi halaman berlangsung.
- Ruang Lingkup: Data Penyimpanan Lokal dapat diakses di berbagai jendela dan tab dari asal yang sama, sedangkan data Penyimpanan Sesi terbatas pada halaman atau tab saat ini.
- Batasan Penyimpanan: Penyimpanan Lokal biasanya memiliki batasan penyimpanan yang lebih besar (sekitar 5-10 MB) dibandingkan dengan Penyimpanan Sesi (sekitar 5-10 MB juga).

### 9.2 Bagaimana cara menyimpan data di Penyimpanan Lokal dan Penyimpanan Sesi menggunakan JavaScript?

**Jawaban:**

Anda dapat menggunakan objek localStorage dan sessionStorage untuk menyimpan data. Berikut contoh menyimpan data di Penyimpanan Lokal:

`localStorage.setItem('username', 'JohnDoe');`

Untuk menyimpan data di Penyimpanan Sesi, gantilah localStorage dengan `sessionStorage.`

### 9.3 Bagaimana cara menghapus atau menghapus data dari Penyimpanan Lokal dan Penyimpanan Sesi?

**Jawaban:**

Anda dapat menghapus item dari penyimpanan menggunakan metode removeItem. Untuk menghapus semua item, Anda dapat menggunakan metode clear. Contohnya:

Hapus item :
`localStorage.removeItem('username');`

Hapus semua item :
`localStorage.clear();`

### 9.4 Jelaskan kekhawatiran keamanan yang terkait dengan Penyimpanan Web.

**Jawaban:**

Penyimpanan Web bersifat domain-spesifik, artinya data hanya dapat diakses dari domain yang sama yang menyimpannya. Namun, ada kekhawatiran keamanan terkait dengan menyimpan informasi sensitif di Penyimpanan Web. Data tidak dienkripsi, dan rentan terhadap serangan cross-site scripting (XSS), di mana skrip jahat dapat mengakses dan memodifikasi data yang disimpan.

### B. IndexDB

IndexedDB bisa dianggap sebagai "localStorage versi canggih". Ini adalah database berbasis kunci-nilai sederhana, cukup kuat untuk aplikasi offline, namun mudah digunakan.

### 9.5 Apa itu IndexDB, dan bagaimana perbedaannya dengan Penyimpanan Web (Penyimpanan Lokal dan Penyimpanan Sesi)?

**Jawaban:**

IndexedDB adalah database berbasis JavaScript tingkat rendah untuk menyimpan jumlah data yang besar. Ini berbeda dari Penyimpanan Web dalam beberapa hal:

- Struktur Data: IndexedDB menyimpan data terstruktur, sementara Penyimpanan Web menyimpan pasangan kunci-nilai.
- Batasan Penyimpanan: IndexedDB biasanya menawarkan batasan penyimpanan yang lebih besar (seringkali dalam megabita) dibandingkan dengan penyimpanan terbatas Penyimpanan Web.
- Kompleksitas API: IndexedDB memiliki API yang lebih kompleks, mengharuskan pengembang untuk menentukan skema database dan bekerja dengan transaksi.

### 9.6 Bagaimana cara membuka database dan membuat toko objek di IndexedDB menggunakan JavaScript?

**Jawaban:**

Anda dapat membuka database dan membuat toko objek seperti ini:

Buka database (atau buat jika belum ada) :

`const request = indexedDB.open('myDatabase', 1);`

Buat toko objek :

```sh
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore('myStore', { keyPath: 'id' });
};
```
