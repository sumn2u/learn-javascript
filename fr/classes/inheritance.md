---
chapter: 15
pageNumber: 77
description: L'héritage fait référence à la capacité d'un objet (sous-classe) à hériter des propriétés et des méthodes d'un autre objet (super-classe). JavaScript prend en charge l'héritage prototypique, ce qui signifie que les objets peuvent hériter de propriétés et de méthodes directement à partir d'autres objets, connus sous le nom de prototypes.
---

# L'héritage

L'héritage est utile pour la réutilisation du code car il étend les propriétés et les méthodes existantes d'une classe. Le mot-clé `extends` est utilisé pour créer un héritage de classe.&#x20;

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "J'ai une " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", c'est un " + this.model;
  }
}

let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()); // J'ai une Camry, c'est une Toyota.
```

{% hint style="info" %}
Le prototype de la classe parente doit être un `Objet` ou un `null`.&#x20;
{% endhint %}

La méthode `super` est utilisée à l'intérieur d'un constructeur et fait référence à la classe parente. Elle permet d'accéder aux propriétés et aux méthodes de la classe parente.
