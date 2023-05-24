---
chapter: 2
pageNumber: 14
---

# Equality

While writing a program we frequently need to determine the equality of variables in relation to other variables. This is done using an equality operator. The most basic equality operator is the `==` operator. This operator does everything it can to determine if two variables are equal, even if they are not of the same type.

For example, assume:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

`foo == bar` will evaluate to `true` and `baz == qux` will evaluate to `false`, as one would expect. However, `foo == baz` will also evaluate to `true` despite `foo` and `baz` being different types. Behind the scenes the `==` equality operator attempts to force its operands to the same type before determining their equality. This is in contrast to the `===` equality operator.

The `===` equality operator determines that two variables are equal if they are of the same type _and_ have the same value. With the same assumptions as before, this means that `foo === bar` will still evaluate to `true`, but `foo === baz` will now evaluate to `false`. `baz === qux` will still evaluate to `false`.

{% exercise %}
Use the `==` and `===` operator to compare the values of `str1` and `str2`.

{% initial %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// compare using ==
let stringResult1 =
let boolResult1 =
// compare using ===
let stringResult1 =
let boolResult2 = 
{% solution %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// compare using ==
let stringResult1 = str1 == str2 // false
let boolResult1 =  bool1 == bool2 // true

// compare using ===
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false


{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true &&  boolResult2 === false );

{% context %}
{% endexercise %}
