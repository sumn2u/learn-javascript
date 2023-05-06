# Do...While (डु ... वहाइल)

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to be false. The condition is evaluated after executing the statement. The syntax for do... while is

डु ... वहाइल कथनले लूप सिर्जना गर्दछ । यसले तबसम्म निर्दिष्ट कथन कार्यान्वयन गर्दछ जबसम्म परीक्षण अवस्था गलत हुन को लागी मूल्यांकन गर्दैन। बयान कार्यान्वयन पछि अवस्था मूल्यांकन गरिन्छ।


```javascript
do {
  // statement
} while (expression);
```

Lets for example see how to print numbers less than 10 using `do...while` loop:

उदाहरणका लागि हेरौं कसरी १० भन्दा कम नम्बरहरू मुद्रण गर्ने ।

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // incrementing i by 1
} while (i < 10);
```

> _**Note**_: `i = i + 1` can be written `i++`.

