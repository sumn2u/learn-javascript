# Date and Time

# मिति र समय

The `date` object stores date and time and provides methods for managing it. Date objects are static and use a browser's default timezone to display the date as a full-text string.

`मिति` वस्तुले मिति र समय भण्डारण गर्दछ र यसलाई व्यवस्थापन गर्ने विधिहरू प्रदान गर्दछ। मिति वस्तुहरू स्थिर हुन्छन् र पूर्ण-पाठ स्ट्रिङको रूपमा मिति प्रदर्शन गर्न ब्राउजरको पूर्वनिर्धारित समयक्षेत्र प्रयोग गर्नुहोस् ।

To create  `date` we use a `new Date()` constructor and can be created in the following ways.

`मिति` सिर्जना गर्न हामी `new Date()` कन्स्ट्रक्टर प्रयोग गर्दछौं र निम्न तरिकामा सिर्जना गर्न सकिन्छ।

```javascript
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```

{% hint style="warning" %}


Months can be specified from `0` to `11`, more than that will result in an overflow to the next year.

महिनाहरू `०` देखि `११` सम्म निर्दिष्ट गर्न सकिन्छ, त्यो भन्दा बढी अर्को वर्षको लागि ओभरफ्लोमा परिणत हुनेछ।
{% endhint %}

Methods and properties supported by date  are described below:

विधिहरू र मितिहरू द्वारा समर्थित विधिहरू तल वर्णन गरिएको छ:

| Name                   | Description                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `constructor`          | Returns function that created the Date object's prototype                                       |
| `getDate()`            | Returns the day (1-31) of a month                                                               |
| `getDay()`             | Returns the day (0-6) of a week                                                                 |
| `getFullYear()`        | Returns the year (4 digits)                                                                     |
| `getHours()`           | Returns the hour (0-23)                                                                         |
| `getMilliseconds()`    | Returns the milliseconds(0-999)                                                                 |
| `getMinutes()`         | Returns the minutes(0-59)                                                                       |
| `getMonth()`           | Returns the month(0-11)                                                                         |
| `getSeconds()`         | Returns the seconds(0-59)                                                                       |
| `getTime()`            | Returns the numeric value of a specified date in milliseconds since midnight Jan 1 1970         |
| `getTimezoneOffset()`  | Returns timezone offset in minutes                                                              |
| `getUTCDate()`         | Returns the day (1-31) of a month according to universal time                                   |
| `getUTCDay()`          | Returns the day (0-6) according to universal time                                               |
| `getUTCFullYear()`     | Returns the year(4-digits) according to universal time                                          |
| `getUTCHours()`        | Returns the hours(0-23) according to universal time                                             |
| `getUTCMilliseconds()` | Returns the milliseconds(0-999) according to  universal time                                    |
| `getUTCMinutes()`      | Returns the minutes(0-59) according to  universal time                                          |
| `getUTCMonth()`        | Returns the month (0-11) according to  universal time                                           |
| `getUTCSeconds()`      | Returns the seconds (0-59) according to universal time                                          |
| `now()`                | Returns the numeric value in milliseconds since midnight Jan 1, 1970                            |
| `parse()`              | Parses the date string and returns the numeric value in milliseconds since midnight Jan 1, 1970 |
| `prototype`            | Allows to add properties                                                                        |
| `setDate()`            | Sets the day of a month                                                                         |
| `setFullYear()`        | Sets the year                                                                                   |
| `setHours()`           | Sets the hour                                                                                   |
| `setMilliseconds()`    | Sets the milliseconds                                                                           |
| `setMinutes()`         | Sets the minutes                                                                                |
| `setMonth()`           | Sets the month                                                                                  |
| `setSeconds()`         | Sets the second                                                                                 |
| `setTime()`            | Sets the time                                                                                   |
| `setUTCDate()`         | Sets the day of the month according to universal time                                           |
| `setUTCFullYear()`     | Sets the year according to the universal time                                                   |
| `setUTCHours()`        | Sets the hour according to the universal time                                                   |
| `setUTCMilliseconds()` | Sets the milliseconds according to the universal time                                           |
| `setUTCMinutes()`      | Sets the minutes according to the universal time                                                |
| `setUTCMonth()`        | Sets the month according to the universal time                                                  |
| `setUTCSeconds()`      | Sets the second according to the universal time                                                 |
| `toDateString()`       | Returns the date in human readable format                                                       |
| `toISOString()`        | Returns the date according to the ISO format                                                    |
| `toJSON()`             | Returns the date in a string, formatted as a JSON date                                          |
| `toLocaleDateString()` | Returns the date in a string using locale conventions                                           |
| `toLocaleTimeString()` | Returns the time in a string using locale conventions                                           |
| `toLocaleString()`     | Returns date using locale conventions                                                           |
| `toString()`           | Returns string representation of the specified date                                             |
| `toTimeString()`       | Returns the _time_  portion into a human-readable  format                                       |
| `toUTCString()`        | Converts date into a string according to the universal format                                   |
| `toUTC()`              | Returns the milliseconds since  midnight Jan 1 1970 in UTC format                               |
| `valueOf()`            | Returns the primitive value of `Date`                                                           |



| नाम | वर्णन |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `constructor` | प्रकार्य फिर्ता जुन मिति वस्तुको प्रोटोटाइप सिर्जना गर्दछ                       |
| `getDate ()` | एक महिनाको दिन (१-३१) फर्काउँछ  |
| `getDay()`| हप्ताको दिन (०-६) हप्तामा फर्काउँछ  |
| `getFullYear()` | वर्ष फर्काउँछ (अंकमा ) |
| `getHours()` | घण्टा फर्काउँछ (०-२३) |
| `getMilliseconds()` | मिलिसेकेन्ड्स फर्काउँछ (०-९९९) |
| `getMinutes()` | मिनेट फर्काउँछ (०-५९) |
| `getMonth()` |  महिना (०-११) फर्काउँछ |
| `getSeconds()` | सेकेन्ड फर्काउँछ (०-५९) |
| `getTime()`   | १ जनवरी १९७० को मध्यरातदेखि मिलिसेकेन्डमा निर्दिष्ट गरिएको मितिको सङ्ख्यात्मक मान फर्काउँछ         |
| `getTimezoneOffset()`  | मिनेटमा टाइमजोन अफसेट फर्काउँछ                                                              |
| `getUTCDate()`         |  विश्वव्यापी समयअनुसार महिनाको दिन (१-३१) फर्काउँछ                                   |
| `getUTCDay()`          | युनिभर्सल टाइम अनुसार दिन (०-६) फर्काउँछ                                               |
| `getUTCFullYear()`     | सार्वभौमिक समय अनुसार वर्ष (४-अङ्क) फर्काउँछ                                          |
|`getUTCHours()`        | विश्वव्यापी समय अनुसार घण्टा (०-२३) फर्काउँछ                                             |
| `getUTCMilliseconds()` | युनिभर्सल टाइम अनुसार मिलिसेकेन्ड(०-९९९) फर्काउँछ                                    |
| `getUTCMinutes()`      |  युनिभर्सल टाइम अनुसार मिनेट(०-५९) फर्काउँछ                                          |
| `getUTCMonth()`        | विश्वव्यापी समयअनुसार महिना (०-११) फर्काउँछ                                           |
| `getUTCSeconds()`      | सार्वभौमिक समय अनुसार सेकेन्ड (०-५९) फर्काउँछ                                          |
| `now()`                | जनवरी १, १९७० को मध्यरातदेखि मिलिसेकेन्डमा सङ्ख्यात्मक मान फर्काउँछ               |
| `parse()`              | मिति स्ट्रिङ पद वर्णन गर्दछ र जनवरी १, १९७० को मध्यरातदेखि मिलिसेकेन्डमा सङ्ख्यात्मक मान फर्काउँछ |
| `prototype`            | गुण थप्न अनुमति दिन्छ                                                                        |
| `setDate()`            | एक महिनाको दिन सेट गर्दछ                                                                         |
| `setFullYear()`        | वर्ष सेट गर्दछ                                                                                   |
| `setHours()`           | घण्टा सेट गर्दछ                                                                                   |
| `setMilliseconds()`    | मिलिसेकेन्ड सेट गर्दछ                                                                           |
| `setMinutes()`         | मिनेट सेट गर्दछ                                                                                |
| `setMonth()`           | महिना सेट गर्दछ                                                                                  |
| `setSeconds()`         | सेकेन्ड सेट गर्दछ                                                                                 |
| `setTime()`            | समय सेट गर्दछ                                                         |
| `setUTCDate()`         | निभर्सल समय अनुसार महिनाको दिन सेट गर्दछ  |
| `setUTCFullYear()`     | युनिभर्सल समय अनुसार वर्ष सेट गर्दछ                                                   |
| `setUTCHours()`        | युनिभर्सल समय अनुसार घण्टा सेट गर्दछ                          |
| `setUTCMilliseconds()` | युनिभर्सल समय अनुसार मिलिसेकेन्ड सेट गर्दछ  |
| `setUTCMinutes()`      | विश्वव्यापी समय अनुसार मिनेट सेट गर्दछ|
| `setUTCMonth()`        | विश्वव्यापी समय अनुसार महिना सेट गर्दछ                            |
| `setUTCSeconds()`      | विश्वव्यापी अनुसार सेकेन्ड सेट गर्दछ|
| `toDateString()`       | मानव पठन योग्य ढाँचामा मिति फर्काउँछ|
| `toISOString()`        | ISO ढाँचा अनुसार मिति फर्काउँछ |
| `toJSON()`             | जेएसओएन मितिको रूपमा ढाँचाबद्ध गरिएको स्ट्रिङमा मिति फर्काउँछ                                          |
| `toLocaleDateString()` | लोकेल कन्भेन्सन प्रयोग गरेर स्ट्रिङमा मिति फर्काउँछ                                           |
| `toLocaleTimeString()` | लोकेल कन्भेन्सन प्रयोग गरेर स्ट्रिङमा समय फर्काउँछ                                           |
| `toLocaleString()`     | लोकेल कन्भेन्सन प्रयोग गरेर मिति फर्काउँछ                                                           |
| `toString()`           | निर्दिष्ट गरिएको मितिको स्ट्रिङ प्रतिनिधित्व फर्काउँछ                                             |
| `toTimeString()`       | मानव-पठनीय ढाँचामा _समय_ भाग फर्काउँछ                                       |
| `toUTCString()`        | विश्वव्यापी ढाँचा अनुसार मितिलाई स्ट्रिङमा रूपान्तरण गर्दछ                                   |
| `toUTC()`              | युटिसी ढाँचामा जनवरी १, १९७० को मध्यरातदेखि मिलिसेकेन्ड फर्काउँछ                     |
| `valueOf()`            | 'मिति' को आदिम मान फर्काउँछ                                                           |

