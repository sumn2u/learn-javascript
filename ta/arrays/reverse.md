---
chapter: 6
pageNumber: 59 
description: reverse முறை வரிசையின் உறுப்புகளை இடத்திலேயே தலைகீழாக மாற்றுகிறது.
---
# தலைகீழாக்கு

`reverse` முறையை சரங்களின் வரிசைகள், எண்களின் வரிசைகள் மற்றும் பொருட்களின் வரிசைகள் உட்பட எந்த வகையான வரிசையிலும் பயன்படுத்தலாம். எடுத்துக்காட்டாக:

```javascript
let users = [{
  name: "John Smith",
  age: 30
}, {
  name: "Jane Doe",
  age: 25
}];

users.reverse();

console.log(users);

// RESULT: 
[{
  name: "Jane Doe",
  age: 25
}, {
  name: "John Smith",
  age: 30
}];
```

`reverse` முறை அழைக்கும் வரிசை பொருளின் உறுப்புகளை இடத்திலேயே மாற்றி வரிசையை mutate செய்து வரிசையை குறிப்பை திரும்பப் பெறுகிறது.
ஒரு வரிசையின் `reverse` பயன்படுத்துவதற்கான எடுத்துக்காட்டு:

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.reverse();
console.log(numbers); // [3, 2, 1]
```
