# Static

# स्थिर

The `static` keyword defines the static methods or properties for a class.  These methods and properties are called in the class itself.&#x20;

`स्ट्याटिलनेस कुञ्जी शब्दले कक्षाको लागि स्थिर विधिहरू वा गुणहरू परिभाषित गर्दछ। यी विधिहरू र गुणहरू कक्षामा भनिन्छ। & # X20;

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

एकले स्थिर विधि वा समान वर्गको अर्को स्टिकिक विधिको सम्पत्ति `यो` `` कुञ्जी शब्द प्रयोग गर्न सक्दछ। & # X20;
{% endhint %}
