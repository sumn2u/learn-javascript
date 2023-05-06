# Sort (क्रमबद्ध)

The `sort` method sorts the items of an array in a specific order (ascending or descending).

`क्रमबद्ध` विधिले एरेको वस्तुहरूलाई एक विशिष्ट क्रम (आरोही वा अवरोही) मा क्रमबद्ध गर्दछ।

Here's the syntax for using `sort`:

यहाँ 'क्रमबद्ध' प्रयोग गर्नका लागि वाक्यरचना छ:

```c
array.sort([compareFunction]);
```

The `compareFunction` argument is optional and specifies a function that defines the sort order. If omitted, the elements are sorted in ascending order according to their string representation.

`compareFunction` तर्क वैकल्पिक छ र एक प्रकार्य निर्दिष्ट गर्दछ जसले क्रमबद्ध क्रम परिभाषित गर्दछ। यदि छोडियो भने, तत्वहरू उनीहरूको स्ट्रिङ प्रतिनिधित्व अनुसार आरोही क्रममा क्रमबद्ध हुन्छन्।

For example:

उदाहरण को लागी:

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort(); 

console.log(sortedCity);

// Result: ['Barcelona', 'California', 'Kathmandu', 'Paris']

```

{% hint style="info" %}


Numbers can be sorted incorrectly when they are sorted. For example, "35" is bigger than "100", because "3" is bigger than "1".

संख्याहरू क्रमबद्ध गर्दा गलत तरिकाले क्रमबद्ध गर्न सकिन्छ। उदाहरणका लागि, "35" "100" भन्दा ठूलो छ, किनभने "3" "1" भन्दा ठूलो छ।

{% endhint %}

To fix the sorting issue in numbers, compare functions are used. Compare functions defines sort orders and return a **negative**, **zero**, or **positive** value based on arguments, like this:

संख्यामा क्रमबद्ध समस्या समाधान गर्न, तुलना प्रकार्यहरू प्रयोग गरिन्छ। तुलना प्रकार्यहरू क्रमबद्ध आदेशहरू परिभाषित गर्दछ र तर्कमा आधारित **नकारात्मक**, **शून्य**, वा **धनात्मक** मान फर्काउनुहोस्, जस्तै:

* A negative value if `a` should be sorted before `b`
* `b` भन्दा पहिले `a` क्रमबद्ध गर्नुपर्छ भने ऋणात्मक मान

* A positive value if `a` should be sorted after `b`
* यदि `a` लाई `b` पछि क्रमबद्ध गर्नु पर्दछ भने एक सकारात्मक मान

* 0 if `a` and `b` are equal and their order doesn't matter
* 0 यदि `a` र `b` बराबर छन् र तिनीहरूको क्रमले कुनै फरक पार्दैन

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {return a-b});

// Result: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}


The `sort()` method overrides the original array.

`sort()` विधिले मूल सरणीलाई ओभरराइड गर्दछ ।

{% endhint %}
