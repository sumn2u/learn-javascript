---
bab: 16
nomor halaman: 80
keterangan: Objek `window` adalah objek global yang mewakili jendela atau tab peramban di mana halaman web saat ini dimuat. Objek `window` berfungsi sebagai objek global untuk JavaScript di sisi klien, artinya variabel dan fungsi yang dideklarasikan tanpa kata kunci `var`, `let`, atau `const` menjadi properti dan metode dari objek `window`.
---

# Window

Objek `window` mewakili jendela peramban dan didukung oleh peramban-peramban. Variabel global, objek, dan fungsi juga merupakan bagian dari objek `window`.

Variabel global adalah **properti**, dan fungsi adalah **metode** dari objek `window`. Mari kita lihat contoh sifat layar. Ini digunakan untuk menentukan ukuran jendela peramban dan diukur dalam piksel.

- `window.innerHeight` - tinggi dalam jendela peramban
- `window.innerWidth` - lebar dalam jendela peramban

> **Catatan**: `window.document` sama dengan `document.location` karena model objek dokumen \(DOM\) adalah bagian dari objek window.

Beberapa contoh metode objek window:

- `window.open()` - membuka jendela baru
- `window.close()` - menutup jendela saat ini
- `window.moveTo()` - memindahkan jendela saat ini
- `window.resizeTo()` - mengubah ukuran jendela saat ini
