# Variables

The first step towards really understanding programming is looking back at algebra. If you remember it from school, algebra starts with writing terms such as the following.

वास्तवमै विश्वसेक समृद्धिको पहिलो चरण बीजगणग्रामा फर्केर हेर्दै छ। यदि तपाईंले यसलाई स्कूलबाट याद गर्नुभयो भने, बीजगणित रूपमा निम्न अनुसार शब्दहरू लेख्न थाल्छ।

```
3 + 5 = 8
```

You start performing calculations when you introduce an unknown, for example, x below:

तपाईं गणना गर्न सुरू गर्नुहुन्छ जब तपाईं अज्ञात परिचय दिनुहुन्छ, उदाहरणका लागि x तलको:

```
3 + x = 8
```

Shifting those around you can determine x:

तपाइँका वरिपरिका सर्नुहोस् X निर्धारण गर्न सक्दछ:

```
x = 8 - 3
-> x = 5
```

When you introduce more than one you make your terms more flexible - you are using variables:

जब तपाईं एक भन्दा बढि परिचय दिनुहुन्छ तपाईंले अधिक लचिलो बनाउनु भयो - तपाईं चरहरू प्रयोग गर्दै हुनुहुन्छ:

```
x + y = 8
```

You can change the values of x and y and the formula can still be true:

तपाईं X र y को मानहरू परिवर्तन गर्न सक्नुहुनेछ र सूत्रको मानहरू अझै पनि सत्य हुन सक्छ:

```
x = 4
y = 4
```

or

अथवा

```
x = 3
y = 5
```

The same is true for programming languages. In programming, variables are containers for values that change. Variables can hold all kinds of values and also the results of computations. Variables have a name and a value separated by an equals sign (=). Variable names can be any letter or word but bear in mind that there are restrictions from language to language of what you can use, as some words are reserved for other functionality.

प्रोग्रामिंग भाषाहरूको लागि पनि त्यस्तै हो। प्रोग्रामिंगमा, भ्यारीएबलहरू परिवर्तनको लागि कन्टेनरहरू हुन्। भ्यारीएबलले सबै प्रकारका मानहरू समात्न सक्छन् र कम्प्यूटेशनको नतिजा पनि। भ्यारीएबलहरू एक नाम र एक मान द्वारा विभाजित एक मान (=)। भ्यारीएबल नामहरू कुनै पनि अक्षर वा शब्द हुन सक्छन् तर दिमागमा राख्नुहोस् कि तपाइँ भाषामा तपाइँले प्रयोग गर्न सक्ने भाषामा प्रतिबन्धहरू छन् जुन केहि शब्दहरु अन्य कार्यक्षमताको लागि आरक्षित छन्।

Let's check out how it works in Javascript, The following code defines two variables, computes the result of adding the two, and defines this result as a value of a third variable.

जाभास्क्रिप्टमा यो कसरी काम गर्दछ, जाँच गरौं, निम्न कोडले दुई भ्यारीएबललाई परिभाषित गर्दछ, दुबै चरको नतिजाको रूपमा यस नतिजा परिभाषित गर्दछ।

```javascript
let x = 5;
let y = 6;
let result = x + y;
```

{% exercise %}
Define a variable `x` equal to 20.

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**ES6 Version**

ECMAScript 2015 or ES2015 also known as E6  is a significant update to the JavaScript programming language since 2009. In ES6 we have three ways of declaring variables.&#x20;

ECMASPLIST 201 2015 वा ES201 such पनि ज्ञात जानकारी 200 since देखि जाभा रेस्क्रिप्ट प्रोमिसमिंग भाषामा महत्वपूर्ण अपडेट हो। ES6 मा हामीसँग धेरै चीजहरू छन्। & # X20;

```javascript
var x = 5;
const y = 'Test';
let z = true;
```

The types of declaration depend upon the scope. Unlike the `var` keyword, which defines a variable globally or locally to an entire function regardless of block scope, `let` allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used. For example.

को प्रकारका प्रकारहरू दायरामा निर्भर हुन्छन्। `` संस्करण कुञ्जीवर्ड विपरीत, जसले भ्यागुता दायरा बिना सम्पूर्ण प्रकार्यहरूको परिभाषा गर्दछ, जसले तपाईंलाई ब्लक, कथन, वा अभिव्यक्तिमा सीमित गर्न अनुमति दिन्छ। उदाहरण को लागी।

```javascript
function varTest(){
    var x=1;
    if(true){
        var x=2; // same variable
        console.log(x); //2
    }
    console.log(x); //2
}

function letTest(){
    let x=1;
    if(true){
        let x=2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
```

`const` variables are immutable - they are not allowed to be re-assigned.

`कांड निकायहरू अपरिवर्तनीय छन् - तिनीहरूलाई पुन: तोकिने अनुमति छैन।

```javascript
const x = "hi!";
x = "bye"; // this will occurs an error 
```
