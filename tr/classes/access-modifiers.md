---
chapter: 15
pageNumber: 78
---

# Access Modifiers (Erişim Düzenleyicileri)

`public`, `private` ve `protected`, sınıfın dışarıdan erişimini kontrol etmek için kullanılan üç erişim düzenleyicisidir. Varsayılan olarak, sınıfın tüm öğeleri (özellikler, alanlar, yöntemler veya işlevler) sınıf dışından herkese açıktır.

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

`private` öğelerine yalnızca sınıf içinden erişilebilir ve dışarıdan erişilemez. Private `#` ile başlamalıdır.

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

`protected` öğelerine yalnızca sınıfın içinden ve onu türeterek oluşturan sınıflardan erişilebilir. Bunlar, miras alan sınıfın üst sınıfa da erişim kazanması nedeniyle dahili arayüz için kullanışlıdır. `protected` öğeler `_` ile gösterilir.

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  _present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this._present() + ", it is a " + this.model;
  }
}
let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // I have a Toyota, it is a Camry
```
