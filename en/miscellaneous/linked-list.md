---
chapter: 19
pageNumber: 118
description: Linked List is a linear data structure used to store a collection of elements, called nodes. Each node in a linked list contains two parts the data or value of the element it represents and a reference (pointer) to the next node in the sequence. The last node in the list points to null, indicating the end of the list.
---
# Linked List

It is a common data structure found in all programming languages. A linked list is very similar to a normal array in Javascript, it just acts a little bit differently.

Here each element in the list is a separate object containing a link or a pointer to the next. There is no built-in method or function for linked lists in Javascript so one has to implement it. An example of a linked list is shown below.&#x20;

```
["one", "two", "three", "four"]
```

### Types of Linked Lists

There are three different types of linked lists:

1. **Singly Linked Lists:**  Each node contains only one pointer to the next node.
2. **Doubly Linked Lists:**  There are two pointers at each node, one to the next node and one to the previous node.
3. **Circular Linked Lists:**  A circular linked list forms a loop by having the last node pointing to the first node or any other node before it.

# Add

The `add` method is created here to add value to a linked list.

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

# Pop

Here, a `pop` method is created to remove a value from the linked list.

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

# Prepend

Here, a `prepend` method is created to add a value before the first child of the linked list.

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

# Shift

Here, the `shift` method is created to remove the first element of the Linked List.

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