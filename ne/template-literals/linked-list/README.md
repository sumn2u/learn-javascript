# Linked List (लिङ्क गरिएको सूची)

It is a common data structure found in all programming languages. A Linked List is very similar to a normal array in Javascript, it just acts a little bit differently.

यो सबै प्रोग्रामिंग भाषाहरूमा पाइने एक सामान्य डेटा संरचना हो। लिङ्क गरिएको सूची जाभास्क्रिप्टमा सामान्य सरणीसँग धेरै मिल्दोजुल्दो छ, यसले थोरै फरक तरिकाले कार्य गर्दछ।

Here each element in the list is a separate object containing a link or a pointer to the next. There is no built-in method or function for Linked Lists in Javascript so one has to implement it. An example of a linked list is shown below.&#x20;

यहाँ सूचीको प्रत्येक तत्व एक अलग वस्तु हो जसमा लिङ्क वा अर्कोमा सूचक हुन्छ। जाभास्क्रिप्टमा लिङ्क गरिएको सूचीहरूको लागि कुनै बिल्ट-इन विधि वा प्रकार्य छैन त्यसैले यसलाई कार्यान्वयन गर्नु पर्दछ। लिङ्क गरिएको सूचीको उदाहरण तल देखाइएको छ।

```
["one", "two", "three", "four"]
```

**Types of Linked Lists**

There are three different types of linked lists:

1. **Singly Linked Lists:**  Each node contains only one pointer to the next node.
2. **Doubly Linked Lists:**  There are two pointers at each node, one to the next node and one to the previous node.
3. **Circular Linked Lists:**  A circular linked list forms a loop by having the last node pointing to the first node or any other node before it.

**लिंक गरिएको सूचीको प्रकार**

त्यहाँ तीन प्रकारका लिङ्क गरिएका सूचीहरू छन्:

1. **एकल लिङ्क सूचीहरू:** प्रत्येक नोडले अर्को नोडमा केवल एक सूचक समावेश गर्दछ।
2. **डबल लिङ्क गरिएको सूचीहरू:** प्रत्येक नोडमा दुई पोइन्टरहरू छन्, अर्को नोडमा एक र अघिल्लो नोडमा एक।
3. **सर्कुलर लिङ्क गरिएको सूचीहरू:** एक परिपत्र लिङ्क गरिएको सूचीले अन्तिम नोडलाई पहिलो नोड वा यसको अगाडि कुनै अन्य नोडलाई इंगित गरेर लूप बनाउँदछ।
