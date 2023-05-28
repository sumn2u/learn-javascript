---
chapter: अध्याय ८
pageNumber: ५६
titleIndex: ८.१
---
# उच्च अर्डर

"उच्च क्रम प्रकार्यहरू" प्रकार्यहरू हुन् जुन अन्य प्रकार्यहरू हेरफेर गर्दछ। उदाहरणका लागि, एक प्रकार्यले अन्य प्रकार्यहरू तर्कको रूपमा लिन सक्छ र / वा यसको रिटर्न मानको रूपमा प्रकार्य उत्पादन गर्न सक्छ। यस्तो _fancy_ कार्यात्मक प्रविधिहरू जाभास्क्रिप्ट र अन्य उच्च-स्तरीय भाषाहरू जस्तै पाइथन, लिस्प, आदिमा तपाईंको लागि उपलब्ध शक्तिशाली संरचनाहरू हुन्।

अब हामी दुई सरल प्रकार्यहरू सिर्जना गर्नेछौं, `add_2` र `add_2`, र `map` भनिने एक उच्च क्रम प्रकार्य। `map` ले दुई तर्कहरू स्वीकार गर्दछ, `func` र `list` (यसको घोषणाले यसैले `map(func,list)` सुरु गर्नेछ), र एक एरे फर्काउँछ। `func` (पहिलो तर्क) एक प्रकार्य हुनेछ जुन एरे `list` (दोस्रो तर्क) मा प्रत्येक तत्वमा लागू हुनेछ।

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

माथिको उदाहरणमा प्रकार्यहरू सरल छन्। तथापि, जब अन्य प्रकार्यहरूमा तर्कहरूको रूपमा पारित गरिन्छ, तिनीहरूलाई अधिक जटिल प्रकार्यहरू निर्माण गर्न अप्रत्याशित तरिकामा रचना गर्न सकिन्छ।

उदाहरणका लागि, यदि हामी ध्यान दिन्छौं कि हामी आह्वानहरू `map(add_2, ...)` प्रयोग गर्दछौं। र `map(double, ...)` प्राय हाम्रो कोडमा, हामी निर्णय गर्न सक्छौं कि हामी दुई विशेष-उद्देश्य सूची प्रोसेसिंग प्रकार्यहरू सिर्जना गर्न चाहन्छौं जुन तिनीहरूमा इच्छित अपरेशन बेक गरिएको छ। प्रकार्य संरचना प्रयोग गरेर, हामी यसलाई निम्नानुसार गर्न सक्छौं:

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

अब `buildProcessor` नामक प्रकार्य सिर्जना गरौं जसले प्रकार्य `func` लाई इनपुटको रूपमा लिन्छ र `func` -प्रोसेसर फर्काउँछ, अर्थात्, एक प्रकार्य जसले सूचीमा प्रत्येक इनपुटमा `func` लागू गर्दछ।

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

अर्को उदाहरण हेरौं। हामी `buildMultiplier` नामक प्रकार्य सिर्जना गर्नेछौं जसले संख्या `x` लाई इनपुटको रूपमा लिन्छ र प्रकार्य फर्काउँछ जसले यसको तर्कलाई `x` ले गुणा गर्दछ:

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
