# अन्य

त्यहाँ एक `अन्य` खण्ड पनि छ जुन लागू हुनेछ जब पहिलो शर्त सत्य छैन। यदि तपाईं कुनै पनि मूल्यमा प्रतिक्रिया गर्न चाहनुहुन्छ भने यो धेरै शक्तिशाली छ, तर विशेष उपचारको लागि विशेष गरी एक एकल:

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

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
