# Arrays

Arrays are a fundamental part of programming. An array is a list of data. We can store a lot of data in one variable, which makes our code more readable and easier to understand. It also makes it much easier to perform functions on related data.

एरेन्स प्रोग्रामिंगको आधारभूत अंश हो। एर्रे डाटाको सूची हो। हामी एक भ्यारीएबलमा धेरै डाटा भण्डार गर्न सक्छौं, जसले हाम्रो कोडलाई अधिक पढ्न योग्य बनाउँदछ र बुझ्न सजिलो हुन्छ। यसले सम्बन्धित डाटामा प्रकार्यहरू प्रदर्शन गर्न पनि सजिलो बनाउँदछ।

The data in arrays are called **elements**.

एर्रेलीहरूमा डाटा ** एलिमेन्ट ** भनिन्छ।

Here is a simple array:

यहाँ एक साधारण एर्रे छ:

```javascript
// 1, 1, 2, 3, 5, and 8 are the elements in this array
let numbers = [1, 1, 2, 3, 5, 8];
```

Arrays can be created easily using array literals or with a `new` keyword.&#x20;

एरेलीहरू सजीलो एरे एर्रेन शाब्दिक वा `नयाँ 'कुञ्जी शब्दको साथ सिर्जना गर्न सकिन्छ। & # X20;

```javascript
const cars = ["Saab", "Volvo", "BMW"]; // using array literals
const cars = new Array("Saab", "Volvo", "BMW"); // using the new keyword
```

An index number is used to access the values of an array.  The index of the first element in an array is always `0` as array indexes start with `0`. The index number can also be used to change the elements of an array.

एक अनुक्रमणिका नम्बर एर्रेको मानहरू पहुँच गर्न प्रयोग गरिन्छ। एर्रेमा पहिलो तत्वको सूचकांक सधैं `0` हो किनकि एरे अनुक्रमणिकाहरू `0` को साथ शुरू हुन्छ। अनुक्रमणिका नम्बर एर्रेको तत्वहरू परिवर्तन गर्न पनि प्रयोग गर्न सकिन्छ।

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

एरेजहरू एक विशेष प्रकारको वस्तु हुन्। एउटासँग [वस्तु] (./ वस्तुहरू /) एक एर्रेमा हुन सक्छ।
{% endhint %}

&#x20;The `length` property of an array returns the count of numbers elements.  Methods supported by Arrays are shown below:

& # X20; A कोर्रा` लम्बाइको सम्पत्तिले संख्या तत्वहरूको गणना गर्दछ। आर्द्रहरूले समर्थन गरेका विधिहरू तल देखाइएको छ:

| Name              | Description                                                                                                                                       |

| नाम | वर्णन |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | Returns two or more combined arrays                                                                                                               |

| `concat () | दुई वा बढी संयुक्त अभिनय फर्काउँछ
| `join()`          | Joins all elements in an array into a string                                                                                                      |

| `शामिल () | एर्रेमा सबै तत्वहरू एक स्ट्रि in |
| `push()`          | Adds one or more elements at the end of the array and returns the length                                                                          |

| `धकेल्नु () | एर्रेको अन्त्यमा एक वा बढी तत्वहरू थप गर्दछ र लम्बाइ फर्काउँछ |
| `pop()`           | Removes the last element of an array and returns that element                                                                                     |

| `पप () | एर्रेको अन्तिम तत्व हटाउँछ र त्यो तत्व फिर्ता गर्दछ |
| `shift()`         | Removes the first element of an array and returns that element                                                                                    |

| `शिफ्ट () | एर्रेको पहिलो तत्व हटाउँछ र त्यो तत्व फिर्ता गर्दछ |
| `unshift()`       | Adds one or more elements at the front of an array and returns the length                                                                         |

| `अनथाफ्ट () | एर्रेको अगाडि एक वा बढी तत्वहरू थप गर्दछ र लम्बाइ फर्काउँछ |
| `slice()`         | Extracts the section of an array and returns the new array                                                                                        |

| `स्लाइस () | एर्रेको खण्ड निकाल्छ र नयाँ एरे फर्काउँछ
| `at()`            | Returns element at the specified index or `undefined`                                                                                             |

| `() | निर्दिष्ट सूचकांक वा `अपरिभाषितको |
| `splice()`        | Removes elements from an array and (optionally) replaces them, and returns the array                                                              |

| `स्प्लिस () | एर्रेबाट तत्वहरू हटाउँछ र (वैकल्पिक रूपमा) तिनीहरूलाई प्रतिस्थापन गर्दछ, र एरेमा फर्कन्छ |
| `reverse()`       | Transposes the elements of an array and returns a reference to an array                                                                           |

| `उल्टो () | एर्रेको तत्वहरू पार गर्दछ र एर्रेमा सन्दर्भ फर्काउँछ |
| `flat()`          | Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth                                        |

| `समतल () | यसमा पुनरुत्वाक रूपमा विपन्न रहिरहने सबै उप-एरे तत्त्वहरूमा यस उप-एरे तयमेन्टको साथ नयाँ एर्रे फर्काउँछ
| `sort()`          | Sorts the elements of an array in place, and returns a reference to the array                                                                     |

| `क्रमबद्ध () | ठाउँमा एर्रेको तत्वहरू क्रमबद्ध गर्दछ, र एरेको सन्दर्भमा फर्काउँछ
| `indexOf()`       | Returns the index of the first match of the search element                                                                                        |

| `अनुक्रमणिका () | खोज जियोरको पहिलो खेलको सूचकांक फर्काउँछ |
| `lastIndexOf()`   | Returns the index of the last match of the search element                                                                                         |

| `LOWNINEEXOF () | खोज जियोरको अन्तिम खेलको सूचकांक फर्काउँछ |
| `forEach()`       | Executes a callback in each element of an array and returns undefined                                                                             |

| `फोरच () | एक एर्रेको प्रत्येक तत्वमा कलब्याक कार्यान्वयन गर्दछ र अपरिभाषित रिटर्न |
| `map()`           | Returns a new array with a return value from executing `callback` on every array item.                                                            |

| `नक्शा () | प्रत्येक एरेब्याक `` कलब्याक `` कलब्याक `` CORDBAKER बाट एक नयाँ एर्रे फर्काउँछ। |
| `flatMap()`       | Runs `map()` followed by `flat()` of depth 1                                                                                                      |

| `समतलम्याप () | `नक्सा ()` मा गहिरो 1)
| `filter()`        | Returns a new array containing the items for which `callback` returned `true`                                                                     |

| `फिल्टर () | आईटमहरू समावेश गर्दै एक नयाँ एर्रे फर्किन्छ जसको लागि 'कलब्याक "फर्काइएको` सही
| `find()`          | Returns the first item for which `callback` returned `true`                                                                                       |

| `फेला पार्नुहोस् () | पहिलो आईटम फर्काउँछ जसको लागि `Crackback` फिर्ता` सही
| `findLast()`      | Returns the last item for which `callback` returned `true`                                                                                        |

| `फेलाrabes () | अन्तिम आईटम फर्काउँछ जसको लागि `Crackback` फिर्ता` सही
| `findIndex()`     | Returns the index of the first item for which `callback` returned `true`                                                                          |

| `फेलाrendex () | पहिलो वस्तुको सूचकांक फर्काउँछ जसको लागि `Crackback` फिर्ता` सही
| `findLastIndex()` | Returns the index of the last item for which `callback` returned `true`                                                                           |

| `ESTLLASTINEEX () | अन्तिम आईटम को सूचकांक फर्काउँछ जसको लागि `कलब्याक` फर्किन्छ` सही
| `every()`         | Returns `true` if `callback` returns `true` for every item in the array                                                                           |

| `सबै () | एर्रेमा प्रत्येक वस्तुको लागि `Contackk` returns फिर्ता` `Stefack फर्कन्छ
| `some()`          | Returns `true` if `callback` returns `true` for at least one item in the array                                                                    |

| `केहि () | एर्रेमा कम्तिमा एक वस्तुको लागि `Contrack`` condack`s फर्काउँछ
| `reduce()`        | Uses `callback(accumulator, currentValue, currentIndex, array)` for reducing purpose and returns the final value returned by `callback` function  |

| `घटाउनुहोस् () | `कलब्याक (संचय, हालको हालको, एर्रेल)` लाई घटाएर `` कलब्याक | द्वारा फिर्ता अन्तिम मान फिर्ता गर्दछ
| `reduceRight()`   | Works similarly lie `reduce()` but starts with the last element                                                                                   |

| `BRICECERT () | यस्तै काम गर्दछ `कम गर्दछ ()` तर अन्तिम तत्वको साथ सुरू हुन्छ

