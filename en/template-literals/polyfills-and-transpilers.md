# Polyfills and Transpilers

JavaScript evolves every now and then. Regularly, new language proposals are submitted, analyzed, and added to [https://tc39.github.io/ecma262/ ](https://tc39.github.io/ecma262/)and then incorporated into the specification. There may be differences in how it is implemented in JavaScript engines depending on the browser. Some may implement the draft proposals, while others wait until the whole specification is released. Backward compatibility issues arise as new things are introduced.&#x20;

To support the modern code in old browsers we use two tools: `transpilers` and `polyfills`.

**Transpilers**

It is a program that translates modern code and rewrites it using older syntax constructs so, that the older engine can understand it. For example, "`nullish` coalescing operator" `??`  was introduced in 2020, and outdated browsers can’t understand it.&#x20;

Now, it’s the transpiler's job to make the `nullish` coalescing operator” `??` understandable to the old browsers.&#x20;

```javascript
// before running the transpiler
height = height ?? 200;

// after running the transpiler
height = (height !== undefined && height !== null) ? height: 200;

```

{% hint style="info" %}
&#x20;[Babel](https://babeljs.io/) is one of the most prominent transpilers. In the development process, we can use build tools like [webpack](https://webpack.js.org/) or [parcel](https://parceljs.org/) to transpile code.
{% endhint %}

**Polyfills**

There are times when new functionality isn't available in outdated browser engines. In this case, the code that uses the new functionality won’t work. To fill the gaps, we add the missing functionality which is called a `polyfill`. For example, the `filter()` method was introduced in ES5 and is not supported in some of the old browsers. This method accepts a function and returns an array containing only the values of the original array for which the function returns `true`

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // filter outs the even number
console.log(filtered);

// [2, 4, 6]
```

The polyfill for the filter is.

```javascript
Array.prototype.filter = function (callback) {
  // Store the new array
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // call the callback with the current element, index, and context.
    //if it passes the text then add the element in the new array.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  //return the array
  return result
}
```

{% hint style="info" %}
[caniuse](https://caniuse.com/) shows the updated functionality and syntax supported by different browser engines.
{% endhint %}



