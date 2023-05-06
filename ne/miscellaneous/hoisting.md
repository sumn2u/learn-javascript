# Hoisting

# होइस्टिंग 

Hosting is a default behavior in JavaScript of moving declarations at the top.  While executing a code, it creates a global execution context:  creation and execution.  In the creation phase, JavaScript moves the variable and function declaration to the top of the page, which is known as hoisting.&#x20;

होस्टिङ जाभास्क्रिप्टमा पूर्वनिर्धारित व्यवहार हो जुन शीर्षमा घोषणाहरू सार्ने छ।  एक कोड कार्यान्वयन गर्दा, यसले विश्वव्यापी कार्यान्वयन सन्दर्भ सिर्जना गर्दछ: सिर्जना र कार्यान्वयन।  सिर्जना चरणमा, जाभास्क्रिप्टले चर र प्रकार्य घोषणालाई पृष्ठको शीर्षमा सार्दछ, जुन उत्थानको रूपमा चिनिन्छ।

```javascript
// variable hoisting
console.log(counter);
let counter = 1; // throws ReferenceError: Cannot access 'counter' before initialization
```

Although the `counter` is present in the heap memory but hasn't been initialized so, it throws an error. This happens because of hoisting, the `counter` variable is hoisted here.&#x20;

यद्यपि 'काउन्टर' ढेर मेमोरीमा अवस्थित छ तर सुरु गरिएको छैन, यसले त्रुटि फ्याँक्छ। यो फहराउने कारण हुन्छ, 'काउन्टर' चर यहाँ फहराइन्छ।;

<pre class="language-javascript"><code class="lang-javascript"><strong>// function hoisting
</strong><strong>const x = 20,
</strong>    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y;
</code></pre>

Here, the `add` function is hoisted and initialized with `undefined` in heap memory in the creation phase of the global execution context. Thus, throwing an error.&#x20;

यहाँ, `add` प्रकार्य निस्कियो र विस्तृत जानकारीको रूपमा` अपरिभाइनको साथ आरम्भ गरिएको छ। यसैले, त्रुटि फ्याँक्दै।


