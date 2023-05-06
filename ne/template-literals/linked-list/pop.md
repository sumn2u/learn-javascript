# Pop (पप)

Here, a `pop` method is created to remove a value from the linked list.

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
