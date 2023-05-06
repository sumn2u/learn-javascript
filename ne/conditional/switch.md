# Switch (स्विच)

A `switch` is a conditional statement that performs actions based on different conditions. It uses strict ( `===` ) comparison to match the conditions and executes the code blocks of matched condition.  The syntax of the `switch` expression is shown below.

'स्विच' एक सशर्त कथन हो जुन विभिन्न अवस्थाहरूमा आधारित कार्यहरू गर्दछ। यसले शर्तहरू मिलान गर्न कडा ('==') तुलना प्रयोग गर्दछ र मिलान गरिएको अवस्थाको कोड ब्लकहरू कार्यान्वयन गर्दछ।  'स्विच' अभिव्यक्तिको वाक्यविन्यास तल देखाइएको छ ।

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

अभिव्यक्ति एक पटक मूल्यांकन गरिएको छ र प्रत्येक मामला संग तुलना गरिएको छ। यदि म्याच फेला पर्यो भने, यदि 'पूर्वनिर्धारित' कोड ब्लक कार्यान्वयन गरिएको छैन भने सम्बन्धित कोड ब्लक कार्यान्वयन गरिन्छ। 'ब्रेक' कीवर्डले कार्यान्वयन रोक्छ र कहीं पनि राख्न सकिन्छ। यसको अनुपस्थितिमा, अर्को अवस्थाको मूल्यांकन गरिन्छ यदि शर्तहरू मेल खाँदैनन् भने पनि।

An example of getting a weekday name based on the switch condition is shown below.&#x20;

स्विच अवस्थाको आधारमा हप्ताको दिन को नाम प्राप्त गर्ने एक उदाहरण तल देखाइएको छ।

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

बहुविध मिल्दो अवस्थामा, **पहिलो** मिल्दो मान चयन गरिन्छ, यदि पूर्वनिर्धारित मान चयन गरिएको छैन भने। पूर्वनिर्धारित र कुनै मिल्दो केसको अनुपस्थितिमा, कार्यक्रम स्विच सर्तहरू पछि अर्को कथन(हरू) मा जारी रहन्छ।

{% exercise %}

From the following values write a `switch` statement that checks the value of dayOfWeek. If dayOfWeek is "Monday", "Tuesday", "Wednesday", "Thursday", or "Friday", assign "It's a weekday" to the result variable. If `dayOfWeek` is "Saturday" or "Sunday", assign "It's the weekend" to the result.&#x20;

निम्न मानहरूबाट 'स्विच' कथन लेख्नुहोस् जसले दिनको हप्ता को मान जाँच गर्दछ। यदि दिनअफवीक "सोमवार", "मंगलवार", "बुधवार", "बिहीबार", वा "शुक्रवार" हो भने, परिणाम चरमा "यो एक हप्ताको दिन हो" असाइन गर्नुहोस्। यदि 'डेअफवीक' "शनिबार" वा "आइतबार" हो भने, परिणाममा "यो सप्ताहांत हो" असाइन गर्नुहोस्।

{% initial %}
let dayOfWeek = "Monday";
let result;
// check if it's a weekday or the weekend
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
{% solution %}
let dayOfWeek = "Monday";
let result;
// check if it's a weekday or the weekend
switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    result = "It's a weekday";
    break;
  case "Saturday":
  case "Sunday":
    result = "It's the weekend";
    break;
  default:
    result = "Invalid day of the week";
    break;
}
{% validation %}
assert(result == "It's a weekday" );

{% context %}
{% endexercise %}
