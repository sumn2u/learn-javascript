# Variables (चरहरू)

The first step towards really understanding programming is looking back at algebra. If you remember it from school, algebra starts with writing terms such as the following.

वास्तवमा प्रोग्रामिंग बुझ्नको लागि पहिलो कदम बीजगणितमा फर्केर हेर्नु हो। यदि तपाईं यसलाई स्कूलबाट सम्झनुहुन्छ भने, बीजगणित निम्न जस्ता शब्दहरू लेख्दै सुरु हुन्छ।

```
3 + 5 = 8
```

You start performing calculations when you introduce an unknown, for example, x below:

तपाईँले अज्ञात परिचय दिंदा गणना हरू गर्न थाल्नुहुन्छ, उदाहरणका लागि, तल एक्स:

```
3 + x = 8
```

Shifting those around you can determine x:

तपाईं वरिपरि ती स्थानान्तरण एक्स निर्धारण गर्न सक्नुहुन्छ:

```
x = 8 - 3
-> x = 5
```

When you introduce more than one you make your terms more flexible - you are using variables:

जब तपाईं एक भन्दा बढी परिचय दिनुहुन्छ तपाईं आफ्नो सर्तहरू अधिक लचिलो बनाउनुहुन्छ - तपाईं चरहरू प्रयोग गर्दै हुनुहुन्छ:

```
x + y = 8
```

You can change the values of x and y and the formula can still be true:

तपाईँले x र y को मान परिवर्तन गर्न सक्नुहुन्छ र सूत्र अझै पनि सत्य हुन सक्छ:

```
x = 4
y = 4
```

or (अथवा)

```
x = 3
y = 5
```

The same is true for programming languages. In programming, variables are containers for values that change. Variables can hold all kinds of values and also the results of computations. Variables have a name and a value separated by an equals sign (=). Variable names can be any letter or word but bear in mind that there are restrictions from language to language of what you can use, as some words are reserved for other functionality.

प्रोग्रामिंग भाषाहरूको लागि पनि यही कुरा लागू हुन्छ। प्रोग्रामिंगमा, चरहरू परिवर्तन हुने मानहरूको लागि कन्टेनरहरू हुन्। चरहरूले सबै प्रकारका मानहरू र गणनाहरूको परिणामहरू पनि राख्न सक्दछन्। चलहरूको नाम र मान बराबर चिन्ह (=) द्वारा छुट्याइएको छ। परिवर्तनशील नामहरू कुनै पनि अक्षर वा शब्द हुन सक्छन् तर मनमा राख्नुहोस् कि तपाईंले प्रयोग गर्न सक्नुहुने भाषाबाट भाषामा प्रतिबन्धहरू छन्, किनकि केही शब्दहरू अन्य कार्यक्षमताका लागि आरक्षित छन्।

Let's check out how it works in Javascript, The following code defines two variables, computes the result of adding the two, and defines this result as a value of a third variable.

जाभास्क्रिप्टमा यसले कसरी काम गर्दछ भनेर जाँच गरौं, निम्न कोडले दुई चरहरू परिभाषित गर्दछ, दुई थप्ने परिणाम गणना गर्दछ, र यो परिणामलाई तेस्रो चरको मानको रूपमा परिभाषित गर्दछ।

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

ईसीएमएस्क्रिप्ट 2015 वा ईएस 2015 लाई ई 6 पनि भनिन्छ 2009 देखि जाभास्क्रिप्ट प्रोग्रामिंग भाषामा एक महत्वपूर्ण अद्यावधिक हो। ईएस 6 मा हामीसँग चरहरू घोषणा गर्ने तीन तरिकाहरू छन्। &# X20;

```javascript
var x = 5;
const y = 'Test';
let z = true;
```

घोषणाका प्रकारहरू दायरामा निर्भर गर्दछ। `var` कीवर्डको विपरीत, जसले ब्लक स्कोपको परवाह नगरी विश्वव्यापी वा स्थानीय रूपमा सम्पूर्ण प्रकार्यमा चर परिभाषित गर्दछ, `let` ले तपाईंलाई ब्लक, स्टेटमेन्ट, वा अभिव्यक्तिको दायरामा सीमित चरहरू घोषणा गर्न अनुमति दिन्छ जसमा तिनीहरू प्रयोग गरिन्छ। उदाहरणका लागी।


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

कन्स्ट (`const`) भेरिएबलहरू अपरिवर्तनीय छन् - तिनीहरूलाई पुन: असाइन गर्न अनुमति छैन।

```javascript
const x = "hi!";
x = "bye"; // this will occurs an error 
```
