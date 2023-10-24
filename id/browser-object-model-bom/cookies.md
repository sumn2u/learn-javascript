---
bab: 16
nomor halaman: 84
keterangan: Cookie adalah potongan-potongan informasi yang disimpan di komputer dan dapat diakses oleh peramban (browser).
---

# Cookies 🍪

Cookie adalah potongan-potongan informasi yang disimpan di komputer dan dapat diakses oleh peramban (browser).

Komunikasi antara peramban web dan server bersifat tanpa keadaan (stateless), yang berarti setiap permintaan diperlakukan secara independen. Ada kasus di mana kita perlu menyimpan informasi pengguna dan membuat informasi tersebut tersedia untuk peramban. Dengan cookie, informasi dapat diambil dari komputer kapan pun diperlukan.

Cookie disimpan dalam bentuk pasangan nama-nilai.

```javascript
book = Learn JavaScript
```

Properti `document.cookie` digunakan untuk membuat, membaca, dan menghapus cookie. Membuat cookie cukup mudah, Anda perlu menyediakan nama dan nilainya.

```javascript
document.cookie = "book=Learn JavaScript";
```

Secara default, sebuah cookie akan terhapus ketika peramban ditutup. Untuk membuatnya bertahan, kita perlu menentukan tanggal kedaluwarsa (dalam waktu UTC).

```javascript
document.cookie =
  "book=Learn JavaScript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

Kita dapat menambahkan parameter untuk menentukan ke path mana cookie tersebut dimiliki. Secara default, cookie tersebut milik halaman saat ini.

```javascript
document.cookie =
  "book=Learn JavaScript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

Berikut adalah contoh sederhana dari sebuah cookie.

```javascript
let cookies = document.cookie;
// Cara sederhana untuk mengambil semua cookie.

document.cookie =
  "book=Learn JavaScript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// Mengatur sebuah cookie
```
