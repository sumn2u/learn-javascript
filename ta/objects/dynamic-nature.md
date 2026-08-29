---
chapter: 9
description: ஜாவாஸ்கிரிப்டில் பொருள்களின் டைனமிக் தன்மையைப் (Dynamic Nature) புரிந்துகொள்வது.
---

## ஜாவாஸ்கிரிப்டில் பொருள்களின் டைனமிக் தன்மையைப் (Dynamic Nature) புரிந்துகொள்வது

ஜாவாஸ்கிரிப்ட் பொருள்கள் டைனமிக் ஆனவை, அதாவது அவற்றின் பண்புகளை (properties) இயங்கும் நேரத்தில் (runtime) சேர்க்கலாம், மாற்றலாம் அல்லது நீக்கலாம். இந்த நெகிழ்வுத்தன்மை சக்திவாய்ந்த மற்றும் தகவமைக்கக்கூடிய குறியீட்டை அனுமதிக்கிறது, ஆனால் எதிர்பாராத நடத்தையைத் தவிர்க்க கவனமாக மேலாண்மை தேவைப்படுகிறது.

### பண்புகளைச் சேர்த்தல் (Adding Properties)

Dot notation அல்லது bracket notation ஐப் பயன்படுத்தி எந்த நேரத்திலும் ஒரு பொருளுக்கு பண்புகளைச் சேர்க்கலாம்.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe"
};

// ஒரு புதிய பண்பைச் சேர்த்தல்
person.age = 30;
console.log( person.age ); // Output: 30

// bracket notation ஐப் பயன்படுத்தி ஒரு பண்பைச் சேர்த்தல்
person["gender"] = "male";
console.log( person.gender ); // Output: male
```

### பண்புகளை மாற்றுதல் (Modifying Properties)

ஏற்கனவே உள்ள பண்புகளின் மதிப்புகளை மீண்டும் ஒதுக்குவதன் (reassigning) மூலம் மாற்றலாம்.

```javascript
const car = {
  make: "Toyota",
  model: "Corolla"
};

// ஒரு பண்பை மாற்றுதல்
car.model = "Camry";
console.log( car.model ); // Output: Camry
```

### பண்புகளை நீக்குதல் (Deleting Properties)

`delete` ஆபரேட்டரைப் பயன்படுத்தி ஒரு பொருளிலிருந்து பண்புகளை அகற்றலாம்.

```javascript
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

// ஒரு பண்பை நீக்குதல்
delete book.year;
console.log( book.year ); // Output: undefined
```

### பண்புகளைச் சரிபார்த்தல் (Checking for Properties)

`in` ஆபரேட்டர் அல்லது `hasOwnProperty` முறையைப் பயன்படுத்தி ஒரு பொருளுக்கு ஒரு குறிப்பிட்ட பண்பு உள்ளதா என்பதை நீங்கள் சரிபார்க்கலாம்.

```javascript
const user = {
  username: "johndoe",
  email: "john@example.com"
};

// `in` ஆபரேட்டரைப் பயன்படுத்துதல்
console.log( "email" in user ); // Output: true

// `hasOwnProperty` முறையைப் பயன்படுத்துதல்
console.log( user.hasOwnProperty( "username" ) ); // Output: true
```

### பண்புகளை மீள்திருப்புதல் (Iterating Over Properties)

`for...in` சுழற்சியைப் பயன்படுத்தி ஒரு பொருளின் பண்புகளை நீங்கள் மீள்திருப்பலாம்.

```javascript
const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science"
};

for (let key in student) {
  if (student.hasOwnProperty( key )) {
    console.log( `${key}: ${student[key]}` );
  }
}
// Output:
// name: Alice
// age: 22
// major: Computer Science
```

### டைனமிக் பண்புப் பெயர்கள் (Dynamic Property Names)

Object literals இல் கணக்கிடப்பட்ட பண்புப் பெயர்களைப் (computed property names) பயன்படுத்துவதன் மூலம் நீங்கள் டைனமிக் பண்புப் பெயர்களைப் பயன்படுத்தலாம்.

```javascript
const propName = "score";
const game = {
  [propName]: 100
};

console.log( game.score ); // Output: 100
```

### முடிவுரை

ஜாவாஸ்கிரிப்ட் பொருள்களின் டைனமிக் தன்மை தரவு கட்டமைப்புகளை நிர்வகிப்பதில் பெரும் நெகிழ்வுத்தன்மையை வழங்குகிறது. நீங்கள் இயங்கும் நேரத்தில் பண்புகளைச் சேர்க்கலாம், மாற்றலாம் மற்றும் நீக்கலாம், பண்புகளின் இருப்பைச் சரிபார்க்கலாம் மற்றும் அவற்றை மீள்திருப்பலாம். இந்த நெகிழ்வுத்தன்மை சக்திவாய்ந்ததாக இருந்தாலும், குறியீட்டு நிலைத்தன்மையையும் முன்கணிப்புத்தன்மையையும் பராமரிக்க கவனமாகக் கையாள வேண்டும்.