---
chapter: 15
pageNumber: 75
---
# Static

The `static` keyword defines the static methods or properties for a class.  These methods and properties are called in the class itself.&#x20;

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

console.log(myCar.hello()); // This will throw an error
console.log(Car.hello(myCar));
// Result: Hello Toyota
```

{% hint style="info" %}
One can access the static method or property of another static method of the same class using `this` keyword.  &#x20;
{% endhint %}
