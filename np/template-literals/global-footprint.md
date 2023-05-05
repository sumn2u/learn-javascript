# Global footprint

# ग्लोबल पदचिह्न

If you are developing a module, which might be running on a web page, which also runs other modules, then you must beware  of the variable name overlapping.

यदि तपाईं एक मोड्युल विकास गर्दै हुनुहुन्छ भने, जुन वेब पृष्ठमा चालु हुन सक्छ, जसले अन्य मोड्युलहरू पनि चल्छ, तब तपाईं चरनको नाम ओभरल्यापिंगबाट सावधान हुनुपर्दछ।

Suppose we are developing a counter module:

मानौं हामी काउन्टर मोड्युल विकास गर्दैछौं:

```javascript
let myCounter = {
  number: 0,
  plusPlus: function () {
    this.number = this.number + 1;
  },
  isGreaterThanTen: function () {
    return this.number > 10;
  },
};
```

> _**Note:**_ this technique is often used with closures, to make the internal state immutable from the outside.

> _ ** नोट: ** _ _ _ यो प्रविधि प्रायः बाहिरबाट आन्तरिक राज्यमा पनि बाहिरी स्थानमा प्रयोग गरिन्छ।

The module now takes only one variable name — `myCounter`. If any other module on the page makes use of such names like `number` or `isGreaterThanTen` then it's perfectly safe because we will not override each other's values;

मोड्युल अब केवल एक चर नाम लिन्छ - `Mycounter`। यदि पृष्ठमा कुनै अन्य मोड्युल यस्तो नामहरू प्रयोग गर्दछ भने `नम्बरहरू वा` ISGRETETHENTONENTENTINE's वा `ISGRETETHENTENTONON को उपयोग गर्दछ तब यो पूर्ण रूपमा सुरक्षित छ किनकि हामी एक अर्काको मानलाई ओभरराइड गर्दैनौं;
