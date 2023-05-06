# While

# वहाइल

While Loops repetitively execute a block of code as long as a specified condition is true.

वहाइल लूपहरूले निर्दिष्ट गरिएको अवस्था सत्य भएसम्म कोडको ब्लक पुनरावृत्ति रूपमा कार्यान्वयन गर्दछ।

```javascript
while (condition) {
  // do it as long as condition is true
}
```

For example, the loop in this example will repetitively execute its block of code as long as the variable i is less than 5:

उदाहरणका लागि, वहाइल लूपले यसको कोडको ब्लकलाई पुनरावृत्ति रूपमा कार्यान्वयन गर्नेछ जबसम्म चर म ५ भन्दा कम छ:

```javascript
var i = 0,
  x = "";
while (i < 5) {
  x = x + "The number is " + i;
  i++;
}
```

{% hint style="warning" %}


Be careful to avoid infinite looping if the condition is always true!

यदि अवस्था सधैं साँचो छ भने अनन्त लूपिङबाट जोगिन होसियार हुनुहोस्!
{% endhint %}
