---
chapter: 19
pageNumber: 121
description: Global footprint refers to the impact or influence that a script or application has on the global scope of the runtime environment. When a script or application creates variables or functions in the global scope, it affects the global footprint. 
---
# Global footprint

If you are developing a module, which might be running on a web page, which also runs other modules, then you must beware  of the variable name overlapping.

Suppose we are developing a counter module:

```javascript
let myCounter = {
  number: 0,
  plusPlus: function () {
    this.number = this.number + 1;
  },
  isGreaterThanTen: function () {
    return this.number > 10;
  },
};
```

> _**Note:**_ This technique is often used with closures, to make the internal state immutable from the outside.

The module now takes only one variable name — `myCounter`. If any other module on the page makes use of such names like `number` or `isGreaterThanTen` then it's perfectly safe because we will not override each other's values.
