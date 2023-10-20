---
bab: 16
nomor halaman: 85
keterangan: Objek History mengelola tumpukan riwayat peramban. Saat kita mengunjungi halaman-halaman baru, entri-entri baru dimasukkan ke dalam tumpukan tersebut.
---

# History

Ketika kita membuka peramban web dan menjelajahi sebuah halaman web, itu menciptakan entri baru dalam tumpukan riwayat. Saat kita terus menavigasi ke halaman-halaman yang berbeda, entri-entri baru dimasukkan ke dalam tumpukan.

Untuk mengakses objek riwayat, kita dapat menggunakan:

```javascript
window.history;
// or
history;
```

Untuk menavigasi antara berbagai tumpukan riwayat, kita dapat menggunakan metode `go()`, `forward()`, dan `back()` dari objek **history**.

1. **go()**: Digunakan untuk menavigasi ke URL tertentu dalam tumpukan riwayat.

   ```javascript
   history.go(-1); // berpindah halaman ke belakang
   history.go(0); // me-refresh halaman saat ini
   history.go(); // me-refresh halaman saat ini
   history.go(1); // berpindah halaman ke depan
   ```

> _**Catatan:**_ Posisi halaman saat ini dalam tumpukan riwayat adalah **0**.

2. **back()**: Untuk berpindah halaman ke belakang, kita menggunakan metode `back()`.

   ```javascript
   history.back();
   ```

3. **forward()**: Metode `forward()` memuat entri berikutnya dalam riwayat peramban. Ini mirip dengan mengklik tombol maju (forward) di peramban.

   ```javascript
   history.forward();
   ```
