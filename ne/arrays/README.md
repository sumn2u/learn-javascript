# Arrays (एरे)

Arrays are a fundamental part of programming. An array is a list of data. We can store a lot of data in one variable, which makes our code more readable and easier to understand. It also makes it much easier to perform functions on related data.

एरेहरू प्रोग्रामिंगको एक मौलिक भाग हो। एरे डेटाको सूची हो। हामी एक चरमा धेरै डेटा भण्डारण गर्न सक्दछौं, जसले हाम्रो कोडलाई अधिक पठनीय र बुझ्न सजिलो बनाउँदछ। यसले सम्बन्धित डेटामा प्रकार्यहरू प्रदर्शन गर्न धेरै सजिलो बनाउँदछ।

The data in arrays are called **elements**.

एरेमा डेटालाई **तत्व** भनिन्छ।

Here is a simple array:

यहाँ एक साधारण एर्रेको उदाहरण छ।

```javascript
// 1, 1, 2, 3, 5, and 8 are the elements in this array
let numbers = [1, 1, 2, 3, 5, 8];
```

Arrays can be created easily using array literals or with a `new` keyword.&#x20;

एरेहरू एरे शाब्दिक प्रयोग गरेर वा `नयाँ` कुञ्जीशब्दको साथ सजिलै सिर्जना गर्न सकिन्छ।

```javascript
const cars = ["Saab", "Volvo", "BMW"]; // using array literals
const cars = new Array("Saab", "Volvo", "BMW"); // using the new keyword
```

An index number is used to access the values of an array.  The index of the first element in an array is always `0` as array indexes start with `0`. The index number can also be used to change the elements of an array.

अनुक्रमणिका नम्बर एरेको मानमा पहुँच गर्न प्रयोग गरिन्छ ।  एरेमा पहिलो तत्वको अनुक्रमणिका जहिले पनि '०' हुन्छ किनकि एरे अनुक्रमणिकाहरू '०' बाट सुरु हुन्छ। अनुक्रमणिका नम्बर पनि एरेको तत्वहरू परिवर्तन गर्न प्रयोग गर्न सकिन्छ।

```javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); 
// Result: Saab

cars[0] = "Opel"; // changing the first element of an array
console.log(cars);
// Result: ['Opel', 'Volvo', 'BMW']
```

{% hint style="warning" %}


Arrays are a special type of object.  One can have [objects](../objects/) in an array.

एरेहरू एक विशेष प्रकारको वस्तु हो। एरेमा [वस्तुहरू](../objects/) हुन सक्छन्।
{% endhint %}

&#x20;The `length` property of an array returns the count of numbers elements.  Methods supported by Arrays are shown below:

| Name              | Description                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | Returns two or more combined arrays                                                                                                               |
| `join()`          | Joins all elements in an array into a string                                                                                                      |
| `push()`          | Adds one or more elements at the end of the array and returns the length                                                                          |
| `pop()`           | Removes the last element of an array and returns that element                                                                                     |
| `shift()`         | Removes the first element of an array and returns that element                                                                                    |
| `unshift()`       | Adds one or more elements at the front of an array and returns the length                                                                         |
| `slice()`         | Extracts the section of an array and returns the new array                                                                                        |
| `at()`            | Returns element at the specified index or `undefined`                                                                                             |
| `splice()`        | Removes elements from an array and (optionally) replaces them, and returns the array                                                              |
| `reverse()`       | Transposes the elements of an array and returns a reference to an array                                                                           |
| `flat()`          | Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth                                        |
| `sort()`          | Sorts the elements of an array in place, and returns a reference to the array                                                                     |
| `indexOf()`       | Returns the index of the first match of the search element                                                                                        |
| `lastIndexOf()`   | Returns the index of the last match of the search element                                                                                         |
| `forEach()`       | Executes a callback in each element of an array and returns undefined                                                                             |
| `map()`           | Returns a new array with a return value from executing `callback` on every array item.                                                            |
| `flatMap()`       | Runs `map()` followed by `flat()` of depth 1                                                                                                      |
| `filter()`        | Returns a new array containing the items for which `callback` returned `true`                                                                     |
| `find()`          | Returns the first item for which `callback` returned `true`                                                                                       |
| `findLast()`      | Returns the last item for which `callback` returned `true`                                                                                        |
| `findIndex()`     | Returns the index of the first item for which `callback` returned `true`                                                                          |
| `findLastIndex()` | Returns the index of the last item for which `callback` returned `true`                                                                           |
| `every()`         | Returns `true` if `callback` returns `true` for every item in the array                                                                           |
| `some()`          | Returns `true` if `callback` returns `true` for at least one item in the array                                                                    |
| `reduce()`        | Uses `callback(accumulator, currentValue, currentIndex, array)` for reducing purpose and returns the final value returned by `callback` function  |
| `reduceRight()`   | Works similarly lie `reduce()` but starts with the last element                                                                                   |


एरेको 'लम्बाइ' गुणले संख्या तत्वहरूको गणना फर्काउँछ।  एरेद्वारा समर्थित विधिहरू तल देखाइएको छ:


| नाम | वर्णन |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | दुई वा दुईभन्दा बढी संयुक्त एरे फर्काउँछ                                                                                                               |
| `join()`          | एरेका सबै तत्वलाई स्ट्रिङमा जोड्दछ                                                                                                      |
| `push()`          | एरेको अन्त्यमा एक वा बढी तत्व थप्दछ र लम्बाइ फर्काउँछ                                                                          |
| `pop()`           | एरेको अन्तिम तत्व हटाउँदछ र त्यो तत्व फर्काउँछ                                                                                    |
| `shift()`         | एरेको पहिलो तत्व हटाउँदछ र त्यो तत्व फर्काउँछ                                                                                    |
| `unshift()`       | एरेको अगाडि एक वा बढी तत्व थप्दछ र लम्बाइ फर्काउँछ                                                                         |
| `slice()`         | एरेको खण्ड निकाल्छ र नयाँ एरे फर्काउँछ                                                                                        |
| `at()`            | निर्दिष्ट गरिएको अनुक्रमणिका वा `अपरिभाषित (undefined)` मा तत्व फर्काउँछ                                                                                             |
| `splice()`        | एरेबाट तत्वहरू हटाउँदछ र (वैकल्पिक रूपमा) तिनीहरूलाई प्रतिस्थापन गर्दछ, र एरे फर्काउँछ                                                              |
| `reverse()`       | एरेका तत्वहरू स्थानान्तरण गर्दछ र एरेमा सन्दर्भ फर्काउँछ                                                                           |
| `flat()`          | निर्दिष्ट गरिएको गहिराइसम्म पुनरावर्ती रूपमा यसमा समाहित गरिएका सबै उप-एरे तत्वहरूसँग नयाँ एरे फर्काउँछ                                        |
| `sort()`          | एरेका तत्वहरूलाई ठाउँमा क्रमबद्ध गर्दछ, र एरेमा सन्दर्भ फर्काउँछ                                                                     |
| `indexOf()`       | खोजी तत्वको पहिलो मिलानको अनुक्रमणिका फर्काउँछ                                                                                        |
| `lastIndexOf()`   | खोजी तत्वको अन्तिम मिलानको अनुक्रमणिका फर्काउँछ                                                                                         |
| `forEach()`       | एरेको प्रत्येक तत्वमा `callback` कार्यान्वयन गर्दछ र अपरिभाषित फर्काउँछ                                                                             |
| `map()`           | प्रत्येक एरे वस्तुमा `callback` कार्यान्वयन गर्दा प्रतिफल मानसहितको नयाँ एरे फर्काउँछ ।                                                            |
| `flatMap()`       | गहिराइको `map()`  पछि `flat()` चलाउँदछ 1                                                                                                      |
| `filter()`        | `callback` ले `सत्य` फर्काएको वस्तुसमावेश गर्ने नयाँ एरे फर्काउँछ                                                                     |
| `find()`          | `callback` ले `सत्य` फर्काएको पहिलो वस्तु फर्काउँछ                                                                                       |
| `findLast()`      | अन्तिम वस्तु फर्काउँछ जसका लागि `कलब्याक` ले `सत्य` फर्कायो                                                                                        |
| `findIndex()`     | पहिलो वस्तुको अनुक्रमणिका फर्काउँछ जसका लागि `कलब्याक` ले `सत्य` फर्कायो                                                                          |
| `findLastIndex()` | अन्तिम वस्तुको अनुक्रमणिका फर्काउँछ जसका लागि `कलब्याक` ले `सत्य` फर्कायो                                                                           |
| `every()`         | यदि `कलब्याक` ले एरेको प्रत्येक वस्तुका लागि `सत्य` फर्काउँछ भने `सत्य` फर्काउँछ                                                                           |
| `some()`          | यदि `कलब्याक` ले एरेमा कम्तिमा एउटा वस्तुका लागि `सत्य` फर्काउँछ भने `सत्य` फर्काउँछ                                                                    |
| `reduce()`        | उद्देश्य घटाउन `कलब्याक(संचयकर्ता, हालको मान, हालको अनुक्रमणिका, एरे)` प्रयोग गर्दछ र `कलब्याक` प्रकार्यद्वारा फर्काएको अन्तिम मान फर्काउँछ ।  |
| `reduceRight()`   | त्यसरी नै काम गर्दछ `reduce()` तर अन्तिम तत्वबाट सुरु हुन्छ                                                                                   |
