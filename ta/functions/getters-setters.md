---
chapter: 8
description: ஜாவாஸ்கிரிப்டில் Getters மற்றும் Setters ஐப் புரிந்துகொள்வது.
---

## ஜாவாஸ்கிரிப்டில் Getters மற்றும் Setters ஐப் புரிந்துகொள்வது

ஜாவாஸ்கிரிப்டில் உள்ள Getters மற்றும் setters என்பவை ஒரு பொருளின் பண்புகளை அணுகுவதற்கும் புதுப்பிப்பதற்கும் ஒரு வழியை வழங்கும் சிறப்பு முறைகளாகும். ஒரு பண்பு எவ்வாறு அணுகப்படுகிறது மற்றும் மாற்றியமைக்கப்படுகிறது என்பதைக் கட்டுப்படுத்த அவை உங்களை அனுமதிக்கின்றன, மேலும் ஒரு சுருக்க மற்றும் உறைபொதியாக்க (encapsulation) அடுக்கைச் சேர்க்கின்றன.

### Getters மற்றும் Setters என்றால் என்ன?

- **Getters**: ஒரு குறிப்பிட்ட பண்பின் மதிப்பை பெறும் முறைகள்.
- **Setters**: ஒரு குறிப்பிட்ட பண்பின் மதிப்பை அமைக்கும் முறைகள்.

### Getters மற்றும் Setters ஐ வரையறுத்தல்

ஒரு object literal அல்லது ஒரு class க்குள் `get` மற்றும் `set` முக்கிய சொற்களைப் பயன்படுத்தி getters மற்றும் setters ஐ நீங்கள் வரையறுக்கலாம்.

### Object Literals உடன் எடுத்துக்காட்டு

ஒரு object literal இல் getters மற்றும் setters ஐ வரையறுப்பதற்கான எடுத்துக்காட்டு இங்கே:

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
};

console.log(person.fullName); // Output: John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

### Classes உடன் எடுத்துக்காட்டு

ஒரு class இல் getters மற்றும் setters ஐ வரையறுப்பதற்கான எடுத்துக்காட்டு இங்கே:

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
}

let person = new Person("John", "Doe");
console.log(person.fullName); // Output: John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

### Getters மற்றும் Setters ஐப் பயன்படுத்துவதன் நன்மைகள்

1. **உறைபொதியாக்கம் (Encapsulation)**: பண்புகள் எவ்வாறு அணுகப்படுகின்றன மற்றும் மாற்றியமைக்கப்படுகின்றன என்பதைக் கட்டுப்படுத்தவும்.
2. **சரிபார்ப்பு (Validation)**: ஒரு பண்பை அமைக்கும்போது சரிபார்ப்பு தர்க்கத்தைச் சேர்க்கவும்.
3. **கணக்கிடப்பட்ட பண்புகள் (Computed Properties)**: பிற பண்புகளின் அடிப்படையில் கணக்கிடப்படும் பண்புகளை உருவாக்கவும்.

### சரிபார்ப்பிற்கான எடுத்துக்காட்டு

ஒரு setter இல் சரிபார்ப்பு தர்க்கத்தைச் சேர்ப்பதற்கான எடுத்துக்காட்டு இங்கே:

```javascript
class User {
    constructor(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    set username(name) {
        if (name.length < 3) {
            console.error("Username குறைந்தது 3 எழுத்துகள் நீளமாக இருக்க வேண்டும்.");
        } else {
            this._username = name;
        }
    }
}

let user = new User("jsmith");
console.log(user.username); // Output: jsmith
user.username = "jo"; // Output: Username குறைந்தது 3 எழுத்துகள் நீளமாக இருக்க வேண்டும்.
console.log(user.username); // Output: jsmith
```

### முடிவுரை

ஜாவாஸ்கிரிப்டில் பொருள் பண்புகளை நிர்வகிக்க Getters மற்றும் setters ஒரு சக்திவாய்ந்த வழியை வழங்குகின்றன. அவற்றைப் பயன்படுத்துவதன் மூலம், நீங்கள் சரிபார்ப்பு, உறைபொதியாக்கம் மற்றும் கணக்கிடப்பட்ட பண்புகளைச் சேர்க்கலாம், இது உங்கள் குறியீட்டை மேலும் வலுவானதாகவும் பராமரிக்கக்கூடியதாகவும் ஆக்குகிறது.
