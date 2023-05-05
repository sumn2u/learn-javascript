# Shift

Here, the `shift` method is created to remove the first element of the Linked List.

यहाँ, `शिफ्टको विधि लिंक गरिएको सूचीको पहिलो तत्व हटाउन सिर्जना गरिएको छ।

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
