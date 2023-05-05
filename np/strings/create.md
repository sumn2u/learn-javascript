# Creation

# क्रिपुन

You can define strings in JavaScript by enclosing the text in single quotes or double quotes:

तपाईं जाभास्क्रिप्टमा स्ट्रिक्रिप्टको परिभाषा गर्न सक्नुहुनेछ एकल उद्धरण वा डबल उद्धरणमा पाठमा प्रयोग गरेर:

```javascript
// Single quotes can be used
let str = "Our lovely string";

// Double quotes as well
let otherStr = "Another nice string";
```

In Javascript, Strings can contain UTF-8 characters:

जाभास्क्रिप्टमा, स्ट्रिंगहरू यूटीएफ -8 वर्णहरू समावेश गर्न सक्छन्:

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

You can also use the `String` constructor to create a string object:

तपाईं स्ट्रिंग वस्तु सिर्जना गर्न `स्ट्रिंग्रिक कन्स्ट्रक्टर पनि प्रयोग गर्न सक्नुहुन्छ:

```javascript
const stringObject = new String('This is a string');
```

However, it is generally not recommended to use the `String` constructor to create strings, as it can cause confusion between string primitives and string objects. It is usually better to use string literals to create strings.

जहाँसम्म, यसलाई स्ट्रिंग्स सिर्जना गर्न स्ट्रिंग स्ट्रिंग स्ट्रिंग स्ट्रिंगरको प्रयोग गर्न सिफारिस गरिएको छैन, किनकि यसले स्ट्रिंग प्रिमिटरहरू र स्ट्रिंग वस्तुहरू बीचको भ्रम उत्पन्न गर्न सक्दछ। यो सामान्यतया स्ट्रिंगहरू सिर्जना गर्न शाब्दिक प्रयोग गर्न राम्रो हुन्छ।

You can also use template literals to create strings. Template literals are strings that are enclosed in backticks `(``)` and can contain placeholders for values. Placeholders are denoted with the `` `${}` `` syntax.

तपाईं प्रेतहरूलाई स्ट्रिंगहरू सिर्जना गर्न टेम्प्लेटहरू पनि प्रयोग गर्न सक्नुहुन्छ। टेम्पलेट शाब्दिक ताराहरू छन् जुन ब्याकटिकहरू `(``)` मा संलग्न छन् र मानहरूको लागि प्लेसहोल्डरहरू समावेश गर्न सक्छ। प्लेसहोल्डरहरू `` `${}` ``वाक्यविन्यासद्वारा जनाइएको छ।

```javascript
const name = 'John';
const message = `Hello, ${name}!`;
```

Template literals can also contain multiple lines and can include any expression inside the placeholders.

टेम्प्लेट शाब्दिकहरूले धेरै लाइनहरू पनि समावेश गर्न सक्दछन् र प्लेसहोल्डर भित्र कुनै अभिव्यक्ति समावेश गर्न सक्छन्।

{% hint style="warning" %}

Strings can not be subtracted, multiplied, or divided.

तारहरू घटाउने, गुणा, वा विभाजित हुन सक्दैन।
{% endhint %}

{% exercise %}
Use a template literal to create a string that includes the values of `name` and `age`. The string should have the following format: "My name is John and I am 25 years old.".

एक स्ट्रिंग सिर्जना गर्न टेम्पलेट शाब्दिक प्रयोग गर्नुहोस् जुन `नाम र` उमेरको मानहरू समावेश गर्दछ। स्ट्रिंग निम्न ढाँचा हुनुपर्दछ: "मेरो नाम जोन हो र म 2 25 बर्षको भएँ।"।

{% initial %}
let name = "John";

नाम दिनुहोस् = "जोन";
let age = 25;

// My name is John and I am 25 years old.

// मेरो नाम जोन हो र म 2 25 बर्षको भएँ।
let result =  
{% solution %}
let name = "John";

नाम दिनुहोस् = "जोन";
let age = 25;

// My name is John and I am 25 years old.

// मेरो नाम जोन हो र म 2 25 बर्षको भएँ।
let result = `My name is ${name} and I am ${age} years old.`

परिणाम दिनुहोस् = `मेरो नाम $ {नाम} छ र म $ {उमेर} वर्ष पुरानो हो

{% validation %}
assert(result == "My name is John and I am 25 years old.");

{% context %}
{% endexercise %}
