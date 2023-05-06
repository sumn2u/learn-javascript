# Types (प्रकारहरू)

Computers are sophisticated and can make use of more complex variables than just numbers. This is where variable types come in. Variables come in several types and different languages support different types.

कम्प्युटरहरू परिष्कृत छन् र केवल संख्याहरू भन्दा बढी जटिल चरहरूको प्रयोग गर्न सक्दछन्। यो हो जहाँ चर प्रकारहरू आउँछन्। भेरिएबलहरू धेरै प्रकारहरूमा आउँछन् र विभिन्न भाषाहरूले विभिन्न प्रकारहरूलाई समर्थन गर्दछ।

The most common types are:

सामान्य प्रकार चरहरू निम्न अनुसारका छन्:

* **Number**: Numbers can be integers (e.g., `1`, `-5`, `100`) or floating-point values (e.g., `3.14`, `-2.5`, `0.01`). JavaScript does not have a separate type for integers and floating-point values; it treats them both as numbers.

* **नम्बर**: संख्याहरू पूर्णांकहरू (E.g., `1`, `-5`, `100`) वा फ्लोटिंग-पोइन्ट मानहरू (E.g. `3.14`, `-2.5`, `0.01`) हुन सक्छन्। जाभास्क्रिप्टमा पूर्णांक र फ्लोटिंग-पोइन्ट मानहरूको लागि छुट्टै प्रकार छैन; यसले ती दुवैलाई संख्याको रूपमा व्यवहार गर्दछ।
* **String**: Strings are sequences of characters, represented by either single quotes (e.g., `'hello'`) or double quotes (e.g., `"world"`).

* **स्ट्रिंग**: स्ट्रिङहरू क्यारेक्टरहरूको अनुक्रम हरू हुन्, जुन एकल उद्धरणहरू (उदाहरणका लागि, `"हेलो"`) वा डबल उद्धरणहरू (उदाहरणका लागि, `"संसार"`) द्वारा प्रतिनिधित्व गरिन्छ।
* **Boolean**: Booleans represent a true or false value. They can be written as `true` or `false` (without quotes).

* **बुलियन**: बुलियनहरूले साँचो वा गलत मूल्यको प्रतिनिधित्व गर्दछ। तिनीहरूलाई 'सत्य' वा 'गलत' (उद्धरण बिना) को रूपमा लेख्न सकिन्छ।
* **Null**: The null type represents a null value, which means "no value." It can be written as `null` (without quotes).

* **null**: NULL प्रकारको शून्य मानको प्रतिनिधित्व गर्दछ, जसको अर्थ "कुनै मान" हुँदैन। यो `null` (उद्धरण बिना) को रूपमा लेख्न सकिन्छ।
* **Undefined**: The undefined type represents a value that has not been set. If a variable has been declared, but has not been assigned a value, it is undefined.

* **अपरिभाषित**: अपरिभाषित (Undefined) प्रकारले सेट नगरिएको मानलाई प्रतिनिधित्व गर्दछ । यदि चर घोषणा गरिएको छ, तर मान निर्दिष्ट गरिएको छैन भने, यो अपरिभाषित छ।
 
* **Object**: An object is a collection of properties, each of which has a name and a value. You can create an object using curly braces (`{}`) and assigning properties to it using name-value pairs.

* **वस्तु**: वस्तु (object) गुणहरूको संग्रह हो, जसमध्ये प्रत्येकको नाम र मान छ। तपाईँले घुँघराले ब्रेसेस (`{}`) प्रयोग गरेर वस्तु सिर्जना गर्न सक्नुहुन्छ र नाम-मान जोडी प्रयोग गरेर यसमा गुण हरू निर्दिष्ट गर्न सक्नुहुन्छ ।
* **Array**: An array is a special type of object that can hold a collection of items. You can create an array using square brackets (`[]`) and assigning a list of values to it.

* **एर्रे**: एरे एक विशेष प्रकारको वस्तु हो जसले वस्तुहरूको संग्रह राख्न सक्छ। तपाईँले वर्ग कोष्ठक (`[]`) प्रयोग गरेर र यसमा मानहरूको सूची निर्दिष्ट गरेर सरणी सिर्जना गर्न सक्नुहुन्छ ।
* **Function**: A function is a block of code that can be defined and then called by name. Functions can accept arguments (inputs) and return a value (output). You can create a function using the `function` keyword.

* **प्रकार्य**: प्रकार्य (function) कोडको ब्लक हो जुन परिभाषित गर्न सकिन्छ र त्यसपछि नामद्वारा कल गर्न सकिन्छ। प्रकार्यहरूले तर्कहरू (इनपुटहरू) स्वीकार गर्न र मान (निर्गत) फर्काउन सक्छ। तपाईँले प्रकार्य `function` कुञ्जीशब्द प्रयोग गरेर प्रकार्य सिर्जना गर्न सक्नुहुन्छ ।

JavaScript is a " _loosely typed_"  language, which means that you don't have to explicitly declare what type of data the variables are. You just need to use the `var` keyword to indicate that you are declaring a variable, and the interpreter will work out what data type you are using from the context, and use of quotes.


जाभास्क्रिप्ट एक `_लूज्ली टाइप_` भाषा हो, जसको अर्थ यो हो कि तपाईले स्पष्ट रूपमा घोषणा गर्नु पर्दैन कि चरहरू कुन प्रकारको डेटा हो। तपाईँले भेरिएबल घोषणा गर्दै हुनुहुन्छ भन्ने सङ्केत गर्न तपाईँले 'भर्' कुञ्जीशब्द प्रयोग गर्न आवश्यक छ, र दुभाषियाले तपाईँले सन्दर्भबाट कुन डेटा प्रकार प्रयोग गर्दै हुनुहुन्छ, र उद्धरणहरूको प्रयोग गर्नुहुन्छ भनेर काम गर्नेछ।

{% exercise %}
Declare three variables and initialize them with the following values: `age` as a number, `name` as a string and `isMarried` as a boolean.

तीन चरहरू घोषणा गर्नुहोस् र तिनीहरूलाई निम्न मानहरूसँग सुरु गर्नुहोस्: संख्याको रूपमा `age`, स्ट्रिङको रूपमा `name` र बुलियनको रूपमा `isMarried` ।

{% initial %}
let age =
let name = 
let isMarried =
{% solution %}
let age = 30
let name = "Cecilia"
let isMarried = true


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

जाभास्क्रिप्टमा प्रयोग गरिएका डेटा प्रकारहरू समावेश मानहरूको आधारमा दुई भागमा बिभाजन गर्न सकिन्छ।


Data types that can contain values:

डाटा प्रकार जुन मानहरू समावेश गर्न सक्दछ:

* `string`
* `number`
* `boolean`
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

एक आदिम डेटा मान कुनै अतिरिक्त गुण र विधिहरूको साथ एक साधारण डेटा मान हो र यो वस्तु होइन। तिनीहरू अपरिवर्तनीय छन्, यसको अर्थ तिनीहरूलाई परिवर्तन गर्न सकिँदैन। त्यहाँ ७ आदिम डेटा प्रकारहरू छन्:

* string
* number
* bigint
* boolean
* undefined
* symbol
* null

{% exercise %}
Declare a variable called `person` and initialize it with an object that contains the following properties: `age` as a number, `name` as a string and `isMarried` as a boolean.

`person` भनिने चल घोषणा गर्नुहोस् र यसलाई निम्न गुणहरू समावेश गर्ने वस्तुसँग सुरुआत गर्नुहोस्: संख्याको रूपमा `age`, स्ट्रिङको रूपमा `name` र बुलियनको रूपमा `isMarried`।


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
