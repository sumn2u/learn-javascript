---
chapter: अध्याय १९
pageNumber: १००
titleIndex: १९.७
---
# लिङ्क गरिएको सूची

यो सबै प्रोग्रामिंग भाषाहरूमा पाइने एक सामान्य डेटा संरचना हो। लिङ्क गरिएको सूची जाभास्क्रिप्टमा सामान्य सरणीसँग धेरै मिल्दोजुल्दो छ, यसले थोरै फरक तरिकाले कार्य गर्दछ।

यहाँ सूचीको प्रत्येक तत्व एक अलग वस्तु हो जसमा लिङ्क वा अर्कोमा सूचक हुन्छ। जाभास्क्रिप्टमा लिङ्क गरिएको सूचीहरूको लागि कुनै बिल्ट-इन विधि वा प्रकार्य छैन त्यसैले यसलाई कार्यान्वयन गर्नु पर्दछ। लिङ्क गरिएको सूचीको उदाहरण तल देखाइएको छ।

```
["one", "two", "three", "four"]
```

**लिंक गरिएको सूचीको प्रकार**

त्यहाँ तीन प्रकारका लिङ्क गरिएका सूचीहरू छन्:

1. **एकल लिङ्क सूचीहरू:** प्रत्येक नोडले अर्को नोडमा केवल एक सूचक समावेश गर्दछ।
2. **डबल लिङ्क गरिएको सूचीहरू:** प्रत्येक नोडमा दुई पोइन्टरहरू छन्, अर्को नोडमा एक र अघिल्लो नोडमा एक।
3. **सर्कुलर लिङ्क गरिएको सूचीहरू:** एक परिपत्र लिङ्क गरिएको सूचीले अन्तिम नोडलाई पहिलो नोड वा यसको अगाडि कुनै अन्य नोडलाई इंगित गरेर लूप बनाउँदछ।

# जोड्नु

लिङ्क गरिएको सूचीमा मान थप्न यहाँ `add` विधि सिर्जना गरिएको छ ।

```javascript
class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor(head) {
        this.head = head 
    }
    append = (value) => {
        const newNode = new Node(value) 
        let current = this.head 
        if (!this.head) {
            this.head = newNode 
            return 
        }
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
}
```

# पप

यहाँ, लिङ्क गरिएको सूचीबाट मान हटाउन 'पप' विधि सिर्जना गरिएको छ।

```javascript
class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor(head) {
        this.head = head 
    }
    pop = () => {
        let current = this.head 
        while (current.next.next) {
            current = current.next 
        }
        current.next = current.next.next 
    }
}
```

# प्रिपेन्ड

यहाँ, लिङ्क गरिएको सूचीको पहिलो बच्चा भन्दा पहिले मान थप्न 'प्रिपेन्ड' विधि सिर्जना गरिएको छ।

```javascript
class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor(head) {
        this.head = head 
    }
    prepend = (value) => {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode 
        }
        else {
            newNode.next = this.head 
            this.head = newNode 
        }
    }
}
```

# सिफ्ट

यहाँ, लिङ्क गरिएको सूचीको पहिलो तत्व हटाउन 'सिफ्ट' विधि सिर्जना गरिएको छ।

```javascript
class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor(head) {
        this.head = head 
    }
    shift = () => {
        this.head = this.head.next 
    }
}
```
