---
bab: 19
nomorHalaman: 81
deskripsi: JavaScript adalah bahasa pemrograman yang populer yang dikenal utamanya untuk digunakan dalam pengembangan web. Salah satu karakteristik utama yang membedakan JavaScript dari banyak bahasa lain adalah sifatnya yang bersifat tunggal. Ini berarti kode JavaScript dieksekusi dalam satu utas utama dari peramban atau lingkungan runtime.
---

# Sifat Tunggal JavaScript

JavaScript adalah bahasa pemrograman tunggal, menjalankan kode secara berurutan dalam satu utas utama. Ia mengandalkan pola asinkron non-blokir untuk menangani tugas-tugas dengan efisien tanpa memblokir utas utama, memastikan responsif dalam aplikasi web. Sementara menyederhanakan konkurensi, ini memerlukan penggunaan yang efektif dari callback dan pemrograman berbasis peristiwa.

## Memahami JavaScript yang Bersifat Tunggal

Berikut adalah beberapa poin kunci untuk memahami eksekusi yang bersifat tunggal dalam JavaScript:

1. **Satu Utas, Satu Tugas:** JavaScript beroperasi dalam satu utas eksekusi tunggal, yang berarti ia hanya dapat melakukan satu tugas pada satu waktu. Utas ini sering disebut sebagai "utas utama" atau "loop peristiwa."

2. **Blokir vs. Non-Blokir:** Kode JavaScript secara alami bersifat non-blokir. Ini berarti ketika operasi yang memakan waktu (seperti permintaan jaringan atau membaca file) dihadapi, JavaScript tidak menunggu hingga selesai. Sebaliknya, ia menugaskan tugas tersebut ke bagian lain dari lingkungan (misalnya, peramban atau runtime Node.js) dan melanjutkan eksekusi kode lainnya.

3. **Pemrograman Asinkron:** Untuk menangani operasi yang memakan waktu tanpa memblokir utas utama, JavaScript sangat mengandalkan pola-pola pemrograman asinkron. Fungsi-fungsi seperti callback, Promises, dan async/await memungkinkan pengembang untuk bekerja dengan operasi asinkron dengan efektif.

4. **Berbasis Peristiwa:** JavaScript sering dijelaskan sebagai "berbasis peristiwa." Ini berarti ia mendengarkan dan merespons peristiwa, seperti interaksi pengguna (klik, penekanan tombol), timer, atau respon jaringan. Ketika peristiwa terjadi, fungsi callback yang sesuai dieksekusi.

5. **Model Konkurensi:** Meskipun JavaScript berjalan dalam satu utas, model konkurensi memungkinkan eksekusi kode bersamaan. Hal ini dicapai melalui mekanisme seperti loop peristiwa, yang mengelola eksekusi tugas-tugas asinkron dengan cara yang memastikan responsivitas dan perilaku non-blokir.

6. **Interaksi dengan Peramban dan Lingkungan:** Dalam pengembangan web, JavaScript berinteraksi dengan Model Objek Dokumen (DOM) peramban dan API peramban lainnya. Untuk menjaga antarmuka pengguna yang responsif, kode JavaScript harus dieksekusi dengan cepat dan efisien serta menugaskan operasi yang memakan waktu ke utas terpisah jika diperlukan.

## Contoh Asinkron Tunggal JavaScript

```javascript
// Simulasi operasi asinkron dengan callback
function simulasiOperasiAsinkron(callback) {
  setTimeout(function () {
    console.log("Operasi asinkron selesai.");
    callback();
  }, 2000); // Mensimulasikan penundaan selama 2 detik
}

console.log("Awal program");

// Memulai operasi asinkron
simulasiOperasiAsinkron(function () {
  console.log("Callback dieksekusi: Menangani hasil.");
});

consolelog("Akhir program");
```

Dalam contoh ini, kami menunjukkan sifat tunggal JavaScript dan bagaimana ia menangani operasi asinkron menggunakan callback.

### Penjelasan Kode:

- Kami mendefinisikan fungsi `simulasiOperasiAsinkron` yang mensimulasikan operasi asinkron menggunakan `setTimeout`. Fungsi ini mengambil callback sebagai argumen, yang akan dieksekusi ketika operasi asinkron selesai.

- Kami memulai program dengan mencatat "Awal program."

- Kami memulai operasi asinkron menggunakan `simulasiOperasiAsinkron`, dengan menyertakan fungsi callback. Fungsi ini akan dieksekusi setelah penundaan selama 2 detik.

- Segera setelah memulai operasi asinkron, kami mencatat "Akhir program."

### Alur Eksekusi:

- Ketika Anda menjalankan kode ini, Anda akan melihat bahwa meskipun operasi asinkron memakan waktu 2 detik untuk selesai, program tidak memblokir. Pesan "Akhir program" dicatat segera setelah memulai operasi asinkron, menunjukkan perilaku non-blokir JavaScript.

- Setelah penundaan 2 detik, pesan "Operasi asinkron selesai." dicatat, diikuti oleh "Callback dieksekusi: Menangani hasil," yang menunjukkan bahwa fungsi callback dieksekusi ketika operasi asinkron selesai.

### Informasi Penting:

- JavaScript beroperasi dalam satu utas, dan operasi asinkron ditangani melalui callback.

- Sifat tunggal memungkinkan JavaScript tetap responsif bahkan selama tugas yang memakan waktu.

- Callback adalah mekanisme fundamental untuk bekerja dengan kode asinkron dalam JavaScript.

## Manfaat dan Tantangan

### Manfaat:

- Kesederhanaan: Eksekusi tunggal menyederhanakan model pemrograman dan mengurangi risiko bug yang terkait dengan konkurensi yang kompleks.
- Prediktabilitas: Sifat tunggal memudahkan untuk memahami urutan eksekusi dan status program Anda.

### Tantangan:

- Operasi yang Memblock: Operasi yang berjalan lama dapat memblokir utas utama, menyebabkan pengalaman pengguna yang buruk, terutama dalam aplikasi web.
- Callback Hell: Penggunaan berlebihan callback (sering disebut sebagai "callback hell") dapat membuat kode sulit dibaca dan dipelihara.
- Kendala Konkurensi: Tugas yang mengikat CPU tidak dapat sepenuhnya memanfaatkan prosesor multi-inti karena JavaScript berjalan dalam satu utas.

Secara ringkas, sifat tunggal JavaScript adalah fitur

yang menentukan dari bahasa ini. Sementara itu menyederhanakan beberapa aspek pemrograman, juga menimbulkan tantangan dalam menangani tugas asinkron dan memastikan aplikasi responsif. Penggunaan yang efektif dari pola asinkron dan pemahaman model berbasis peristiwa adalah penting bagi pengembang JavaScript.
