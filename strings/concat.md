# Concatenation

Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings.  The concatenation of a string appends one or more strings to another string.  This is done in JavaScript using the following ways.

* using the  **`+`** operator
* using the `concat()` method
* using the array `join()` method
* using the template literal (introduced in ES6)

The string `concat()` method accepts the list of strings as parameters and returns a new string after concatenation i.e. combination of all the strings. Whereas the array `join()` method is used to concatenate all the elements present in an array by converting them into a single string.&#x20;

The template literal  uses backtick `(``)` and provides an easy way to create multiline strings and perform string interpolation. An expression can be used inside the backtick using `$` sign and curly braces `$(expression}`.

```javascript
const icon = '👋';
// using template Strings
`hi ${icon}`;

// using join() Method
['hi', icon].join(' ');

// using concat() Method
''.concat('hi ', icon);

//  using + operator
'hi ' + icon;
// hi 👋
```
