---
chapter: 15
pageNumber: 95
description: static முக்கிய சொல் ஒரு வகுப்பிற்கான (class) நிலையான (static) முறைகள் அல்லது பண்புகளை (properties) வரையறுக்கிறது. ஒரு வகுப்பிற்குள் ஒரு முறை அல்லது பண்பு நிலையானதாக வரையறுக்கப்பட்டால், அது வகுப்பின் நிகழ்வுகளை (instances/objects) விட வகுப்பிற்கே சொந்தமானது.
---
# நிலையானவை (Static)

`static` முக்கிய சொல் ஒரு வகுப்பிற்கான நிலையான முறைகள் அல்லது பண்புகளை வரையறுக்கிறது. இந்த முறைகள் மற்றும் பண்புகள் வகுப்பிலேயே அழைக்கப்படுகின்றன.&#x20;

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

console.log(myCar.hello()); // இது பிழையை (error) எறியும்
console.log(Car.hello(myCar));
// முடிவு: Hello Toyota
```

{% hint style="info" %}
`this` முக்கிய சொல்லைப் பயன்படுத்தி அதே வகுப்பின் மற்றொரு நிலையான முறையின் (static method) நிலையான முறை அல்லது பண்பை ஒருவர் அணுகலாம்.
{% endhint %}
