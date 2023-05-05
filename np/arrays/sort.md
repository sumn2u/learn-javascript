# Sort

The `sort` method sorts the items of an array in a specific order (ascending or descending).

`क्रमबद्ध विधि एक विशिष्ट अर्डर (आरोही वा अवधारणा) मा एर्रे को आईटमहरू प्रदान गर्दछ।

Here's the syntax for using `sort`:

यहाँ anterax an sy sort को उपयोग गर्नका लागि:

```c
array.sort([compareFunction]);
```

The `compareFunction` argument is optional and specifies a function that defines the sort order. If omitted, the elements are sorted in ascending order according to their string representation.

`Complefuncion` तर्क वैकल्पिक हो र क्रमबद्ध क्रम परिभाषित गर्ने एक समारोह निर्दिष्ट गर्दछ। यदि हटाइयो भने, तत्वहरू उनीहरूको स्ट्रिंग प्रतिनिधित्व अनुसार आरोही क्रममा क्रमबद्ध छन्।

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

नम्बरहरू गलत तरीकाले क्रमबद्ध गर्न सकिन्छ जब तिनीहरू क्रमबद्ध हुन्छन्। उदाहरण को लागी, "'' 35" भन्दा ठूलो "100 भन्दा ठूलो छ, किनकि" "" "1" भन्दा ठूलो छ।
{% endhint %}

To fix the sorting issue in numbers, compare functions are used. Compare functions defines sort orders and return a **negative**, **zero**, or **positive** value based on arguments, like this:

संख्यामा क्रमबद्ध मुद्दा ठीक गर्न, तुलना गर्ने कार्यहरू प्रयोग गरिन्छ। प्रशस्तताहरूको तुलना अर्डरहरू तुलना गर्नुहोस् र एक ** नकारात्मक **, ** शून्य **, वा ** मानका तर्कहरूमा आधारित मानहरू:

* A negative value if `a` should be sorted before `b`

* एक नकरात्मक मान यदि `a पहिले` b पहिले क्रमबद्ध हुनुपर्दछ
* A positive value if `a` should be sorted after `b`

* एक सकारात्मक मान यदि `a को लागी` b पछि क्रमबद्ध हुनुपर्दछ
* 0 if a and b are equal and their order doesn't matter

* 0 यदि एक र बी बराबर छन् र उनीहरूको अर्डरले केही फरक पार्दैन

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {return a-b});

// Result: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}


The `sort()` method overrides the original array.

`क्रमबद्ध ()` विधिले मूल एर्रे ओभरराइड गर्दछ।
{% endhint %}
