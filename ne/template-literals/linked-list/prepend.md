# Prepend (प्रिपेन्ड)

Here, a `prepend` method is created to add a value before the first child of the linked list.

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
