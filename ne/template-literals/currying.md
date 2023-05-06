# Currying

# करिङ

`Currying` is an advanced technique in functional programming of transforming a function with multiple arguments into a sequence of nesting functions. It transforms a function from callable  `f(a,b,c)` into callable as `f(a)(b)(c)`. It doesn’t call a function instead it transforms it.

'करिङ' कार्यात्मक प्रोग्रामिंगमा एक उन्नत प्रविधि हो जुन धेरै तर्कहरूको साथ एक प्रकार्यलाई नेस्टिंग प्रकार्यहरूको अनुक्रममा रूपान्तरण गर्दछ। यसले प्रकार्यलाई `f(a,b,c)` बाट `f(a)(b)(c)` को रूपमा कल गर्न योग्यमा रूपान्तरण गर्दछ। यसले प्रकार्यलाई कल गर्दैन बरु यसलाई रूपान्तरण गर्दछ।

To get a better understanding of currying let’s create a simple `add` function add that takes three arguments and returns the sum of them. Then, we create a `addCurry` function that takes a single input and returns a series of functions with its sum.

करिङको राम्रो समझ प्राप्त गर्न एक साधारण `add` प्रकार्य थप्नुहोस् सिर्जना गरौं जुन तीन तर्कहरू लिन्छ र तिनीहरूको योगफल फर्काउँछ। त्यसपछि, हामी एक `addCurry` प्रकार्य सिर्जना गर्दछौं जसले एकल इनपुट लिन्छ र यसको योगफलको साथ प्रकार्यहरूको श्रृंखला फर्काउँछ।

```javascript
// Noncurried version
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

// Curried version
const addCurry = (a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10
```

Here, we can see that both the curried and noncurried versions returned the same result. Currying can be beneficial for many reasons, some of which are mentioned here.

यहाँ, हामी देख्न सक्छौं कि दुवै करीड र गैर-करी संस्करणहरूले समान परिणाम फर्काए। करी गर्नु धेरै कारणहरूको लागि लाभदायक हुन सक्छ, जसमध्ये केही यहाँ उल्लेख गरिएको छ।

* It helps to avoid passing the same variable again and again.(यसले एउटै चरलाई बारम्बार पास गर्नबाट जोगिन मद्दत गर्दछ।)

* It divides the function into smaller chunks with a single responsibility, making the function less error-prone.(यसले प्रकार्यलाई एकल जिम्मेवारीको साथ सानो खण्डहरूमा विभाजन गर्दछ, जसले प्रकार्यलाई कम त्रुटि-प्रवण बनाउँदछ।)

* It is used in functional programming to create a high-order function.(यो एक उच्च-क्रम प्रकार्य सिर्जना गर्न कार्यात्मक प्रोग्रामिंगमा प्रयोग गरिन्छ।)
