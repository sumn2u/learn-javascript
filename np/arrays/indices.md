# Indices

# सूचकांक

So you have your array of data elements, but what if you want to access a specific element? That is where indices come in. An **index** refers to a spot in the array. indices logically progress one by one, but it should be noted that the first index in an array is 0, as it is in most languages. Brackets `[]` are used to signify you are referring to an index of an array.

त्यसोभए तपाईंसँग डाटा तत्वहरूको तपाईंको एरे छ, तर यदि तपाईं एक विशेष तत्व पहुँच गर्न चाहनुहुन्छ भने के हुन्छ? जहाँ सूचकांकहरू आउँदछन्। एक ** अनुक्रमणिका ** एर्रेमा एक स्थानमा उल्लेख गर्दछ। तात्कालिक तार्किक रूपमा प्रगति गर्नुहोस्, तर यसलाई ध्यान दिइनु पर्दछ कि एर्रेमा पहिलो सूचकांक 0 हो, जुन यो धेरै जसो भाषाहरूमा छ। कोष्ठकहरू `[]` `` संकेत गर्न प्रयोग गरिन्छ तपाईं एक एर्रेको सूचकांक सन्दर्भ गर्दै हुनुहुन्छ।

```javascript
// This is an array of strings
let fruits = ["apple", "banana", "pineapple", "strawberry"];

// We set the variable banana to the value of the second element of
// the fruits array. Remember that indices start at 0, so 1 is the
// second element. Result: banana = "banana"
let banana = fruits[1];
```

You can also use an array index to set the value of an element in an array:

तपाईं एर्रे अनुरूप एक एर्रे अनुक्रमणिका प्रयोग गर्न सक्नुहुनेछ:

```sql
let array = ['a', 'b', 'c', 'd', 'e'];
//  indices:  0    1    2    3    4
array[4] = 'f';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f']
```

Note that if you try to access or set an element using an index that is outside the bounds of the array (i.e., an index that is less than 0 or greater than or equal to the length of the array), you will get an `undefined` value.

यो नोट गर्नुहोस् कि यदि तपाईं एर्रेको सीमा बाहिर एक तत्व सेट गर्न वा सेट गर्न को लागी एक तत्व सेट गर्न को लागी एक तत्व सेट गर्न को लागी (i.e.e: all भन्दा कम वा बराबर वा बराबर वा बराबर), तपाईं एक प्राप्त हुनेछ अपरिभाइनको मान।

```sql
console.log(array[5]); // Output: undefined
array[5] = 'g';
console.log(array); // Result: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
