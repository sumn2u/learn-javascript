# Hoisting

Hosting is a default behavior in JavaScript of moving declarations at the top.  While executing a code, it creates a global execution context:  creation and execution.  In the creation phase, JavaScript moves the variable and function declaration to the top of the page, which is known as hoisting.&#x20;

हिरांजिंग मा जाभास्क्रिप्टमा शीर्षमा जाभास्क्रिप्टमा एक पूर्वनिर्धारित व्यवहार हो। कोड कार्यान्वयन गर्दा यसले विश्वव्यापी कार्यान्वयन प्रस context ्ग पैदा गर्दछ: सिर्जना र कार्यान्वयन। सृष्टि चरणमा, जाभास्क्रिप्टले भ्यारीएबल र प्रकार्य प्रयोग पृष्ठको शीर्षमा सर्दछ, जुन हड्कि for को रूपमा चिनिन्छ। & # X20;

```javascript
// variable hoisting
console.log(counter);
let counter = 1; // throws ReferenceError: Cannot access 'counter' before initialization
```

Although the `counter` is present in the heap memory but hasn't been initialized so, it throws an error. This happens because of hoisting, the `counter` variable is hoisted here.&#x20;

यद्यपि `काउन्टर" को रूप मा उपस्थित छ तर आरम्भ गरिएको छैन, यसले त्रुटि फ्याँक्छ। यो हुशिंगको कारणले हुन्छ, `काउन्टर शब्दलाई यहाँ फहराइएको छ। & # X20;

<pre class="language-javascript"><code class="lang-javascript"><strong>// function hoisting
</strong><strong>const x = 20,

</ कडा> <मजबूत> X = 20,
</strong>    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined

परिणाम = थप्नुहोस् (x, y); // ❌ अप्रशिक्षित संदर्भ ग्रस्त: थप्दैन
console.log(result);

let add = (x, y) => x + y; 
</code></pre>

Here, the `add` function is hoisted and initialized with `undefined` in heap memory in the creation phase of the global execution context. Thus, throwing an error.&#x20;

यहाँ, `add` प्रकार्य निस्कियो र विस्तृत जानकारीको रूपमा` अपरिभाइनको साथ आरम्भ गरिएको छ। यसैले, त्रुटि फ्याँक्दै। & # X20;



