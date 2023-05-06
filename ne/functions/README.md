# Functions (प्रकार्यहरू)

Functions are one of the most powerful and essential notions in programming. Functions like mathematical functions perform transformations, they take input values called **arguments** and **return** an output value. &#x20;

प्रकार्यहरू प्रोग्रामिंगमा सबैभन्दा शक्तिशाली र आवश्यक धारणाहरू मध्ये एक हो। गणितीय प्रकार्यहरू जस्ता प्रकार्यहरूले रूपान्तरणहरू प्रदर्शन गर्दछ, उनीहरूले इनपुट मानहरू लिन्छन् जसलाई **तर्क** र **रिटर्न** आउटपुट मान भनिन्छ।

Functions can be created in two ways: using `function declaration` or `function expression` . The _function name_ can be omitted in `function expression` making it an `anonymous function`.  Functions, like variables, must be declared. Let's declare a function `double` that accepts an _argument_ called `x` and **returns** the double of x :

प्रकार्यहरू दुई तरिकामा सिर्जना गर्न सकिन्छ: `प्रकार्य घोषणा` वा `प्रकार्य अभिव्यक्त` प्रयोग गरेर। _function name_ एफ 'अनकसन अभिव्यक्ति' मा छोड्न सकिन्छ जसले यसलाई 'अज्ञात प्रकार्य' बनाउँदछ।  प्रकार्यहरू, चरहरू जस्तै, घोषणा गर्नुपर्दछ। आउनुहोस् एउटा प्रकार्यलाई 'डबल' घोषणा गरौं जसले `x` भनिने _तर्क_ स्वीकार गर्दछ र एक्सको डबल फर्काउँछ:

```javascript
// an example of a function declaration
function double(x) {
  return 2 * x;
}
```

> _Note:_ the function above **may** be referenced before it has been defined.

> _नोट:_ माथिको प्रकार्य *** परिभाषित हुनुभन्दा पहिले ** सन्दर्भित हुन सक्छ।

Functions are also values in JavaScript; they can be stored in variables (just like numbers, strings, etc ...) and given to other functions as arguments :

प्रकार्यहरू जाभास्क्रिप्टमा पनि मानहरू हुन्; तिनीहरू चरमा भण्डारण गर्न सकिन्छ (जस्तै संख्याहरू, स्ट्रिङहरू, आदि ...) र तर्कको रूपमा अन्य प्रकार्यहरूमा दिइन्छ:

```javascript
// an example of a function expression
let double = function (x) {
  return 2 * x;
};
```

> _Note:_ the function above **may not** be referenced before it is defined, just like any other variable.

> _नोट:_ माथिको प्रकार्य *** लाई परिभाषित गर्नु अघि ** सन्दर्भित नहुन सक्छ, कुनै पनि अन्य चर जस्तै।

{% hint style="info" %}


&#x20;A callback is a function passed as an argument to another function.

कलब्याक एक प्रकार्य हो जुन अर्को प्रकार्यको तर्कको रूपमा पारित गरिएको छ।
{% endhint %}

An arrow function is a compact alternative to traditional functions which has some semantic differences with some limitations. These function doesn't have their own bindings to `this`, `arguments` and `super`, and cannot be used as constructors. An example of an arrow function.


एक एरो प्रकार्य पारंपरिक प्रकार्यहरूको लागि एक कम्प्याक्ट विकल्प हो जुन केहि सीमाहरूको साथ केहि अर्थपूर्ण भिन्नताहरू छन्। यी प्रकार्यहरूको `this`, `arguments` र `super` सँग उनीहरूको आफ्नै बाध्यकारी छैन, र कन्स्ट्रक्टरको रूपमा प्रयोग गर्न सकिँदैन। एरो प्रकार्यको एक उदाहरण।


```javascript
const double =  (x) =>  2 * x;
```

{% hint style="warning" %}


The `this` keyword in the arrow function represents the object that defined the arrow function.&#x20;

एरो प्रकार्यमा `this` कुञ्जीशब्दले तीर प्रकार्य परिभाषित गर्ने वस्तुलाई प्रतिनिधित्व गर्दछ ।
{% endhint %}
