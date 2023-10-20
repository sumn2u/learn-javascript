---
bab: 19
nomor halaman: 102
keterangan: Dalam pemrograman, kesalahan dapat terjadi saat menulis kode. Ini bisa disebabkan oleh kesalahan sintaksis atau logika. Proses menemukan kesalahan bisa memakan waktu dan sulit, dan disebut debugging kode.
---

# Debugging

Dalam pemrograman, kesalahan dapat terjadi saat menulis kode. Ini bisa disebabkan oleh kesalahan sintaksis atau logika. Proses menemukan kesalahan bisa memakan waktu dan sulit, dan disebut debugging kode.

Untungnya, sebagian besar browser modern dilengkapi dengan debugger bawaan. Debugger ini dapat diaktifkan dan dinonaktifkan, memaksa kesalahan dilaporkan. Juga memungkinkan untuk mengatur breakpoint selama eksekusi kode untuk menghentikan eksekusi dan memeriksa variabel. Untuk ini, seseorang harus membuka jendela debugging dan menempatkan kata kunci `debugger` dalam kode JavaScript. Eksekusi kode dihentikan di setiap breakpoint, memungkinkan pengembang untuk memeriksa nilai-nilai JavaScript dan melanjutkan eksekusi kode.

Seseorang juga dapat menggunakan metode `console.log()` untuk mencetak nilai-nilai JavaScript di jendela debugger.

```javascript
const a = 5,
  b = 6;
const c = a + b;
console.log(c);
// Hasil: c = 11;
```

## Alat Pengembang Browser

Browser modern dilengkapi dengan alat pengembang yang kuat untuk membantu debugging JavaScript, memeriksa HTML dan CSS, serta memonitor permintaan jaringan. Berikut adalah gambaran singkat tentang beberapa alat penting:

**Chrome DevTools:** Alat pengembang Google Chrome menawarkan berbagai fitur untuk debugging aplikasi web.

**Firefox DevTools:** Alat pengembang Mozilla Firefox adalah pilihan yang sangat baik, dengan kemampuan serupa.

**Microsoft Edge DevTools:** Untuk pengguna Microsoft Edge, alat pengembang bawaan menyediakan fitur debugging penting.

**Safari Web Inspector:** Safari's Web Inspector adalah seperangkat alat yang kuat untuk debugging dan profil aplikasi web.

## Menggunakan Breakpoint

Browser modern menawarkan alat pengembang dengan kemampuan debugging.
Atur breakpoint untuk menghentikan eksekusi kode dan memeriksa variabel dan tumpukan panggilan.
Langkah melalui kode untuk memahami alirannya.
Alat Pengembang Browser

Browser menyediakan seperangkat alat pengembang yang memungkinkan Anda untuk memeriksa HTML, CSS, dan JavaScript.
Anda dapat mengaksesnya dengan mengklik kanan pada halaman web dan memilih "Inspect" atau dengan menekan `F12` atau `Ctrl+Shift+I`.
Fitur utama meliputi:

**Konsol:** Lihat dan interaksi dengan keluaran konsol.

**Elemen:** Periksa dan modifikasi DOM.

**Sumber:** Debug JavaScript dengan breakpoint dan ekspresi pantau.

**Jaringan:** Pantau permintaan dan respons jaringan.
Menggunakan Pernyataan Debugger

Masukkan pernyataan debugger dalam kode Anda untuk membuat breakpoint secara berprogram.
Ketika kode menemui debugger, itu akan menghentikan eksekusi dan membuka alat pengembang browser.
