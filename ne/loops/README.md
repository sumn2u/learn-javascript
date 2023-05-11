# लूप

लूपहरू दोहोरिने अवस्थाहरू हुन् जहाँ लूपमा एक चर परिवर्तन हुन्छ। लुपहरू सजिलो छन्, यदि तपाईं एउटै कोड पटक-पटक चलाउन चाहनुहुन्छ भने, प्रत्येक पटक फरक मानको साथ।

लेख्नुको सट्टा:

```javascript
doThing(cars[0]);
doThing(cars[1]);
doThing(cars[2]);
doThing(cars[3]);
doThing(cars[4]);
```

तपाईंले यसरी लेख्न सक्नुहुन्छ:

```javascript
for (var i = 0; i < cars.length; i++) {
  doThing(cars[i]);
}
```

