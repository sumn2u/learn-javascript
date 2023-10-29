---
bab: 15
nomor halaman: 77
keterangan: Warisan mengacu pada kemampuan suatu objek (subkelas) untuk mewarisi properti dan metode dari objek lain (superkelas). JavaScript mendukung pewarisan prototypal, yang berarti bahwa objek dapat mewarisi properti dan metode langsung dari objek lain, yang dikenal sebagai prototipe.
---

# Inheritance

Warisan berguna untuk tujuan penggunaan kembali kode karena memperluas properti dan metode kelas yang ada. Kata kunci `extends` digunakan untuk membuat warisan kelas.&#x20;

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "saya punya " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", ini adalah sebuah " + this.model;
  }
}

let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // saya punya Camry, ini adalah sebuah Toyota.
```

{% hint style="info" %}
Prototipe dari kelas induk harus berupa `Object` atau `null`.&#x20;
{% endhint %}

Metode `super` digunakan di dalam sebuah konstruktor dan merujuk ke kelas induk. Dengan ini, Anda dapat mengakses properti dan metode kelas induk.
