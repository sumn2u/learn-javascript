---
layout: editorial
bab: 15
nomor halaman: 75
keterangan: Kelas adalah template untuk membuat objek. Ini mengkapsulasi data dengan kode untuk bekerja dengan data. Kata kunci `class` digunakan untuk membuat kelas.
---

# Bab 15

# Classes

Kelas adalah template untuk membuat objek. Ini mengkapsulasi data dengan kode untuk bekerja dengan data. Kata kunci `class` digunakan untuk membuat kelas. Dan metode khusus yang disebut `constructor` digunakan untuk membuat dan menginisialisasi objek yang dibuat dengan kelas. Berikut adalah contoh kelas mobil.

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Toyota", 2021);
console.log(myCar.age()); // 1
```

{% hint style="info" %}
Kelas harus didefinisikan sebelum digunakan.
{% endhint %}

Di dalam tubuh kelas, metode atau konstruktor didefinisikan dan dieksekusi dalam "mode ketat" (strict mode). Sintaks yang tidak mengikuti mode ketat akan menghasilkan kesalahan.&#x20;
