---
chapter: 9
description: ஜாவாஸ்கிரிப்டில் Constructor செயல்பாடுகளைப் புரிந்துகொள்வது.
---

## ஜாவாஸ்கிரிப்டில் Constructor செயல்பாடுகளைப் புரிந்துகொள்வது

ஜாவாஸ்கிரிப்டில் உள்ள Constructor செயல்பாடுகள் (Constructor functions) பொருள்களை உருவாக்கவும் தொடங்கவும் பயன்படுத்தப்படும் சிறப்பு செயல்பாடுகளாகும். ஒத்த பண்புகள் மற்றும் முறைகளைக் கொண்ட பல பொருள்களை உருவாக்குவதற்கான வரைபடத்தை வரையறுப்பதற்கான வழியை அவை வழங்குகின்றன.

### ஒரு Constructor செயல்பாட்டை வரையறுத்தல்

ஒரு constructor செயல்பாடு ஒரு வழக்கமான செயல்பாட்டைப் போலவே வரையறுக்கப்படுகிறது, ஆனால் இது வழக்கமான செயல்பாடுகளிலிருந்து வேறுபடுத்துவதற்கு பொதுவாக ஆரம்ப பெரிய எழுத்துடன் (capital letter) பெயரிடப்படுகிறது.

### Constructor செயல்பாட்டிற்கான எடுத்துக்காட்டு

ஒரு constructor செயல்பாட்டின் அடிப்படை எடுத்துக்காட்டு இங்கே:

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

console.log(person1.firstName); // Output: John
console.log(person2.lastName); // Output: Smith
```

இந்த எடுத்துக்காட்டில், `Person` constructor செயல்பாடு புதிதாக உருவாக்கப்பட்ட ஒவ்வொரு பொருளுக்கும் `firstName` மற்றும் `lastName` பண்புகளைத் தொடங்குவதற்குப் பயன்படுகிறது.

### Constructor செயல்பாடுகளில் முறைகளைச் சேர்த்தல் (Adding Methods)

Constructor இன் prototype இல் முறைகளை வரையறுப்பதன் மூலம் ஒரு constructor செயல்பாட்டால் உருவாக்கப்பட்ட பொருள்களில் நீங்கள் முறைகளைச் சேர்க்கலாம்.

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // Output: John Doe
```

### `new` முக்கிய சொல்லைப் பயன்படுத்துதல்

ஒரு constructor செயல்பாட்டிலிருந்து ஒரு பொருளின் instance ஐ உருவாக்க `new` முக்கிய சொல் பயன்படுத்தப்படுகிறது. இது பின்வரும் படிகளைச் செய்கிறது:
1. ஒரு புதிய வெற்று பொருளை உருவாக்குகிறது.
2. `this` முக்கிய சொல்லை புதிய பொருளுக்கு அமைக்கிறது.
3. Constructor செயல்பாட்டை இயக்குகிறது.
4. புதிய பொருளைத் திரும்பப் பெறுகிறது.

### `new` முக்கிய சொல்லுடன் எடுத்துக்காட்டு

```javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car1 = new Car("Toyota", "Corolla");
console.log(car1.make); // Output: Toyota
```

### Constructor செயல்பாடுகள் (vs) Classes

ES6 `class` தொடரியலை அறிமுகப்படுத்தியது, இது constructor செயல்பாடுகள் மற்றும் முறைகளை வரையறுக்க மிகவும் சுருக்கமான மற்றும் படிக்கக்கூடிய வழியை வழங்குகிறது.

### Classes உடன் எடுத்துக்காட்டு

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // Output: John Doe
```

### முடிவுரை

Constructor செயல்பாடுகள் பொருள்களை உருவாக்கவும் தொடங்கவும் ஜாவாஸ்கிரிப்டில் ஒரு அடிப்படை அம்சமாகும். அவை பொருள்களுக்கான வரைபடத்தை வரையறுக்கவும் அவற்றின் prototype இல் முறைகளைச் சேர்க்கவும் உங்களை அனுமதிக்கின்றன. ES6 இன் அறிமுகத்துடன், `class` தொடரியல் அதே செயல்பாட்டை அடைவதற்கு மிகவும் நவீன மற்றும் படிக்கக்கூடிய வழியை வழங்குகிறது.
