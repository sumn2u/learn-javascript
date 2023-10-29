---
bab: 4
nomor halaman: 26
---

# Ganti

Metode `replace` memungkinkan kita untuk mengganti karakter, kata, atau kalimat dengan sebuah string. Sebagai contoh.

```javascript
let str = "Halo Dunia!";
let new_str = str.replace("Halo", "Hi");

console.log(new_str);

// Hasil: Hi Dunia!
```

{% hint style="warning" %}
Untuk mengganti nilai pada semua instansi dari ekspresi reguler, tambahkan modifikasi `g`.
{% endhint %}

Ini mencari sebuah string untuk nilai atau ekspresi reguler, dan mengembalikan string baru dengan nilai yang diganti. Ini tidak mengubah string asli. Mari kita lihat contoh penggantian global dan tanda besar/ketidak-pekaan huruf.

```javascript
let teks = "Pak Biru memiliki rumah biru dan mobil biru";
let hasil = teks.replace(/biru/gi, "merah");

console.log(hasil);
//Hasil: Pak Merah memiliki rumah merah dan mobil merah
```
