---
bab: 15
nomor halaman: 76
keterangan: Kata kunci `static` digunakan untuk mendefinisikan metode atau properti statis dalam sebuah kelas. Ketika sebuah metode atau properti didefinisikan sebagai statis dalam sebuah kelas, maka metode atau properti tersebut milik kelas itu sendiri, bukan milik instansi (objek) dari kelas tersebut.
---

# Static

Kata kunci `static` digunakan untuk mendefinisikan metode atau properti statis dalam sebuah kelas. Metode dan properti ini dipanggil dalam kelas itu sendiri.&#x20;

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Toyota");

console.log(myCar.hello()); // Ini akan menghasilkan kesalahan
console.log(Car.hello(myCar));
// Hasil: Hello Toyota
```

{% hint style="info" %}
Seseorang dapat mengakses metode atau properti statis dari metode statis lain dalam kelas yang sama menggunakan kata kunci `this`.&#x20;
{% endhint %}
