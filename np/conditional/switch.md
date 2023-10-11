---
chapter: अध्याय ५
pageNumber: ३४
titleIndex: ५.३
---
# स्विच

'स्विच' एक सशर्त कथन हो जुन विभिन्न अवस्थाहरूमा आधारित कार्यहरू गर्दछ। यसले शर्तहरू मिलान गर्न कडा ('==') तुलना प्रयोग गर्दछ र मिलान गरिएको अवस्थाको कोड ब्लकहरू कार्यान्वयन गर्दछ। 'स्विच' अभिव्यक्तिको वाक्यविन्यास तल देखाइएको छ ।

```javascript
switch (expression) {
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

अभिव्यक्ति एक पटक मूल्यांकन गरिएको छ र प्रत्येक मामला संग तुलना गरिएको छ। यदि म्याच फेला पर्यो भने, यदि 'पूर्वनिर्धारित' कोड ब्लक कार्यान्वयन गरिएको छैन भने सम्बन्धित कोड ब्लक कार्यान्वयन गरिन्छ। 'ब्रेक' कीवर्डले कार्यान्वयन रोक्छ र कहीं पनि राख्न सकिन्छ। यसको अनुपस्थितिमा, अर्को अवस्थाको मूल्यांकन गरिन्छ यदि शर्तहरू मेल खाँदैनन् भने पनि।

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

बहुविध मिल्दो अवस्थामा, **पहिलो** मिल्दो मान चयन गरिन्छ, यदि पूर्वनिर्धारित मान चयन गरिएको छैन भने। पूर्वनिर्धारित र कुनै मिल्दो केसको अनुपस्थितिमा, प्रोग्राम स्विच सर्तहरू पछि अर्को कथन(हरू) मा जारी रहन्छ।

{% exercise %}

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
