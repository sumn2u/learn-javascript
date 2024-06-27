---
chapter: 4
pageNumber: 38
---
# Substring

The `string.substring()` is an inbuilt function in JavaScript that is used to return the part of the given string from the start index to the end index. Indexing start from zero `(0)`. 

Syntax: 

`string.substring(StartIndex, EndIndex)`

### Syntax:

* using `str.substr(start , length)`
* using the `substr()` method
* using the template `(``)` literal (introduced in [ES6](../es6-concepts/template-literals.md))

The `substr()` method takes in:

* **parameters**: Here the StartIndex and EndIndex describe the part of the string to be taken as a substring. Here, the EndIndex is optional. 
* **return value**: It returns a new string that is part of the given string. JavaScript code to show the working of `string.substring()` function: 

```javascript
//Example 1:
// JavaScript to illustrate substr() method

const str = "GeeksforGeeks";
const result = str.substring(8);
console.log(result);



//Output
for

```

```javascript

//Example 2: 
// Taking a string as letiable
let string = "geeksforgeeks";
a = string.substring(-1)
b = string.substring(2.5)
c = string.substring(2.9)

// Printing new string which are
// the part of the given string
console.log(a);
console.log(b);
console.log(c);


//Output
geeksforgeeks
eksforgeeks
eksforgeeks
```
