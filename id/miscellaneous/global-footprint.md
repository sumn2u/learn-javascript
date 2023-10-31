---
bab: 19
nomor halaman: 101
keterangan: Jejak global merujuk pada dampak atau pengaruh yang sebuah skrip atau aplikasi miliki terhadap cakupan global lingkungan runtime. Ketika sebuah skrip atau aplikasi membuat variabel atau fungsi dalam cakupan global, itu memengaruhi jejak global.
---

# Jejak Global

Jika Anda sedang mengembangkan sebuah modul, yang mungkin akan berjalan pada sebuah halaman web, yang juga menjalankan modul-modul lain, maka Anda harus waspada terhadap tumpang tindih nama variabel.

Misalkan kita sedang mengembangkan modul penghitung:

```javascript
let myCounter = {
  number: 0,
  plusPlus: function () {
    this.number = this.number + 1;
  },
  isGreaterThanTen: function () {
    return this.number > 10;
  },
};
```

> _**Catatan:**_ Teknik ini sering digunakan dengan closure, untuk membuat status internal tidak dapat diubah dari luar.

Modul ini sekarang hanya menggunakan satu nama variabel — `myCounter`. Jika modul lain pada halaman tersebut menggunakan nama seperti `number` atau `isGreaterThanTen`, maka itu aman karena kita tidak akan menimpa nilai-nilai satu sama lain.
