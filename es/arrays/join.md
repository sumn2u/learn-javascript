---
chapter: 6
pageNumber: 43
description: The join method turns the array in a string an joins it all together without modifiying the original array.  
---
# Join

The `join` method, makes an array turn into a string and joins it all together. It does not change the original array. Here's the syntax for using `join`:

```c
array.join([separator]);
```

The `separator` argument is optional and specifies the character to be used to separate the elements in the resulting string. If omitted, the array elements are separated with a comma (`,`).

For example:

```javascript
let array = ["one", "two", "three", "four"]; 

console.log(array.join(" ")); 

// Result: one two three four
```

{% hint style="warning" %}
Any separator can be specified but the default one is a comma `(,)`.
{% endhint %}

In the above example, a space is used as a separator. You can also use `join` to convert an array-like object (such as an arguments object or a NodeList object) to a string by first converting it to an array using the `Array.prototype.slice()` method:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(', '));
}

printArguments('a', 'b', 'c'); // Result: "a, b, c"
```
