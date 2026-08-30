---
chapter: 4
pageNumber: 38
---
# உள்சரம்

`string.substring()` என்பது JavaScript இல் உள்ள ஒரு உள்ளமைக்கப்பட்ட செயல்பாடு, இது கொடுக்கப்பட்ட சரத்தின் தொடக்க குறியீட்டிலிருந்து இறுதி குறியீட்டு வரையிலான பகுதியை திரும்பப் பெற பயன்படுத்தப்படுகிறது. குறியீட்டு பூஜ்ய `(0)` இலிருந்து தொடங்குகிறது.

தொடரியல்:

`string.substring(StartIndex, EndIndex)`

### தொடரியல்

* `str.substring(startIndex, endIndex)`
* `substring()` முறையைப் பயன்படுத்தி
* template `(``)` literal ஐப் பயன்படுத்தி ([ES6](../es6-concepts/template-literals.md) இல் அறிமுகப்படுத்தப்பட்டது)

`substring()` முறை ஏற்கிறது:

* **அளவுருக்கள்**: `startIndex` மற்றும் `endIndex` (விரும்பினால்) — உள்சரத்தை எடுக்க வேண்டிய தொடக்க/இறுதி குறியீடுகள். `endIndex` சேர்க்கப்படவில்லை என்றால் சரத்தின் முடிவு வரை எடுத்துக்கொள்கிறது.
* **திரும்ப மதிப்பு**: இது கொடுக்கப்பட்ட சரத்தின் ஒரு பகுதியான புதிய சரத்தை திரும்பப் பெறுகிறது. `string.substring()` செயல்பாட்டின் செயல்பாட்டை காட்ட JavaScript குறியீடு:

```javascript
//எடுத்துக்காட்டு 1:
// substr() முறையை விளக்க JavaScript

const str = "GeeksforGeeks";
const result = str.substring(8);
console.log(result);



//வெளியீடு
Geeks

```

```javascript

//எடுத்துக்காட்டு 2: 
// ஒரு சரத்தை variable ஆக எடுத்தல்
let string = "geeksforgeeks";
a = string.substring(-1)
b = string.substring(2.5)
c = string.substring(2.9)

// கொடுக்கப்பட்ட சரத்தின் பகுதியான
// புதிய சரங்களை அச்சிடுகிறது
console.log(a);
console.log(b);
console.log(c);


//வெளியீடு
geeksforgeeks
eksforgeeks
eksforgeeks
```
