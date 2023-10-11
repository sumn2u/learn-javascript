---
chapter: अध्याय ७
pageNumber: ५३
titleIndex: ७.२
---
# वहाइल

वहाइल लूपहरूले निर्दिष्ट गरिएको अवस्था सत्य भएसम्म कोडको ब्लक पुनरावृत्ति रूपमा कार्यान्वयन गर्दछ।

```javascript
while (condition) {
  // do it as long as condition is true
}
```

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

यदि अवस्था सधैं साँचो छ भने अनन्त लूपिङबाट जोगिन होसियार हुनुहोस्!
{% endhint %}
