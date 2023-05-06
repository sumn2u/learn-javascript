# If

# यदि

The easiest condition is an if statement and its syntax is `if(condition){ do this … }`. The condition has to be true for the code inside the curly braces to be executed. You can for example test a string and set the value of another string dependent on its value:

सबै भन्दा सजिलो शर्त एक यदि कथन हो र यसको वाक्य रचना `if (शर्त){ यो गर्नुहोस् ... }`. घुँघराले ब्रेसेस भित्रको कोड कार्यान्वयन गर्नका लागि शर्त सही हुनुपर्दछ। उदाहरणका लागि तपाईँले स्ट्रिङ परीक्षण गर्न सक्नुहुन्छ र यसको मानमा निर्भर अर्को स्ट्रिङको मान सेट गर्न सक्नुहुन्छ।



```javascript
let country = "France";
let weather;
let food;
let currency;

if (country === "England") {
  weather = "horrible";
  food = "filling";
  currency = "pound sterling";
}

if (country === "France") {
  weather = "nice";
  food = "stunning, but hardly ever vegetarian";
  currency = "funny, small and colourful";
}

if (country === "Germany") {
  weather = "average";
  food = "wurst thing ever";
  currency = "funny, small and colourful";
}

let message =
  "this is " +
  country +
  ", the weather is " +
  weather +
  ", the food is " +
  food +
  " and the " +
  "currency is " +
  currency;
  
console.log(message);
// 'this is France, the weather is nice, the food is stunning, but hardly ever vegetarian and the currency is funny, small and colourful'
```

{% hint style="info" %}


Conditions can also be nested.

अवस्थाहरू पनि नेस्टेड गर्न सकिन्छ।
{% endhint %}
