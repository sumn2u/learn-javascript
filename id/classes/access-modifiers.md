---
bab: 15
nomor halaman: 78
keterangan: Akses modifikasi mengontrol visibilitas dan aksesibilitas anggota kelas (properti dan metode). `public`, `private`, dan `protected` adalah tiga akses modifikasi yang digunakan dalam kelas untuk mengontrol aksesnya dari luar. Secara default, semua anggota (properti, field, metode, atau fungsi) dapat diakses secara publik dari luar kelas.
---

# Access Modifiers

`public`, `private`, dan `protected` adalah tiga akses modifikasi yang digunakan dalam kelas untuk mengontrol akses dari luar. Secara default, semua anggota (properti, field, metode, atau fungsi) dapat diakses secara publik dari luar kelas.

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
console.log(Car.hello(myCar)); // Hello Toyota
```

Anggota `private` hanya dapat diakses secara internal dalam kelas dan tidak dapat diakses dari luar. Properti `private` harus dimulai dengan karakter `#`.

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
  #present(carname) {
    return "I have a " + this.carname;
  }
}
let myCar = new Car("Toyota");
console.log(myCar.#present("Camry")); // Error
console.log(Car.hello(myCar)); // Hello Toyota
```

Bidang `protected` hanya dapat diakses dari dalam kelas dan mereka yang memperluasnya. Ini berguna untuk antarmuka internal karena kelas yang mewarisi juga mendapatkan akses ke kelas induk. Bidang yang dilindungi dengan `_` .

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  _present() {
    return "Saya punya " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this._present() + ", ini adalah sebuah " + this.model;
  }
}
let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // Saya punya Toyota, itu Camry
```
