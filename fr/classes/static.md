---
chapter: 15
pageNumber: 76
description: >-
  Le mot-clé static définit les méthodes ou les propriétés statiques d'une
  classe. Lorsqu'une méthode ou une propriété est définie comme statique dans
  une classe, elle appartient à la classe elle-même p
---

# Statique

Le mot-clé `static` définit les méthodes ou propriétés statiques d'une classe. Ces méthodes et propriétés sont appelées dans la classe elle-même.

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

console.log(myCar.hello()); // Ceci va générer une erreur
console.log(Car.hello(myCar));
// Résultat : Bonjour Toyota
```

{% hint style="info" %}
On peut accéder à la méthode statique ou à la propriété d'une autre méthode statique de la même classe en utilisant le mot-clé `this`.
{% endhint %}
