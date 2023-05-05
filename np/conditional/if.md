# If

# यदि

The easiest condition is an if statement and its syntax is `if(condition){ do this … }`. The condition has to be true for the code inside the curly braces to be executed. You can for example test a string and set the value of another string dependent on its value:

सब भन्दा सजिलो अवस्था भनेको यदि कथन र यसको सिन्ट्याक्स हो `यदि (सर्त) {यो गर्नुहोस् ...} सर्त कोडको लागि कोडको लागि गणना गर्न को लागी सही हुनु पर्छ। उदाहरणका लागि तपाईं उदाहरणका लागि स्ट्रिंगको लागि सक्नुहुनेछ र अर्को स्ट्रि of को मूल्य सेट यसको मानमा निर्भर गर्दछ:

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

सर्तहरू पनि नेस गर्न सकिन्छ।
{% endhint %}
