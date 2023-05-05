# Objects

Objects are the collection of `key`, `value` pairs and each pair of key-value are known as a property. Here, the property of the `key` can be a `string` whereas its `value` can be of any value.

वस्तुहरू `कुञ्जी (कुञ्जीको साथको संग्रह हो,` को मान जोडी र कुञ्जी-मानको प्रत्येक जोडीलाई सम्पत्ती भनेर चिनिन्छ। यहाँ, `कुञ्जी" को सम्पत्ति `स्ट्रिंग` हुन सक्छ जबकि यसको` मान कुनै मूल्यको हुन सक्छ।

### 📝 Tasks:

Given a Doe family that includes two-member, where each member's information is provided in form of an object.&#x20;

एक डी परिवारलाई दिइयो जुन दुई सदस्यता समावेश गर्दछ, जहाँ प्रत्येक सदस्यको जानकारी वस्तुको रूपमा प्रदान गरिन्छ। & # X20;

```javascript
let person = {
    name: "John",                    //String
    lastName: "Doe",
    age: 35,                         //Number
    gender: "male",
    luckyNumbers: [ 7, 11, 13, 17], //Array
    significantOther: person2       //Object, 
};

let person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [ 2, 4, 6, 8],
    significantOther: person
};

let family = {
    lastName: "Doe",
    members: [person, person2]       //Array of objects
};
```

* [ ] Find a way to print the name of the first member of the Doe family in a `console`.

[[] एक तरिका खोज्नको लागि एक `कन्सोल` मा डी परिवारको पहिलो सदस्यको नाम प्रिन्ट गर्न।
* [ ] Change the fourth  `luckyNumbers` of  the second member of the Doe family to `33`.

[] Dee परिवारका दोस्रो सदस्यलाई `` 33` को दोस्रो सदस्यको `भाग्यमानी" परिवर्तन गर्नुहोस्।
* [ ] Add a new member to the family by creating a new  person  (`Jimmy,` `Doe`, `13`, `male`, `[1, 2, 3, 4]`, `null`) and update the member list.

[] नयाँ व्यक्ति सिर्जना गरेर परिवारमा नयाँ सदस्यलाई जोड्नुहोस् (`जिमी,` `do`,` 1 13, `',`; `;`, `nolnyny) र अपडेट सदस्य सूची।
* [ ] Print the `SUM` of the lucky numbers of Doe family in the `console`.&#x20;

* [] `कन्सोल` मा डी परिवारको भाग्यशाली संख्याको योग" प्रिन्ट गर्नुहोस्। & # X20;

### 💡 Hints:

* Visit the [objects](../objects/) chapter to understand how the object work.

* [वस्तुहरू] भ्रमण गर्नुहोस् (। / वस्तुहरू /) अध्यायमा कसरी वस्तुको कामलाई बुझ्नको लागि।
* You can get `luckyNumbers` from each person object inside the family object.

* तपाईं परिवार वस्तु भित्र प्रत्येक व्यक्ति वस्तुबाट प्रत्येक व्यक्ति वस्तुबाट प्राप्त गर्न सक्नुहुनेछ।
* Once you get each array just loop over it adding every element and then add each sum of the 3 family members.

* एकचोटि तपाईं प्रत्येक एर्रेलाई मात्र लुप गर्नुहुन्छ प्रत्येक तत्व थपेर र त्यसपछि परिवारका प्रत्येक राशि थप्नुहोस्।
