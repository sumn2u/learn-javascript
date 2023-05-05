# Classes

Classes are templates for creating an object. It encapsulates data with code to work on with data. The keyword `class` is used to create a class.  And a specific method called `constructor` is used for creating and initializing an object created with a `class`. An example of car class is shown below.

कक्षा एक वस्तु सिर्जना गर्न टेम्पलेटहरू छन्। यसले डाटाको साथ डाटाको साथ डाटाको साथ डेटाको साथ विनियोजन गर्दछ। कुञ्जीवर्ड `वर्ग" वर्ग "कक्षा सिर्जना गर्न प्रयोग गरीन्छ। र एक विशिष्ट विधि भनिन्छ `कन्भर्टोक्टरलाई सिर्जना गर्न र आरम्भको लागि एक` वर्गको साथ सिर्जना गरिएको वस्तुको लागि प्रयोग गरीन्छ। कार वर्गको एक उदाहरण तल देखाइएको छ।

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

कक्षाको अगाडि परिभाषित गर्नुपर्दछ।
{% endhint %}

In the class body, methods or constructors are defined and executed in `strict mode`. Syntax not adhering to the strict mode results in error.&#x20;

क्लास निकायमा, विधिहरू वा निर्माणकर्ताहरू परिभाषित र `कडा मोडको लागि कार्यान्वयन हुन्छन्। सिन्ट्याक्सले त्रुटिमा सख्त मोड परिणामहरूको खोजी गरिरहेको छैन। & # X20;
