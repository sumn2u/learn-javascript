# Functions

Functions are one of the most powerful and essential notions in programming. Functions like mathematical functions perform transformations, they take input values called **arguments** and **return** an output value. &#x20;

कार्यहरू प्रोग्रामिंगमा सबैभन्दा शक्तिशाली र आवश्यक धारणा हो। गणितीय कार्यहरू जस्तै कार्यहरू रूपान्तरणहरू प्रदर्शन गर्दछ, तिनीहरूले इनपुट मानहरू लिन्छन् ** तर्कहरू ** र ** एक आउटपुट मान। & # X20;

Functions can be created in two ways: using `function declaration` or `function expression` . The _function name_ can be omitted in f`unction expression` making it an `anonymous function`.  Functions, like variables, must be declared. Let's declare a function `double` that accepts an _argument_ called `x` and **returns** the double of x :

कार्यहरू दुई तरिकामा सिर्जना गर्न सकिन्छ: `प्रकार्य घोषणा" `प्रकार्य घोषणा" वा `प्रकार्य अभिव्यक्ति। _Punceation नाम_ F`uncance अभिव्यक्तिको अभिव्यक्तिमा हटाउन सकिन्छ प्रकार्यहरू, जस्तै चरहरू, घोषणा गर्नु पर्छ। एक प्रकार्य घोषणा गरौं ____ डबल 'जुन एक _arggument_ लाई स्वीकार गर्दछ _ x` र ** x को डबल **

```javascript
// an example of a function declaration
function double(x) {
  return 2 * x;
}
```

> _Note:_ the function above **may** be referenced before it has been defined.

> _Note: _ माथिको प्रकार्य ** हुनसक्दछ ** यो परिभाषित गरिएको हुनु अघि सन्दर्भ गर्नुहोस्।

Functions are also values in JavaScript; they can be stored in variables (just like numbers, strings, etc ...) and given to other functions as arguments :

कार्यहरू जाभास्क्रिप्टमा पनि मानहरू हुन्; तिनीहरू भ्यारीएबलमा भण्डारण गर्न सकिन्छ (केवल नम्बरहरू, अप तार, आदि ...) र अन्य कार्यहरू तर्कको रूपमा दिइयो:

```javascript
// an example of a function expression
let double = function (x) {
  return 2 * x;
};
```

> _Note:_ the function above **may not** be referenced before it is defined, just like any other variable.

> _Note: _ माथिको प्रकार्य ** हुनसक्दछ ** सन्दर्भमा यो परिभाषित गरिएको छैन, जस्तो कि अन्य भ्यारीएबल जस्तै।

{% hint style="info" %}


&#x20;A callback is a function passed as an argument to another function.

& # X20; कलब्याक एक प्रकार्य हो अर्को प्रकार्यको रूपमा एक तर्कको रूपमा पास।
{% endhint %}

An arrow function is a compact alternative to traditional functions which has some semantic differences with some limitations. These function doesn't have their own bindings to `this`, `arguments` and `super`, and cannot be used as constructors. An example of an arrow function.

एक एरो प्रयोता परम्परागत कार्यहरूको कम्प्याक्ट विकल्प हो जुनसँग केही सीमितताहरूको साथ केही सिमेन्टिक भिन्नता छ। यी प्रकार्यको लागि उनीहरूको आफ्नै बाइन्डिहरू छैनन् `यो`,` तर्क` र `सुपर ', र निर्माणकर्ताको रूपमा प्रयोग गर्न सकिदैन। एक एरो प्रकार्य को एक उदाहरण।

```javascript
const double =  (x) =>  2 * x;
```

{% hint style="warning" %}


The `this` keyword in the arrow function represents the object that defined the arrow function.&#x20;

`यो एरो प्रकार्यमा कुञ्जी शब्दले एर्रो प्रकार्यलाई परिभाषित गरेको वस्तुलाई प्रतिनिधित्व गर्दछ। & # X20;
{% endhint %}
