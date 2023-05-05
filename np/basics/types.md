# Types

Computers are sophisticated and can make use of more complex variables than just numbers. This is where variable types come in. Variables come in several types and different languages support different types.

कम्प्युटरहरू परिष्कृत छन् र केवल संख्या भन्दा बढी जटिल भ्यारीएबलहरूको प्रयोग गर्न सक्दछ। यो छ जहाँ चर प्रकारहरू आउँदछन्। भ्यारीएबलहरू धेरै प्रकारका हुन्छन् र विभिन्न भाषाहरू विभिन्न प्रकारका समर्थन गर्छन्।

The most common types are:

सबैभन्दा सामान्य प्रकारहरू हुन्:

* **Number**: Numbers can be integers (e.g., `1`, `-5`, `100`) or floating-point values (e.g., `3.14`, `-2.5`, `0.01`). JavaScript does not have a separate type for integers and floating-point values; it treats them both as numbers.

* **नम्बर**: संख्याहरू पूर्णांकहरू हुन सक्छन् (E.g., `1`, `-5`, `100`) वा फ्लोटिंग-पोइन्ट मानहरू (E.g. `3.14`, `-2.5`, `0.01`)। जाभास्क्रिप्टसँग पूर्ण प्रकारसँग पूर्ण प्रकार छैन र फ्लोटिंग-पोइन्ट मानहरूको लागि; यसले दुबैलाई संख्याको रूपमा व्यवहार गर्दछ।
* **String**: Strings are sequences of characters, represented by either single quotes (e.g., `'hello'`) or double quotes (e.g., `"world"`).

* **स्ट्रिंग**: स्ट्रिंगहरू पात्रहरूको अनुक्रम हुन्, या त एकल उद्धरणहरू (E.g. `'हेलो' 'वा डबल उद्धरणहरू (उदाहरण" विश्व "`)।
* **Boolean**: Booleans represent a true or false value. They can be written as `true` or `false` (without quotes).

* **बुलियन**: बुनालीहरूले सही वा गलत मान प्रतिनिधित्व गर्दछ। तिनीहरू `सही" `झूटा (उद्धरण बिना) लेख्न सकिन्छ।
* **Null**: The null type represents a null value, which means "no value." It can be written as `null` (without quotes).

* **null**: NULL प्रकारको शून्य मानको प्रतिनिधित्व गर्दछ, जसको अर्थ "कुनै मान" हुँदैन। यो `nuld` (उद्धरण बिना) को रूपमा लेख्न सकिन्छ।
* **Undefined**: The undefined type represents a value that has not been set. If a variable has been declared, but has not been assigned a value, it is undefined.

* **अपरिभाषित**: अपरिभाषित (Undefined) प्रकारले सेट गरिएको छैन जुन सेट गरिएको छैन। यदि चर घोषित भएको छ, तर एक मूल्य उल्लेख गरिएको छैन, यो अपरिभाषित छ।
* **Object**: An object is a collection of properties, each of which has a name and a value. You can create an object using curly braces (`{}`) and assigning properties to it using name-value pairs.

* **वस्तु**: एक वस्तु(Object) गुणहरूको संग्रह हो, प्रत्येकसँग नाम र मान छ। तपाईं घुमाउरो कोष्ठकहरू (`{}`) प्रयोग गरेर वस्तु सिर्जना गर्न सक्नुहुनेछ र नाम-मूल्य जोडी प्रयोग गरेर गुणहरू तोक्नुहोस्।
* **Array**: An array is a special type of object that can hold a collection of items. You can create an array using square brackets (`[]`) and assigning a list of values to it.

* **एर्रे**: एक एर्रे (Array) वस्तुको विशेष प्रकार हो जुन वस्तुहरूको संग्रह समात्नुहोस्। तपाईं वर्ग कोष्ठक (`[]`) प्रयोग गरेर एर्रे सिर्जना गर्न सक्नुहुनेछ र यसमा मानहरूको सूची तोक्न सक्नुहुनेछ।
* **Function**: A function is a block of code that can be defined and then called by name. Functions can accept arguments (inputs) and return a value (output). You can create a function using the `function` keyword.

* **प्रकार्य**: प्रकार्य (function) कोडको एक ब्लक हो जुन परिभाषित गर्न सकिन्छ र त्यसपछि नामले बोलाउँदछ। कार्यहरू तर्कहरू स्वीकार गर्न सक्दछ (इनपुटहरू) र मान (आउटपुट) फिर्ता गर्नुहोस्। तपाईं `function` शब्द प्रयोग गरेर एक प्रकार्य सिर्जना गर्न सक्नुहुन्छ।

JavaScript is a " _loosely typed_"  language, which means that you don't have to explicitly declare what type of data the variables are. You just need to use the `var` keyword to indicate that you are declaring a variable, and the interpreter will work out what data type you are using from the context, and use of quotes.

जाभास्क्रिप्ट एक "_लूज्ली टाइप गर्नुहोस्_" भाषा, जसको मतलब योको मतलब यो हो कि तपाईसँग स्पष्ट रूपमा वर्णन गर्न चरित्रहरू हुन्। तपाईंले केवल `संस्करण` (var) कुञ्जीवर्ड प्रयोग गर्न आवश्यक छ भनेर संकेत गर्न तपाईंले चर्को रूपमा घोषणा गर्दै हुनुहुन्छ, र दोभाषेले प्रसंगबाट प्रयोग गरिरहनु भएको छ तपाईंले प्रयोग गरिरहनु भएको छ जुन तपाईं कुन डाटा प्रकार प्रयोग गर्नुहुन्छ।

{% exercise %}
Declare three variables and initialize them with the following values: `age` as a number, `name` as a string and `isMarried` as a boolean.

Declare three variables and initialize them with the following values: `age` as a number, `name` as a string and `isMarried` as a boolean.

{% initial %}
let age =
let name = 
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true

IMERIMERIGELE = सत्य

{% validation %}
assert(typeof age === "number" && typeof name === "string" && typeof isMarried === "boolean");

{% context %}
{% endexercise %}

The `typeof` operator is used to checking the datatypes of a variable.

`typeof` अपरेटर चरको डेटाटाइप जाँच गर्न प्रयोग गरीन्छ।

```javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object
```

Data types used in JavaScript can be differentiated into two categories based on containing values.

जाभास्क्रिप्टमा प्रयोग हुने डाटा प्रकारहरू समावेशीकरणको आधारमा दुई कोटिहरूमा भिन्नता हुन सक्छ।

Data types that can contain values:

डाटा प्रकार जुन मानहरू समावेश गर्न सक्दछ:

* `string`
* `number`
* `boolean`

* `Bolean`
* `object`
* `function`



{% hint style="info" %}

`Object`, `Date`, `Array`, `String`, `Number`, र `Boolean`  जाभास्क्रिप्टमा उपलब्ध वस्तुहरूको प्रकार हो।

{% endhint %}

Data types that cannot contain values:

डाटा प्रकार जुन मानहरू समावेश गर्न सक्दैन:

* `null`
* `undefined`

A primitive data value is a simple data value with no additional properties and methods and is not an object. They are immutable, meaning that they can't be altered. There are 7 primitive data types:

एक आदिम डाटा मान कुनै अतिरिक्त गुणहरू र विधिहरूको साथ एक साधारण डाटा मान हो र एक वस्तु होइन। तिनीहरू अपरिवर्तनीय छन्, अर्थ जुन उनीहरू परिवर्तन गर्न सकिदैन। त्यहाँ ७ आदिम डाटा प्रकारहरू छन्:

* string
* number
* bigint
* boolean

* बुलियन
* undefined
* symbol
* null

{% exercise %}
Declare a variable called `person` and initialize it with an object that contains the following properties: `age` as a number, `name` as a string and `isMarried` as a boolean.

एक चर "व्यक्ति 'भनिन्छ र यसलाई एक वस्तुको साथ आरम्भ गर्नुहोस् जुन निम्न गुणहरू समावेश गर्दछ: संख्याको रूपमा `age`, स्ट्रिङको रूपमा `name` र बुलियनको रूपमा `isMarried`।

{% initial %}
let person =

{% solution %}
let person = {
  name: "Mary",
  age: 25,
  isMarried: false
};

{% validation %}
assert(typeof person.age === "number" && typeof person.name === "string" && typeof person.isMarried === "boolean");

{% context %}
{% endexercise %}
