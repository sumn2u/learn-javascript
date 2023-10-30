---
layout: editorial
title: Pertanyaan Wawancara JavaScript Dasar
keterangan:
---

# Pertanyaan Wawancara JavaScript Dasar

## 1. Sejarah dan Mendefinisikan Variabel.

### 1.1. Apa itu JavaScript?

**Jawaban:**
JavaScript adalah bahasa pemrograman berlevel tinggi yang digunakan secara umum untuk pengembangan web guna menambahkan interaktivitas dan perilaku dinamis pada situs web.

### 1.2. Siapa yang menciptakan/Mengembangkan JavaScript?

**Jawaban:**
JavaScript diciptakan oleh _Brendan Eich_ saat bekerja di **Netscape Communications Corporation**. Dia mengembangkan bahasa ini dalam waktu hanya sepuluh hari pada bulan Mei 1995. Awalnya, JavaScript dinamai "_Mocha_" namun kemudian diubah menjadi "_LiveScript_" dan akhirnya "_JavaScript_" sebagai bagian dari kolaborasi pemasaran dengan **Sun Microsystems** (sekarang **Oracle Corporation**), yang saat itu sedang populer dengan bahasa pemrograman **Java**. Meskipun mirip dalam nama, _JavaScript_ dan _Java_ adalah bahasa pemrograman yang berbeda dengan tujuan dan karakteristik yang berbeda.

### 1.3. Bagaimana cara mendeklarasikan variabel dalam JavaScript?

**Jawaban:**
Anda dapat mendeklarasikan variabel menggunakan `var`, `let`, atau `const`:

- `var` (berumur fungsi)
- `let` (berumur blok)
- `const` (berumur blok, untuk konstanta)

### 1.4. Apa perbedaan antara `let`, `var`, dan `const`?

**Jawaban:**

- `var` berumur fungsi, sedangkan `let` dan `const` berumur blok.
- `let` memungkinkan perubahan nilai variabel, sementara `const` digunakan untuk konstanta.
- Variabel yang dideklarasikan dengan `var` diangkat (hoisted), sementara `let` dan `const` tidak diangkat.

### 1.5. Apakah JavaScript adalah bahasa yang berjenis data statis atau berjenis data dinamis?

**Jawaban:**
JavaScript adalah bahasa yang berjenis data dinamis. Dalam bahasa berjenis data dinamis, tipe variabel diperiksa selama runtime, berbeda dengan bahasa berjenis data statis, di mana tipe variabel diperiksa selama compile-time.

### 1.6. Apa saja jenis kesalahan dalam JavaScript?

**Jawaban:**
Ada dua jenis kesalahan dalam JavaScript.

1. **Kesalahan sintaksis**: Kesalahan sintaksis adalah kesalahan atau masalah pengejaan dalam kode yang menyebabkan program tidak dijalankan sama sekali atau berhenti di tengah jalan. Biasanya, pesan kesalahan disertakan.

2. **Kesalahan logika**: Kesalahan logika terjadi ketika sintaksis benar tetapi logika atau programnya salah. Dalam kasus ini, program dapat berjalan tanpa masalah, tetapi hasilnya tidak akurat. Kesalahan logika kadang-kadang lebih sulit diperbaiki daripada kesalahan sintaksis karena aplikasi ini tidak menampilkan sinyal kesalahan untuk masalah logika.

### 1.7. Sebutkan beberapa keunggulan JavaScript.

**Jawaban:**
Ada banyak keunggulan JavaScript. Beberapa di antaranya adalah:

- JavaScript dapat dieksekusi di sisi klien maupun sisi server. Ada berbagai Kerangka Kerja Frontend yang dapat Anda pelajari dan gunakan. Namun, jika Anda ingin menggunakan JavaScript di sisi belakang, Anda perlu mempelajari NodeJS. Saat ini, NodeJS adalah satu-satunya kerangka JavaScript yang dapat digunakan di sisi belakang.
- JavaScript adalah bahasa yang mudah dipelajari.
- Halaman web memiliki lebih banyak fungsionalitas berkat JavaScript.
- Dalam pandangan pengguna akhir, JavaScript sangat cepat.

### 1.8. Apa itu kata kunci 'this' dalam JavaScript?

**Jawaban:**

Kata kunci 'this' dalam JavaScript digunakan untuk memanggil objek saat ini sebagai konstruktor untuk memberikan nilai ke properti objek.

## 2. Fungsi

### 2.1. Bagaimana cara membuat fungsi dalam JavaScript?

**Jawaban:**

Anda dapat membuat fungsi menggunakan kata kunci `function` atau dengan menggunakan fungsi panah (`=>`):

**Contoh**:

```js
function myFunction() {
  // Isi fungsi
}

const myArrowFunction = () => {
  // Isi fungsi
};
```

### 2.2. Apa yang dimaksud dengan Callback?

**Jawaban:**
Callback adalah fungsi yang akan dieksekusi setelah fungsi lain selesai dieksekusi. Dalam JavaScript, fungsi diperlakukan sebagai warga pertama, yang berarti mereka dapat digunakan sebagai argumen fungsi lain, dikembalikan oleh fungsi lain, dan digunakan sebagai properti objek.

Fungsi yang digunakan sebagai argumen untuk fungsi lain disebut fungsi callback. **Contoh**:

```js
function bagiDua(jumlah) {
  console.log(Math.floor(jumlah / 2));
}

function kaliDua(jumlah) {
  console.log(jumlah * 2);
}

function operasiPadaJumlah(num1, num2, operasi) {
  var jumlah = num1 + num2;
  operasi(jumlah);
}

operasiPadaJumlah(3, 3, bagiDua); // Output 3

operasiPadaJumlah(5, 5, kaliDua); // Output 20
```

- Dalam kode di atas, kami melakukan operasi matematika pada jumlah dua angka. Fungsi `operasiPadaJumlah` mengambil 3 argumen: angka pertama, angka kedua, dan operasi yang akan dilakukan pada jumlah mereka (fungsi callback).
- Baik `bagiDua` maupun `kaliDua` digunakan sebagai fungsi callback dalam kode di atas.
- Fungsi callback ini akan dieksekusi hanya setelah fungsi `operasiPadaJumlah` dieksekusi.
- Oleh karena itu, sebuah callback adalah fungsi yang akan dieksekusi setelah fungsi lainnya selesai dieksekusi.

### 2.3. Jelaskan Scope dan Scope Chain dalam JavaScript.

**Jawaban:**
Scope dalam JavaScript menentukan aksesibilitas variabel dan fungsi pada berbagai bagian kode.

Sec

ara umum, scope akan memberi tahu kita pada bagian kode tertentu, variabel dan fungsi mana yang dapat atau tidak dapat diakses.

Ada tiga jenis scope dalam JavaScript:

- Global Scope
- Local atau Function Scope
- Block Scope

**Global Scope**: Variabel atau fungsi yang dideklarasikan dalam ruang nama global memiliki scope global, yang berarti semua variabel dan fungsi yang memiliki scope global dapat diakses dari mana saja dalam kode.

```js
var variabelGlobal = "Halo dunia";

function kirimPesan() {
  return variabelGlobal; // dapat mengakses variabelGlobal karena ditulis dalam ruang global
}
function kirimPesan2() {
  return kirimPesan(); // Dapat mengakses fungsi kirimPesan karena ditulis dalam ruang global
}
kirimPesan2(); // Mengembalikan "Halo dunia"
```

**Function Scope**: Variabel atau fungsi yang dideklarasikan dalam fungsi memiliki scope lokal/fungsi, yang berarti semua variabel dan fungsi yang dideklarasikan dalam fungsi hanya dapat diakses dari dalam fungsi tersebut dan tidak di luar.

```js
function fungsiKeren() {
  var a = 2;

  var perkalianDua = function () {
    console.log(a * 2); // Dapat mengakses variabel "a" karena keduanya ditulis dalam fungsi yang sama
  };
}
console.log(a); // Menimbulkan kesalahan referensi karena "a" ditulis dalam scope lokal dan tidak dapat diakses di luar

perkalianDua(); // Menimbulkan kesalahan referensi karena perkalianDua ditulis dalam scope lokal
```

**Block Scope**: `Block scope` terkait dengan variabel yang dideklarasikan menggunakan let dan const. Variabel yang dideklarasikan dengan var tidak memiliki block scope. Block scope memberi tahu kita bahwa variabel yang dideklarasikan dalam blok `{ }` hanya dapat diakses di dalam blok itu dan tidak di luarnya.

```js
{
  let x = 45;
}

console.log(x); // Menimbulkan kesalahan referensi karena "x" tidak dapat diakses di luar blok

for (let i = 0; i < 2; i++) {
  // lakukan sesuatu
}

console.log(i); // Menimbulkan kesalahan referensi karena "i" tidak dapat diakses di luar blok loop
```

**Scope Chain**: Mesin JavaScript juga menggunakan Scope untuk mencari variabel. Mari pahami ini dengan contoh:

```js
var y = 24;

function fungsiFavorit() {
  var x = 667;
  var fungsiFavoritLainnya = function () {
    console.log(x); // Tidak menemukan "x" di dalam fungsiFavoritLainnya, jadi mencari variabel dalam fungsiFavorit, mengembalikan 667
  };

  var fungsiFavoritLainnyaLagi = function () {
    console.log(y); // Tidak menemukan "y" di dalam fungsiFavoritLainnyaLagi, jadi mencari variabel dalam fungsiFavorit dan tidak menemukannya, lalu mencari variabel dalam ruang lingkup global, menemukannya dan mengembalikan 24
  };

  fungsiFavoritLainnya();
  fungsiFavoritLainnyaLagi();
}
fungsiFavorit();
```

Seperti yang dapat dilihat dalam kode di atas, jika mesin JavaScript tidak menemukan variabel dalam scope lokal, ia mencoba mencari variabel dalam scope yang lebih tinggi (outer scope). Jika variabel tersebut tidak ada dalam ruang lingkup global, maka akan menghasilkan kesalahan referensi.

### 2.4. Jelaskan Higher Order Functions dalam JavaScript.

**Jawaban:**
Fungsi yang beroperasi pada fungsi lain, baik dengan mengambilnya sebagai argumen atau dengan mengembalikannya, disebut _higher-order functions_.

Higher-order functions adalah hasil dari fungsi menjadi _warga pertama_ (first-class citizens) dalam JavaScript.

Contoh higher-order functions:

```js
function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Halo dunia");
});

function higherOrder2() {
  return function () {
    return "Lakukan sesuatu";
  };
}

var x = higherOrder2();
x(); // Mengembalikan "Lakukan sesuatu"
```

### 2.5. Apa yang dimaksud dengan Self Invoking Functions dalam JavaScript?

**Jawaban:**

Self-invoking expression adalah ekspresi yang secara otomatis dijalankan (diinisiasi) tanpa diminta. Jika ekspresi fungsi diikuti oleh (), maka akan dieksekusi secara otomatis. Deklarasi fungsi tidak dapat dijalankan sendiri.

Biasanya, kita mendeklarasikan fungsi dan kemudian memanggilnya, namun fungsi anonim dapat digunakan untuk menjalankan fungsi secara otomatis saat didefinisikan dan tidak akan dipanggil lagi. Dan tidak ada nama untuk jenis fungsi ini.

### 2.6. Apa perbedaan antara metode `exec()` dan `test()` dalam JavaScript?

**Jawaban:**

- `test()` dan `exec()` adalah metode ekspresi Reguler dalam JavaScript.
- Kami akan menggunakan `exec()` untuk mencari string untuk pola tertentu dan jika menemukannya, akan mengembalikan pola tersebut secara langsung; jika tidak, akan mengembalikan hasil 'kosong'.
- Kami akan menggunakan `test()` untuk mencari string untuk pola tertentu. Ini akan mengembalikan nilai Boolean 'true' jika menemukan teks yang diberikan; jika tidak, akan mengembalikan 'false'.

### 2.7. Apa perbedaan antara deklarasi fungsi (Function declaration) dan ekspresi fungsi (Function expression) dalam JavaScript?

**Jawaban**

- **Deklarasi Fungsi (Function Declaration)**:
  a) Dinyatakan sebagai pernyataan terpisah dalam kode JavaScript utama.
  b) Dapat dipanggil sebelum fungsi didefinisikan.
  c) Menawarkan keterbacaan kode yang lebih baik dan organisasi kode yang lebih baik.
  d) Contoh:

  ```js
  function abc() {
    return 5;
  }
  ```

- **Ekspresi Fungsi (Function Expression)**:
  a) Dibuat dalam suatu ekspresi atau konstruksi lain.
  b) Dibuat saat titik eksekusi mencapai ekspresi tersebut; hanya dapat digunakan setelah itu.
  c) Dig

unakan ketika diperlukan deklarasi fungsi kondisional.
d) Contoh:

```js
var a = function abc() {
  return 5;
};
```

### 2.8. Apa itu fungsi anak panah (Arrow functions) dalam JavaScript?

**Jawaban**

- Fungsi anak panah adalah cara penulisan singkat dan ringkas untuk menulis fungsi dalam JavaScript. Sintaks umum fungsi anak panah adalah sebagai berikut:

  ```js
  const helloWorld = () => {
    console.log("Halo dunia!");
  };
  ```

### 2.9. Dalam konteks "Passed by value" dan "Passed by reference":

**Jawaban**

- **Passed By Value adalah Tipe Data Primitive**.
  Pertimbangkan contoh berikut:

  Di sini, `a = 432` adalah tipe data primitif, yaitu tipe number yang memiliki nilai yang diberikan oleh operator. Ketika kode `var b = a` dijalankan, nilai dari `var a` mengembalikan alamat baru untuk `var b` dengan mengalokasikan ruang baru di memori, sehingga `var b` akan beroperasi di lokasi yang baru.

  Contoh:

  ```js
  var a = 432;
  var b = a;
  ```

- **Passed by Reference adalah Tipe Data Non-primitive**.
  Pertimbangkan contoh berikut:

  Referensi dari objek variabel pertama, yaitu `var obj`, dilewatkan melalui lokasi variabel lainnya, yaitu `var obj2`, dengan bantuan operator yang diberikan.

  Contoh:

  ```js
  var obj = { name: "Raj", surname: "Sharma" };
  var obj2 = obj;
  ```

# 3. Tipe Data dan Operator

## 3.1. Apa saja tipe data yang ada dalam JavaScript?

**Jawaban:**

1. **Tipe data Primitif**

   - `String` - Ini mewakili serangkaian karakter dan ditulis dengan tanda kutip. Sebuah string dapat direpresentasikan dengan menggunakan tanda kutip tunggal atau ganda.

     **Contoh**:

     ```js
     var str = "Vivek Singh Bisht"; //menggunakan tanda kutip ganda
     var str2 = "John Doe"; //menggunakan tanda kutip tunggal
     ```

   - `Number` - Ini mewakili sebuah angka dan dapat ditulis dengan atau tanpa desimal.

     **Contoh**:

     ```js
     var x = 3; //tanpa desimal
     var y = 3.6; //dengan desimal
     ```

   - `BigInt` - Tipe data ini digunakan untuk menyimpan angka yang melebihi batasan tipe data Number. Ini dapat menyimpan angka besar dan direpresentasikan dengan menambahkan "n" ke literal angka.

     **Contoh**:

     ```js
     var bigInteger = 234567890123456789012345678901234567890n;
     ```

   - `Boolean` - Ini mewakili entitas logis dan hanya dapat memiliki dua nilai: true atau false. Boolean biasanya digunakan untuk pengujian kondisional.

     **Contoh**:

     ```js
     var a = 2;
     var b = 3;
     var c = 2;
     (a == b)(
       // mengembalikan false
       a == c
     ); // mengembalikan true
     ```

   - `Undefined` - Saat variabel dideklarasikan tetapi tidak diisi, nilainya adalah undefined dan tipenya juga undefined.

     **Contoh**:

     ```js
     var x; // nilai x adalah undefined
     var y = undefined; // kita juga bisa mengatur nilai variabel sebagai undefined
     ```

   - `Null` - Ini mewakili nilai yang tidak ada atau tidak valid.

     **Contoh**:

     ```js
     var z = null;
     ```

   - `Symbol` - Ini adalah tipe data baru yang diperkenalkan dalam versi ES6 JavaScript. Digunakan untuk menyimpan nilai anonim dan unik.

     **Contoh**:

     ```js
     var symbol1 = Symbol("symbol");
     ```

   - **Array** - Ini adalah kumpulan data yang dipesan yang digunakan untuk menyimpan sejumlah nilai dalam satu variabel.

     **Contoh**:

     ```js
     var array1 = [5, "Halo", true, 4.1];
     ```

   **Note**: Dalam JavaScript, tipe data primitif hanya dapat menyimpan satu nilai. Untuk menyimpan nilai yang lebih kompleks, kita menggunakan tipe data non-primitif.

2. **Tipe data Non-Primitif**

   - **Object** - Digunakan untuk menyimpan koleksi data.

     **Contoh**:

     ```js
     // Koleksi data dalam pasangan nama-nilai
     var obj1 = {
       x: 43,
       y: "Halo dunia!",
       z: function () {
         return this.x;
       },
     };
     ```

### 3.2. Apa perbedaan antara operator `==` dan `===`?

**Jawaban:**
Kedua operator tersebut adalah operator perbandingan. Perbedaan antara keduanya adalah bahwa `==` digunakan untuk membandingkan nilai, sedangkan `===` digunakan untuk membandingkan baik nilai maupun tipe data.

**Contoh**:

```js
var x = 2;
var y = "2";

x == y; // Mengembalikan true karena nilainya sama, meskipun tipe datanya berbeda
x === y; // Mengembalikan false karena selain nilai, tipe datanya juga harus sama
```

`````

### 3.3. Apa itu properti NaN dalam JavaScript?

**Jawaban:**
Properti NaN mewakili nilai "Not-a-Number" yang disengaja. Ini menunjukkan nilai yang bukan angka yang sah.

Hasil dari `typeof NaN` akan mengembalikan "number". Untuk memeriksa apakah suatu nilai adalah NaN, kita menggunakan fungsi `isNaN()`.

**Contoh**:

```js
isNaN("Halo"); // Mengembalikan true
isNaN(345); // Mengembalikan false
isNaN("1"); // Mengembalikan false, karena '1' diubah menjadi tipe data Number, yang menghasilkan 0 (angka)
isNaN(true); // Mengembalikan false, karena true diubah menjadi tipe data Number, yang menghasilkan 1 (angka)
isNaN(false); // Mengembalikan false
isNaN(undefined); // Mengembalikan true
```

### 3.4. Metode apa yang digunakan untuk mengambil karakter dari indeks tertentu?

**Jawaban:**
Fungsi `charAt()` dalam JavaScript digunakan untuk mencari karakter pada indeks tertentu. Angka indeks dimulai dari 0, di mana 0 mengacu pada karakter pertama dalam string.

Contoh:

```js
var kata = "Halo dunia";
var karakter = kata.charAt(3); // Mengembalikan karakter "o" (indeks 3)
```

````md
# 4. Beberapa Konsep Penting

## 4.1. Apa yang dimaksud dengan Mode Ketat (Strict Mode) dalam JavaScript?

**Jawaban:**
Mode Ketat adalah fitur baru dalam ECMAScript 5 yang memungkinkan Anda untuk menempatkan program atau fungsi dalam konteks operasi "ketat". Ini menghalangi beberapa tindakan tertentu dan menghasilkan lebih banyak pengecualian. Ekspresi harfiah "use strict"; memberi tahu peramban untuk menggunakan kode JavaScript dalam Mode Ketat.

## 4.2. Mengapa kita menggunakan kata "debugger" dalam JavaScript?

**Jawaban:**
Kata kunci "debugger" digunakan untuk membuat breakpoint dalam kode. Ketika peramban menemukan kata kunci "debugger" dalam kode, ia akan menghentikan eksekusi kode dan membuka alat pemecahan masalah peramban.

## 4.3. Apa itu currying dalam JavaScript?

**Jawaban:**
Currying adalah teknik lanjutan untuk mengubah fungsi dengan argumen n menjadi n fungsi dengan satu atau lebih argumen.

Contoh dari fungsi yang dicurrying:

```js
function tambah(a) {
  return function (b) {
    return a + b;
  };
}

tambah(3)(4); // Hasilnya adalah 7
```
`````

Dengan menggunaan teknik currying, kita tidak mengubah fungsionalitas fungsi, hanya cara memanggilnya.

## 4.4. Apa keuntungan menggunakan JavaScript Eksternal?

**Jawaban:**
JavaScript Eksternal adalah kode JavaScript (script) yang ditulis dalam file terpisah dengan ekstensi .js, dan kemudian kita menghubungkan file tersebut dalam elemen <head> atau <body> file HTML tempat kode tersebut ditempatkan.

Beberapa keuntungan dari penggunaan JavaScript eksternal adalah:

- Memungkinkan desainer web dan pengembang untuk berkolaborasi pada file HTML dan JavaScript.
- Kode dapat digunakan kembali.
- Kode menjadi lebih mudah dibaca dalam JavaScript eksternal.

## 4.5. Apa itu closure dalam JavaScript?

**Jawaban:**
Closure adalah fungsi yang memiliki akses ke cakupan fungsi induknya bahkan setelah fungsi induknya sudah selesai. Ini berarti closure dapat mengingat dan mengakses variabel dan argumen dari fungsi induknya bahkan setelah fungsi tersebut selesai.

Dalam singkat, closure adalah fungsi yang memiliki akses ke variabel dari lingkup luar (enclosing function) bahkan setelah fungsi tersebut selesai dijalankan.

## 4.6. Apa itu DOM dalam JavaScript?

**Jawaban:**
Document Object Model (DOM) adalah antarmuka pemrograman untuk dokumen HTML dan XML. DOM merepresentasikan halaman sehingga program dapat mengubah struktur, gaya, dan kontennya. DOM menggambarkan dokumen sebagai simpul dan objek.

## 4.7. Apa yang dimaksud dengan delegasi acara?

**Jawaban:**
Delegasi acara adalah teknik untuk mendengarkan acara di mana elemen induk (biasanya yang lebih tinggi dalam hirarki dokumen) bertindak sebagai pemantau acara untuk elemen-elemen anaknya. Acara-acara yang dipancarkan oleh elemen anak akan ditangani oleh pemantau acara elemen induk.

## 4.8. Bagaimana cara melakukan permintaan AJAX dalam JavaScript?

**Jawaban:**
AJAX singkatan dari Asynchronous JavaScript and XML. Ini adalah seperangkat teknik pengembangan web yang menggunakan banyak teknologi web di sisi klien untuk membuat aplikasi web asinkron. Dengan AJAX, aplikasi web dapat mengirim dan mengambil data dari server secara asinkron (di latar belakang) tanpa mengganggu tampilan dan perilaku halaman yang ada.

Anda dapat melakukan permintaan AJAX menggunakan objek XMLHttpRequest atau dengan menggunakan API fetch. Berikut adalah contoh menggunakan fetch:

```js
fetch("https://contoh.com/api/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## 4.9. Apa itu promise dalam JavaScript?

**Jawaban:**
Promise adalah objek yang dapat menghasilkan satu nilai tunggal di masa depan, baik itu nilai yang dipenuhi atau alasan penolakan. Promise dapat berada dalam salah satu dari 3 keadaan: terpenuhi, ditolak, atau masih dalam keadaan tertunda. Pengguna promise dapat melampirkan callback untuk menghandle nilai yang dipenuhi atau alasan penolakan.

## 4.10. Mengapa kita memerlukan promise dalam JavaScript?

**Jawaban:**
Promise digunakan untuk mengatasi operasi asinkron. Promise memberikan pendekatan alternatif terhadap callback dengan mengurangi kompleksitas callback dan menulis kode yang lebih bersih.

## 5. Objek

### 5.1. Apa cara-cara yang mungkin digunakan untuk membuat objek dalam JavaScript?

**Jawaban:**
Ada beberapa cara untuk membuat objek dalam JavaScript, antara lain:

1. **Konstruktor Objek:**

   - Cara termudah untuk membuat objek adalah dengan menggunakan konstruktor objek, seperti `new Object()`. Namun, ini sekarang tidak disarankan.

   ```js
   var obj = new Object();
   ```

2. **Metode `create` Objek:**

   - Metode `create` dari objek `Object` digunakan untuk membuat objek baru dengan objek prototipe yang ditentukan.

   ```js
   var obj = Object.create(null);
   ```

3. **Notasi Objek Literal:**

   - Notasi objek literal (atau inisialisasi objek) adalah kumpulan pasangan nama-nilai yang dipisahkan oleh koma dan dikelilingi oleh kurung kurawal.

   ```js
   var obj = {
     nama: "Sudheer",
     usia: 34,
   };
   ```

4. **Konstruktor Fungsi:**

   - Anda dapat membuat fungsi konstruktor yang menghasilkan objek menggunakan operator `new`.

   ```js
   function Person(nama) {
     this.nama = nama;
   }
   var obj = new Person("Sudheer");
   ```

5. **Konstruktor Fungsi dengan Prototype:**

   - Ini mirip dengan konstruktor fungsi, tetapi menggunakan prototipe untuk properti dan metode.

   ```js
   function Person() {}
   Person.prototype.nama = "Sudheer";
   var obj = new Person();
   ```

6. **Notasi Kelas ES6:**

   - Dalam ES6, Anda dapat menggunakan notasi kelas untuk membuat objek.

   ```js
   class Person {
     constructor(nama) {
       this.nama = nama;
     }
   }
   var obj = new Person("Sudheer");
   ```

## 6. Berbagai Hal Lain

### 6.1. Apa itu mode ketat (Strict Mode) dalam JavaScript?

**Jawaban:**
Mode Ketat adalah fitur baru dalam ECMAScript 5 yang memungkinkan Anda untuk menempatkan program, atau fungsi, dalam konteks operasi "ketat". Ini menghalangi beberapa tindakan tertentu dan menghasilkan lebih banyak pengecualian. Ekspresi harfiah "use strict"; memberi tahu peramban untuk menggunakan kode JavaScript dalam Mode Ketat.

### 6.2. Apa itu nilai null dalam JavaScript?

**Jawaban:**
Nilai null mewakili ketiadaan objek yang disengaja. Ini adalah salah satu nilai primitif dalam JavaScript. Tipe dari nilai null adalah object. Anda dapat mengosongkan variabel dengan mengatur nilainya menjadi null.

```js
var user = null;
console.log(typeof user); // object
```

### 6.3. Apa itu eval dalam JavaScript?

**Jawaban:**
F

ungsi eval() dalam JavaScript digunakan untuk mengevaluasi kode JavaScript yang direpresentasikan sebagai string. String tersebut dapat berisi ekspresi JavaScript, variabel, pernyataan, atau rangkaian pernyataan.

```js
console.log(eval("1 + 2")); // 3
```

### 6.4. Apakah JavaScript bahasa yang dikompilasi atau diinterpretasi?

**Jawaban:**
JavaScript adalah bahasa yang diinterpretasi, bukan dikompilasi. Interpreter di peramban membaca kode JavaScript, menguraikannya, dan mengeksekusinya. Saat ini, peramban modern menggunakan teknologi yang disebut kompilasi Just-In-Time (JIT) untuk mengkompilasi JavaScript menjadi kode bytecode yang dapat dijalankan.

### 6.5. Apakah JavaScript adalah bahasa yang peka huruf besar-kecil (case-sensitive)?

**Jawaban:**
Ya, JavaScript adalah bahasa yang peka huruf besar-kecil (case-sensitive). Kata kunci bahasa, variabel, nama fungsi, dan identifier lainnya harus selalu ditulis dengan kapitalisasi huruf yang konsisten.

### 6.6. Apa perbedaan antara metode `exec()` dan `test()`?

**Jawaban:**

- `exec()`: Ini adalah metode ekspresi reguler yang digunakan untuk mencari string dengan pola tertentu. Ketika itu ditemukan, metode ini akan mengembalikan hasil pola tersebut, atau jika tidak ditemukan, akan mengembalikan hasil "kosong".

- `test()`: Ini adalah metode ekspresi reguler yang digunakan untuk mencari string dengan pola tertentu atau teks. Jika itu ditemukan, metode ini akan mengembalikan nilai boolean `true`, jika tidak ditemukan, akan mengembalikan nilai `false`.

---
