# Creation

# सिर्जना

You can define strings in JavaScript by enclosing the text in single quotes or double quotes.

तपाईं एकल उद्धरण वा डबल उद्धरणमा पाठ संलग्न गरेर जाभास्क्रिप्टमा स्ट्रिङहरू परिभाषित गर्न सक्नुहुन्छ।

```javascript
// Single quotes can be used
let str = "Our lovely string";

// Double quotes as well
let otherStr = "Another nice string";
```

In Javascript, Strings can contain UTF-8 characters.

जाभास्क्रिप्टमा, स्ट्रिङले यूटीएफ-८ क्यारेक्टरहरू समावेश गर्न सक्दछ।

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

You can also use the `String` constructor to create a string object.

तपाईँले स्ट्रिङ वस्तु सिर्जना गर्न 'स्ट्रिङ' कन्स्ट्रक्टर पनि प्रयोग गर्न सक्नुहुन्छ ।

```javascript
const stringObject = new String('This is a string');
```

However, it is generally not recommended to use the `String` constructor to create strings, as it can cause confusion between string primitives and string objects. It is usually better to use string literals to create strings.

तथापि, यो सामान्यतया स्ट्रिङहरू सिर्जना गर्न 'स्ट्रिंग' कन्स्ट्रक्टर प्रयोग गर्न सिफारिस गरिएको छैन, किनकि यसले स्ट्रिंग आदिम र स्ट्रिङ वस्तुहरू बीच भ्रम पैदा गर्न सक्छ। यो सामान्यतया स्ट्रिंग सिर्जना गर्न स्ट्रिंग शाब्दिक प्रयोग गर्न राम्रो छ।

You can also use template literals to create strings. Template literals are strings that are enclosed in backticks `(``)` and can contain placeholders for values. Placeholders are denoted with the `` `${}` `` syntax.

तपाईँले स्ट्रिङहरू सिर्जना गर्न टेम्प्लेट शाब्दिक हरू पनि प्रयोग गर्न सक्नुहुन्छ। टेम्प्लेट शाब्दिक स्ट्रिङहरू हुन् जुन ब्याकटिक `(``)` मा संलग्न हुन्छन् र मानहरूका लागि प्लेसहोल्डरहरू समावेश गर्न सक्दछन्। प्लेसहोल्डरहरूलाई `` `${}` ``  वाक्यरचनाको साथ निरूपित गरिन्छ।

```javascript
const name = 'John';
const message = `Hello, ${name}!`;
```

Template literals can also contain multiple lines and can include any expression inside the placeholders.

टेम्प्लेट शाब्दिकले धेरै लाइनहरू पनि समावेश गर्न सक्दछ र प्लेसहोल्डरहरू भित्र कुनै पनि अभिव्यक्ति समावेश गर्न सक्दछ।

{% hint style="warning" %}

Strings can not be subtracted, multiplied, or divided.

स्ट्रिङहरू घटाउन, गुणा गर्न वा विभाजन गर्न सकिँदैन।
{% endhint %}

{% exercise %}
Use a template literal to create a string that includes the values of `name` and `age`. The string should have the following format: "My name is John and I am 25 years old.".

`name` र `age` का मानहरू समावेश गर्ने स्ट्रिङ सिर्जना गर्न टेम्प्लेट शाब्दिक प्रयोग गर्नुहोस् । स्ट्रिङमा निम्न ढाँचा हुनुपर्दछ: "My name is John and I am 25 years old."।

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
