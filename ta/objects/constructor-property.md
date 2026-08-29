---
chapter: 9
description: ஜாவாஸ்கிரிப்டில் `constructor` பண்பைப் புரிந்துகொள்வது.
---

## ஜாவாஸ்கிரிப்டில் `constructor` பண்பைப் புரிந்துகொள்வது

ஜாவாஸ்கிரிப்டில் உள்ள `constructor` பண்பு (property) என்பது ஒரு instance இன் prototype ஐ உருவாக்கிய செயல்பாட்டிற்கான ஒரு குறிப்பைக் காட்டுகிறது. பொருளை உருவாக்கப் பயன்படுத்தப்பட்ட செயல்பாட்டைச் சுட்டிக்காட்டும் அனைத்து பொருள்களின் பண்பும் இதுவாகும்.

### `constructor` பண்பு என்றால் என்ன?

`constructor` பண்பு instance ஐ உருவாக்கிய constructor செயல்பாட்டிற்கான குறிப்பைத் திரும்பப் பெறுகிறது. ஒரு பொருளின் வகையை அடையாளம் காண இது பயனுள்ளதாக இருக்கும்.

### `constructor` பண்பிற்கான எடுத்துக்காட்டு

`constructor` பண்பை விளக்குவதற்கான அடிப்படை எடுத்துக்காட்டு இங்கே:

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new Person("John", "Doe");
console.log(person1.constructor); // Output: [Function: Person]
```

இந்த எடுத்துக்காட்டில், `person1` இன் `constructor` பண்பு `Person` செயல்பாட்டை சுட்டிக்காட்டுகிறது.

### புதிய Instances ஐ உருவாக்க `constructor` பண்பைப் பயன்படுத்துதல்

ஒரே வகையின் புதிய instances ஐ உருவாக்க நீங்கள் `constructor` பண்பைப் பயன்படுத்தலாம்:

```javascript
const person2 = new person1.constructor("Jane", "Smith");
console.log(person2.firstName); // Output: Jane
```

### உள்ளமைக்கப்பட்ட பொருள்களில் (Built-in Objects) `constructor` பண்பு

உள்ளமைக்கப்பட்ட ஜாவாஸ்கிரிப்ட் பொருள்களிலும் `constructor` பண்பு கிடைக்கிறது:

```javascript
const arr = [];
console.log(arr.constructor); // Output: [Function: Array]

const obj = {};
console.log(obj.constructor); // Output: [Function: Object]
```

### `constructor` பண்பை மாற்றுதல்

நீங்கள் `constructor` பண்பை மாற்றலாம், ஆனால் இது எதிர்பாராத நடத்தைக்கு வழிவகுக்கும் என்பதால் பொதுவாகப் பரிந்துரைக்கப்படுவதில்லை:

```javascript
function Animal(name) {
    this.name = name;
}

const dog = new Animal("Rex");
dog.constructor = Person;
console.log(dog.constructor); // Output: [Function: Person]
```

### முடிவுரை

`constructor` பண்பு ஜாவாஸ்கிரிப்டில் உள்ள ஒரு பயனுள்ள அம்சமாகும், இது ஒரு instance இன் prototype ஐ உருவாக்கிய செயல்பாட்டைக் குறிப்பிட உங்களை அனுமதிக்கிறது. ஒரு பொருளின் வகையை அடையாளம் காணவும், ஒரே வகையின் புதிய instances ஐ உருவாக்கவும் இதைப் பயன்படுத்தலாம். இருப்பினும், `constructor` பண்பை மாற்றுவது எச்சரிக்கையுடன் செய்யப்பட வேண்டும்.