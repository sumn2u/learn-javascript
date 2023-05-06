# Loops

Loops are repetitive conditions where one variable in the loop changes. Loops are handy, if you want to run the same code over and over again, each time with a different value.

लूपहरू दोहोरिने अवस्थाहरू हुन् जहाँ लूपमा एक चर परिवर्तन हुन्छ। लुपहरू सजिलो छन्, यदि तपाईं एउटै कोड पटक-पटक चलाउन चाहनुहुन्छ भने, प्रत्येक पटक फरक मानको साथ।

Instead of writing:

लेख्नुको सट्टा:

```javascript
doThing(cars[0]);
doThing(cars[1]);
doThing(cars[2]);
doThing(cars[3]);
doThing(cars[4]);
```

You can write:

तपाईं लेख्न सक्नुहुन्छ:

```javascript
for (var i = 0; i < cars.length; i++) {
  doThing(cars[i]);
}
```

