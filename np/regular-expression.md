# Regular Expression

A regular expression is an object that can either be constructed with the `RegEx` constructor or written as a literal value by enclosing a pattern in a forward slash `(/)` characters. The syntaxes for creating a regular expression are shown below.

नियमित अभिव्यक्ति एक वस्तु हो जुन `regex` निर्वादकको साथ निर्माण गर्न सकिन्छ वा एक अगाडि स्लैश` (/) `वर्णहरूको एक ढाँचामा शाब्दिक मानको रूपमा लेख्न सकिन्छ। नियमित अभिव्यक्ति निर्माणको लागि सिन्ट्याक्सन तल देखाइन्छ।

```javascript
// using regular expression constructor
new RegExp(pattern[, flags]);

// using literals
/pattern/modifiers
```

The flags are optional while creating a regular expression using literals. Example of creating identical regular using above mentioned method.

फ्ल्यागहरू वैकल्पिक हुन्छन् जब शाब्दिक प्रयोग गरेर नियमित अभिव्यक्ति सिर्जना गर्दै। माथि उल्लेखित विधि प्रयोग गरेर समान नियमित सिर्जना गर्ने उदाहरण।

```javascript
let re1 = new RegExp("xyz"); 
let re2 = /xyz/;
```

Both ways will create a regex object and have the same methods and properties. There are cases where we might need dynamic values to create a regular expression, in that case, literals won't work and have to go with the constructor.

दुबै तरिकाहरूले एक रेजेक्स वस्तु सिर्जना गर्दछ र समान विधिहरू र गुणहरू छन्। त्यहाँ त्यस्ता केसहरू छन् जहाँ हामीलाई नियमित अभिव्यक्ति सिर्जना गर्न गतिशील मान चाहिन सक्छ, त्यस अवस्थामा शाब्दिकहरूले काम गर्दैनन् र कन्स्ट्रॉक्टरसँगै जानु पर्छ।

{% hint style="info" %}


In cases where we want to have a forward slash to be a part of a regular expression, we have to escape the forward slash `(/)` with backslash `(\)`.

जहाँ हामी अगाडि स्ल्याश नियमित अभिव्यक्तिको एक हिस्सा हुन चाहन्छौं, हामी अगाडि स्ल्याश `(/) लाई ब्याकस्ल्याश` (/) बाट उम्कन चाहानुहुन्छ।
{% endhint %}

The different modifiers that are used to perform case-insensitive searches are:

विभिन्न परिमार्जनहरू जुन केस-असंवेदनशील खोजीहरू प्रदर्शन गर्न प्रयोग गरिन्छ:

* `g` - global search (finds all matches instead of stopping after the first match)

* `g` - ग्लोबल खोज (पहिलो खेल पछि रोकिनुको सट्टा सबै खेलहरू फेला पार्दछ)
* `i`- case insensitive search

* `I`- केस असंवेदनशील खोज
* `m` - multiline matching

_Brackets_ are used in a regular expression to find a range of characters. Some of them are mentioned below.

_Backs_s_ अक्षरको दायरा फेला पार्न नियमित अभिव्यक्तिमा प्रयोग गरिन्छ। ती मध्ये केही तल उल्लेख गरिएको छ।

* `[abc]` - find any character between the brackets

* `[ABC]` - कोष्ठक बीच कुनै पनि चरित्र फेला पार्नुहोस्
* `[^abc]` - find any character, not between the brackets

* `[^ Abc]` - कुनै पनि चरित्र फेला पार्नुहोस्, कोष्ठक बीच नभई
* `[0-9]` - find any digit between the bracket

* `[0-9]` - कोष्ठक बीच कुनै अंक फेला पार्नुहोस्
* `[^0-9]` - find any character, not between the brackets (non-digit)

* `[^ 0-9]` - कुनै पनि चरित्र फेला पार्नुहोस्, कोष्ठकहरू बीच (गैर-अंक)
* `(x|y)`- find any of the alternatives separated by |

* `(X | y)` - | द्वारा विभाजित विकल्पहरू फेला पार्नुहोस्

_Metacharacters_ are special character that has special meaning in the regular expression. These characters are further described below:

_-्ग्रेक्कारहरू_ विशेष चरित्र हुन् जुन नियमित अभिव्यक्तिमा विशेष अर्थ राख्छ। यी पात्रहरू तल तल वर्णन गरिएको छ:

| Metacharacter | Description                                                      |

| पत्रकहारा | वर्णन |
| ------------- | ---------------------------------------------------------------- |
| `.`           | Match a single character excpet newline or a terminator          |

| "| न्यूलाइन वा टर्मिनेटर बाहेक एकल वर्णसँग मिलाउनुहोस् |
| `\w`          | Match a word character (alphanumeric character `[a-zA-Z0–9_]`)   |

| `\ w` | एक शब्द चरित्र (अल्फान्यूमेरिक चरित्र] सँग मिलाउनुहोस् [A-za-z0-9__] |
| `\W`          | Match a non word character (same as `[^a-zA-Z0–9_]`)             |

| `\ W` | एक गैर शब्द चरित्रसँग मिलाउनुहोस् (`A-za-z0-9_]] |
| `\d`          | Match any digit character( same as `[0-9]`)                      |

| `\ d` | कुनै पनि अंक क्यारेक्टर मिलाउनुहोस् (0-9] `) |
| `\D`          | Match any non digiti character                                   |

| `\ D` | कुनै पनि गैर अंक चरित्र मिलाउनुहोस्
| `\s`          | Match a whitespace character (spaces, tabs etc)                  |

| `` s` | एक whitespace चरित्र (रिक्त स्थान, ट्याबहरू आदि) |
| `\S`          | Match a non whitespace character                                 |

| `` S` | एक गैर ह्वाइटस्पेस चरित्रसँग मिलाउनुहोस् |
| `\b`          | Match at the begining / end of a word                            |

| `\ b` | एक शब्दको सुरू / अन्तमा मिलाउनुहोस् |
| `\B`          | Match but not at the begining / end of a word                    |

| `\ B` | खेल तर एक शब्दको सुरू / अन्तमा होईन |
| `\0`          | Match a `NULL` character                                         |

| `` 0` | एक `nuln` craights मिलान गर्नुहोस्
|               | Match a new line character                                       |

| | नयाँ लाइन चरित्रसँग मिलाउनुहोस्
| `\f`          | Match a form feed character                                      |

| `\ f` | फारम फिचर फिचर मिलाउनुहोस्
|               | Match a carriage return character                                |

| | क्यारिज रिटर्न चरित्रसँग मिलाउनुहोस्
|               | Match a tab character                                            |

| | ट्याब चरित्र मिलाउनुहोस्
| `\v`          | Match a tab vertical character                                   |

| `\ v` | ट्याब ठाडो चरित्रसँग मिलाउनुहोस्
| `\xxx`        | Match a character specified by an octal number `xxx`             |

| `x xxx` | एक चरित्रलाई असीएल नम्बर `XXX` |
| `\xdd`        | Match a character specified by a hexadecimal number `dd`         |

| `\ XDN` | एक चरित्रसँग मिलेर एक हेक्साडेसिमल नम्बर द्वारा निर्दिष्ट गर्नुहोस् `DD` |
| `\udddd`      | Match Unicode character specified by a hexadecimal number `dddd` |

| `\ udddrd` | एक हेक्साडेसिमल संख्या `DDDD` |

Properties and methods supported by RegEx are listed below.

सम्पत्ती र विधिहरू रेजेक्स द्वारा समर्थित विधिहरू तल सूचीबद्ध छन्।

| Name          | Description                                                                        |

| नाम | वर्णन |
| ------------- | ---------------------------------------------------------------------------------- |
| `constructor` | Returns function that created RegExp object's protype                              |

| `निर्माता` | रिसेन्स प्रकार्य जसले REGEXP वस्तुको प्रोटेप सिर्जना गर्यो
| `global`      | Checks if the `g` modifier is set                                                  |

| `ग्लोबल '| जाँच गर्नुहोस् यदि `g` परिमार्जनकर्ता सेट गरिएको छ
| `ignoreCase`  | Checksi if the `i` modifier is set                                                 |

| `उपेक्षा गर्नुहोस् चेकसी यदि `I` i` परिमार्जनकर्ता सेट गरिएको छ |
| `lastIndex`   | Specifies the index at which to start the next match                               |

| `sllinderex` | अर्को खेल सुरू गर्न अनुक्रमणिका निर्दिष्ट गर्दछ
| `multiline`   | Checksi if the m modifier is set                                                   |

| `बहुनिइनरिन | चेकसी यदि M विडयरिटर सेट गरिएको छ भने |
| `source`      | Returns the text of the sttring                                                    |

| `स्रोत | स्ट्रि of को पाठ फर्काउँछ |
| `exec()`      | Test for the match and returns the first match, if no match then it returns `null` |

| `कार्यान्वयन () | खेलको लागि परीक्षण गर्नुहोस् र पहिलो खेल फर्काउँछ, यदि कुनै मिलान छैन भने यसले `nuln` | फिर्ता गर्दछ
| `test()`      | Test for the match and returns the `true` or `false`                               |

| `परीक्षण () | खेलको लागि परीक्षण गर्नुहोस् र `सही '` सही वा `झूटा फिर्ता
| `toString()`  | Returns the string value of the regular exression                                  |

| `tosting () | नियमित अभिव्यक्ति को स्ट्रिंग मान फर्काउँछ |

{% hint style="warning" %}


A `complie()` method complies the regular expression and is deprecated.

एक `cariey ()` अध्याय नियमित अभिव्यक्ति को लागी क्रोधित छ र अवमूल्यन छ।
{% endhint %}

Some examples of regular expressions are shown here.

नियमित अभिव्यक्तिहरूको केही उदाहरणहरू यहाँ देखाइन्छ।

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
