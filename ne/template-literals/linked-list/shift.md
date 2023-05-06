# Shift

# सिफ्ट 
Here, the `shift` method is created to remove the first element of the Linked List.

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
