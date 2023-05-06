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
* `i`- case insensitive search
* `m` - multiline matching

_Brackets_ are used in a regular expression to find a range of characters. Some of them are mentioned below.

* `[abc]` - find any character between the brackets
* `[^abc]` - find any character, not between the brackets
* `[0-9]` - find any digit between the bracket
* `[^0-9]` - find any character, not between the brackets (non-digit)
* `(x|y)`- find any of the alternatives separated by |

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

Some examples of regular expressions are shown here.

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
