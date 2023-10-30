---
chapter: 4
pageNumber: 32
---
# Replace

The `replace` method allows us to replace a character, word, or sentence with a string. For example.

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// Result: Hi World!
```

{% hint style="warning" %}
To replace a value on all instances of a [regular expression](../regular-expression.md) with a `g` modifier is set.
{% endhint %}

It searches for a string for a value or a regular expression and returns a new string with the value(s) replaced. It doesn't change the original string. Let's see the global case-insensitive replacement example.

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red"); 

console.log(result); 
//Result: Mr red has a red house and a red car 
```

