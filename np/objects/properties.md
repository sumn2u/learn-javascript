# Properties

# गुणहरू

Object's property is a `propertyName`: `propertyValue` pair, where **property name can be only a string**. If it's not a string, it gets casted into a string. You can specify properties **when creating** an object **or later**. There may be zero or more properties separated by commas.

वस्तुको सम्पत्ति एक `सम्पत्तीनाम` हो:` सम्पत्तीको सम्पत्ति जोडी, जहाँ ** सम्पत्ती नाम मात्र एक स्ट्रिंग गर्न सकिन्छ **। यदि यो स्ट्रिंग होईन भने, यो स्ट्रिंगमा कास्ट गरिएको हुन्छ। तपाईं गुणहरू निर्दिष्ट गर्न सक्नुहुनेछ ** जब ** एक वस्तु ** वा पछि ** वा पछि **। त्यहाँ शून्य वा अधिक गुणहरू अल्पविरामद्वारा विभाजित हुन सक्छ।

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

निम्न कोडले कसरी प्रदर्शन गर्दछ ** प्राप्त गर्नुहोस् ** एक सम्पत्तीको मान।

```javascript
let variable = language.name;
// variable now contains "JavaScript" string.
variable = language["name"];
// The lines above do the same thing. The difference is that the second one lets you use litteraly any string as a property name, but it's less readable.
variable = language.newProperty;
// variable is now undefined, because we have not assigned this property yet.
```

The following example shows how to **add** a new property **or change** an existing one.

निम्न उदाहरणले कसरी ** एक नयाँ सम्पत्ती ** थप्नुहोस् ** वा परिवर्तन ** एक अवस्थित एक।

```javascript
language.newProperty = "new value";
// Now the object has a new property. If the property already exists, its value will be replaced.
language["newProperty"] = "changed value";
// Once again, you can access properties both ways. The first one (dot notation) is recomended.
```
