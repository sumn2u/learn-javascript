# Higher order

Higher order functions are functions that manipulate other functions. For example, a function can take other functions as arguments and/or produce a function as its return value. Such _fancy_ functional techniques are powerful constructs available to you in JavaScript and other high-level languages like python, lisp, etc.

उच्च अर्डर प्रकार्यहरू कार्यहरू हुन् जसले अन्य कार्यहरू हेरफेर गर्छन्। उदाहरण को लागी, एक प्रकार्यले तर्क र / वा यसको फिर्ती मानको रूपमा कार्यको रूपमा अन्य कार्यहरू लिन सक्दछ। त्यस्ता _फेन्सी_ कार्यशील प्रविधिहरू तपाईंलाई जाभास्क्रिप्ट र अन्य उच्च-स्तर भाषाहरू जस्तै पाइथन, लिभन, आदि जस्ता उच्च-स्तर भाषाहरू उपलब्ध छन्।

We will now create two simple functions, `add_2` and `double`, and a higher order function called `map`. `map` will accept two arguments, `func` and `list` (its declaration will therefore begin `map(func,list)`), and return an array. `func` (the first argument) will be a function that will be applied to each of the elements in the array `list` (the second argument).

अब हामी दुई साधारण कार्यहरू सिर्जना गर्नेछौं, `ADS_2` र` डबल ', र एक उच्च अर्डर प्रकार्य। `नक्शाको नक्शाले दुई तर्कहरू स्वीकार गर्दछ,` `` `सूची (यसको घोषणा (यसको घोषणा) यसैले 'sunc, सूची)`)। `फन्डा (पहिलो तर्क) एक प्रकार्य हुनेछ जुन एर्रे` सूची (दोस्रो तर्क) मा प्रत्येक तत्वहरूमा लागू हुनेछ।

```javascript
// Define two simple functions
let add_2 = function (x) {
  return x + 2;
};
let double = function (x) {
  return 2 * x;
};

// map is cool function that accepts 2 arguments:
//  func    the function to call
//  list    a array of values to call func on
let map = function (func, list) {
  let output = []; // output list
  for (idx in list) {
    output.push(func(list[idx]));
  }
  return output;
};

// We use map to apply a function to an entire list
// of inputs to "map" them to a list of corresponding outputs
map(add_2, [5, 6, 7]); // => [7, 8, 9]
map(double, [5, 6, 7]); // => [10, 12, 14]
```

The functions in the above example are simple. However, when passed as arguments to other functions, they can be composed in unforeseen ways to build more complex functions.

माथिको उदाहरणको कार्य सरल छन्। जहाँसम्म, जब अन्य प्रकार्यहरूमा तर्कको रूपमा बित्यो, तिनीहरू अधिक जटिल कार्यहरू निर्माण गर्ने अतुलनीय तरिकामा रचना गर्न सकिन्छ।

For example, if we notice that we use the invocations `map(add_2, ...)` and `map(double, ...)` very often in our code, we could decide we want to create two special-purpose list processing functions that have the desired operation baked into them. Using function composition, we could do this as follows:

उदाहरण को लागी, यदि हामी याद गर्छौं कि हामी आक्रमणहरू `नक्सा (ADS_2, ...` नक्सा (डबल, ...) को लागी प्राय: हाम्रो निर्णय गर्न सक्दछौं कि हामी दुई विशेष उद्देश्यको सूची सिर्जना गर्न चाहन्छौं प्रशोधन कार्यहरू जुन इच्छित अपरेशन उनीहरूमा पकाएको हुन्छ। प्रकार्य रचनाहरू प्रयोग गरेर हामी यसलाई निम्न अनुसार गर्न सक्दछौं:

```javascript
process_add_2 = function (list) {
  return map(add_2, list);
};
process_double = function (list) {
  return map(double, list);
};
process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Now let's create a function called `buildProcessor` that takes a function `func` as input and returns a `func`-processor, that is, a function that applies `func` to each input in list.

अब एक प्रकार्य सिर्जना गर्नुहोस् `Braveproptore को रूपमा एक प्रकार्य को लागी एक प्रकार्य लिन्छ र एक` फन्डा`-प्रोसेसर फिर्ता गर्दछ, एक प्रकार्य को लागी सूची मा प्रत्येक इनपुटमा लागू हुन्छ।

```javascript
// a function that generates a list processor that performs
let buildProcessor = function (func) {
  let process_func = function (list) {
    return map(func, list);
  };
  return process_func;
};
// calling buildProcessor returns a function which is called with a list input

// using buildProcessor we could generate the add_2 and double list processors as follows:
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

process_add_2([5, 6, 7]); // => [7, 8, 9]
process_double([5, 6, 7]); // => [10, 12, 14]
```

Let's look at another example. We'll create a function called `buildMultiplier` that takes a number `x` as input and returns a function that multiplies its argument by `x` :

अर्को उदाहरण हेरौं। हामी `Broodmuntipipiollier` भनिने एक समारोह सिर्जना गर्नेछौं जुन एक नम्बर "इनपुटको रूपमा लिन्छ र एक प्रकार्य फिर्ता गर्दछ जुन` x` द्वारा यसको तर्कलाई गुणा गर्दछ:

```javascript
let buildMultiplier = function (x) {
  return function (y) {
    return x * y;
  };
};

let double = buildMultiplier(2);
let triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```
