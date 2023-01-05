# Advanced Operators

&#x20;When operators are put together without parenthesis, the order in which they are applied is determined by the _precedence_ of the operators. Multiplication `(*)` and division `(/)` has higher precedence than addition `(+)` and subtraction `(-)`.&#x20;

```javascript
// multiplication is done first, which is then followed by addition
let x = 100 + 50 * 3; // 250
// with parenthesis operations inside the parenthesis are computed first
let y = (100 + 50) * 3; // 450
// operations with the same precedences are computed from left to right
let z = 100 / 50 * 3;
```

Some advanced operators can be used, such as:

* **Modulus (division remainder)**: `x = y % 2`
* **Exponential**: Given a= 5, `c = a**2`, Results: c= 25
* **Increment**: Given a = 5
  * `c = a++`, Results: c = 5 and a = 6
  * `c = ++a`, Results: c = 6 and a = 6
* **Decrement**: Given a = 5
  * `c = a--`, Results: c = 5 and a = 4
  * `c = --a`, Results: c = 4 and a = 4

## Nullish coalescing operator '??'

The `nullish` coalescing operator returns the first argument if it's not `null/undefined`, else the second one. It is written as two question marks `??`. The result of `x ?? y` is:

* if `x` is defined, then `x`,
* if `y` isn’t defined, then `y`.

{% hint style="info" %}
It's a recent addition to the language and might need polyfills to support old browsers
{% endhint %}
