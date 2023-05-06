# Inheritance

# उत्तराधिकार

The inheritance is useful for code reusability purposes as it extends existing properties and methods of a class. The `extends` keyword is used to create a class inheritance. &#x20;

उत्तराधिकार कोड पुन: प्रयोज्य उद्देश्यहरूको लागि उपयोगी छ किनकि यसले एक वर्गको अवस्थित गुणहरू र विधिहरू विस्तार गर्दछ। वर्ग वंशानुक्रम सिर्जना गर्न `extends` कीवर्ड प्रयोग गरिन्छ।

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

अभिभावक वर्गको प्रोटोटाइप 'वस्तु' वा 'शून्य' हुनुपर्दछ।
{% endhint %}

The `super` method is used inside a constructor and refers to the parent class. With this, one can access the parent class properties and methods.

'सुपर' विधि कन्स्ट्रक्टर भित्र प्रयोग गरिन्छ र मूल वर्गलाई बुझाउँछ। यसको साथ, एक अभिभावक वर्ग गुणहरू र विधिहरू पहुँच गर्न सक्दछ।

