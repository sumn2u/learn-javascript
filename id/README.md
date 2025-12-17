---
bab: 1
nomor halaman: 7
keterangan: JavaScript adalah bahasa pemrograman tingkat tinggi, terinterpretasi, dan berjenis dinamis yang utamanya digunakan dalam pengembangan web. Ini adalah salah satu teknologi inti yang digunakan untuk membuat situs web interaktif dan dinamis serta aplikasi web.
---

# Bab 1

# Pendahuluan

Komputer umum dalam dunia saat ini, karena mereka mampu melakukan berbagai tugas dengan cepat dan akurat. Mereka digunakan dalam banyak industri yang berbeda, seperti bisnis, perawatan kesehatan, pendidikan, dan hiburan, dan telah menjadi bagian penting dari kehidupan sehari-hari bagi banyak orang. Selain itu, mereka juga digunakan untuk melakukan perhitungan ilmiah dan matematika yang kompleks, menyimpan dan memproses jumlah data yang besar, dan berkomunikasi dengan orang-orang di seluruh dunia.

Pemrograman melibatkan menciptakan seperangkat instruksi, yang disebut program, agar diikuti oleh komputer. Menulis program dapat menjadi tugas yang membosankan dan menjengkelkan pada saat tertentu karena komputer sangat presisi dan memerlukan instruksi yang spesifik untuk menyelesaikan tugas.

![Halaman Pengantar](../.gitbook/assets/intro.png)

Bahasa pemrograman adalah bahasa buatan yang digunakan untuk memberikan instruksi kepada komputer. Mereka digunakan dalam sebagian besar tugas pemrograman dan didasarkan pada cara manusia berkomunikasi satu sama lain. Seperti bahasa manusia, bahasa pemrograman memungkinkan kata-kata dan frasa digabungkan untuk menyatakan konsep baru. Menarik untuk dicatat bahwa cara yang paling efektif untuk berkomunikasi dengan komputer melibatkan penggunaan bahasa yang mirip dengan bahasa manusia.

Di masa lalu, cara utama untuk berinteraksi dengan komputer adalah melalui antarmuka berbasis bahasa seperti dasar dan DOS. Ini sebagian besar digantikan oleh antarmuka visual, yang lebih mudah untuk dipelajari tetapi menawarkan lebih sedikit fleksibilitas. Namun, bahasa pemrograman seperti _JavaScript_ masih digunakan dan dapat ditemukan di peramban web modern dan hampir semua perangkat.

JavaScript (_JS singkatnya_) adalah bahasa pemrograman yang digunakan untuk membuat interaksi dinamis saat mengembangkan halaman web, permainan, aplikasi, dan bahkan server. JavaScript dimulai di Netscape, sebuah peramban web yang dikembangkan pada tahun 1990-an, dan saat ini menjadi salah satu bahasa pemrograman yang paling terkenal dan digunakan.

Pada awalnya, dibuat untuk membuat halaman web menjadi hidup dan hanya dapat berjalan di peramban. Sekarang, ia berjalan di semua perangkat yang mendukung mesin JavaScript. Objek standar seperti [Array](./arrays/README.md), [Date](./date-and-time.md), dan [Math](./numbers/math.md) tersedia di JavaScript, serta operator, struktur kontrol, dan pernyataan. _JavaScript di sisi klien_ dan _JavaScript di sisi server_ adalah versi yang diperluas dari JavaScript inti.

- _JavaScript di sisi klien_ memungkinkan peningkatan dan manipulasi halaman web dan peramban klien. Respons terhadap peristiwa pengguna seperti klik mouse, input formulir, dan navigasi halaman adalah beberapa contohnya.
- _JavaScript di sisi server_ memungkinkan akses ke server, database, dan sistem file.

JavaScript adalah bahasa yang diinterpretasikan. Saat menjalankan Javascript, interpreter menginterpretasikan setiap baris dan menjalankannya. Peramban modern menggunakan teknologi Just In Time (JIT) untuk kompilasi, yang mengkompilasi JavaScript menjadi kode byte yang dapat dijalankan.

{% hint style="info" %}
"LiveScript" adalah nama awal yang diberikan pada JavaScript.
{% endhint %}

### Kode, dan apa yang harus dilakukan dengannya

_Kode_ adalah instruksi tertulis yang membentuk suatu program. Di sini, banyak bab berisi banyak kode, dan penting untuk membaca dan menulis kode sebagai bagian dari pembelajaran cara memprogram. Anda seharusnya tidak hanya sekali melihat contoh-contoh itu - baca dengan cermat dan cobalah untuk memahaminya. Ini mungkin sulit pada awalnya, tetapi dengan latihan, Anda akan

memperbaiki diri. Hal yang sama berlaku untuk latihan-latihan - pastikan Anda benar-benar mencoba untuk menulis solusi sebelum menganggap Anda memahaminya. Ini juga membantu untuk mencoba menjalankan solusi latihan dalam interpreter JavaScript, karena hal ini akan memungkinkan Anda melihat apakah kode Anda berfungsi dengan benar dan mungkin mendorong Anda untuk bereksperimen dan lebih jauh dari latihan-latihan tersebut.

### Konvensi tipografi

Di sini, teks ditulis dengan huruf tetap yang mewakili elemen dari suatu program. Ini bisa menjadi fragmen yang berdiri sendiri atau referensi ke bagian program yang dekat. Program-program, seperti yang ditunjukkan di bawah ini, ditulis dengan cara ini:

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

Terkadang, output yang diharapkan dari suatu program ditulis setelahnya, diawali dengan dua garis miring dan _Hasil_, seperti ini:

```javascript
console.log(txt);

// Hasil: txt = '45491625'
```
