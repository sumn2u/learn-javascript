---
chapter: अध्याय १८
pageNumber: ९०
titleIndex: १८.१
---
# प्रतिज्ञा, असिंक/प्रतीक्षा

कल्पना गर्नुहोस् कि तपाईं एक लोकप्रिय पुस्तक लेखक हुनुहुन्छ, र तपाईं एक निश्चित दिनमा नयाँ पुस्तक जारी गर्ने योजना बनाउँदै हुनुहुन्छ। यस पुस्तकमा रुचि राख्ने पाठकहरूले यस पुस्तकलाई आफ्नो इच्छासूचीमा थपिरहेका छन् र प्रकाशित हुँदा वा प्रकाशन को दिन पनि स्थगित भएको अवस्थामा सूचित गरिन्छ। रिलीजको दिन, सबैलाई सूचित गरिन्छ र सबै पक्षलाई खुसी पार्ने पुस्तक किन्न सकिन्छ। यो एक वास्तविक जीवन सादृश्य हो जुन प्रोग्रामिंगमा हुन्छ।

1. "_producing code_" भनेको समय लाग्ने र कुनै कुरा पूरा गर्ने कुरा हो। यहाँ यो एक पुस्तक लेखक हो।

2. "_consuming code_" ले "उत्पादन कोड" एक पटक तयार भएपछि उपभोग गर्दछ। यस मामला मा, यो एक "पाठक" हो।

3. "_producing code_" र "_consuming code_" बीचको सम्बन्धलाई _प्रतिज्ञा_ भन्न सकिन्छ किनकि यसले "_producing code_" बाट "_consuming code_" मा परिणामहरू प्राप्त गर्ने आश्वासन दिन्छ।

हामीले बनाएको सादृश्य जाभास्क्रिप्ट 'प्रतिज्ञा' वस्तुको लागि पनि सत्य छ। 'प्रतिज्ञा' वस्तुका लागि कन्स्ट्रक्टर वाक्यविन्यास हो।

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "writer")
});
```

यहाँ, एउटा प्रकार्य 'नयाँ प्रतिज्ञा' मा पास गरिएको छ जसलाई _निष्पादक_ पनि भनिन्छ, र सिर्जनामा स्वचालित रूपमा चल्छ। यसले उत्पादन कोड समावेश गर्दछ जुन परिणाम दिन्छ। 'रिजोल्भ' र 'रिजेक्ट' जाभास्क्रिप्टद्वारा नै प्रदान गरिएका तर्कहरू हुन् र परिणामहरूमा यीमध्ये एक भनिन्छ।

* `resolve(value):` एक कलब्याक प्रकार्य जसले परिणाममा 'मान' फर्काउँछ

* `reject(error)`: कलब्याक प्रकार्य जसले त्रुटिमा 'त्रुटि' फर्काउँछ, यसले त्रुटि वस्तु फर्काउँछ

'नयाँ प्रतिज्ञा (`new Promise`)' कन्स्ट्रक्टरद्वारा फिर्ता गरिएको 'प्रतिज्ञा' वस्तुको आन्तरिक गुणहरू निम्नानुसार छन्:

* result - initially `undefined`, then changes to `value` upon `resolve` or `error` when `reject` is called (सुरुमा 'अपरिभाषित', त्यसपछि 'रिजेक्ट' गर्दा 'रिजोल्युसन' वा 'त्रुटि' मा 'मान' मा परिवर्तन हुन्छ जब 'अस्वीकार' भनिन्छ)

<figure><img src="../_book/.gitbook/assets/async_await.png" alt=""><figcaption><p>Promise with resolve and reject callbacks</p></figcaption></figure>


{% hint style="warning" %}

एक प्रतिज्ञा गुणहरू पहुँच गर्न सक्दैन: `स्टेट` र `परिणाम`। प्रतिज्ञाहरू सम्हाल्न प्रतिज्ञा विधिहरू आवश्यक छन्।

{% endhint %}

Example of a promise.

प्रतिज्ञा को उदाहरण।

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

यहाँ, `promiseOne` एक "_fulfilled promise_" को एक उदाहरण हो किनकि यसले सफलतापूर्वक मानहरू समाधान गर्दछ, जबकि `promiseTwo` एक "_rejected promise_" हो किनकि यो अस्वीकार हुन्छ। अस्वीकृत वा समाधान गरिएको प्रतिज्ञालाई सुरुमा पेन्डिङ गरिएको प्रतिज्ञाको विपरीत _सेटल_ प्रतिज्ञा भनिन्छ। प्रतिज्ञाबाट प्रकार्य उपभोग गर्दा `.then` र `.catch` विधिहरू प्रयोग गरेर दर्ता गर्न सकिन्छ। हामी पहिलेका विधिहरू पूरा भएपछि सफाई वा अन्तिम रूप दिनका लागि `.finally` विधि पनि थप्न सक्छौं।

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

`Promise.then()` विधिमा, दुबै कलब्याक तर्कहरू वैकल्पिक छन्।
{% endhint %}
