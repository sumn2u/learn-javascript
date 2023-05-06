# Objects

Objects are the collection of `key`, `value` pairs and each pair of key-value are known as a property. Here, the property of the `key` can be a `string` whereas its `value` can be of any value.

वस्तुहरू `कुञ्जी`, `मान` जोडीहरूको संग्रह हो र कुञ्जी-मानको प्रत्येक जोडीलाई सम्पत्तिको रूपमा चिनिन्छ। यहाँ, कुञ्जीको गुण `स्ट्रिङ` हुन सक्छ जबकि यसको `मान` कुनै पनि मूल्यको हुन सक्छ।

### 📝 Tasks:

Given a Doe family that includes two-member, where each member's information is provided in form of an object.&#x20;

एक डो परिवार दिइएको छ जसमा दुई-सदस्य समावेश छन्, जहाँ प्रत्येक सदस्यको जानकारी वस्तुको रूपमा प्रदान गरिएको छ।

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

* [ ] `कन्सोल` मा डो परिवारको पहिलो सदस्यको नाम मुद्रण गर्ने तरिका फेला पार्नुहोस्।
* [ ] Change the fourth  `luckyNumbers` of  the second member of the Doe family to `33`.

* [ ] डो परिवारको दोस्रो सदस्यको चौथो `लक्की नम्बर` लाई `३३` मा परिवर्तन गर्नुहोस्।
* [ ] Add a new member to the family by creating a new  person  (`Jimmy,` `Doe`, `13`, `male`, `[1, 2, 3, 4]`, `null`) and update the member list.

* [ ]  नयाँ व्यक्ति (`जिमी,` `डो`, `१३`, `पुरुष`, `[१, २, ३, ४]`, `शून्य`) सिर्जना गरेर परिवारमा नयाँ सदस्य थप्नुहोस् र सदस्य सूची अद्यावधिक गर्नुहोस्।
* [ ] Print the `SUM` of the lucky numbers of Doe family in the `console`.&#x20;

* [ ] `कन्सोल` मा डो परिवारको भाग्यशाली नम्बरको `SUM` मुद्रण गर्नुहोस्

### 💡 Hints:

* Visit the [objects](../objects/) chapter to understand how the object work.

* वस्तुले कसरी काम गर्छ भनेर बुझ्न [वस्तुहरूको](../objects/) अध्यायमा जानुहोस्।
* You can get `luckyNumbers` from each person object inside the family object.
* तपाईं परिवारको वस्तु भित्र प्रत्येक व्यक्ति वस्तुबाट `luckyNumbers` प्राप्त गर्न सक्नुहुनेछ।
* Once you get each array just loop over it adding every element and then add each sum of the 3 family members.
* एक पटक जब तपाईं प्रत्येक सरणी प्राप्त गर्नुहुन्छ बस यसलाई प्रत्येक तत्व थप्दै लूप गर्नुहोस् र त्यसपछि 3 परिवारका सदस्यहरूको प्रत्येक योग थप्नुहोस्।
