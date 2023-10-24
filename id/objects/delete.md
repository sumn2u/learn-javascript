---
bab: 9
nomor halaman: 62
keterangan: Operator `delete` dapat digunakan untuk **menghapus properti** dari objek. Ketika sebuah properti dihapus, itu dihilangkan dari objek dan tidak dapat diakses atau dienumerasi (misalnya, properti tersebut tidak muncul dalam loop for-in).
---

# Operator Delete

Operator `delete` dapat digunakan untuk **menghapus properti** dari objek. Ketika sebuah properti dihapus, itu dihilangkan dari objek dan tidak dapat diakses atau dienumerasi (misalnya, properti tersebut tidak muncul dalam loop for-in).

Berikut adalah sintaks untuk menggunakan `delete`:

```javascript
delete objek.properti;
```

Sebagai contoh:

```javascript
let dewasa = { usia: 26 },
  anak = Object.create(dewasa);

anak.usia = 8;

delete anak.usia;

/* Menghapus properti usia dari anak, sehingga mengungkapkan usia dari prototipenya, karena properti tersebut tidak dioverride. */

let usiaPrototipe = anak.usia;
// 26, karena anak tidak memiliki properti usia sendiri.
```

{% hint style="warning" %}
Operator `delete` hanya berfungsi pada properti sendiri dari objek, dan tidak pada properti yang diwarisi. Ini juga tidak berfungsi pada properti yang memiliki atribut `configurable` yang diatur ke `false`.
{% endhint %}

Operator `delete` tidak memodifikasi rantai prototip objek. Ini hanya menghapus properti yang ditentukan dari objek dan juga tidak benar-benar menghancurkan objek atau propertinya. Ini hanya membuat properti tidak dapat diakses. Jika Anda perlu menghancurkan objek dan melepaskan memori, Anda dapat mengatur objek menjadi `null` atau menggunakan pengumpul sampah (garbage collector) untuk mengembalikan memori.
