# Promise, async/await

# वाचा, Async / प्रतीक्षा

Imagine you are a popular book writer, and you are planning to release a new book on a certain day. Readers who have an interest in this book are adding this book to their wishlist and are notified when published or even if the release day got postponed too. On the release day, everyone gets notified and can buy the book making all parties happy. This is a real-life analogy that happens in programming.

कल्पना गर्नुहोस् कि तपाईं एक लोकप्रिय पुस्तक लेखक हुनुहुन्छ, र तपाईं एक निश्चित दिनमा नयाँ पुस्तक रिलीज गर्ने योजना हुनुहुन्छ। यस पुस्तकमा रुचि राख्ने पाठकहरू जोड्ने पाठकहरू जोड्ने छन् र प्रकाशित हुँदा सूचित छन् वा यदि रिलीज दिनले पनि स्थगित गर्यो भने पनि। रिलिज दिन मा, सबै सूचित हुन्छन् र सबै दलहरु लाई खुशी बनाउने पुस्तक किन्न सक्छन्। यो एक वास्तविक-जीवन साताव हो जुन प्रोग्रामिंगमा हुन्छ।

1. A "_producing code_" is something that takes time and accomplishes something. Here it's a book writer.

1. एक "_प्रोसिंग कोड_" केहि चीज हो जुन समय लिन्छ र केहि चीज गर्दछ। यहाँ यो पुस्तक लेखक हो।
2. A "_consuming code_" is someone who consumes the "producing code" once it's ready. In this case, it's a "reader".

2. एक "उपभोक्सिंग कोड" कोही हो जसले "उत्पादन कोड खान्छन्" एक पटक यो तयार हुन्छ। यस अवस्थामा, यो एक "पाठक" हो।
3. The linkage between the "_producing code_" and the "_consuming code_" can be called a _promise_ as it assures getting the results from the "_producing code_" to the "_consuming code_".

The। "_प्रोसिंग कोड_" बीचको लिंक गर्नुहोस् र "उपभोक्ता कोड" को बीचमा "_प्रोले कोड_" बाट परिणाम प्राप्त गर्न मद्दत गर्दछ।

The analogy that we made is also true for the JavaScript `promise` object. The constructor syntax for the `promise` object is:

समान समानता जुन हामीले बनायौं जाभास्क्रिप्टको लागि पनि सत्य हो `वाचा दायरा वस्तु। `वाचार्डको आपत्तिको लागि कन्स्ट्रक्टर सिन्ट्याक्स हो:

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "writer")
});
```

Here, a function is passed to `new Promise` also known as the _executor,_ and runs automatically upon creation. It contains the producing code that gives the result. `resolve` and `rejects` are the arguments provided by the JavaScript itself and are called one of these upon results.

यहाँ, एक प्रकार्य _ EXEXECHER को रूपमा चिनिन्छ _ EEXECCord लाई पनि चिनिन्छ, _ र सृष्टिमा स्वचालित रूपमा रन। यसले उत्पादित कोड समावेश गर्दछ जुन परिणाम दिन्छ। A 'समाधान` र `अस्वीकार गर्नुहोस् जाभास्क्रिप्टबाट प्रदान गरिएको आर्गुमेन्टहरू हुन् र परिणामहरू मध्ये एकलाई यी मध्ये एक भनिन्छ।

* `resolve(value):` a callback function that returns `value` upon result

* `समाधान (मान):` एक कलब्याक प्रकार्य जुन `मानको परिणामस्वरूप
* `reject(error)`: a callback function that returns `error` upon error, it returns an error object

* `अस्वीकार (त्रुटि)`: एक कलब्याक प्रकार्य: `त्रुटि फिर्ता फिर्ता, यसले त्रुटि वस्तु फिर्ता गर्दछ

The internal properties of `promise` object returned by the `new Promise` constructor are as follows:

"राज्यको आन्तरिक गुणहरू` नयाँ वचनको निर्माताबाट फर्केका प्रत्येक नयाँ वाचाको निर्वाचनले फिर्ता आएको छ:

* `state` - initially `pending,` then changes to either `fulfill` upon resolve or `rejected` when `reject` is called

* `राज्यको - सुरुमा` पेन्डिंग, `तब या त` REARDEDED मा परिवर्तन वा `अस्वीकृत" अस्वीकृत गर्नुहोस्
* result - initially `undefined`, then changes to `value` upon `resolve` or `error` when `reject` is called

* परिणाम - सुरुमा `अपरिभाषितको, त्यसपछि` को मान `` समाधान "` `त्रुटि" मा परिवर्तन गर्नुहोस् जब `अस्वीकार गर्नुहोस्

<figure><img src="../_book/.gitbook/assets/async_await.png" alt=""><figcaption><p>Promise with resolve and reject callbacks</p></figcaption></figure>

<चित्र> <img Src = "। /_ पुस्तक / .gitcle / सम्पत्ति / <plagect> </ plackept> </ Plagept> </ plagept> </ placept> </ plagept> </ placept> / >

{% hint style="warning" %}


One cannot access promise properties: `state` and result. Promise methods are needed to handle promises.

एक कार्य सम्पादनहरू पहुँच गर्न सक्दैन: `राज्य 'र परिणाम। प्रतिज्ञाहरू सम्हाल्न प्रतिज्ञा विधिहरू आवश्यक छ।
{% endhint %}

Example of a promise.

एक प्रतिज्ञा को उदाहरण।

```javascript
let promiseOne = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1-second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
})

let promiseTwo = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1-second signal that the job is done with the result "error"
  setTimeout(() => reject(new Error("Whoops!")), 1000);
})
```

Here, the `promiseOne` is an example of a "_fulfilled promise_" as it successfully resolves the values, whereas the `promiseTwo` is a "_rejected promise_" as it gets rejected. A promise that is either rejected or resolved is called a _settled_ promise, as opposed to an initially _pending_ promise. Consuming function from the promise can be registered using the `.then` and `.catch` methods. We can also add `.finally` method for performing cleanup or finalizing after previous methods have been completed.

यहाँ, `वर्तमान एक" _stfillyfild trage_ "को एक उदाहरण हो किनकि यसले मानहरूको सफलतापूर्वक समाधान गर्दछ, जबकि _ प्रोमिटेटेको" हो "जस्तो कि यो अस्वीकृत हुन्छ। एक वाक्य अस्वीकृत वा समाधान गरिएको छ कि समाधान गरिएको वा समाधान गरिएको छ एक __ एसेट्ट गरिएको वाचा भनिन्छ, एक सुरुमा _। प्रतिज्ञाबाट प्रकार्य उपभोक्ता `.यो प्रयोग गर्न सकिने दर्ता गर्न सकिन्छ। हामी सफाई प्रदर्शन गर्न वा अघिल्लो विधिहरू पूरा गरिसकें वा अन्तिम रूपमा अन्तिम रूपमा थप्न सक्दछौं।

```javascript
let promiseOne = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promiseOne.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

let promiseTwo = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promiseTwo.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);

let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promiseThree.catch(alert); // shows "Error: Whoops!" after 1 second
```

{% hint style="warning" %}


In the `Promise.then()` method, both callback arguments are optional.

`वाक्यमा।` `विधि () विधि, दुबै कलब्याक तर्कहरू वैकल्पिक हुन्।
{% endhint %}
