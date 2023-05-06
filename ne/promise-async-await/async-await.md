# Async/Await

# असिंक/प्रतिक्षा 
With promises, one can use a `async` keyword to declare an asynchronous function that returns a promise whereas the `await`  syntax makes JavaScript wait until that promise settles and returns its value. These keywords make promises easier to write.  An example of async is shown below.

प्रतिज्ञाहरूको साथ, एक `एसिंक` कीवर्ड प्रयोग गर्न सक्दछ एक एसिंक्रोनस प्रकार्य घोषणा गर्न जसले प्रतिज्ञा फर्काउँछ जबकि `प्रतीक्षा` वाक्यरचनाले जाभास्क्रिप्टलाई प्रतीक्षा गर्दछ जबसम्म त्यो प्रतिज्ञा व्यवस्थित हुँदैन र यसको मान फर्काउँछ। यी कुञ्जीशब्दहरूले प्रतिज्ञाहरू लेख्न सजिलो बनाउँदछ।  एसिंकको एक उदाहरण तल देखाइएको छ।

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

`एसिंक` ले यो सुनिश्चित गर्दछ कि प्रकार्यले एक प्रतिज्ञा फर्काउँछ, र यसमा गैर-प्रतिज्ञाहरू लपेट्दछ। `प्रतीक्षा` को साथ, हामी जाभास्क्रिप्टलाई प्रतिक्षा गर्न सक्दछौं जबसम्म प्रतिज्ञा यसको मूल्य फिर्ता को साथ व्यवस्थित हुँदैन।

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

`प्रतिक्षा` कुञ्जीशब्द केवल `एसिंक` प्रकार्य भित्र प्रयोग गर्न सकिन्छ।
{% endhint %}
