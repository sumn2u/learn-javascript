---
layout: editorial
chapter: 4
pageNumber: 29
---

# Chapter 4
# Strings

JavaScript strings share many similarities with string implementations from other high-level languages. They represent text-based messages and data. In this course, we will cover the basics. How to create new strings and perform common operations on them.

Here is an example of a string:

```
"Hello World"
```

String indexes are zero-based, meaning that starting position of the first character at `0` followed by others in incremental order. Various methods are supported by string and return a new value. These methods are described below.

| Name                 | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| `charAt()`           | Returns character at specified index                                                   |
| `charCodeAt()`       | Returns Unicode character at specified index                                           |
| `concat()`           | Returns two or more combined strings                                                   |
| `constructor`        | Returns string's constructor function                                                  |
| `endsWith()`         | Checks if a string ends with a specified value                                         |
| `fromCharCode()`     | Returns Unicode values as characters                                                   |
| `includes()`         | Checks if a string contains with a specified value                                     |
| `indexOf()`          | Returns the index of its first occurrence                                               |
| `lastIndexOf()`      | Returns the index of its last occurrence                                                |
| `length`             | Returns the length of the string                                                       |
| `localeCompare()`    | Compares two strings with locale                                                       |
| `match()`            | Matches a string against a value or regular expression                                 |
| `prototype`          | Used to add properties and method of an object                                         |
| `repeat()`           | Returns new string with number of copies specified                                     |
| `replace()`          | Returns a string with values replaced by a regular expression or a string with a value |
| `search()`           | Returns an index based on a string's match against a value or regular expression       |
| `slice()`            | Returns a string containing part of a string                                           |
| `split()`            | Splits string into array of substrings                                                 |
| `startsWith()`       | Checks strings beginning against specified character                                     |
| `substr()`           | Extracts part of string, from start index                                              |
| `substring()`        | Extracts part of string, between two indices                                           |
| `toLocalLowerCase()` | Returns string with lowercase characters using host's locale                           |
| `toLocalUpperCase()` | Returns string with uppercase characters using host's locale                           |
| `toLowerCase()`      | Returns string with lowercase characters                                               |
| `toString()`         | Returns string or string object as string                                              |
| `toUpperCase()`      | Returns string with uppercase characters                                               |
| `trim()`             | Returns string with removed whitespaces                                                |
| `trimEnd()`          | Returns string with removed whitespaces from end                                       |
| `trimStart()`        | Returns string with removed whitespaces from start                                     |
| `valueOf()`          | Returns primitive value of string or string object                                     |

