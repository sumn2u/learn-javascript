# Currying

# Carrying

`Currying` is an advanced technique in functional programming of transforming a function with multiple arguments into a sequence of nesting functions. It transforms a function from callable  `f(a,b,c)` into callable as `f(a)(b)(c)`. It doesn’t call a function instead it transforms it.

`करीमिंग्जिंग्जिंग्जिंग्सको एक उन्नत प्रविधिको एक उन्नत प्रविधि हो जुन धेरै तर्कहरूको साथ एक प्रकार्यलाई गुँड गर्ने कार्यहरू सहितको अनुक्रममा रूपान्तरण गर्दछ। यसले क्यालिबल `f (A, B, C) बाट एक प्रकार्यलाई रूपान्तरण गर्दछ` f (B) (b) (c) यसले कार्यलाई रूपान्तरण गर्नुको सट्टा एक कार्य कल गर्दैन।

To get a better understanding of currying let’s create a simple `add` function add that takes three arguments and returns the sum of them. Then, we create a `addCurry` function that takes a single input and returns a series of functions with its sum.

करीजनको एक राम्रो समझ प्राप्त गर्न को लागी एक सरल सिर्जना गर्नुहोस् `add` adde प्रकार्य थप गर्नुहोस् जुन तीन तर्कहरू लिन्छ र उनीहरूको योगफल फिर्ता गर्दछ। त्यसो भए, हामी एक `adcururry` प्रकार्य सिर्जना गर्दछौं जुन एकल इनपुट लिन्छ र यसको योगको साथ कार्यहरूको श्रृंखला फिर्ता गर्दछ।

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

यहाँ, हामी देख्न सक्छौं कि दुबै घुमाउरो र गैर -नुरोन संस्करण दुबै समान परिणाम फिर्ता गरियो। करिंग धेरै कारणका लागि लाभदायक हुन सक्छ, जसमध्ये केही यहाँ उल्लेख गरिएको छ।

* It helps to avoid passing the same variable again and again.

* यसले समान चर बारम्बार पार गर्नबाट बच्न मद्दत गर्दछ।
* It divides the function into smaller chunks with a single responsibility, making the function less error-prone.

* यसले एकल दायित्वको साथ एक किसिमको कार्यमा प्रकार्य विभाजित गर्दछ, प्रकार्यलाई कम त्रुटिको प्रवण बनाउँदछ।
* It is used in functional programming to create a high-order function.

* यो एक उच्च अर्डर प्रकार्य सिर्जना गर्न कार्यात्मक प्रोग्रामिंगमा प्रयोग भएको छ।
