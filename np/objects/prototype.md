# Prototype

# प्रोटोटाइप

Every object is linked to a prototype object from which it inherits properties.

प्रत्येक वस्तु एक प्रोटोटाइप वस्तुसँग जोडिएको छ जसबाट यसले गुणहरू विरासतमा पार्दछ।

All objects created from object literals (`{}`) are automatically linked to `Object.prototype`, which is an object that comes standard with JavaScript.

सबै वस्तुहरू छवि शाब्दिकबाट सिर्जना गरियो (} ``} `) स्वचालित रूपमा` वस्तुहरू।} Proprototype`, जुन जाभास्क्रिप्टको साथ मानक आउँछ।

When a JavaScript interpreter (a module in your browser) tries to find a property, which You want to retrieve, like in the following code:

जब एक जाभास्क्रिप्ट दोभाषे (तपाईंको ब्राउजरको मोड्युल) एक सम्पत्ती फेला पार्न कोशिस गर्दछ, जुन तपाईं निम्न कोडमा जस्तै पुन: प्राप्त गर्न चाहानुहुन्छ:

```javascript
let adult = { age: 26 },
  retrievedProperty = adult.age;
// The line above
```

First, the interpreter looks through every property the object itself has. For example, `adult` has only one own property — `age`. But besides that one, it actually has a few more properties, which were inherited from `Object.prototype.`

पहिलो, दोभाषे सबै सम्पत्तीको माध्यमबाट प्रयोग गर्दछन्। उदाहरण को लागी, `वयस्क को एक आफ्नै सम्पत्ति छ -` उमेर। तर त्यो बाहेक, वास्तवमा यसको केही थप गुणहरू छन्, जुन `वस्तुको वस्तुबाट विरासतमा परेको थियो .`

```javascript
let stringRepresentation = adult.toString();
// the variable has value of '[object Object]'
```

`toString` is an Object.prototype's property, which was inherited. It has a value of a function, which returns a string representation of the object. If you want it to return a more meaningful representation, then you can override it. Simply add a new property to the adult object.

`tosting` एक वस्तु। doppotootyipe को सम्पत्ति हो, जुन विरासतमा आएको थियो। यसको एक प्रकार्यको मान छ, जुन वस्तुको स्ट्रिंग प्रतिनिधित्व फिर्ता गर्दछ। यदि तपाईं अधिक अर्थपूर्ण प्रतिनिधित्व फिर्ता लिन चाहनुहुन्छ भने, त्यसोभए तपाईं यसलाई ओभरराइड गर्न सक्नुहुन्छ। केवल वयस्क वस्तुमा नयाँ सम्पत्ती थप्नुहोस्।

```javascript
adult.toString = function () {
  return "I'm " + this.age;
};
```

If you call the `toString` function now, the interpreter will find the new property in the object itself and stop.

यदि तपाईं अब `tostring` कार्य कल गर्नुहोस्, दोभाषेले वस्तुमा नयाँ सम्पत्तीलाई आफैंमा फेला पार्नेछ र रोक्दछ।

Thus the interpreter retrieves the first property it will find on the way from the object itself and further through its prototype.

यसैले दोभाषे यो प्रथम सम्पत्ती पुन: प्राप्त गर्दछ यसले वस्तुबाट बाहिर निस्किन्छ र यसको प्रोटोटाइप मार्फत।

To set your own object as a prototype instead of the default Object.prototype, you can invoke `Object.create` as follows:

पूर्वनिर्धारित वस्तुको सट्टा प्रोटोटाइपको सट्टामा तपाईंको आफ्नै वस्तु सेट गर्न, तपाईं `वस्तुको रूपमा आह्वान गर्न सक्नुहुनेछ।

```javascript
let child = Object.create(adult);
/* This way of creating objects lets us easily replace the default Object.prototype with the one we want. In this case, the child's prototype is the adult object. */
child.age = 8;
/* Previously, child didn't have its own age property, and the interpreter had to look further to the child's prototype to find it.
 Now, when we set the child's own age, the interpreter will not go further.
 Note: adult's age is still 26. */
let stringRepresentation = child.toString();
// The value is "I'm 8".
/* Note: we have not overridden the child's toString property, thus the adult's method will be invoked. If adult did not have toString property, then Object.prototype's toString method would be invoked, and we would get "[object Object]" instead of "I'm 8" */
```

`child`'s prototype is `adult`, whose prototype is `Object.prototype`. This sequence of prototypes is called a  **prototype chain**.

`बच्चाको प्रोटोटाइप` वयस्क 'हो, जसको प्रोटोटाइप अप `वस्तु प्रोटोटाइपहरूको यो अनुक्रम एक ** प्रोटोटाइप चेन ** भनिन्छ।
