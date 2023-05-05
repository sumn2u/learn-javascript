# Else

There is also an `else` clause that will be applied when the first condition isn’t true. This is very powerful if you want to react to any value, but single out one in particular for special treatment:

त्यहाँ एक `अर्को प्लट पनि छ जुन पहिलो सर्त सही छैन जब लागू हुनेछ। यो धेरै शक्तिशाली छ यदि तपाईं कुनै मानमा प्रतिक्रिया दिन चाहनुहुन्छ भने, तर विशेष उपचारको लागि एक विशेष उपचार:

```javascript
let umbrellaMandatory;

if (country === "England") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

The `else` clause can be joined with another `if`. Let's remake the example from the previous article:

`अन्य` को खण्ड अर्को संग सामेल हुन सक्छ` ``। अघिल्लो लेखबाट उदाहरणलाई पुनर्स्थापना गरौं:

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

निम्न मानहरूबाट सशर्त बयान लेख्छन् जुन चेक गर्दछ कि जाँच गर्दछ यदि `nun nun` n num2`` भन्दा ठूलो छ। यदि यो हो भने, निर्दिष्ट गर्नुहोस् "num1 नम्बर" लाई `कोर्सको परिणामबाट ठूलो छ"। यदि यो छैन भने, निर्दिष्ट गर्नुहोस् "num1 नम्बर नम्बर भन्दा कम वा बराबर वा बराबर छ"।

{% initial %}
let num1 = 10;
let num2 = 5;
let result;

// check if num1 is greater than num2

// जाँच गर्नुहोस् यदि num1 num2 भन्दा ठूलो छ
if( condition ) {

यदि (सर्त) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;

// check if num1 is greater than num2

// जाँच गर्नुहोस् यदि num1 num2 भन्दा ठूलो छ
if (num1 > num2) {
  result = "num1 is greater than num2";

परिणाम = "NUM1 NUM2 भन्दा ठूलो छ";
} else {
  result = "num1 is less than or equal to num2";

परिणाम = "Num1 Num2 भन्दा कम वा बराबर छ";
}

{% validation %}
assert(result == "num1 is greater than num2" );

जोड (परिणाम == num1 "NUM2 भन्दा ठूलो छ");

{% context %}
{% endexercise %}
