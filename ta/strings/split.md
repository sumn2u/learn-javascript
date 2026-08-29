---
chapter: 4
pageNumber: 36
---
# பிரிக்கவும்

`split()` முறை ஒரு சரத்தை உள்சரங்களின் பட்டியலாக பிரிக்கிறது மற்றும் அவற்றை வரிசையாக திரும்பப் பெறுகிறது.
* `split()` முறையைப் பயன்படுத்தி
* template literal ஐப் பயன்படுத்தி (ES6 இல் அறிமுகப்படுத்தப்பட்டது)

`split()` முறை ஏற்கிறது:

* **separator (விரும்பினால்)** - ஒவ்வொரு பிரிவும் எங்கே நடக்க வேண்டும் என்பதை விவரிக்கும் வடிவம் (சரம் அல்லது வழக்கமான வெளிப்பாடு).
* **limit (விரும்பினால்)** - கொடுக்கப்பட்ட சரத்தை எத்தனை துண்டுகளாக பிரிக்க வேண்டும் என்பதை வரம்பிடும் ஒரு எதிர்மறை இல்லாத முழு எண்.

```javascript
console.log("ABCDEF".split("")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]

let pattern1 = ".";
// சரத்தை அதிகபட்சம் 2 பகுதிகளாக மட்டும் பிரி
let newText1 = text.split(pattern1, 2);
console.log(newText1); // [ 'Java is awesome', ' Java is fun' ]

const text2 = "JavaScript ;  Python ;C;C++";
let pattern2 = ";";
let newText2 = text2.split(pattern2);
console.log(newText2); // [ 'JavaScript ', '  Python ', 'C', 'C++' ]

// RegEx பயன்படுத்தி
let pattern3 = /\s*(?:;|$)\s*/;
let newText3 = text2.split(pattern3);
console.log(newText3); // [ 'JavaScript', 'Python', 'C', 'C++' ]

//வெளியீடு
[ 'A', 'B', 'C', 'D', 'E', 'F' ]
[ 'Java is awesome', ' Java is fun', '' ]
[ 'Java is awesome', ' Java is fun' ]
[ 'JavaScript ', '  Python ', 'C', 'C++' ]
[ 'JavaScript', 'Python', 'C', 'C++' ]
```
