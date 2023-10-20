---
bab: 4
nomor halaman: 27
---

# Panjang

Menghitung berapa banyak karakter dalam sebuah string sangat mudah dalam Javascript menggunakan properti `.length`. Properti `length` mengembalikan jumlah karakter dalam string, termasuk spasi dan karakter khusus.

```javascript
let ukuran = "String indah kita".length;
console.log(ukuran);
// ukuran: 17

let ukuranStringKosong = "".length;
console.log(ukuranStringKosong);
// ukuranStringKosong: 0
```

Properti panjang dari string kosong adalah `0`.

{% hint style="warning" %}
Properti `length` adalah properti hanya-baca, sehingga Anda tidak dapat memberikan nilai baru kepadanya.
{% endhint %}
