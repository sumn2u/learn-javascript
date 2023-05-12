# Concatenate

Furthermore, you can concatenate different conditions with "`or`" or “`and`” statements, to test whether either statement is true, or both are true, respectively.

In JavaScript “or” is written as `||` and “and” is written as `&&`.

Say you want to test if the value of x is between 10 and 20. You could do that with a condition stating:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

If you want to make sure that country is either “England” or “Germany” you use:

```javascript
if (country === "England" || country === "Germany") {
    ...
}
```

> **Note**: Just like operations on numbers, conditions can be grouped using parenthesis, ex: `if ( (name === "John" || name === "Jennifer") && country === "France")`.
