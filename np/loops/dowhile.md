# Do...While

# गर्नुहोस् ... जबकि

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to be false. The condition is evaluated after executing the statement. The syntax for do... while is

के गर्नु ... जबकि कथन एक लुप पैदा गर्दछ कि एक निर्दिष्ट कथन कार्यान्वयन नभएसम्म एक निर्दिष्ट कथन कार्यान्वयन गर्दछ। यो अवस्था कथन कार्यान्वयन गरेपछि मूल्या .्कन गरिएको छ। Anttax गर्न को लागी ... जबकि छ

```javascript
do {
  // statement
} while (expression);
```

Lets for example see how to print numbers less than 10 using `do...while` loop:

उदाहरणका लागि हेर्नुहोस् कसरी नम्बर प्रिन्ट गर्ने 10 भन्दा कम 2 भन्दा कम स्पिन गर्नुहोस् `गर्नुहोस् ... जबकि LOPOP:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // incrementing i by 1
} while (i < 10);
```

> _**Note**_: `i = i + 1` can be written `i++`.

