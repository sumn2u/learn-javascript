---
layout: editorial
chapter: 10
pageNumber: 79
description: The date object stores date and time and provides methods for managing it. Date objects are static and use a browser's default timezone to display the date as a full-text string.
---

# Chapter 10
# Date and Time

The `date` object stores date and time and provides methods for managing it. Date objects are static and use a browser's default timezone to display the date as a full-text string.

To create  `date` we use a `new Date()` constructor and can be created in the following ways.

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
{% endhint %}

Methods and properties supported by date  are described below:

| Name                   | Description                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `constructor`          | Returns function that created the Date object's prototype                                       |
| `getDate()`            | Returns the day (1-31) of a month                                                               |
| `getDay()`             | Returns the day (0-6) of a week                                                                 |
| `getFullYear()`        | Returns the year (4 digits)                                                                     |
| `getHours()`           | Returns the hour (0-23)                                                                         |
| `getMilliseconds()`    | Returns the milliseconds (0-999)                                                                 |
| `getMinutes()`         | Returns the minutes (0-59)                                                                       |
| `getMonth()`           | Returns the month (0-11)                                                                         |
| `getSeconds()`         | Returns the seconds (0-59)                                                                       |
| `getTime()`            | Returns the numeric value of a specified date in milliseconds since midnight Jan 1 1970         |
| `getTimezoneOffset()`  | Returns timezone offset in minutes                                                              |
| `getUTCDate()`         | Returns the day (1-31) of a month according to universal time                                   |
| `getUTCDay()`          | Returns the day (0-6) according to universal time                                               |
| `getUTCFullYear()`     | Returns the year (4-digits) according to universal time                                          |
| `getUTCHours()`        | Returns the hours (0-23) according to universal time                                             |
| `getUTCMilliseconds()` | Returns the milliseconds (0-999)  according to  universal time                                    |
| `getUTCMinutes()`      | Returns the minutes (0-59) according to  universal time                                          |
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

