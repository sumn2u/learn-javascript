# Inheritance

# सम्पदा

The inheritance is useful for code reusability purposes as it extends existing properties and methods of a class. The `extends` keyword is used to create a class inheritance. &#x20;

उत्तराधिकार कोड पुन: आतंक उद्देश्यको लागि उपयोगी छ किनकि यसले अवस्थित गुणहरू र कक्षाको विधिहरू विस्तार गर्दछ। एक वर्ग सम्पदा सिर्जना गर्न `विस्तार कुञ्जी शब्द प्रयोग गरीन्छ। & # X20;

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

प्यारेन्ट वर्गको प्रोटोटाइप एक `वस्तु 'वा` nulforn। & # X20;
{% endhint %}

The `super` method is used inside a constructor and refers to the parent class. With this, one can access the parent class properties and methods.

`सुपर` विधि एक निर्वाचन भित्र प्रयोग गरीन्छ र अभिभावक वर्गलाई जनाउँछ। यसको साथ, एकले अभिभावक वर्ग गुणहरू र विधिहरू पहुँच गर्न सक्दछ।

