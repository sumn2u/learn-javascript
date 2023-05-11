# स्थिर

'स्थिर' कीवर्डले वर्गको लागि स्थिर विधिहरू वा गुणहरू परिभाषित गर्दछ।  यी विधिहरू र गुणहरू वर्गमा नै भनिन्छ।

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

`this` कीवर्ड प्रयोग गरेर उही वर्गको अर्को स्थिर विधिको स्थिर विधि वा गुण पहुँच गर्न सक्छ।
{% endhint %}
