---
layout: editorial
bab: 16
nomor halaman: 79
keterangan: Model objek peramban memungkinkan kita untuk berinteraksi dengan jendela peramban. Melalui model objek ini, kita dapat mengendalikan atau memanipulasi berbagai aspek peramban, seperti jendela, bingkai, riwayat, lokasi, dan lainnya.
---

# Bab 16

# Browser Object Model (BOM)

Model objek peramban memungkinkan kita untuk berinteraksi dengan jendela peramban. Objek `window` mewakili jendela peramban dan didukung oleh semua peramban.

Objek `window` adalah objek default untuk peramban, sehingga kita dapat menentukan `window` atau langsung memanggil semua fungsi.

```javascript
window.alert("Selamat datang di Belajar JavaScript");

alert("Selamat datang di Belajar JavaScript");
```

Dengan cara yang serupa, kita dapat memanggil properti lain di bawah objek `window` seperti `history`, `screen`, `navigator`, `location`, dan sebagainya.
