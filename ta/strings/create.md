---
chapter: 4
pageNumber: 32
---
# உருவாக்கம்

சரங்களை ஒற்றை மேற்கோள்கள் அல்லது இரட்டை மேற்கோள்களில் உரையை இணைப்பதன் மூலம் வரையறுக்கலாம்:

```javascript
// ஒற்றை மேற்கோள்களைப் பயன்படுத்தலாம்
let str = 'நமது அழகான சரம்';

// இரட்டை மேற்கோள்களும் கூட
let otherStr = "இன்னொரு நல்ல சரம்";
```

Javascript இல், சரங்கள் UTF-8 எழுத்துகளை கொண்டிருக்கலாம்:

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

ஒரு சர பொருளை உருவாக்க `String` constructor ஐயும் பயன்படுத்தலாம்:

```javascript
const stringObject = new String('இது ஒரு சரம்');
```

இருப்பினும், சரங்களை உருவாக்க `String` constructor ஐப் பயன்படுத்துவது பொதுவாக பரிந்துரைக்கப்படவில்லை, ஏனென்றால் இது சர primitives மற்றும் சர பொருட்களுக்கு இடையே குழப்பத்தை ஏற்படுத்தலாம். சரங்களை உருவாக்க சர literals ஐப் பயன்படுத்துவது பொதுவாக சிறந்தது.

சரங்களை உருவாக்க template literals ஐயும் பயன்படுத்தலாம். Template literals என்பது backticks `(``)` இல் இணைக்கப்பட்ட சரங்கள் மற்றும் மதிப்புகளுக்கான placeholders ஐ கொண்டிருக்கலாம். Placeholders `` `${}` `` தொடரியலுடன் குறிக்கப்படுகின்றன.

```javascript
const name = 'John';
const message = `வணக்கம், ${name}!`;
```

Template literals பல வரிகளை கொண்டிருக்கலாம் மற்றும் placeholders க்குள் எந்த வெளிப்பாட்டையும் சேர்க்கலாம்.

{% hint style="working" %}
சரங்களை கழிக்கவோ, பெருக்கவோ அல்லது வகுக்கவோ முடியாது.
{% endhint %}

{% exercise %}
`name` மற்றும் `age` இன் மதிப்புகளை உள்ளடக்கிய ஒரு சரத்தை உருவாக்க ஒரு template literal ஐப் பயன்படுத்தவும். சரம் பின்வரும் வடிவத்தில் இருக்க வேண்டும்: "My name is John and I am 25 years old."

{% initial %}
let name = "John";
let age = 25;

// My name is John and I am 25 years old.
let result =  
{% solution %}
let name = "John";
let age = 25;

// My name is John and I am 25 years old.
let result = `My name is ${name} and I am ${age} years old.`

{% validation %}
assert(result == "My name is John and I am 25 years old.");

{% context %}
{% endexercise %}
