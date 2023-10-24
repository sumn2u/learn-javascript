---
bab: 24
---

# Sistem Berkas

Operasi berkas dalam JavaScript digunakan untuk berinteraksi dengan sistem berkas lingkungan host, yang bisa menjadi web browser (JavaScript sisi klien) atau server (Node.js). JavaScript menyediakan berbagai API dan metode untuk membaca dari dan menulis ke sistem berkas. Operasi-operasi ini sangat penting untuk tugas seperti menyimpan data, membaca berkas konfigurasi, dan memproses berkas yang diunggah oleh pengguna. Berikut adalah gambaran singkat tentang operasi berkas dalam JavaScript:

#### Asynchronous dan Non-Blocking I/O:

Pada Node.js, operasi I/O dapat dilakukan secara asinkron, artinya mereka tidak memblokir eksekusi program. Sebaliknya, mereka ditempatkan dalam antrian, dan program terus menjalankan tugas-tugas lain. Ketika operasi I/O selesai, sebuah fungsi panggilan kembali dipanggil untuk menangani hasilnya. Ini sangat berguna untuk operasi I/O yang mungkin memakan waktu cukup lama.

##### Baca:

Pada contoh ini, Anda menggunakan fungsi fs.readFile untuk membaca data dari berkas 'test.txt' secara asinkron. Ini mengambil fungsi panggilan kembali yang dieksekusi ketika operasi baca selesai. Baris console.log("Ini dicetak pertama") dieksekusi segera setelah memulai operasi baca, dan tidak menunggu pembacaan selesai.

```javascript
const fs = require("fs");
//asinkron
//non-blokir I/O itulah mengapa berjalan terakhir karena membutuhkan waktu lebih lama
fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(err, data);
});
console.log("Ini dicetak pertama");
```

#### Tulis:

Di sini, Anda menggunakan fs.writeFile untuk menulis data ke berkas 'test.txt' secara asinkron. Fungsi panggilan kembali dieksekusi ketika operasi tulis selesai. Ini mencetak "Ini berjalan setelah penulisan ke berkas: ditulis ke berkas" setelah operasi penulisan selesai.

```javascript
fs.writeFile("test.txt", "mahima adalah gadis baik", () => {
  console.log("Ini berjalan setelah penulisan ke berkas: ditulis ke berkas");
});
```

### Synchronous I/O:

Operasi I/O sinkron memblokir eksekusi program sampai operasi selesai. Pada Node.js, operasi sinkron sebaiknya digunakan dengan hati-hati, terutama untuk I/O berkas, karena dapat menyebabkan masalah kinerja dan memblokir lingkaran peristiwa.

#### Baca:

Fungsi fs.readFileSync digunakan untuk membaca berkas secara sinkron. Ini memblokir eksekusi sampai seluruh berkas dibaca, lalu melanjutkan dengan sisa kode. Ini umumnya tidak disarankan karena dapat membuat program menjadi tidak responsif selama pembacaan berkas.

```javascript
const a = fs.readFileSync("test.txt") //Node.js sengaja memblokir
console.log(a.toString())
console.log "Pada akhir")
```

#### Tulis:

fs.writeFileSync digunakan untuk penulisan berkas secara sinkron. Ini memblokir eksekusi program sampai operasi penulisan selesai. Sekali lagi, ini sebaiknya digunakan dengan hati-hati, karena dapat memblokir program untuk jangka waktu yang lama selama operasi penulisan.

```javascript
fs.writeFileSync("test.txt", "mahima adalah gadis baik", () => {
  console.log("Ini adalah sinkron: dengan sengaja proses diblokir");
});
```

Secara keseluruhan, Node.js menyediakan opsi I/O berkas baik secara sinkron maupun asinkron. I/O asinkron umumnya lebih disukai untuk kinerja dan responsivitas yang lebih baik, sedangkan I/O sinkron digunakan hanya ketika diperlukan dan dengan hati-hati, karena dapat memblokir eksekusi program.
