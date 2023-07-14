---
chapter: 19
pageNumber: 97
---

# Linked List

Tüm programlama dillerinde bulunan yaygın bir veri yapısıdır. Linked List, Javascript'teki normal bir diziye çok benzer, sadece biraz farklı davranır.

Burada listedeki her bir öğe, bir sonraki öğeye bir bağlantı veya işaretçi içeren ayrı bir nesnedir. Javascript'te Linked List'ler için yerleşik bir method ya da fonksiyon yoktur, bu yüzden bunu kendiniz uygulamanız gerekir. Aşağıda bir Linked List örneği gösterilmektedir.&#x20;

```
["one", "two", "three", "four"]
```

**Linked List Türleri**

Üç farklı türde Linked List vardır:

1. **Tek Linked List:** Her node bir sonraki node için sadece bir işaretçi içerir.
2. **Çift Linked List:** Her node'da, biri bir sonraki node'u diğeri de bir önceki node'u giden iki işaretçi vardır.

3. **Dairesel Linked Lists:** Dairesel Linked List, son node'un ilk node'a veya ondan önceki herhangi bir node'a işaret etmesiyle bir döngü oluşturur.

# Add

Burada, linked list'e değer eklemek için `add` yöntemi kullanılır.

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  append = (value) => {
    const newNode = new Node(value);
    let current = this.head;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  };
}
```

# Pop

Burada, linked list'den bir değeri kaldırmak için bir `pop` yöntemi kullanılır.

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  pop = () => {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = current.next.next;
  };
}
```

# Prepend

Burada, linked list'in ilk elemanından önce bir değer eklemek için bir `prepend` yöntemi kullanılır.

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  prepend = (value) => {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };
}
```

# Shift

Burada, Linked List'in ilk elemanını kaldırmak için `shift` yöntemi kullanılır.

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  shift = () => {
    this.head = this.head.next;
  };
}
```
