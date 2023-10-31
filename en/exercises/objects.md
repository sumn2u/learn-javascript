---
chapter: 21
pageNumber: 154
---
# Objects

Objects are the collection of `key`, `value` pairs and each pair of key-value are known as a property. Here, the property of the `key` can be a `string` whereas its `value` can be of any value.

### 📝 Tasks:

Given a Doe family that includes two members, where each member's information is provided in form of an object.&#x20;

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
* [ ] Change the fourth  `luckyNumbers` of  the second member of the Doe family to `33`.
* [ ] Add a new member to the family by creating a new  person  (`Jimmy` `Doe`, `13`, `male`, `[1, 2, 3, 4]`, `null`) and update the member list.
* [ ] Print the `SUM` of the lucky numbers of Doe family in the `console`.&#x20;

### 💡 Hints:

* Visit the [objects](../objects/) chapter to understand how the object work.
* You can get `luckyNumbers` from each person object inside the family object.
* Once you get each array just loop over it adding every element and then add each sum of the 3 family members.
