# try...catch...finally

# प्रयास ... क्याच ... अन्तमा

We can add one more construct to `try...catch` called `finally`, this code executes in all cases. i.e. after `try` when there is no error and after a `catch` in case of error. The syntax for `try ...catch...finally` is shown below.

हामी एक अर्को एक अर्डर थप्न सक्दछौं `प्रयास गर्नुहोस् ... क्याच" ACHEN 'ASHANEN' AS अन्तत: यो कोड सबै केसहरूमा कार्यान्वयन गर्दछ। I.E.E. "प्रयास गर्नुहोस् जब त्यहाँ कुनै त्रुटि छैन र त्रुटिको मामलामा` CACK` पछि। Kntax `प्रयास ... क्याच ... अन्तत: अन्तर्गत देखाइएको छ।

```javascript
try {
   // try to execute the code
} catch (err) {
    // handle errors 
} finally {
   // execute always
}
```

Running real-world example code.

वास्तविक विश्व उदाहरण कोड चलाउँदै।

```javascript
try {
  alert( 'try' );
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

In the above example, the `try` block is executed first which is then followed by `finally` as there are no errors.

माथिको उदाहरणमा, `प्रयास ब्लकलाई कार्यान्वयन गरिएको छ जुन त्यसपछि अन्तमा" अन्ततः "कुनै त्रुटिहरू छैन भनेर अनुसरण गरिएको छ।

{% exercise %}
Write a function `divideNumbers()` that takes two arguments numerator and denominator and returns the result of dividing numerator by denominator using following settings.

एक प्रकार्य लेख्नुहोस् `क्राइडिडम्बरहरू ()` `` ले दुई तर्कको संख्या र अस्वीकरण लिन्छ र निम्न सेटिंग्स प्रयोग गरेर समन्वय गरेर समन्वयकर्तालाई विभाजन गर्ने परिणाम फर्काउँछ।

{% initial %}
function divideNumbers(numerator, denominator) {
    try {

प्रयास गर्नुहोस् {
      // try statement to divide numerator by denominator.

// भनाइलाई अस्वीकार गर्नुहोस्।
    } catch (error) {

} समात्नुहोस् (त्रुटि) {
      // print error message
    } finally {

} अन्तमा {
      // print execution has finished

// प्रिन्ट कार्यान्वयन समाप्त भयो
    }
   // return result
  }
  let answer = divideNumbers(10, 2);

{% solution %}
function divideNumbers(numerator, denominator) {
  let result;
    try {

प्रयास गर्नुहोस् {
      result = numerator / denominator;
    } catch (error) {

} समात्नुहोस् (त्रुटि) {
      console.error(`Error: ${error}`);
    } finally {

} अन्तमा {
      console.log('Function finished executing');

कन्सोल.lug ('कार्य कार्यान्वयन गर्न' कार्य
    }
    return result;
  }
let answer = divideNumbers(10, 2);
{% validation %}
assert(answer == 5);

{% context %}
{% endexercise %}
