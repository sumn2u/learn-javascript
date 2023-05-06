# Classes (वर्ग)

Classes are templates for creating an object. It encapsulates data with code to work on with data. The keyword `class` is used to create a class.  And a specific method called `constructor` is used for creating and initializing an object created with a `class`. An example of car class is shown below.

वर्गहरू (classes) वस्तु सिर्जना गर्न टेम्प्लेटहरू हुन्। यसले डेटाको साथ काम गर्न कोडको साथ डेटा लाई समाहित गर्दछ। कुञ्जीशब्द 'वर्ग' वर्ग सिर्जना गर्न प्रयोग गरिन्छ।  र 'कन्स्ट्रक्टर' नामक एक विशिष्ट विधि 'वर्ग' को साथ सिर्जना गरिएको वस्तु सिर्जना गर्न र सुरु गर्न प्रयोग गरिन्छ। कार वर्गको एक उदाहरण तल देखाइएको छ।

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Toyota", 2021);
console.log(myCar.age()) // 1
```

{% hint style="info" %}


Class must be defined before its usage.

वर्ग यसको प्रयोग गर्नु अघि परिभाषित गर्नु पर्दछ।
{% endhint %}

In the class body, methods or constructors are defined and executed in `strict mode`. Syntax not adhering to the strict mode results in error.&#x20;

वर्ग शरीरमा, विधिहरू वा कन्स्ट्रक्टरहरू परिभाषित गरिन्छ र `strict mode` मा कार्यान्वयन गरिन्छ। वाक्यविन्यासले कडा मोडको पालना नगर्दा त्रुटि हुन्छ ।
