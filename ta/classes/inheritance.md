---
chapter: 15
pageNumber: 96
description: மரபுரிமை (Inheritance) என்பது மற்றொரு பொருளில் (superclass) இருந்து பண்புகள் மற்றும் முறைகளைப் பெறுவதற்கான ஒரு பொருளின் (subclass) திறனைக் குறிக்கிறது. ஜாவாஸ்கிரிப்ட் முன்மாதிரி மரபுரிமையை (prototypal inheritance) ஆதரிக்கிறது, அதாவது பொருள்கள் மற்ற பொருள்களிலிருந்து நேரடியாக பண்புகள் மற்றும் முறைகளைப் பெறலாம், இது prototypes எனப்படும்.
---
# மரபுரிமை (Inheritance)

ஒரு வகுப்பின் தற்போதைய பண்புகள் (properties) மற்றும் முறைகளை (methods) நீட்டிப்பதால் (extends) குறியீடு மறுபயன்பாட்டு நோக்கங்களுக்காக மரபுரிமை பயனுள்ளதாக இருக்கும். ஒரு வகுப்பு மரபுரிமையை உருவாக்க `extends` முக்கிய சொல் பயன்படுத்தப்படுகிறது. &#x20;

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
பெற்றோர் வகுப்பின் (parent class) முன்மாதிரி (prototype) ஒரு `Object` அல்லது `null` ஆக இருக்க வேண்டும்.&#x20;
{% endhint %}

`super` முறை ஒரு கன்ஸ்ட்ரக்டருக்குள் (constructor) பயன்படுத்தப்படுகிறது மற்றும் இது பெற்றோர் வகுப்பைக் குறிக்கிறது. இதன் மூலம், ஒருவர் பெற்றோர் வகுப்பின் பண்புகள் மற்றும் முறைகளை அணுகலாம். மேலே உள்ள எடுத்துக்காட்டில் நாம் Model துணைப்பிரிவில் (subclass) `super(brand)` ஐப் பயன்படுத்துகிறோம், எனவே அது `Car` சூப்பர்கிளாஸ் பண்புகளைப் பெற முடியும்.

{% hint style="info" %}
சூப்பர்கிளாஸ்கள் (Super classes) பயன்படுத்தப்படும் முக்கிய வகுப்புகளாகும், அதே சமயம் துணைப்பிரிவுகள் (subclasses) என்பவை சூப்பர்கிளாஸ்களிலிருந்து நீட்டிக்கப்பட்ட வகுப்புகளாகும்.
{% endhint %}
