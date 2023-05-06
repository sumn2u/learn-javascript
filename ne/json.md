# JSON

**J**ava**S**cript **O**bject **N**otation (JSON) is a text-based format for storing and transporting data.  The Javascript Objects can be easily converted into JSON and vice versa.  For example:

जाभास्क्रिप्ट वस्तु नोटेशन (जेएसओएन) डेटा भण्डारण र परिवहनको लागि पाठ-आधारित ढाँचा हो। जाभास्क्रिप्ट वस्तुहरू सजिलैसँग जेएसओएनमा रूपान्तरण गर्न सकिन्छ र यसको विपरीत पनि। उदाहरणका लागि:

```javascript
//  a JavaScript object
let myObj = { name:"Ryan", age:30, city:"Austin" };

// converted into JSON:
let myJSON = JSON.stringify(myObj);
console.log(myJSON);
// Result: '{"name":"Ryan","age":30,"city":"Austin"}'

//converted back to JavaScript object
let originalJSON = JSON.parse(myJSON);
console.log(originalJSON);

// Result: {name: 'Ryan', age: 30, city: 'Austin'}
```

`stringify` and  `parse` are the two methods supported by JSON.
'स्ट्रिङिफाई' र 'पार्स' जेएसओएनद्वारा समर्थित दुई विधिहरू हुन्।

| Method        | Description                                            |
| ------------- | ------------------------------------------------------ |
| `parse()`     | Returns  JavaScript object from the parsed JSON string |
| `stringify()` | Returns JSON string from JavaScript Object             |


| विधि | वर्णन |
| ------------- | ------------------------------------------------------ |
| `parse()`     | पद वर्णन गरिएको जेसन स्ट्रिङबाट जाभास्क्रिप्ट वस्तु फर्काउँछ     |
|`stringify()` | जाभास्क्रिप्ट वस्तुबाट जेसन स्ट्रिङ फर्काउँछ             |


The following data types are supported by JSON.
निम्न डाटा प्रकारहरू JSON द्वारा समर्थित छन्।

* string
* number
* array
* boolean
* object with valid JSON values
* `null`

It can not be `function`,  `date` or `undefined`.

यो 'प्रकार्य', 'मिति' वा 'अपरिभाषित' हुन सक्दैन।