---
chapter: 15
pageNumber: 97
description: அணுகல் மாற்றிகள் (Access modifiers) வகுப்பு உறுப்பினர்களின் (பண்புகள் மற்றும் முறைகள்) தெரிவுநிலை மற்றும் அணுகலைக் கட்டுப்படுத்துகின்றன. public, private மற்றும் protected ஆகியவை வெளியிலிருந்து அதன் அணுகலைக் கட்டுப்படுத்த வகுப்பில் பயன்படுத்தப்படும் மூன்று அணுகல் மாற்றிகளாகும். முன்னிருப்பாக, அனைத்து உறுப்பினர்களும் (பண்புகள், புலங்கள், முறைகள் அல்லது செயல்பாடுகள்) வகுப்பிற்கு வெளியே இருந்து பொதுவில் அணுகக்கூடியவை.
---
# அணுகல் மாற்றிகள் (Access Modifiers)

`public` (பொது), `private` (தனியார்) மற்றும் `protected` (பாதுகாக்கப்பட்டவை) ஆகியவை வெளியிலிருந்து அதன் அணுகலைக் கட்டுப்படுத்த வகுப்பில் பயன்படுத்தப்படும் மூன்று அணுகல் மாற்றிகளாகும். முன்னிருப்பாக, அனைத்து உறுப்பினர்களும் (பண்புகள், புலங்கள், முறைகள் அல்லது செயல்பாடுகள்) வகுப்பிற்கு வெளியே இருந்து பொதுவில் அணுகக்கூடியவை.

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

`private` உறுப்பினர்கள் வகுப்பிற்குள் மட்டுமே உள்நாட்டில் அணுக முடியும், வெளியிலிருந்து அணுக முடியாது. Private `#` உடன் தொடங்க வேண்டும்.

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
console.log(myCar.#present("Camry")); // பிழை (Error)
console.log(Car.hello(myCar)); // Hello Toyota
```

`protected` புலங்களை வகுப்பின் உள்ளே இருந்தும் அதை நீட்டிப்பவர்களிடமிருந்தும் (extending) மட்டுமே அணுக முடியும். சுதந்தரிக்கும் (inheriting) வகுப்பும் பெற்றோர் வகுப்பிற்கான (parent class) அணுகலைப் பெறுவதால், உள் இடைமுகத்திற்கு (internal interface) இவை பயனுள்ளதாக இருக்கும். `_` உடன் பாதுகாக்கப்பட்ட புலங்கள்.

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
