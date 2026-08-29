---
chapter: 5
pageNumber: 40
description: if நிபந்தனை நிபந்தனையை மதிப்பிடுகிறது, மேலும் நிபந்தனை உண்மையாக (true) இருந்தால், if அறிக்கையைத் தொடர்ந்து வரும் குறியீட்டுத் தொகுதி (code block) செயல்படுத்தப்படும்; இல்லையெனில், அது தவிர்க்கப்படும்.
---

# If

எளிதான நிபந்தனை (condition) if அறிக்கையாகும் மற்றும் அதன் தொடரியல் (syntax) `if(condition){ இதைச் செய் … }` என்பதாகும். சுருள் அடைப்புக்குறிக்குள் (curly braces) உள்ள குறியீட்டைச் செயல்படுத்த நிபந்தனை உண்மையாக (true) இருக்க வேண்டும். நீங்கள் எடுத்துக்காட்டாக ஒரு சரத்தை (string) சோதிக்கலாம் மற்றும் கீழே விவரிக்கப்பட்டுள்ளபடி அதன் மதிப்பைப் பொறுத்து மற்றொரு சரத்தின் மதிப்பை அமைக்கலாம்.

```javascript
let country = "France";
let weather;
let food;
let currency;

if (country === "England") {
  weather = "horrible";
  food = "filling";
  currency = "pound sterling";
}

if (country === "France") {
  weather = "nice";
  food = "stunning, but hardly ever vegetarian";
  currency = "funny, small and colourful";
}

if (country === "Germany") {
  weather = "average";
  food = "worst thing ever";
  currency = "funny, small and colourful";
}

let message =
  "இது " +
  country +
  ", வானிலை " +
  weather +
  ", உணவு " +
  food +
  " மற்றும் " +
  "நாணயம் " +
  currency;

console.log(message);
// 'இது France, வானிலை nice, உணவு stunning, but hardly ever vegetarian மற்றும் நாணயம் funny, small and colourful'
```

## Nested If-Else (உள்ளமைக்கப்பட்ட If-Else)

ஜாவாஸ்கிரிப்டில், மிகவும் சிக்கலான நிபந்தனை தர்க்கத்தை (conditional logic) உருவாக்க, உள்ளமைக்கப்பட்ட (nested) `if-else` அறிக்கைகளைப் பயன்படுத்தலாம்.

### அடிப்படை தொடரியல் (Basic Syntax)

```javascript
if (condition1) {
  // condition1 உண்மையாக இருக்கும்போது செயல்படுத்த வேண்டிய குறியீடு
} else {
  if (condition2) {
    // condition1 தவறு மற்றும் condition2 உண்மையாக இருக்கும்போது செயல்படுத்த வேண்டிய குறியீடு
  } else {
    // condition1 மற்றும் condition2 இரண்டும் தவறாக இருக்கும்போது செயல்படுத்த வேண்டிய குறியீடு
  }
}
```

பின்வரும் நிரல் ஒரு நபரின் வயதின் அடிப்படையில் அவரின் மாணவர் நிலையை (student status) தீர்மானிக்கிறது மற்றும் அதற்கேற்ப ஒரு செய்தியை அச்சிடுகிறது.

```JavaScript
let age = 20;
let isStudent = true;

if (age >= 18) {
  if (isStudent) {
    console.log("நீங்கள் வயது வந்த மாணவர் (adult student).");
  } else {
    console.log("நீங்கள் வயது வந்தவர், ஆனால் மாணவர் அல்ல.");
  }
} else {
  console.log("நீங்கள் வயது வந்தவர் அல்ல.");
}

// வெளியீடு (Output): நீங்கள் வயது வந்த மாணவர் (adult student).
```

வானிலை ஆலோசனைகளை (weather advice) வழங்க இந்த நிரல் மழை, வெப்பநிலை (temperature) மற்றும் பனி (snow) ஆகியவற்றைச் சரிபார்க்கிறது.

```JavaScript
let temperature = 25;
let isRaining = true;
let isSnowing = false;

if (isRaining) {
  console.log("மழை பெய்கிறது. உங்கள் குடையை மறக்க வேண்டாம்.");

  if (temperature < 10) {
    console.log("மற்றும் குளிராக இருக்கிறது. உங்களுக்கு ஒரு கோட் (coat) கூட தேவைப்படலாம்.");
  }
} else if (isSnowing) {
  console.log("பனி பெய்கிறது. வழுக்கும் சாலைகளுக்கு தயாராக இருங்கள்.");
} else {
  console.log("மழையோ பனியோ இல்லை. வானிலையை அனுபவிக்கவும்!");
}

// வெளியீடு: மழை பெய்கிறது. உங்கள் குடையை மறக்க வேண்டாம்.
```

இந்த நிரல் ஓட்டுநர் உரிமத்திற்கான (driver's license) தகுதியைத் தீர்மானிக்க ஒரு நபரின் வயது, முன் ஓட்டுநர் அனுபவம் மற்றும் எழுத்துத் தேர்வு (written test) நிலை ஆகியவற்றைச் சரிபார்க்கிறது.

```JavaScript
let age = 19;
let hasPriorExperience = true;
let hasPassedWrittenTest = true;

if (age >= 18) {
  if (hasPriorExperience) {
    console.log("வாழ்த்துகள்! நீங்கள் ஓட்டுநர் உரிமத்திற்குத் தகுதியானவர்.");
  } else {
    console.log("மன்னிக்கவும், ஓட்டுநர் உரிமம் பெற முன் ஓட்டுநர் அனுபவம் தேவை.");
  }
} else {
  console.log("மன்னிக்கவும், ஓட்டுநர் உரிமத்திற்கு விண்ணப்பிக்க உங்களுக்கு 18 வயது அல்லது அதற்கு மேல் இருக்க வேண்டும்.");

  if (hasPassedWrittenTest) {
    console.log("நீங்கள் எழுத்துத் தேர்வில் தேர்ச்சி பெற்றுள்ளீர்கள், ஆனால் விண்ணப்பிக்க உங்களுக்கு 18 வயது ஆகும் வரை காத்திருக்க வேண்டும்.");
  } else {
    console.log("நீங்கள் முதலில் எழுத்துத் தேர்வில் தேர்ச்சி பெற வேண்டும் மற்றும் விண்ணப்பிக்க உங்களுக்கு 18 வயது ஆகும் வரை காத்திருக்க வேண்டும்.");
  }
}

// வெளியீடு: வாழ்த்துகள்! நீங்கள் ஓட்டுநர் உரிமத்திற்குத் தகுதியானவர்.

```
