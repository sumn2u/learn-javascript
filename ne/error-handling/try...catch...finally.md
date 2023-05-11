# प्रयास ... क्याच ... अन्तमा

हामी एक अर्को एक अर्डर थप्न सक्दछौं `प्रयास गर्नुहोस् ... क्याच" जसलाई 'अन्तमा' भनिन्छ, यो कोड सबै अवस्थामा कार्यान्वयन गर्दछ। अर्थात् 'प्रयास' पछि जब त्यहाँ कुनै त्रुटि छैन र त्रुटिको मामलामा 'क्याच' पछि। 'प्रयास गर्नुहोस् ... पकड़ो... अन्तमा' तल देखाइएको छ।

```javascript
try {
   // try to execute the code
} catch (err) {
    // handle errors 
} finally {
   // execute always
}
```

उदाहरणका लागि।

```javascript
try {
  alert( 'try' );
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```

माथिको उदाहरणमा, `प्रयास ब्लकलाई कार्यान्वयन गरिएको छ जुन त्यसपछि अन्तमा" अन्ततः "कुनै त्रुटिहरू छैन भनेर अनुसरण गरिएको छ।

{% exercise %}

एउटा प्रकार्य `divideNumbers()` लेख्नुहोस् जसले दुई तर्कहरू अंश र भाजक लिन्छ र निम्न सेटिङहरू प्रयोग गरेर भाजकद्वारा अंश विभाजन को परिणाम फर्काउँछ।

{% initial %}
function divideNumbers(numerator, denominator) {
    try {
      // try statement to divide numerator by denominator.
    } catch (error) {
      // print error message
    } finally {
      // print execution has finished
    }
   // return result
  }
  let answer = divideNumbers(10, 2);

{% solution %}
function divideNumbers(numerator, denominator) {
  let result;
    try {
      result = numerator / denominator;
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      console.log('Function finished executing');
    }
    return result;
  }
let answer = divideNumbers(10, 2);
{% validation %}
assert(answer == 5);

{% context %}
{% endexercise %}
