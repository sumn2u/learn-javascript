---
layout: editorial
bab: 12
nomor halaman: 68
keterangan: Dalam pemrograman, kesalahan terjadi karena berbagai alasan, beberapa di antaranya disebabkan oleh kesalahan kode, beberapa karena input yang salah, dan hal-hal lain yang tidak dapat diprediksi. `try catch` membantu mencegah skrip keseluruhan berhenti atau crash saat terjadi kesalahan, memungkinkan kita untuk dengan baik menangani kasus-kasus yang luar biasa dan memberikan perilaku pengganti.
---

# Bab 12

# Penanganan Kesalahan

Dalam pemrograman, kesalahan terjadi karena berbagai alasan, beberapa di antaranya disebabkan oleh kesalahan kode, beberapa disebabkan oleh input yang salah, dan hal-hal lain yang tidak dapat diprediksi. Ketika terjadi kesalahan, kode akan berhenti dan menghasilkan pesan kesalahan biasanya terlihat di konsol.&#x20;

# try... catch

Daripada menghentikan eksekusi kode, kita dapat menggunakan konstruksi `try...catch` yang memungkinkan penanganan kesalahan tanpa menghentikan skrip. Konstruksi `try...catch` terdiri dari dua blok utama: `try` dan kemudian `catch`.&#x20;

```javascript
try {
  // code...
} catch (err) {
  // error handling
}
```

Pertama, kode dalam blok `try` dieksekusi. Jika tidak ada kesalahan yang terjadi, maka blok `catch` dilewati. Namun, jika terjadi kesalahan, eksekusi dalam blok `try` dihentikan, dan kendali program dipindahkan ke blok `catch`. Penyebab kesalahan ditangkap dalam variabel `err`.

```javascript
try {
  // kode...
  alert("Selamat datang di Belajar JavaScript");
  asdk; // kesalahan asdk variable tidak didefinisikan
} catch (err) {
  console.log("Kesalahan telah terjadi");
}
```

{% hint style="warning" %}
`try...catch` bekerja untuk kesalahan saat runtime, yang berarti kode harus dapat dijalankan dan bersifat sinkron.
{% endhint %}

Untuk melempar kesalahan khusus, Anda dapat menggunakan pernyataan `throw`. Objek kesalahan yang dihasilkan oleh kesalahan memiliki dua properti utama.&#x20;

- **name**: nama kesalahan
- **message**: detail tentang kesalahan

{% hint style="info" %}
Jika kita tidak memerlukan pesan kesalahan, blok `catch` dapat diabaikan.
{% endhint %}
