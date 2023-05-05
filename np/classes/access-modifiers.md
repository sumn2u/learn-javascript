# Access Modifiers

# पहुँच परिमार्जनकर्ताहरू

`public`, `private`, and `protected` are the three access modifiers used in class to control its access from the outside. By default, all members (properties, fields, methods, or functions) are publicly accessible from outside the class.

`सार्वजनिक ',` निजी `, र` संरक्षित परीक्षणहरू बाहिरबाट प्रयोग गरिएको तीन पहुँच परिमार्जनकर्ता हुन् बाहिरबाट यसको पहुँच यसको पहुँचलाई नियन्त्रणमा राख्नको लागि। पूर्वनिर्धारित द्वारा, सबै सदस्यहरू (गुणहरू, क्षेत्रहरू, विधिहरू, विधिहरू, विधिहरू) विधिहरू सार्वजनिक रूपमा क्लास बाहिरबाट सार्वजनिक पहुँच योग्य छन्।

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

`निजी` सदस्यहरू कक्षा भित्र आन्तरिक रूपमा पहुँच गर्न सक्दछ र बाहिरबाट पहुँच योग्य हुन सक्दैन। निजी `#` को साथ शुरू गर्नुपर्दछ।

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

`संरक्षित क्षेत्रहरू कक्षा भित्रबाट र यसले विस्तार गर्नेहरू पहुँचयोग्य छन्। यी अनुभवी वर्गले पनि अभिभावकको कक्षामा पहुँच प्राप्त गरेपछि आन्तरिक ईन्टरफेसका लागि उपयोगी छ। सुरक्षित क्षेत्रहरू `_` को साथ।

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
