# Mutable

The difference between objects and primitive values is that **we can change objects**, whereas primitive values are **immutable**.

वस्तुहरू र आदिम मूल्यहरू बीचको भिन्नता यो हो ** हामी वस्तुहरू परिवर्तन गर्न सक्दछौं ** जबकि प्राइमबारी मानहरू ** अपरिवर्तनीय **।

For example:

उदाहरण को लागी:

```javascript
let myPrimitive = "first value";
myPrimitive = "another value";
// myPrimitive now points to another string.
let myObject = { key: "first value" };
myObject.key = "another value";
// myObject points to the same object.
```

You can add, modify, or delete properties of an object using the dot notation or the square bracket notation.

तपाईं थप्न, परिमार्जन, वा डट नोटेशन वा वर्ग ब्रैकेट नोट प्रयोग गरेर वस्तुको गुणहरू मेटाउन सक्नुहुन्छ।

```python
let object = {};
object.foo = 'bar'; // Add property 'foo'
object['baz'] = 'qux'; // Add property 'baz'
object.foo = 'quux'; // Modify property 'foo'
delete object.baz; // Delete property 'baz'
```

{% hint style="warning" %}


Primitive values (such as numbers and strings) are immutable, while objects (such as arrays and objects) are mutable.

आदिम मानहरू (जस्तै नम्बरहरू र तारहरू) अपरिवर्तनीय छन्, जबकि वस्तुहरू (जस्तै आर्जन र वस्तुहरू) म्यूट गर्न योग्य छन्।
{% endhint %}
