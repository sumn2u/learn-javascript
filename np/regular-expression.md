# Regular Expression

# नियमित अभिव्यक्ति
A regular expression is an object that can either be constructed with the `RegEx` constructor or written as a literal value by enclosing a pattern in a forward slash `(/)` characters. The syntaxes for creating a regular expression are shown below.

एक नियमित अभिव्यक्ति एक वस्तु हो जुन या त `रेगएक्स (RegEx)` कन्स्ट्रक्टरको साथ निर्माण गर्न सकिन्छ वा अगाडिको स्लेश `(/)` क्यारेक्टरमा ढाँचा संलग्न गरेर शाब्दिक मानको रूपमा लेख्न सकिन्छ। नियमित अभिव्यक्ति सिर्जना गर्नका लागि वाक्यविन्यासहरू तल देखाइएको छ।

```javascript
// using regular expression constructor
new RegExp(pattern[, flags]);

// using literals
/pattern/modifiers
```

The flags are optional while creating a regular expression using literals. Example of creating identical regular using above mentioned method is as follows.


शाब्दिक प्रयोग गरेर नियमित अभिव्यक्ति सिर्जना गर्दा फ्ल्यागहरू वैकल्पिक हुन्छन्।  माथि उल्लिखित विधि प्रयोग गरेर समान नियमित सिर्जना गर्ने उदाहरण निम्नानुसार छ।

```javascript
let re1 = new RegExp("xyz"); 
let re2 = /xyz/;
```

Both ways will create a regex object and have the same methods and properties. There are cases where we might need dynamic values to create a regular expression, in that case, literals won't work and have to go with the constructor.

दुबै तरिकाहरूले रेगेक्स वस्तु सिर्जना गर्नेछ र समान विधिहरू र गुणहरू छन्। त्यहाँ केसहरू छन् जहाँ हामीलाई नियमित अभिव्यक्ति सिर्जना गर्न गतिशील मानहरू आवश्यक हुन सक्छ, त्यस अवस्थामा, शाब्दिकहरूले काम गर्दैन र कन्स्ट्रक्टरसँग जानुपर्छ।

{% hint style="info" %}


In cases where we want to have a forward slash to be a part of a regular expression, we have to escape the forward slash `(/)` with backslash `(\)`.

यदि हामी नियमित अभिव्यक्तिको भाग हुनको लागि अगाडिको स्लेश राख्न चाहन्छौं भने, हामीले ब्याकस्ल्याश `()` को साथ अगाडिको स्लेश `(/)` बाट बच्नु पर्दछ।
{% endhint %}

The different modifiers that are used to perform case-insensitive searches are:

केस-असंवेदनशील खोजीहरू प्रदर्शन गर्न प्रयोग गरिने विभिन्न परिमार्जकहरू हुन्:

* `g` - global search (finds all matches instead of stopping after the first match)
* `g` - ग्लोबल खोज (पहिलो खेल पछि रोकिनुको सट्टा सबै खेलहरू फेला पार्दछ)
* `i`- case insensitive search
* `i`- केस असंवेदनशील खोज
* `m` - multiline matching
* `m` - मल्टिलाइन मिलान

_Brackets_ are used in a regular expression to find a range of characters. Some of them are mentioned below.

क्यारेक्टरहरूको दायरा फेला पार्न नियमित अभिव्यक्तिमा कोष्ठकहरू प्रयोग गरिन्छ । तीमध्ये केही तल उल्लेख गरिएको छ।


* `[abc]` - find any character between the brackets

* `[abc]` - कोष्ठकको बीचमा कुनै पनि क्यारेक्टर फेला पार्नुहोस्
* `[^abc]` - find any character, not between the brackets

* `[^abc]` - कुनै पनि क्यारेक्टर फेला पार्नुहोस्, कोष्ठकको बीचमा होइन
* `[0-9]` - find any digit between the bracket

* `[0-9]` - कोष्ठकको बीचमा कुनै पनि अङ्क फेला पार्नुहोस्
* `[^0-9]` - find any character, not between the brackets (non-digit)

* `[^0-9]` - कुनै पनि क्यारेक्टर फेला पार्नुहोस्, कोष्ठकको बीचमा होइन (गैर-अंक)
* `(x|y)`- find any of the alternatives separated by |

* `(x|y)` - द्वारा अलग गरिएको विकल्पहरू मध्ये कुनै पनि फेला पार्नुहोस् |

_Metacharacters_ are special character that has special meaning in the regular expression. These characters are further described below:

| Metacharacter | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `.`           | Match a single character excpet newline or a terminator          |
| `\w`          | Match a word character (alphanumeric character `[a-zA-Z0–9_]`)   |
| `\W`          | Match a non word character (same as `[^a-zA-Z0–9_]`)             |
| `\d`          | Match any digit character( same as `[0-9]`)                      |
| `\D`          | Match any non digiti character                                   |
| `\s`          | Match a whitespace character (spaces, tabs etc)                  |
| `\S`          | Match a non whitespace character                                 |
| `\b`          | Match at the begining / end of a word                            |
| `\B`          | Match but not at the begining / end of a word                    |
| `\0`          | Match a `NULL` character                                         |
|  `\n`             | Match a new line character                                       |
| `\f`          | Match a form feed character                                      |
|   `\r`            | Match a carriage return character                                |
|    `\t`           | Match a tab character                                            |
| `\v`          | Match a tab vertical character                                   |
| `\xxx`        | Match a character specified by an octal number `xxx`             |
| `\xdd`        | Match a character specified by a hexadecimal number `dd`         |
| `\udddd`      | Match Unicode character specified by a hexadecimal number `dddd` |

मेटाक्यारेक्टरहरू विशेष क्यारेक्टर हरू हुन् जसको नियमित अभिव्यक्तिमा विशेष अर्थ हुन्छ। यी क्यारेक्टरहरू तल थप वर्णन गरिएको छ:

| पत्रकहारा | वर्णन |
| ------------- | ---------------------------------------------------------------- |
| `.`           | एकल क्यारेक्टर एक्स्पेट नयाँलाइन वा टर्मिनेटर मिलाउनुहोस्          |
| `\w`          | शब्द क्यारेक्टर मिलाउनुहोस् (अल्फान्यूमेरिक क्यारेक्टर `[a-zA-Z0–9_]`)   |
| `\W`          | एउटा गैर-शब्द क्यारेक्टर मिलाउनुहोस् (जस्तै `[^a-zA-Z0–9_]`)             |
| `\d`          | कुनै पनि अङ्कको क्यारेक्टर मिलाउनुहोस् (जस्तै `[0-9]`)                      |
| `\D`          | कुनै पनि गैर-डिजिटी क्यारेक्टर मिलाउनुहोस्                                   |
| `\s`          | सेतो स्थान क्यारेक्टर मिलाउनुहोस् (खाली स्थान, ट्याब आदि)                  |
| `\S`          | सेतो खाली स्थान नभएको क्यारेक्टर मिलाउनुहोस्                                 |
| `\b`          | शब्दको सुरु/अन्त्यमा मिलान गर्नुहोस्                      |
| `\B`          |   मिलान गर्नुहोस् तर शब्दको सुरु / अन्त्यमा होइन                    |
| `\0`          | `शून्य (NULL)` क्यारेक्टर मिलाउनुहोस्                                         |
|  `\n`             | नयाँ रेखा क्यारेक्टर मिलाउनुहोस्                                       |
| `\f`          | फारम फिड क्यारेक्टर मिलाउनुहोस्                                     |
|   `\r`            | क्यारिज रिटर्न क्यारेक्टर मिलाउनुहोस्                     |
|    `\t`           | Match a tab character                                            |
| `\v`          | ट्याब ठाडो क्यारेक्टर मिलाउनुहोस्                                   |
| `\xxx`        | अक्टल नम्बरले निर्दिष्ट गरेको क्यारेक्टर मिलाउनुहोस् `xxx`             |
| `\xdd`        | हेक्साडेसिमल नम्बर `dd` द्वारा निर्दिष्ट क्यारेक्टर मिलाउनुहोस्   |
| `\udddd`      | हेक्साडेसिमल सङ्ख्या `dddd` द्वारा निर्दिष्ट गरिएको युनिकोड क्यारेक्टर मिलाउनुहोस् |

Properties and methods supported by RegEx are listed below.

| Name          | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `constructor` | Returns function that created RegExp object's protype                              |
| `global`      | Checks if the `g` modifier is set                                                  |
| `ignoreCase`  | Checksi if the `i` modifier is set                                                 |
| `lastIndex`   | Specifies the index at which to start the next match                               |
| `multiline`   | Checksi if the m modifier is set                                                   |
| `source`      | Returns the text of the sttring                                                    |
| `exec()`      | Test for the match and returns the first match, if no match then it returns `null` |
| `test()`      | Test for the match and returns the `true` or `false`                               |
| `toString()`  | Returns the string value of the regular exression                                  |

सम्पत्ती र विधिहरू रेजेक्स द्वारा समर्थित विधिहरू तल सूचीबद्ध छन्।

| नाम | वर्णन |
| ------------- | ---------------------------------------------------------------------------------- |
| `constructor` | रेगएक्सप वस्तुको प्रोटाइप सिर्जना गर्ने प्रकार्य फर्काउँछ                              |
| `global`      | `g` परिमार्जक सेट गरिएको छ कि छैन जाँच गर्दछ                                                  |
| `ignoreCase`  | `i` परिमार्जक सेट गरिएको छ कि छैन जाँच गर्दछ                                                 |
| `lastIndex`   | अर्को मिलान सुरु गर्ने अनुक्रमणिका निर्दिष्ट गर्दछ                               |
| `multiline`   | यदि `m` परिमार्जक सेट गरिएको छ भने जाँच गर्दछ                                                   |
| `source`      | स्ट्रिङको पाठ फर्काउँछ                                                    |
| `exec()`      | म्याचका लागि टेस्ट गर्नुहोस् र पहिलो म्याच फर्काउँछ, यदि म्याच भएन भने यसले `शून्य (null)` फर्काउँछ |
| `test()`      | म्याचको लागि परीक्षण गर्नुहोस् र `सत्य` वा `गलत` फर्काउँछ                               |
| `toString()`  | नियमित एक्स्रेसनको स्ट्रिङ मान फर्काउँछ                                  |


{% hint style="warning" %}


A `complie()` method complies the regular expression and is deprecated.

एक `complie()` विधि नियमित अभिव्यक्ति को अनुपालन गर्दछ र अवमूल्यन गरिएको छ।

{% endhint %}

Some examples of regular expressions are shown here.

नियमित अभिव्यक्तिका केही उदाहरणहरू यहाँ देखाइएको छ।
```javascript
let text = "The best things in life are free";
let result = /e/.exec(text); // looks for a match  of e in a string
// result: e


let helloWorldText = "Hello world!";
// Look for "Hello"
let pattern1 = /Hello/g;
let result1 = pattern1.test(helloWorldText);
// result1: true

let pattern1String = pattern1.toString();
// pattern1String : '/Hello/g'
```
