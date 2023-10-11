---
chapter: अध्याय २०
pageNumber: १०८
titleIndex: २०.५
---
# कन्काटेनेसन

कुनै पनि प्रोग्रामिंग भाषामा, स्ट्रिङ संयोजनको अर्थ केवल एक वा बढी स्ट्रिङहरू अर्को स्ट्रिङमा जोड्नु हो। उदाहरणका लागि, जब स्ट्रिङहरू "_World_" र "_Good Afternoon_" स्ट्रिङ "_Hello_" सँग संयोजन गरिन्छ, तिनीहरूले स्ट्रिङ "_Hello World, Good Afternoon_" बनाउँदछन्। हामी जाभास्क्रिप्टमा धेरै तरिकामा स्ट्रिङ संयोजन गर्न सक्दछौं।

### उदाहरण:

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

### 📝 कार्यहरू:

- [ ] `str1` र `str2` का लागि मानहरू सेट गर्न प्रोग्राम लेख्नुहोस् ताकि कोडले कन्सोलमा '_Hello World_' मुद्रण गर्दछ।

### 💡 सङ्केतहरू:

- स्ट्रिङ संयोजनको बारेमा थप जानकारीको लागि [स्ट्रिङको संयोजन](../strings/concat.md) अध्यायमा जानुहोस्।
