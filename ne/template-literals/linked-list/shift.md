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
