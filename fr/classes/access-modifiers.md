---
chapter: 15
pageNumber: 78
description: Les modificateurs d'accès contrôlent la visibilité et l'accessibilité des membres de la classe (propriétés et méthodes). public, private et protected sont les trois modificateurs d'accès utilisés dans la classe pour contrôler son accès depuis l'extérieur. Par défaut, tous les membres (propriétés, champs, méthodes ou fonctions) sont accessibles publiquement depuis l'extérieur de la classe.
---

# Modificateurs d'accès

`public`, `private`, et `protected` sont les trois modificateurs d'accès utilisés dans la classe pour contrôler son accès depuis l'extérieur. Par défaut, tous les membres (propriétés, champs, méthodes ou fonctions) sont accessibles publiquement depuis l'extérieur de la classe.

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Bonjour " + x.name;
  }
}
let myCar = new Car("Toyota");
console.log(Car.hello(myCar)); // Hello Toyota
```

Les membres `private` ne peuvent être accédés qu'à l'intérieur de la classe et ne peuvent être accessibles de l'extérieur. Private doit commencer par `#`.

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Bonjour " + x.name;
  }
  #present(carname) {
    return "J'ai une " + this.carname;
  }
}
let myCar = new Car("Toyota");
console.log(myCar.#present("Camry")); // Erreur
console.log(Car.hello(myCar)); // Hello Toyota
```

Les champs `protected` ne sont accessibles qu'à l'intérieur de la classe et de celles qui l'étendent. Ils sont utiles pour l'interface interne, car la classe qui en hérite a également accès à la classe mère. Les champs protégés sont préfixés par `_` .

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  _present() {
    return "J'ai une " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this._present() + ", c'est un " + this.model;
  }
}
let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // J'ai une Toyota, c'est une Camry
```
