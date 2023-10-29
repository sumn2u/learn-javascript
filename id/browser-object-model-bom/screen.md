---
bab: 16
nomor halaman: 82
keterangan: Objek `screen` berisi informasi tentang layar di mana jendela saat ini dirender. Ini memungkinkan pengembang untuk mengakses properti terkait ukuran layar pengguna, resolusi, kedalaman warna, dan informasi terkait tampilan lainnya.
---

# Screen

Objek `screen` berisi informasi tentang layar di mana jendela saat ini dirender. Untuk mengakses objek `screen`, kita dapat menggunakan properti `screen` dari objek `window`.

```javascript
window.screen;
//or
screen;
```

Objek `window.screen` memiliki berbagai properti, beberapa di antaranya tercantum di sini:

| Properti      | Deskripsi                                                                                                |
| :------------ | :------------------------------------------------------------------------------------------------------- |
| `height`      | Mewakili tinggi piksel layar.                                                                            |
| `left`        | Mewakili jarak piksel dari sisi kiri layar saat ini.                                                     |
| `pixelDepth`  | Properti hanya-dibaca yang mengembalikan kedalaman bit layar.                                            |
| `top`         | Mewakili jarak piksel dari bagian atas layar saat ini.                                                   |
| `width`       | Mewakili lebar piksel layar.                                                                             |
| `orientation` | Mengembalikan orientasi layar sebagaimana yang ditentukan dalam Screen Orientation API.                  |
| `availTop`    | Properti hanya-dibaca yang mengembalikan piksel pertama dari atas yang tidak diambil oleh elemen sistem. |
| `availWidth`  | Properti hanya-dibaca yang mengembalikan lebar piksel layar yang tidak termasuk elemen sistem.           |
| `colorDepth`  | Properti hanya-dibaca yang mengembalikan jumlah bit yang digunakan untuk mewakili warna.                 |
