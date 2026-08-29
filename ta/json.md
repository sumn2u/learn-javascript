---
layout: editorial
chapter: 11
pageNumber: 82
description: JSON (JavaScript Object Notation) என்பது வெவ்வேறு அமைப்புகள் (systems) மற்றும் இயங்குதளங்களுக்கு (platforms) இடையே தரவைப் பிரதிநிதித்துவப்படுத்தவும் பரிமாறவும் பயன்படும் ஒரு இலகுரக (lightweight) தரவு பரிமாற்ற வடிவமாகும். இணைய மேம்பாட்டில் தரவு பரிமாற்றம் மற்றும் சேமிப்பிற்காக இது பரவலாகப் பயன்படுத்தப்படுகிறது.
---

# அத்தியாயம் 11
# JSON

**J**ava**S**cript **O**bject **N**otation (JSON) என்பது தரவைச் சேமிப்பதற்கும் கொண்டு செல்வதற்குமான உரை அடிப்படையிலான (text-based) வடிவமாகும். ஜாவாஸ்கிரிப்ட் பொருள்களை எளிதில் JSON ஆக மாற்றலாம், மற்றும் நேர்மாறாகவும் மாற்றலாம். எடுத்துக்காட்டாக:

```javascript
// ஒரு ஜாவாஸ்கிரிப்ட் பொருள்
let myObj = { name:"Ryan", age:30, city:"Austin" };

// JSON ஆக மாற்றப்பட்டது:
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// முடிவு: '{"name":"Ryan","age":30,"city":"Austin"}'

// மீண்டும் ஜாவாஸ்கிரிப்ட் பொருளாக மாற்றப்பட்டது
let originalJSON = JSON.parse(myJSON);
console.log(originalJSON);

// முடிவு: {name: 'Ryan', age: 30, city: 'Austin'}
```

`stringify` மற்றும் `parse` ஆகியவை JSON ஆதரிக்கும் இரண்டு முறைகளாகும்.

| முறை (Method) | விளக்கம் (Description)                                            |
| ------------- | ------------------------------------------------------ |
| `parse()`     | பாகுபடுத்தப்பட்ட (parsed) JSON சரத்திலிருந்து ஜாவாஸ்கிரிப்ட் பொருளைத் திரும்பப் பெறுகிறது |
| `stringify()` | ஜாவாஸ்கிரிப்ட் பொருளிலிருந்து JSON சரத்தைத் திரும்பப் பெறுகிறது             |

JSON ஆல் பின்வரும் தரவு வகைகள் (data types) ஆதரிக்கப்படுகின்றன.

* [string (சரம்)](./strings/README.md)
* [number (எண்)](./numbers/README.md)
* [array (வரிசை)](./arrays/README.md)
* [boolean (பூலியன்)](./basics/types.md#Boolean)
* செல்லுபடியாகும் JSON மதிப்புகளைக் கொண்ட [object (பொருள்)](./basics/types.md#Object)
* [null](./basics/types.md#NULL)

அது `function`, `date` அல்லது `undefined` ஆக இருக்க முடியாது.
