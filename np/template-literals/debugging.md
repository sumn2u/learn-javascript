# Debugging

In programming, errors can occur while writing code. It could be due to syntactical or logical errors. The process of finding errors can be time-consuming and tricky and is called code debugging.

प्रोग्रामिंगमा, त्रुटिहरू लेख्ने क्रममा हुन सक्छ। यो सिन्ट्याक्टिकल वा तार्किक त्रुटिहरूको कारण हुन सक्छ। त्रुटिहरू फेला पार्ने प्रक्रिया समय-अनुपालन र मुश्किल हुन सक्छ र कोड डिबगिंग भनिन्छ।

Fortunately, most modern browsers come with built-in debuggers. These debuggers can be switched on and off, forcing errors to be reported. It is also possible to set up breakpoints during the execution of code to stop execution and examine variables. For this one has to open a debugging window and place the `debugger` keyword in the JavaScript code. The code execution is stopped in each breakpoint, allowing developers to examine the JavaScript values and, resume the execution of code.

भाग्यवस, प्रायजसो आधुनिक ब्राउजरहरू निर्मित डिबगर्समा आउँछन्। यी डिबगरहरू स्विच गर्न र बन्द गर्न सकिन्छ, त्रुटिहरू रिपोर्ट गर्न सकिन्छ। कार्यान्वयन गर्न र भ्यारीएबलहरू जाँच गर्न कोडको कार्यान्वयनको बखत ब्रेकपोइन्ट स्थापना गर्न पनि सम्भव छ। यसका लागि यो डिबगिंग विन्डो खोल्नुहोस् र जाभास्क्रिप्ट कोडमा `डिबगर्ज कुञ्जी हो। कोड कार्यान्वयन प्रत्येक ब्रेकपोइन्टमा रोकिएको छ, विकासकर्ताहरूलाई जाभास्क्रिप्ट मानहरू जाँच गर्न अनुमति दिँदै, कोड कार्यान्वयन पुनः सुरु गर्नुहोस्।

One can also use the `console.log()` method to print the JavaScript values in the debugger window.

एकले 'कन्सोल .lag () `विधि डिबगस्क्रिप्ट मानमा जाभास्क्रिप्ट मानहरू प्रिन्ट गर्न प्रयोग गर्नुहोस्।

```javascript
const a = 5, b = 6;
const c = a + b;
console.log(c);
// Result : c = 11;
```
