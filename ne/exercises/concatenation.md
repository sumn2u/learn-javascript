# Concatenation (कन्काटेनेसन)

In any programming language, string concatenation simply means appending one or more strings to another string. For example, when strings "_World_" and "_Good Afternoon_" are concatenated with string "_Hello_", they form the string "_Hello World, Good Afternoon_". We can concatenate a string in several ways in JavaScript.

कुनै पनि प्रोग्रामिंग भाषामा, स्ट्रिङ संयोजनको अर्थ केवल एक वा बढी स्ट्रिङहरू अर्को स्ट्रिङमा जोड्नु हो। उदाहरणका लागि, जब स्ट्रिङहरू "_World_" र "_Good Afternoon_" स्ट्रिङ "_Hello_" सँग संयोजन गरिन्छ, तिनीहरूले स्ट्रिङ "_Hello World, Good Afternoon_" बनाउँदछन्। हामी जाभास्क्रिप्टमा धेरै तरिकामा स्ट्रिङ संयोजन गर्न सक्दछौं।

### Example:

```javascript
const icon = "👋";

// using template Strings
`hi ${icon}`;

// using join() Method
["hi", icon].join(" ");

// using concat() Method
"".concat("hi ", icon);

//  using + operator
"hi " + icon;

// RESULT
// hi 👋
```

### 📝 Task:

- [ ] Write a program to set the values for `str1`and `str2` so the code prints '_Hello World_' to the console.

- [ ]`str1` र `str2` का लागि मानहरू सेट गर्न प्रोग्राम लेख्नुहोस् ताकि कोडले कन्सोलमा '_Hello World_' मुद्रण गर्दछ।

### 💡 Hints:

- Visit the [concatenation](../strings/concat.md) chapter of strings for more info about string concatenation.

- स्ट्रिङ संयोजनको बारेमा थप जानकारीको लागि [स्ट्रिङको संयोजन](../strings/concat.md) अध्यायमा जानुहोस्।
