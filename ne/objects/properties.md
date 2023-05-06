# Properties (गुणहरू)

Object's property is a `propertyName`: `propertyValue` pair, where **property name can be only a string**. If it's not a string, it gets casted into a string. You can specify properties **when creating** an object **or later**. There may be zero or more properties separated by commas.

वस्तुको प्रोपर्टी `propertyName` हो: `propertyValue` जोडी, जहाँ **गुण नाम स्ट्रिङ** मात्र हुन सक्छ । यदि यो स्ट्रिङ होइन भने, यो एक स्ट्रिंगमा फ्याँकिन्छ। वस्तु **वा पछि** सिर्जना गर्दा तपाईँले गुण निर्दिष्ट गर्न सक्नुहुन्छ । अल्पविरामद्वारा छुट्याइएको शून्य वा बढी गुणहरू हुन सक्छन्।

```javascript
let language = {
  name: "JavaScript",
  isSupportedByBrowsers: true,
  createdIn: 1995,
  author: {
    firstName: "Brendan",
    lastName: "Eich",
  },
  // Yes, objects can be nested!
  getAuthorFullName: function () {
    return this.author.firstName + " " + this.author.lastName;
  },
  // Yes, functions can be values too!
};
```

The following code demonstrates how to **get** a property's value.

निम्न कोडले कसरी सम्पत्तिको मूल्य प्राप्त गर्ने भनेर देखाउँछ।

```javascript
let variable = language.name;
// variable now contains "JavaScript" string.
variable = language["name"];
// The lines above do the same thing. The difference is that the second one lets you use litteraly any string as a property name, but it's less readable.
variable = language.newProperty;
// variable is now undefined, because we have not assigned this property yet.
```

The following example shows how to **add** a new property **or change** an existing one.

निम्न उदाहरणले कसरी ***नयाँ गुण*** थप्ने वा अवस्थित गुण परिवर्तन गर्ने भनेर देखाउँछ।

```javascript
language.newProperty = "new value";
// Now the object has a new property. If the property already exists, its value will be replaced.
language["newProperty"] = "changed value";
// Once again, you can access properties both ways. The first one (dot notation) is recomended.
```
