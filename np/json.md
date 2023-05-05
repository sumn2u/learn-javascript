# JSON

**J**ava**S**cript **O**bject **N**otation (JSON) is a text-based format for storing and transporting data.  The Javascript Objects can be easily converted into JSON and vice versa.  For example.

** j ** अैनित ** स्क्रिप्ट ** वस्तु ** संकेत (Jonste) तानियो र डाटा ढुवानीका लागि पाठ-आधारित ढाँचा हो। जाभास्क्रिप्ट वस्तुहरू सजिलैसँग JOSS मा रूपान्तरण गर्न सकिन्छ र यसको विपरित। उदाहरण को लागी।

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

`` र `पार्सनको JOSS द्वारा समर्थित दुई विधिहरू हुन्।

| Method        | Description                                            |

| विद्युतन | वर्णन |
| ------------- | ------------------------------------------------------ |
| `parse()`     | Returns  JavaScript object from the parsed JSON string |

| `पार्स () | पार्सस्क्रिप्ट वस्तुलाई पार्सस्क्रिप्ट वस्तु फर्काउँछ
| `stringify()` | Returns JSON string from JavaScript Object             |

| `स्ट्रिंग () | जाभास्क्रिप्ट वस्तुबाट JSSS स्ट्रि stresses फर्काउँछ



&#x20;The following data types are supported by JSON.

& # X20; निम्न डाटा प्रकारहरू JSON द्वारा समर्थित छन्।

* string
* number
* array
* boolean

* बुलियन
* object with valid JSON values

* वैध JOSSOMS को साथ वस्तु
* `null`

It can not be `function`,  `date` or `undefined`.

यो `कार्य गर्न सक्नुहुन्न,` मिति वा `अपरिभाषितको।

