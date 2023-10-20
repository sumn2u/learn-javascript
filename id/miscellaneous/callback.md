---
bab: 19
nomor halaman: 85
keterangan: A callback is a function passed as an argument to another function, executed at a later time, often used for asynchronous operations.Callback hell, also known as the "pyramid of doom," occurs when nested callbacks result in unreadable and unmaintainable code.
---

# Fungsi Callback dalam JavaScript

Fungsi callback adalah konsep dasar dalam JavaScript yang memungkinkan pemrograman asinkron dan berbasis peristiwa. Dokumen Markdown ini memberikan penjelasan mendalam tentang fungsi callback, tujuan mereka, dan cara menggunakannya dengan efektif.

## Apa Itu Fungsi Callback?

- **Fungsi callback** adalah fungsi JavaScript yang diteruskan sebagai argumen ke fungsi lain.
- Biasanya dijalankan atau dieksekusi pada waktu yang lebih lambat, seringkali setelah beberapa operasi asinkron atau peristiwa.
- Callback penting untuk menangani tugas seperti pengambilan data, penanganan peristiwa, dan penanganan perilaku asinkron.

## Mengapa Menggunakan Fungsi Callback?

- **Operasi Asinkron**: Callback penting untuk mengelola operasi asinkron seperti membaca file, permintaan API, dan timer.
- **Penanganan Peristiwa**: Digunakan untuk merespons peristiwa seperti klik tombol, masukan pengguna, atau respons jaringan.
- **Kode Modular**: Callback membantu menulis kode modular dan dapat digunakan kembali dengan memisahkan kepentingan dan mempromosikan prinsip tanggung jawab tunggal.

## Anatomi Fungsi Callback

Sebuah fungsi callback umumnya memiliki struktur berikut:

```javascript
function fungsiCallback(arg1, arg2, ..., callback) {
    // Lakukan beberapa operasi
    // ...

    // Panggil fungsi callback ketika selesai
    callback(hasil);
}
```

- **fungsiCallback** adalah fungsi yang mengambil callback sebagai argumen. Ini dapat melakukan beberapa operasi secara asinkron.
- Pada akhirnya, ia memanggil fungsi **callback**, mengirimkan hasil atau kesalahan.

## Penanganan Kesalahan dalam Callback

Dalam JavaScript, fungsi callback dapat menangani kesalahan dengan konvensi. Umumnya, objek kesalahan dikirimkan sebagai argumen pertama atau argumen kedua digunakan untuk mewakili kesalahan. Pengembang harus memeriksa kesalahan dan menanganinya dengan benar dalam fungsi callback.

## Pendekatan Alternatif untuk Callback

1. **Promises**: Promises menawarkan cara terstruktur untuk mengelola kode asinkron dan kesalahan. Mereka memiliki tiga status: tertunda, terpenuhi, dan ditolak. Promises menggunakan metode `.then()` dan `.catch()` untuk menangani skenario keberhasilan dan kesalahan.

2. **Async/Await**: Async/await adalah tambahan yang lebih baru dalam JavaScript. Ini menyederhanakan kode asinkron dengan memungkinkan pengembang menulisnya dengan gaya yang lebih bersifat sinkron. Ini dibangun di atas Promises dan sangat berguna untuk menangani operasi asinkron dengan alur kode yang lebih linier.

3. **Pengirim Acara**: Di Node.js, kelas `EventEmitter` memungkinkan Anda untuk membuat arsitektur berbasis peristiwa khusus untuk menangani tugas-tugas asinkron.

# Callback Hell (Piramida Callback) dan Contoh

Callback hell, juga dikenal sebagai "piramida malapetaka," adalah masalah umum dalam JavaScript saat bekerja dengan fungsi callback yang bersarang dalam fungsi lain. Fenomena ini terjadi ketika beberapa operasi asinkron dihubungkan satu sama lain, membuat kode sulit dibaca dan dipelihara. Dokumen Markdown ini menjelaskan callback hell dan memberikan contoh sederhana.

## Apa Itu Callback Hell?

- **Callback hell** terjadi ketika fungsi asinkron bersarang satu sama lain, menghasilkan struktur kode yang sangat mendalam.
- Ini membuat kode lebih sulit dipahami, didebug, dan dipelihara karena tingkat indentasi yang berlebihan.
- Callback hell seringkali muncul saat menangani beberapa operasi asinkron secara berurutan, seperti membuat permintaan API atau membaca/menulis file.

## Contoh Callback Hell

```javascript
operasiAsinkron1(function (hasil1) {
  // Callback 1
  operasiAsinkron2(hasil1, function (hasil2) {
    // Callback 2
    operasiAsinkron3(hasil2, function (hasil3) {
      // Callback 3
      operasiAsinkron4(hasil3, function (hasil4) {
        // Callback 4
        operasiAsinkron5(hasil4, function (hasil5) {
          // Callback 5
          // ... dan seterusnya
        });
      });
    });
  });
});
```

## Masalah dengan Callback Hell

- **Keterbacaan**: Callback hell mengakibatkan kode yang sangat bersarang, membuatnya sulit dibaca dan dipahami. Ini dapat menghambat ulasan kode dan kolaborasi.

- **Kemudahan Pemeliharaan**: Saat lebih banyak operasi asinkron ditambahkan, callback hell membuat kode sulit dipelihara. Memodifikasi fungsionalitas yang ada atau menambah fitur baru menjadi berisiko kesalahan.

- **Penanganan Kesalahan**: Mengelola kesalahan menjadi kompleks dalam fungsi callback bersarang. Menangani pengecualian dan menyebar kesalahan ke tingkat yang lebih tinggi bisa menjadi tantangan.

## Mengurangi Callback Hell

### 1. Fungsi Beranama

- Pecah fungsi callback menjadi fungsi berbeda yang berdiri sendiri. Ini meningkatkan keterbacaan kode dengan memberikan nama yang bermakna pada setiap fungsi.

### 2. Promises

- Promises menyediakan cara yang lebih terstruktur untuk mengelola kode asinkron. Mereka memungkinkan Anda untuk mengaitkan operasi asinkron, membuat kode lebih linear dan lebih mudah dibaca.

###

3. Async/Await

- Async/await adalah tambahan yang lebih baru dalam JavaScript. Ini menyederhanakan kode asinkron dengan memungkinkan Anda menulisnya dengan gaya yang lebih bersifat sinkron. Ini dibangun di atas Promises dan sangat berguna untuk menangani operasi asinkron dengan alur kode yang lebih linier.

### 4. Modularisasi

- Susun kode ke dalam modul yang lebih kecil dan dapat digunakan kembali. Ini mengurangi kompleksitas fungsi individu dan memudahkan pengelolaan operasi asinkron.

## Kesimpulan

Penanganan kesalahan yang efektif sangat penting dalam pemrograman asinkron. Callback dapat menangani kesalahan sesuai konvensi, tetapi pendekatan alternatif seperti Promises, async/await, dan pengirim acara memberikan cara yang lebih terstruktur dan mudah dibaca untuk mengelola kode asinkron. Pilihan pendekatan mana yang digunakan tergantung pada persyaratan khusus dan preferensi gaya pemrograman.
Callback hell adalah masalah umum dalam JavaScript saat bekerja dengan fungsi callback yang bersarang dalam fungsi lain untuk menangani operasi asinkron. Ini dapat menghasilkan kode yang sulit dibaca, dipelihara, dan didebug. Strategi mitigasi, seperti penggunaan fungsi beranama, Promises, async/await, atau modularisasi, dapat secara signifikan meningkatkan struktur dan keterbacaan kode saat menangani tugas asinkron, membuat kode Anda lebih mudah dipelihara dan tahan kesalahan.
