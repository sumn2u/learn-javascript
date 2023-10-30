---
chapter: 4
pageNumber: 33
---
# Length

It's easy in Javascript to know how many characters are in a string using the property `.length`. The `length` property returns the number of characters in the string, including spaces and special characters.

```javascript

let size = "Our lovely string".length;
console.log(size);
// size: 17

let emptyStringSize = "".length
console.log(emptyStringSize);
// emptyStringSize: 0

```

The length property of an empty string is `0`.&#x20;

{% hint style="warning" %}
The `length` property is a read-only property, so you cannot assign a new value to it.
{% endhint %}
