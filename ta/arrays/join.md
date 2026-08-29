---
chapter: 6
pageNumber: 53
description: join முறை வரிசையை சரமாக மாற்றி அசல் வரிசையை மாற்றாமல் அனைத்தையும் இணைக்கிறது.
---
# Join

`join` முறை, ஒரு வரிசையை சரமாக மாற்றி அனைத்தையும் இணைக்கிறது. இது அசல் வரிசையை மாற்றாது. `join` பயன்படுத்துவதற்கான தொடரியல் இங்கே:

```c
array.join([separator]);
```

`separator` வாதம் விரும்பினால் மட்டுமே மற்றும் முடிவு சரத்தில் உறுப்புகளை பிரிக்க பயன்படுத்தப்படும் எழுத்தை குறிப்பிடுகிறது. தவிர்க்கப்பட்டால், வரிசை உறுப்புகள் காற்புள்ளியால் (`,`) பிரிக்கப்படும்.

எடுத்துக்காட்டாக:

```javascript
let array = ["one", "two", "three", "four"]; 

console.log(array.join(" ")); 

// Result: one two three four
```

{% hint style="working" %}
எந்த separator ஐயும் குறிப்பிடலாம், ஆனால் இயல்புநிலை காற்புள்ளி `(,)`.
{% endhint %}

மேலே உள்ள எடுத்துக்காட்டில், ஒரு இடைவெளி separator ஆக பயன்படுத்தப்படுகிறது. முதலில் `Array.prototype.slice()` முறையைப் பயன்படுத்தி வரிசையாக மாற்றி ஒரு array-like பொருளை (arguments பொருள் அல்லது NodeList பொருள் போன்ற) சரமாக மாற்றவும் `join` ஐப் பயன்படுத்தலாம்:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(', '));
}

printArguments('a', 'b', 'c'); // Result: "a, b, c"
```
