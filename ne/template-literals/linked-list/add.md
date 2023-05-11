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
