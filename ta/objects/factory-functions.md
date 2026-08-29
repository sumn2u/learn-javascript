---
chapter: 9
description: ஜாவாஸ்கிரிப்டில் பொருள்களுக்கான Factory செயல்பாடுகளைப் புரிந்துகொள்வது.
---

## ஜாவாஸ்கிரிப்டில் பொருள்களுக்கான Factory செயல்பாடுகளைப் புரிந்துகொள்வது

Factory செயல்பாடுகள் (Factory functions) என்பவை பொருள்களை உருவாக்கித் திரும்பப் பெறும் செயல்பாடுகளாகும். `new` முக்கிய சொல் அல்லது constructor செயல்பாடுகளைப் பயன்படுத்தாமல் பல பொருள்களின் instances ஐ உருவாக்குவதற்கான நெகிழ்வான வழியை அவை வழங்குகின்றன.

### ஒரு Factory செயல்பாட்டை வரையறுத்தல்

ஒரு factory செயல்பாடு என்பது ஒரு பொருளைத் திரும்பப் பெறும் ஒரு வழக்கமான செயல்பாடாகும். உருவாக்கப்பட்ட பொருளின் பண்புகளைத் தனிப்பயனாக்க இது அளவுருக்களை (parameters) உள்ளடக்கலாம்.

### ஒரு Factory செயல்பாட்டிற்கான எடுத்துக்காட்டு

ஒரு factory செயல்பாட்டின் அடிப்படை எடுத்துக்காட்டு இங்கே:

```javascript
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}

const person1 = createPerson("John", "Doe");
const person2 = createPerson("Jane", "Smith");

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith
```

இந்த எடுத்துக்காட்டில், `createPerson` செயல்பாடு `firstName`, `lastName` மற்றும் `getFullName` பண்புகளுடன் ஒரு புதிய பொருளைத் திரும்பப் பெறுகிறது.

### Factory செயல்பாடுகளின் நன்மைகள்

1. **`new` முக்கிய சொல் இல்லை**: Factory செயல்பாடுகளுக்கு `new` முக்கிய சொல் தேவையில்லை, இதனால் அவை எளிமையானவை மற்றும் பிழைகள் ஏற்படுவதற்கான வாய்ப்புகள் குறைவு.
2. **உறைபொதியாக்கம் (Encapsulation)**: Factory செயல்பாடுகள் தனிப்பட்ட மாறிகள் (private variables) மற்றும் முறைகளை உறைபொதியாக்க முடியும்.
3. **நெகிழ்வுத்தன்மை (Flexibility)**: அவை நிபந்தனைகளின் அடிப்படையில் பல்வேறு வகையான பொருள்களைத் திரும்பப் பெறலாம்.

### Factory செயல்பாடுகளுடன் உறைபொதியாக்கம்

Factory செயல்பாடுகள் செயல்பாடு நோக்கத்திற்குள் மாறிகளை வரையறுப்பதன் மூலமும், அந்த மாறிகளை அணுகும் முறைகளைக் கொண்ட ஒரு பொருளைத் திரும்பப் பெறுவதன் மூலமும் தனிப்பட்ட தரவை உறைபொதியாக்க முடியும்.

```javascript
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.getCount()); // Output: 1
console.log(counter.decrement()); // Output: 0
```

### வெவ்வேறு பொருள்களைத் திரும்பப் பெறுதல்

Factory செயல்பாடுகள் நிபந்தனைகளின் அடிப்படையில் வெவ்வேறு பொருள்களைத் திரும்பப் பெறலாம், இது பொருள் உருவாக்கத்தில் நெகிழ்வுத்தன்மையை வழங்குகிறது.

```javascript
function createShape(type) {
    if (type === "circle") {
        return {
            type: "circle",
            radius: 10,
            getArea: function() {
                return Math.PI * this.radius * this.radius;
            }
        };
    } else if (type === "square") {
        return {
            type: "square",
            side: 10,
            getArea: function() {
                return this.side * this.side;
            }
        };
    }
}

const circle = createShape("circle");
const square = createShape("square");

console.log(circle.getArea()); // Output: 314.1592653589793
console.log(square.getArea()); // Output: 100
```

### முடிவுரை

Factory செயல்பாடுகள் ஜாவாஸ்கிரிப்டில் பொருள்களை உருவாக்க சக்திவாய்ந்த மற்றும் நெகிழ்வான வழியாகும். `new` முக்கிய சொல்லைத் தவிர்ப்பது, தனிப்பட்ட தரவை உறைபொதியாக்குவது மற்றும் நிபந்தனைகளின் அடிப்படையில் பல்வேறு வகையான பொருள்களைத் திரும்பப் பெறுவது போன்ற நன்மைகளை அவை வழங்குகின்றன. factory செயல்பாடுகளைப் பயன்படுத்துவதன் மூலம், நீங்கள் மிகவும் மட்டுப்படுத்தப்பட்ட (modular) மற்றும் பராமரிக்கக்கூடிய குறியீட்டை எழுதலாம்.
