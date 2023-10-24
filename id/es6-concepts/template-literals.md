---
bab: [nomor halaman]
nomorHalaman: [nomor bab]
deskripsi: Template literals, diperkenalkan dalam ES6 (ECMAScript 2015), menawarkan cara kuat untuk membuat string dinamis dalam JavaScript. Mereka memungkinkan Anda untuk menyisipkan ekspresi langsung dalam string, sehingga kode Anda lebih mudah dibaca dan ekspresif. Template literals umumnya digunakan untuk menghasilkan konten dinamis, seperti HTML, dan untuk menyederhanakan manipulasi string dalam JavaScript.
---

# **Template Literals dalam ES6: Membuat String Dinamis**

Template literals, diperkenalkan dalam ES6 (ECMAScript 2015), memberikan cara kuat untuk membuat string dinamis dalam JavaScript. Literal ini dilingkupi oleh tanda kutip terbalik (\` \`) daripada tanda kutip tunggal atau ganda dan memungkinkan penyisipan ekspresi secara mulus langsung dalam string.

**Sintaks:**

```javascript
const stringDinamis = `Ini adalah string dinamis dengan ${ekspresi}`;
```

- `stringDinamis`: Di sinilah Anda menyimpan string dinamis.

- `${ekspresi}`: Di sinilah Anda menyisipkan ekspresi JavaScript, variabel, atau fungsi, yang dievaluasi dan dimasukkan dalam string.

**Contoh:**

Berikut adalah contoh sederhana penggunaan template literals untuk membuat string dinamis:

```javascript
const nama = "John";
const sapaan = `Halo, ${nama}!`;
console.log(sapaan); // Output: Halo, John!
```

**Penggunaan:**

Template literals umumnya digunakan untuk berbagai tujuan, termasuk:

1. **Interpolasi String:** Menyisipkan variabel atau ekspresi dalam string.

2. **String Multi-baris:** Membuat string multi-baris tanpa perlu pemisah baris dan penggabungan.

3. **HTML Dinamis:** Menghasilkan konten HTML secara dinamis untuk aplikasi web.

4. **Tagged Templates:** Memungkinkan pemrosesan kustom template literals melalui fungsi tag template.

Dengan menggunakan template literals, Anda dapat menyederhanakan penggabungan string, meningkatkan keterbacaan kode Anda, dan membuat pembuatan string dinamis menjadi lebih mudah dalam JavaScript.
