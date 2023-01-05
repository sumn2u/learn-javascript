# Creation

You can define strings in JavaScript by enclosing the text in single quotes or double quotes:

```javascript
// Single quotes can be used
let str = "Our lovely string";

// Double quotes as well
let otherStr = "Another nice string";
```

In Javascript, Strings can contain UTF-8 characters:

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

You can also use the `String` constructor to create a string object:

```javascript
const stringObject = new String('This is a string');
```

However, it is generally not recommended to use the `String` constructor to create strings, as it can cause confusion between string primitives and string objects. It is usually better to use string literals to create strings.

You can also use template literals to create strings. Template literals are strings that are enclosed in backticks `(``)` and can contain placeholders for values. Placeholders are denoted with the `` `${}` `` syntax.

```javascript
const name = 'John';
const message = `Hello, ${name}!`;
```

Template literals can also contain multiple lines and can include any expression inside the placeholders.

{% hint style="warning" %}
Strings can not be subtracted, multiplied, or divided.
{% endhint %}
