# Polyfills and Transpilers

# Polyfils र ट्रान्सपाइलरहरू

JavaScript evolves every now and then. Regularly, new language proposals are submitted, analyzed, and added to [https://tc39.github.io/ecma262/ ](https://tc39.github.io/ecma262/)and then incorporated into the specification. There may be differences in how it is implemented in JavaScript engines depending on the browser. Some may implement the draft proposals, while others wait until the whole specification is released. Backward compatibility issues arise as new things are introduced.&#x20;

जाभास्क्रिप्ट अहिले प्रत्येक र त्यसपछि। नियमित रूपमा, नयाँ भाषाका प्रस्तावहरू सबमिट गरिएको, विश्लेषण, र थपियो [https ://ttc39.gihub26262 :)) र विशिष्टता मा सम्मिलित छ। ब्राउजरमा निर्भर गर्दै जाभारीस्क्रिप्ट इन्जिनहरूमा कसरी कार्यान्वयन गरिएको हुन सक्छ। केहीले ड्राफ्ट प्रस्तावहरू कार्यान्वयन गर्न सक्छन्, जबकि अरूले पूरै विशिष्ट नभएसम्म पर्खेर पर्खेको छ। पछाडि अनुकूलता मुद्दाहरूको रूपमा नयाँ चीजहरूको रूपमा प्रस्तुत गरिएको छ। & # X20;

To support the modern code in old browsers we used two tools: `transpilers` and `polyfills`

पुरानो ब्राउजरमा आधुनिक कोडलाई समर्थन गर्ने पुरानो ब्राउजरहरू जुन हामीले दुई उपकरणहरू प्रयोग गरेका छौं: `ट्रान्पाइलरहरू" र `polyfils`

**Transpilers**

It is a program that translates modern code and rewrites it using older syntax constructs so, that the older engine can understand it. For example, "`nullish` coalescing operator" `??`  was introduced in 2020, and outdated browsers can’t understand it.&#x20;

यो एक कार्यक्रम हो जुन आधुनिक कोड अनुवाद गर्दछ र पुरानो सिन्ट्याक्स निर्माणहरू प्रयोग गर्दछ, ताकि पुरानो ईन्जिनले यसलाई बुझ्न सक्दछ। उदाहरण को लागी, "` nu00 nulthy` cojelying अपरेटर "` `?` `2020 मा शुरू भएको थियो, र पुरानो ब्राउजरहरू यसलाई बुझ्न सक्दैनन्। & # X20;

Now, it’s the transpiler's job to make the `nullish` coalescing operator” `??` understandable to the old browsers.&#x20;

अब, यो ट्रान्सपायररको काम हो `nulshishy numelying अपरेटर" `` `?` पुरानो ब्राउजरमा। & # X20;

```javascript
// before running the transpiler
height = height ?? 200;

// after running the transpiler
height = (height !== undefined && height !== null) ? height: 200;

```

{% hint style="info" %}


&#x20;[Babel](https://babeljs.io/) is one of the most prominent transpilers. In the development process, we can use build tools like [webpack](https://webpack.js.org/) or [parcel](https://parceljs.org/) to transpile code.

& # X20; [बाबेल] (https://bbeljs.ia) सबैभन्दा प्रख्यात ट्रान्सिलरहरू मध्ये एक हो। विकास प्रक्रियामा हामी निर्माण उपकरणहरू [वेबप्याक] (HTTPS://aTSBOPACK.JS.org/) वा [पृष्ठहरू] (httpscelj//parceljs.org/) (ittpsceljs.org/) (httpscels.org/) (httpscels.org/) (httpscels.org/) (।
{% endhint %}

**Polyfills**

There are times when new functionality isn't available in outdated browser engines. In this case, the code that uses the new functionality won’t work. To fill the gaps, we add the missing functionality which is called a “`polyfill`”. For example, the `filter()` method was introduced in ES5 and is not supported in some of the old browsers. This method accepts a function and returns an array containing only the values of the original array for which the function returns `true`

त्यहाँ केहि समयहरू छन् जब नयाँ कार्यक्षमता पुरानो ब्राउजर इन्जिनहरूमा उपलब्ध छैन। यस अवस्थामा, कोड जुन नयाँ कार्यक्षमता प्रयोग गर्दछ काम गर्दैन। खाली ठाउँहरू भर्न, हामी हराइरहेको कार्यक्षमता थप्छौं जुन एक "` पोलिएफल 'भनिन्छ। उदाहरण को लागी, `फिल्टर ()` विधि AS5 मा पेश गरिएको थियो र केहि पुराना ब्राउजरमा समर्थित छैन। यस विधिले एक प्रकार्य स्वीकार्छ र एक ए्राल्ट फिर्ता गर्दछ जब मूल एर्रेको मानहरू समावेश गर्दछ जसको लागि प्रकार्यले `सही" फिर्ता गर्दछ

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // filter outs the even number
console.log(filtered);

// [2, 4, 6]
```

The polyfill for the filter is.

Pollyfils फिल्टर को लागी हो।

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

[क्यानेस] (https://caniuse.com/) अपडेट गरिएको कार्यक्षमता र सिन्ट्याक्स विभिन्न ब्राउजर ईन्जिनहरू द्वारा समर्थित छ।
{% endhint %}



