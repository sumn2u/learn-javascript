# While

# जबकि

While Loops repetitively execute a block of code as long as a specified condition is true.

जबकि लूपहरू दोहोर्याई रूपमा कोडको एक ब्लक कार्यान्वयन गर्दछ जब सम्म निर्दिष्ट गरिएको अवस्था सत्य हो।

```javascript
while (condition) {
  // do it as long as condition is true
}
```

For example, the loop in this example will repetitively execute its block of code as long as the variable i is less than 5:

उदाहरण को लागी, यस उदाहरण मा लुप दोहोर्याई गर्न को लागी गणना गर्न को लागी गणना को लागी deptere को लागी around गर्न को लागी around भन्दा कम छ:

```javascript
var i = 0,
  x = "";
while (i < 5) {
  x = x + "The number is " + i;
  i++;
}
```

{% hint style="warning" %}


&#x20;Be careful to avoid infinite looping if the condition is always true!

& # X20; असीम लपरिंगबाट बच्न सावधान रहनुहोस् यदि सर्त सधैं सत्य हुन्छ!
{% endhint %}
