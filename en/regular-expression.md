---
layout: editorial
chapter: 14
pageNumber: 89
description: A regular expression, often abbreviated as "regex," is a powerful tool for pattern matching and searching within strings. It provides a concise and flexible way to search, match, and manipulate text based on specific patterns.
---

# Chapter 14
# Regular Expression

A regular expression is an object that can either be constructed with the `RegEx` constructor or written as a literal value by enclosing a pattern in a forward slash `(/)` characters. The syntaxes for creating a regular expression are shown below.

```javascript
// using regular expression constructor
new RegExp(pattern[, flags]);

// using literals
/pattern/modifiers
```

The flags are optional while creating a regular expression using literals. Example of creating identical regular using above mentioned method is as follows.

```javascript
let re1 = new RegExp("xyz"); 
let re2 = /xyz/;
```

Both ways will create a regex object and have the same methods and properties. There are cases where we might need dynamic values to create a regular expression, in that case, literals won't work and have to go with the constructor.

{% hint style="info" %}
In cases where we want to have a forward slash to be a part of a regular expression, we have to escape the forward slash `(/)` with backslash `(\)`.
{% endhint %}

The different modifiers that are used to perform case-insensitive searches are:

* `g` - global search (finds all matches instead of stopping after the first match)

Example :

```javascript
const str = "Hello world, hello again!";
const regex = /hello/g;
const matches = str.match(regex);
// If you are thinking about .match() Read This 👇
// It is a built-in method in JavaScript that is used to search a string for a match against an expression.
// If the match is found, It returns an array of all the matches that were found. and if not, the .match() method returns null.

console.log(matches); // ["Hello", "hello"]
```

* `i` - case insensitive search

Example :

```javascript
const str = "HeLlO WoRlD";
const regex = /hello/i;
const match = regex.test(str);
// The .test() method returns a boolean value: 
// true if the match is found, and false if the match is not found.

console.log(match); // true
```

* `m` - multiline matching 

Example :

```javascript
const str = "This is a\nmultiline string.";
const regex = /./mg;
const matches = str.match(regex);
// the m flag is used to match newline characters (\n).
// This means that the regex will match all 26 characters in the string,
//  including the newline character.

console.log(matches.length); // 26
```

_Brackets_ are used in a regular expression to find a range of characters. Some of them are mentioned below.

* `[abc]` - find any character between the brackets

Example :

```javascript
const str = "The cat and the dog are both animals.";
const regex = /[abc]/g;
const matches = str.match(regex);

console.log(matches); // Array of all occurrences of a, b, and c

[
  'c', 'a', 'a',
  'a', 'b', 'a',
  'a'
]
```

* `[^abc]` - find any character, not between the brackets

Example :

```javascript
const str = "The cat and dog.";
const regex = /[^abc]/g; // Matches any character that is not 'a', 'b', or 'c'
const matches = str.match(regex);

console.log(matches); // Array of all occurrences of characters not 'a', 'b', or 'c'

[
  'T', 'h', 'e', ' ',
  't', ' ', 'n', 'd',
  ' ', 'd', 'o', 'g',
  '.'
]

```

* `[0-9]` - find any digit between the bracket

Example :

```javascript
const str = "The price of the item is $25, but it may change to $30.";
const regex = /[0-9]/g; // Matches any digit from 0 to 9
const matches = str.match(regex);

console.log(matches); // Array of all occurrences of digits

[
  '2', '5', '3', '0'
]

```

* `[^0-9]` - find any character, not between the brackets (non-digit)

Example :

```javascript
const str = "The price is $25.";
const regex = /[^0-9]/g; // Matches any character that is not a digit
const matches = str.match(regex);

console.log(matches); // Array of all occurrences of non-digits

[
  'T', 'h', 'e', ' ',
  'p', 'r', 'i', 'c',
  'e', ' ', 'i', 's',
  ' ', '$', '.'
]

```

* `(x|y)`- find any of the alternatives separated by |

Example :

```javascript
const str = "The words 'xylophone' and 'yellow' contain the letters 'x' and 'y'.";
const regex = /(x|y)/g; // Matches either 'x' or 'y'
const matches = str.match(regex);

console.log(matches); // Array of all occurrences of 'x' or 'y'

[
  'x', 'y', 'y', 'x', 'x', 'y'
]

```

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
| `\b`          | Match at the beginning / end of a word                            |
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

Properties and methods supported by RegEx are listed below.

| Name          | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `constructor` | Returns function that created RegExp object's protype                              |
| `global`      | Checks if the `g` modifier is set                                                  |
| `ignoreCase`  | Checks if the `i` modifier is set                                                 |
| `lastIndex`   | Specifies the index at which to start the next match                               |
| `multiline`   | Checks if the m modifier is set                                                   |
| `source`      | Returns the text of the string                                                    |
| `exec()`      | Test for the match and returns the first match, if no match then it returns `null` |
| `test()`      | Test for the match and returns the `true` or `false`                               |
| `toString()`  | Returns the string value of the regular exression                                  |

{% hint style="warning" %}
A `complie()` method complies the regular expression and is deprecated.
{% endhint %}

### A common example of regular expression

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

### A Real Life Example of Regex in Pincode Checking

```javascript
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Define a list of valid pincodes
  const validPincodes = [
    110001, 110002, 110003, 110004, 110005, 110006, 110007, 110008, 110009,
    110010, 110011, 110012, 110013, 110014, 110015, 110016, 110017, 110018,
    110019, 110020, 110021, 110022, 110023, 110050, 110051, 110056, 110048,
    110057, 110058, 110059, 110060, 110061, 110062, 110063, 110064
  ];

  // Convert the valid pincodes to strings
  const validPincodeStrings = validPincodes.map((pincode) => String(pincode));

  // Create a regular expression pattern to match valid pincodes
  const regexPattern = new RegExp(`^(${validPincodeStrings.join("|")})$`);

  // Get the submitted pincode from the input field
  const submittedPincode = pincode; // Make sure 'pincode' is defined elsewhere

  // Check if the submitted pincode matches the valid pincode pattern
  if (regexPattern.test(submittedPincode)) {
    // Display a success message
    // ...
  } else if (submittedPincode === "") {
    // Display an error message for empty input
    // ...
  } else if (submittedPincode.length < 6) {
    // Display an error message for invalid pincode length
    // ...
  }
}
```
