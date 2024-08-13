---
chapter: 21
pageNumber: 150
---

# Constants

Constants were introduced in ES6(2015), and use a `const` keyword. Variables that are declared with `const` cannot be reassigned or redeclared.&#x20;

### Example:

```javascript
const VERSION = "1.2";
```

### 📝 Task:

- [ ] Run the program mentioned below and fix the error that you see in the console. Make sure that the code result is `0.9` when it is fixed in the console.

  ```javascript
  const VERSION = "0.7";
  VERSION = "0.9";
  console.log(VERSION);
  ```

- [ ] Write a program that prompts user to enter a temperature in _degrees Celsius_, then use constant `CONVERSION_FACTOR` which equals to `9/5` to convert to _degrees Fahrenheit_.

  ```javascript
  const CONVERSION_FACTOR = 9 / 5;

  /* Start your code from here*/
  ```

### 💡 Hints:

- Visit the [Variables](../basics/variables.md) chapter for more info about const and also look for "_TypeError assignment to constant variable_" in search engines to learn a fix.&#x20;

{% aceeditor compilerTitle="Try it!" %}
{% endaceeditor %}