# Date and Time

# मिति र समय

The `date` object stores date and time and provides methods for managing it. Date objects are static and use a browser's default timezone to display the date as a full-text string.

'मिति मिति वस्तु स्टोरहरू मिति र समय र यसको प्रबन्धका लागि विधिहरू प्रदान गर्दछ। मिति वस्तुहरू स्थिर छन् र एक पूर्ण-पाठ स्ट्रिंगको रूपमा मिति प्रदर्शन गर्न ब्राउजरको पूर्वनिर्धारित समयजोन प्रयोग गर्दछ।

To create  `date` we use a `new Date()` constructor and can be created in the following ways.

'मिति' सिर्जना गर्न हामी एक `नयाँ मिति ()` कन्स्ट्रक्टर प्रयोग गर्न र निम्न तरिकाहरूमा सिर्जना गर्न सकिन्छ।

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

महिना `0` बाट` 11` बाट निर्दिष्ट गर्न सकिन्छ `11`, अर्को वर्षमा ओभरफ्लो हुन्छ।
{% endhint %}

Methods and properties supported by date  are described below:

विधिहरू र मितिहरू द्वारा समर्थित विधिहरू तल वर्णन गरिएको छ:

| Name                   | Description                                                                                     |

| नाम | वर्णन |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `constructor`          | Returns function that created the Date object's prototype                                       |

| `निर्माता` | प्रकार्य फिर्ता जुन मिति वस्तुको प्रोटोटाइप सिर्जना गर्दछ
| `getDate()`            | Returns the day (1-31) of a month                                                               |

| `gragdate () | एक महिनाको दिन (1-31) फर्काउँछ
| `getDay()`             | Returns the day (0-6) of a week                                                                 |

| `प्राप्त दिन () | हप्ताको दिन (0--6) हप्तामा फर्काउँछ
| `getFullYear()`        | Returns the year (4 digits)                                                                     |

| `getlylyare () | वर्ष फर्काउँछ (digit अंक) |
| `getHours()`           | Returns the hour (0-23)                                                                         |

| `Ghthies () | घण्टा फर्काउँछ (0-23) |
| `getMilliseconds()`    | Returns the milliseconds(0-999)                                                                 |

| `getmyliliseconds () | मिलिसेकेन्ड्स फर्काउँछ (0-9999)) |
| `getMinutes()`         | Returns the minutes(0-59)                                                                       |

| `goetminute () | मिनेट फर्काउँछ (0--59)) |
| `getMonth()`           | Returns the month(0-11)                                                                         |

| `प्राप्त () | | महिना (0-11) फर्काउँछ
| `getSeconds()`         | Returns the seconds(0-59)                                                                       |

| `geasseconds () | सेकेन्ड फर्काउँछ (0--59)) |
| `getTime()`            | Returns the numeric value of a specified date in milliseconds since midnight Jan 1 1970         |

| `प्राप्त गर्नुहोस् () | | 2 1970 0 को मध्यम 1 1 1970 .0 |
| `getTimezoneOffset()`  | Returns timezone offset in minutes                                                              |
| `getUTCDate()`         | Returns the day (1-31) of a month according to universal time                                   |

| `greuutcdate () | विश्वव्यापी समय अनुसार एक महिनाको दिन (1-31) फर्काउँछ
| `getUTCDay()`          | Returns the day (0-6) according to universal time                                               |

| `getuutcday () | जीवन उल्टो समय (0-6) फर्काउँछ
| `getUTCFullYear()`     | Returns the year(4-digits) according to universal time                                          |

| `groutcly () | विश्वव्यापी समय अनुसार वर्ष (-अंक) फर्काउँछ
| `getUTCHours()`        | Returns the hours(0-23) according to universal time                                             |

| `gooutchches () | युनिभर्सल-समय अनुसार घण्टा (0-23) फर्काउँछ
| `getUTCMilliseconds()` | Returns the milliseconds(0-999) according to  universal time                                    |

| `greuutcliliseacks () | विश्वव्यापी समय अनुसार मिलिसेकेन्ड (09999) फर्काउँछ
| `getUTCMinutes()`      | Returns the minutes(0-59) according to  universal time                                          |

| `goodcmmminmethte () | युनिभर्सल समयको अनुसार मिनेट (0--59) फर्काउँछ
| `getUTCMonth()`        | Returns the month (0-11) according to  universal time                                           |

| `genuutconth () | विश्वव्यापी समय अनुसार (0-11) फर्काउँछ
| `getUTCSeconds()`      | Returns the seconds (0-59) according to universal time                                          |

| `getuutcsconds () | अन्तरराष्ट्रिय समयको अनुसार सेकेन्ड (0--5) फर्काउँछ
| `now()`                | Returns the numeric value in milliseconds since midnight Jan 1, 1970                            |

| `अब () | जनवरी 1, 1 1970 .0 को दशकदेखि मिलिसेकेन्डमा संख्यात्मक मान फर्काउँछ
| `parse()`              | Parses the date string and returns the numeric value in milliseconds since midnight Jan 1, 1970 |

| `पार्स () | मिति स्ट्रिंगको सामना गर्नुहोस् र मध्येत 2, 1 1970 .0 को मध्यरातबाट मिलिसेकेन्डमा संख्यात्मक मान फर्काउँछ
| `prototype`            | Allows to add properties                                                                        |

| `प्रोटोटाइप` | गुणहरू थप्न अनुमति दिन्छ |
| `setDate()`            | Sets the day of a month                                                                         |

| `सेट () | एक महिनाको दिन सेट गर्दछ |
| `setFullYear()`        | Sets the year                                                                                   |

| `स्थायी () | | वर्ष सेट गर्दछ |
| `setHours()`           | Sets the hour                                                                                   |

| `सेतास () | समय सेट गर्दछ |
| `setMilliseconds()`    | Sets the milliseconds                                                                           |

| `Semmililieackonds () | मिलीसेकेन्ड सेट गर्दछ
| `setMinutes()`         | Sets the minutes                                                                                |

| `tumminute () | मिनेट सेट गर्दछ |
| `setMonth()`           | Sets the month                                                                                  |

| `वाचमथ () | महिना सेट गर्दछ |
| `setSeconds()`         | Sets the second                                                                                 |

| `` सेटसकेन्ड () | दोस्रो सेट गर्दछ
| `setTime()`            | Sets the time                                                                                   |

| `सेट समय () | समय सेट गर्दछ |
| `setUTCDate()`         | Sets the day of the month according to universal time                                           |

| `सेटुटसीडेट () | युनिभर्सल समय अनुसार महिनाको दिन सेट गर्दछ |
| `setUTCFullYear()`     | Sets the year according to the universal time                                                   |

| `Setutcly () | युनिभर्सल समय अनुसार वर्ष सेट गर्दछ |
| `setUTCHours()`        | Sets the hour according to the universal time                                                   |

| `Setutchches () | युवावस्था विश्वव्यापी समय अनुसार सेट गर्दछ |
| `setUTCMilliseconds()` | Sets the milliseconds according to the universal time                                           |

| `Setutclilieishacks () | युनिभर्सल समय अनुसार मिलिसेकेन्ड सेट गर्दछ |
| `setUTCMinutes()`      | Sets the minutes according to the universal time                                                |

| `Setutcmiminds () | मिनेट विश्वव्यापी समय अनुसार सेट गर्दछ |
| `setUTCMonth()`        | Sets the month according to the universal time                                                  |

| `सफ्टकहान () | महिना विश्वव्यापी समय अनुसार सेट गर्दछ |
| `setUTCSeconds()`      | Sets the second according to the universal time                                                 |

| `Setutcsconds () | विश्वव्यापी अनुसार दोस्रो सेट गर्दछ |
| `toDateString()`       | Returns the date in human readable format                                                       |

| `बच्चा () | मानव पठन योग्य ढाँचामा मिति फर्काउँछ
| `toISOString()`        | Returns the date according to the ISO format                                                    |

| `धोखापरिंग () | ISO ढाँचा अनुसार मिति फर्काउँछ
| `toJSON()`             | Returns the date in a string, formatted as a JSON date                                          |

| `टोजसन () | एक स्ट्रि in मा मिति फर्काउँछ, एक JMSS मिति को रूपमा ढाँचा
| `toLocaleDateString()` | Returns the date in a string using locale conventions                                           |

| `tololledatertresstrestress () | स्थानीय अधिवेशनहरूको प्रयोग गरेर मिति मा मिति फर्काउँछ
| `toLocaleTimeString()` | Returns the time in a string using locale conventions                                           |

| `tolocapletiving () | स्थानीय अधिवेशन प्रयोग गरेर स्ट्रि in मा समय फर्काउँछ
| `toLocaleString()`     | Returns date using locale conventions                                                           |

| `tolocklestring () | स्थानीय अधिवेशन प्रयोग गरेर मिति फर्काउनुहोस् |
| `toString()`           | Returns string representation of the specified date                                             |

| `tosting () | निर्दिष्ट मिति को स्ट्रिंग प्रतिनिधित्व फिर्ता |
| `toTimeString()`       | Returns the _time_  portion into a human-readable  format                                       |

| `tonimestring () | एक मानव-पठनीय ढाँचामा _ एक भागमा फर्किन्छ
| `toUTCString()`        | Converts date into a string according to the universal format                                   |

| `toutctrestring () | मितिलाई समीकरण ढाँचा अनुसार स्ट्रिंगमा रूपान्तरण गर्दछ
| `toUTC()`              | Returns the milliseconds since  midnight Jan 1 1970 in UTC format                               |

| `toutc () | Mance रात सम्म मिलिसेकेन्ड फर्काउँछ जब देखि utc ढाँचामा |
| `valueOf()`            | Returns the primitive value of `Date`                                                           |

| `कन्ट्रोफ () | 'मिति मिति को आदिम मान फिर्ता गर्दछ

