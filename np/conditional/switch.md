# Switch

# स्विच गर्नुहोस्

A `switch` is a conditional statement that performs actions based on different conditions. It uses strict ( `===` ) comparison to match the conditions and executes the code blocks of matched condition.  The syntax of the `switch` expression is shown below.

एक `स्विच` एक सशर्त कथन हो जुन विभिन्न सर्तहरूमा आधारित कार्यहरू गर्दछ। यो सर्तहरूसँग मेल खाने र मेल खाने अवस्थाको कोड ब्लकहरू कार्यान्वयन गर्दछ। `स्विच" स्विच` अभिव्यक्ति को सिन्ट्याक्स तल देखाइएको छ।

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

The expression is evaluated once and is compared with each case. If a match is found, then the associated code block is executed if not `default` code block is executed. The `break` keyword stops the execution and can be placed anywhere. In its absence, the next condition is evaluated even if the conditions are not matched.&#x20;

अभिव्यक्ति एक पटक मूल्या is ्कन गरिएको छ र प्रत्येक केसको तुलनामा छ। यदि एक खेल फेला पर्यो भने सम्बन्धित कोड ब्लक कार्यान्वयन हुन्छ यदि होईन भने "पूर्वनिर्धारित" कोड ब्लक कार्यान्वयन गरियो। `ब्रेक को कुञ्जी शब्दले कार्यान्वयन रोक्दछ र कतै राख्न सकिन्छ। यसको अनुपस्थितिमा, अर्को सर्त सर्तहरू मिल्दैन यदि सर्तहरू मेल खाँदैनन्। & # X20;

An example of getting a weekday name based on the switch condition is shown below.&#x20;

स्विच अवस्थामा आधारित एक हप्ताको नाम प्राप्त गर्ने एउटा उदाहरण तल देखाइएको छ। & # X20;

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

In multiple matching cases, the **first** matching value is selected, if not the default value is selected. In the absence of default and no matching case, the program continues to the next statement(s) after switch conditions.&#x20;

बहु मिल्दो केसहरूमा, ** पहिलो ** मिल्दो मान चयन गरिएको छ, यदि पूर्वनिर्धारित मान चयन गरिएको छैन भने। पूर्वनिर्धारित को अनुपस्थिति मा र कुनै मिल्दो मामला मा, एक कार्यक्रम स्विच सर्त पछि अर्को कथन (S) मा जारी छ। & # X20;

{% exercise %}
From the following values write a `switch` statement that checks the value of dayOfWeek. If dayOfWeek is "Monday", "Tuesday", "Wednesday", "Thursday", or "Friday", assign "It's a weekday" to the result variable. If `dayOfWeek` is "Saturday" or "Sunday", assign "It's the weekend" to the result.

निम्न मानहरूबाट एक `स्विच`" कथन लेख्नुहोस् जुन डेफेवेको मान जाँच गर्दछ। यदि दिनकोफोवीक "सोमबार" हो भने, बिहीबार "," बिहीबार ", वा" शुक्रबार ", परिणाम चरलाई" एक हप्ताको दिन "तोक्नुहोस्। यदि `डेफेवेक" शनिबार "वा" आइतवार ", परिणाममा" सप्ताहन्त "उपलब्ध गराउनुहोस्।

{% initial %}
let dayOfWeek = "Monday";
let result;
// check if it's a weekday or the weekend

// जाँच गर्नुहोस् यदि यो एक हप्ता दिन वा सप्ताहन्त हो
switch(expression) {

स्विच (अभिव्यक्ति) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
{% solution %}
let dayOfWeek = "Monday";
let result;
// check if it's a weekday or the weekend

// जाँच गर्नुहोस् यदि यो एक हप्ता दिन वा सप्ताहन्त हो
switch (dayOfWeek) {

स्विच (DOFFWEEEK) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":

केस "बुधवार":
  case "Thursday":

केस "बिहीबार":
  case "Friday":
    result = "It's a weekday";

परिणाम = "यो एक हप्ताको दिन हो";
    break;
  case "Saturday":

केस "शनिबार":
  case "Sunday":
    result = "It's the weekend";

परिणाम = "यो सप्ताहन्त हो";
    break;
  default:
    result = "Invalid day of the week";

परिणाम = "हप्ताको अमान्य दिन";
    break;
}
{% validation %}
assert(result == "It's a weekday" );

जोड (नतीजा == "यो एक हप्ताको दिन हो");

{% context %}
{% endexercise %}
