# Else

# अन्य

There is also an `else` clause that will be applied when the first condition isn’t true. This is very powerful if you want to react to any value, but single out one in particular for special treatment:

त्यहाँ एक `अन्य` खण्ड पनि छ जुन लागू हुनेछ जब पहिलो शर्त सत्य छैन। यदि तपाईं कुनै पनि मूल्यमा प्रतिक्रिया गर्न चाहनुहुन्छ भने यो धेरै शक्तिशाली छ, तर विशेष उपचारको लागि विशेष गरी एक एकल:

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

The `else` clause can be joined with another `if`. Let's remake the example from the previous article:

`अन्य` खण्ड अर्को `यदि` सँग जोड्न सकिन्छ। अघिल्लो लेखको उदाहरण लाई रिमेक गरौं।

```javascript
if (country === "England") {
  ...
} else if (country === "France") {
  ...
} else if (country === "Germany") {
  ...
}
```

{% exercise %}
From the following values write a conditional statement that checks if `num1` is greater than `num2`. If it is, assign "num1 is greater than num2" to the `result` variable. If it is not, assign "num1 is less than or equal to num2".

निम्न मानहरूबाट एक सशर्त कथन लेख्नुहोस् जसले `num1` `num2` भन्दा ठूलो छ कि छैन भनेर जाँच गर्दछ। यदि यो छ भने, "परिणाम" चरमा `num1 num2 भन्दा ठूलो छ` असाइन गर्नुहोस्। यदि यो छैन भने, `num1 num2 भन्दा कम वा बराबर छ` असाइन गर्नुहोस्।

{% initial %}
let num1 = 10;
let num2 = 5;
let result;

// check if num1 is greater than num2
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;

// check if num1 is greater than num2
if (num1 > num2) {
  result = "num1 is greater than num2";
} else {
  result = "num1 is less than or equal to num2";
}

{% validation %}
assert(result == "num1 is greater than num2" );

{% context %}
{% endexercise %}
