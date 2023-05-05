# Async/Await

With promises, one can use a `async` keyword to declare an asynchronous function that returns a promise whereas the `await`  syntax makes JavaScript wait until that promise settles and returns its value. These keywords make promises easier to write.  An example of async is shown below.

प्रतिज्ञाहरूको साथ, एक एसिन्क्रोनस प्रकार्य घोषणा गर्न एक `Assync` कुञ्जी शब्द प्रयोग गर्न सक्दछ जबकि एक वाचा फिर्ता` प्रतीक्षा icantax javascrax जब सम्म त्यो वाक्य जब सम्म बदल्छ र यसको मान फिर्ता गर्दछ। यी कुञ्जी शब्दहरूले लेख्नको लागि वाचाहरू लेख्छन्। एसिनको उदाहरण तल देखाइएको छ।

```javascript
//async function f
async function f() {
  return 1;
}
// promise being resolved
f().then(alert); // 1
```

The above example can be written as follows:

माथिको उदाहरण निम्नको रूपमा लेख्न सकिन्छ:

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async` ensures that the function returns a promise, and wraps non-promises in it. With `await`, we can make JavaScript wait until the promise is settled with its value returned.&#x20;

`Assnc````s सुनिश्चित गर्दछ कि प्रकार्यले एक वाचा फिर्ता गर्दछ, र यसमा गैर-आश्वासनहरू हेर्दछ। `प्रतीक्षाको साथ, हामी जाभास्क्रिप्टलाई प्रतिज्ञा गर्न सक्दछौं जबसम्म वाचालाई यसको मान फिर्ता गरिन्छ। & # X20;

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Welcome to Learn JavaScript!"), 1000)
  });
  
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "Welcome to Learn JavaScript!"
}

f();
```

{% hint style="warning" %}


The `await` keyword can only be used inside an `async` function.

`प्रतीक्षा गर्न कुञ्जी शब्द केवल एक` एशिन्को कार्य भित्रबाट प्रयोग गर्न सकिन्छ।
{% endhint %}
