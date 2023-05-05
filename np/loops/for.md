# For

The easiest form of a loop is the for statement. This one has a syntax that is similar to an if statement, but with more options:

लुपको सब भन्दा सजिलो रूप बयानका लागि हो। योसँग एउटा सिन्ट्याक्स छ जुन यदि कथनसँग मिल्दोजुल्दो छ भने, तर थप विकल्पहरूको साथ:

```javascript
for (condition; end condition; change) {
    // do it, do it now
}
```

Let's see how to execute the same code ten-times using a `for` loop:

हामी हेरौं कसरी उही कोडको लागि एक `को लागी एक` को लागी एक deponste ट्रिप प्रयोग गर्न को लागी।

```javascript
for (let i = 0; i < 10; i = i + 1) {
  // do this code ten-times
}
```

> _**Note**_: `i = i + 1` can be written `i++`.

> _ ** नोट ** _: _: _ I = + 1` + + 1 `लेख्न सकिन्छ` i ++ `` ++ `।

To loop through the properties of an object or an array `for in` loop can also be used.

एक वस्तु वा एर्रेको गुणवत्ताको गुणहरू मार्फत लुप गर्न पनि प्रयोग गर्न सकिन्छ।

```javascript
for (key in object) {
  // code block to be executed
}
```

Examples of `for in` loop for an object and array is shown below:

एक वस्तु र एर्रेको लागि एक वस्तु र एर्रेमा लुपमा `को उदाहरणहरू तल देखाइएको छ:

```javascript
const person = {fname:"John", lname:"Doe", age:25};
let info = "";
for (let x in person) {
  info += person[x];
}

// Result: info = "JohnDoe25"

const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// Result: txt = '45491625'
```

The value of iterable objects such as `Arrays`, `Strings`, `Maps`, `NodeLists` can be looped using `for of` statement.&#x20;

इट्नेर्डिंगेड वस्तुहरूको मान जस्तै `Anrails`s,` स्ट्रिंग्सको रूपमा, `नक्सा ',` nodelists` को उपयोग गर्न को लागी `& x20;

```javascript
let language = "JavaScript";
let text = "";
for (let x of language) {
text += x;
}
```
