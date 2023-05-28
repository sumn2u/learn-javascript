---
chapter: अध्याय ७
pageNumber: ५२
titleIndex: ७.१
---
# फर

लुपको सब भन्दा सजिलो रूप फर हो। 

```javascript
for (condition; end condition; change) {
    // do it, do it now
}
```

हामीले `फर` लूप प्रयोग गरेर दस पटक एउटै कोड कसरी कार्यान्वयन गर्छौ, हेरौं ।

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // do this code ten-times
}
```

> _**नोट**_:  `i = i + 1` लागि यसरि लेख्न सकिन्छ `i++`।


एक वस्तु वा एरे `फर इन`  लूपको गुणहरू मार्फत लूप गर्न पनि प्रयोग गर्न सकिन्छ।

```javascript
for (key in object) {
  // code block to be executed
}
```

वस्तु र एरेका लागि फर इन` लूपका उदाहरणहरू तल देखाइएको छ।

```javascript
const person = {fname:"John", lname:"Doe", age:25};
let info = "";
for (let x in person) {
  info += person[x];
}

// Result: info = "JohnDoe25"

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// Result: txt = '45491625'
```

The value of iterable objects such as `Arrays`, `Strings`, `Maps`, `NodeLists` can be looped using `for of` statement.

पुनरावृत्ति योग्य वस्तुहरूको मान जस्तै `एरे`, `स्ट्रिङ्स`, `म्याप्स`, `नोडलिस्ट्स` को लागि कथन प्रयोग गरेर लुप गर्न सकिन्छ।

```javascript
let language = "JavaScript";
let text = "";
for (let x of language) {
text += x;
}
```
