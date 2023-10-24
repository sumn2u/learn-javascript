---
bab: [nomor bab]
nomorHalaman: [nomor halaman]
deskripsi: Tentu! Mari kita bahas deklarasi `let` dan `const` dalam konteks ES6 (ECMAScript 2015) dan membandingkannya dengan lawan mereka dalam ES5.
---

**`let` dan `const` dalam ES6:**

1. **Deklarasi `let`:**
   - Dalam ES6, deklarasi `let` diperkenalkan untuk membuat variabel dengan ruang lingkup blok. Ini berarti variabel yang dideklarasikan dengan `let` hanya dapat diakses dalam blok (misalnya, dalam fungsi atau sepasang kurung kurawal) di mana variabel itu didefinisikan.

   - Variabel `let` tidak diangkat (hoisted) ke bagian atas fungsi atau blok yang mengandungnya. Hal ini mencegah masalah di mana variabel diakses sebelum dideklarasikan.

   - `let` memungkinkan Anda untuk mengganti nilai variabel setelah deklarasi awal, sehingga variabel ini bersifat mutable.

   - Contoh:
     ```javascript
     function contohFungsi() {
       if (true) {
         let x = 10;
         console.log(x); // 10
       }
       console.log(x); // Error: x is not defined
     }
     ```

2. **Deklarasi `const`:**
   - Deklarasi `const` juga memperkenalkan variabel dengan ruang lingkup blok, tetapi dengan batasan tambahan: variabel yang dideklarasikan dengan `const` tidak dapat di-assign ulang setelah assignment awal mereka. Mereka adalah konstan.

   - `const` sering digunakan untuk nilai yang tidak boleh berubah, seperti konstanta atau referensi ke objek yang bersifat immutable.

   - Contoh:
     ```javascript
     const pi = 3.14159;
     pi = 3.14; // Error: Assignment to constant variable.
     ```

**Perbandingan dengan ES5:**

Dalam ES5, JavaScript secara umum menggunakan kata kunci `var` untuk mendeklarasikan variabel. Berikut adalah perbedaan kunci saat membandingkan `let` dan `const` dalam ES6 dengan `var` dalam ES5:

1. **Ruang Lingkup Blok vs. Ruang Lingkup Fungsi:**
   - ES6 (`let` dan `const`): Variabel yang dideklarasikan dengan `let` dan `const` memiliki ruang lingkup blok, artinya mereka terbatas pada blok di mana mereka didefinisikan, baik itu blok dalam fungsi atau blok mandiri.

   - ES5 (`var`): Variabel yang dideklarasikan dengan `var` memiliki ruang lingkup fungsi, artinya mereka dapat diakses di seluruh fungsi yang mengandung deklarasi `var`.

2. **Hoisting:**
   - ES6 (`let` dan `const`): Variabel yang dideklarasikan dengan `let` dan `const` tidak diangkat (hoisted) ke bagian atas blok yang mengandung mereka, yang mencegah penggunaan variabel sebelum dideklarasikan.

   - ES5 (`var`): Variabel yang dideklarasikan dengan `var` diangkat (hoisted) ke bagian atas fungsi yang mengandungnya, yang dapat menyebabkan perilaku yang tidak terduga jika tidak dikelola dengan baik.

3. **Pengubahan Nilai:**
   - ES6 (`let` dan `const`): Variabel yang dideklarasikan dengan `let` dapat di-assign ulang setelah deklarasi awal. Variabel yang dideklarasikan dengan `const` tidak dapat di-assign ulang, sehingga bersifat konstan.

   - ES5 (`var`): Variabel yang dideklarasikan dengan `var` dapat di-assign ulang kapan saja di dalam fungsi di mana mereka dideklarasikan.

4. **Konstanta:**
   - ES6 (`const`): ES6 memperkenalkan kata kunci `const`, yang memungkinkan pembuatan konstanta yang tidak dapat diubah setelah assignment awal.

Secara ringkas, `let` dan `const` dalam ES6 menyediakan ruang lingkup variabel yang lebih dapat diprediksi dan terkendali dibandingkan dengan `var` dalam ES5. Mereka membantu menghindari masalah umum yang terkait dengan hoisting variabel dan memberikan fleksibilitas untuk memilih antara variabel mutable dan immutable berdasarkan kebutuhan Anda.