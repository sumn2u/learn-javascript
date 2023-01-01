# Inheritance

The inheritance is useful for code reusability purposes as it extends existing properties and methods of a class. The `extends` keyword is used to create a class inheritance. &#x20;

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // I have a Camry, it is a Toyota.
```

{% hint style="info" %}
The prototype of the parent class must be an `Object` or `null`.&#x20;
{% endhint %}

The `super` method is used inside a constructor and refers to the parent class. With this, one can access the parent class properties and methods.

