# Access Modifiers

# पहुँच परिमार्जनकर्ताहरू

`public`, `private`, and `protected` are the three access modifiers used in class to control its access from the outside. By default, all members (properties, fields, methods, or functions) are publicly accessible from outside the class.

`public`, `private`, र `protected`  तीन पहुँच परिमार्जकहरू हुन् जुन कक्षामा बाहिरबाट यसको पहुँच नियन्त्रण गर्न प्रयोग गरिन्छ। पूर्वनिर्धारित रूपमा, सबै सदस्यहरू (गुणहरू, क्षेत्रहरू, विधिहरू, वा प्रकार्यहरू) वर्ग बाहिरबाट सार्वजनिक रूपमा पहुँच योग्य छन्।

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

`private`  members can access only internally within the class and cannot be accessible from outside.  Private should start with `#`.

`private` सदस्यहरूले कक्षाभित्र मात्र आन्तरिक रूपमा पहुँच गर्न सक्दछन् र बाहिरबाट पहुँच योग्य हुन सक्दैनन्।  प्राइभेट `#` बाट सुरु गर्नुपर्छ ।

```javascript
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
  #present(carname) {
    return 'I have a ' + this.carname;
  }
}
let myCar = new Car("Toyota");
console.log(myCar.#present("Camry")); // Error
console.log(Car.hello(myCar)); // Hello Toyota
```

`protected` fields are accessible only from inside the class and those extending it. These are useful for the internal interface as the inheriting class also gains access to the parent class.  Protected fields with `_` .

`protected` क्षेत्रहरू वर्ग भित्र र यसलाई विस्तार गर्नेहरूबाट मात्र पहुँचयोग्य छन्। यी आन्तरिक इन्टरफेसको लागि उपयोगी छन् किनकि उत्तराधिकारी वर्गले अभिभावक वर्गमा पनि पहुँच प्राप्त गर्दछ।  `_` सँग संरक्षित फाँटहरू ।

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  _present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this._present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Toyota", "Camry");
console.log(myCar.show()) // I have a Toyota, it is a Camry
```
