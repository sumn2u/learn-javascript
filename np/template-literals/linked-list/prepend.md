# Prepend

# सम्मोदा

Here, a `prepend` method is created to add a value before the first child of the linked list.

यहाँ, एक `प्रस्तुत गरिएको विधिलाई लिंक गरिएको सूचीको पहिलो बच्चा अघि मान थप्न सिर्जना गरिएको छ।

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
