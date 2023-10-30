---
bab: 16
nomor halaman: 83
keterangan: Navigator adalah objek bawaan yang menyediakan informasi tentang peramban web pengguna dan sistem pengguna. Ini berisi berbagai properti dan metode yang memberikan akses ke informasi tentang lingkungan pengguna, seperti nama peramban, versi, agen pengguna, preferensi bahasa, dan lainnya.
---

# Navigator

`window.navigator` atau `navigator` adalah properti yang **hanya dapat dibaca** dan berisi berbagai metode dan fungsi terkait dengan peramban.&#x20;

Mari kita lihat beberapa contoh navigasi.

1. **navigator.appName**: Ini memberikan nama aplikasi peramban.

   ```javascript
   navigator.appName;
   // "Netscape"
   ```

   > _**Catatan:**_ "Netscape" adalah nama aplikasi yang digunakan untuk IE11, Chrome, Firefox, dan Safari.

2. **navigator.cookieEnabled**: Mengembalikan nilai boolean berdasarkan nilai cookie dalam peramban.

   ```javascript
   navigator.cookieEnabled;
   //true
   ```

3. **navigator.platform**: Memberikan informasi tentang sistem operasi peramban.

   ```javascript
   navigator.platform;
   ("MacIntel");
   ```
