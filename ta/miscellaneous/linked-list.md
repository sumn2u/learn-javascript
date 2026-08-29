---
chapter: 19
pageNumber: 118
description: இணைக்கப்பட்ட பட்டியல் (Linked List) என்பது உறுப்புகளின் (elements) தொகுப்பைச் சேமிக்கப் பயன்படும் ஒரு நேரியல் தரவுக் கட்டமைப்பாகும் (linear data structure), இவை முனைகள் (nodes) என்று அழைக்கப்படுகின்றன. இணைக்கப்பட்ட பட்டியலில் உள்ள ஒவ்வொரு முனையிலும் அது குறிக்கும் உறுப்பின் தரவு அல்லது மதிப்பு மற்றும் வரிசையில் உள்ள அடுத்த முனைக்கான குறிப்பு (பாயிண்டர் - pointer) என இரண்டு பகுதிகள் உள்ளன. பட்டியலில் உள்ள கடைசி முனை null ஐக் குறிக்கிறது, இது பட்டியலின் முடிவைக் குறிக்கிறது.
---
# இணைக்கப்பட்ட பட்டியல் (Linked List)

இது அனைத்து நிரலாக்க மொழிகளிலும் காணப்படும் பொதுவான தரவுக் கட்டமைப்பாகும். இணைக்கப்பட்ட பட்டியல் (linked list) ஜாவாஸ்கிரிப்டில் உள்ள சாதாரண வரிசைக்கு (array) மிகவும் ஒத்திருக்கிறது, இது சற்று வித்தியாசமாகச் செயல்படுகிறது.

இங்கே பட்டியலில் உள்ள ஒவ்வொரு உறுப்பும் (element) ஒரு தனிப் பொருளாகும், இது ஒரு இணைப்பைக் (link) கொண்டுள்ளது அல்லது அடுத்ததைக் குறிக்கும் பாயிண்டரைக் (pointer) கொண்டுள்ளது. ஜாவாஸ்கிரிப்டில் இணைக்கப்பட்ட பட்டியல்களுக்கு உள்ளமைக்கப்பட்ட முறை (built-in method) அல்லது செயல்பாடு (function) இல்லை, எனவே ஒருவர் அதைச் செயல்படுத்த வேண்டும். இணைக்கப்பட்ட பட்டியலுக்கான எடுத்துக்காட்டு கீழே காட்டப்பட்டுள்ளது.&#x20;

```
["one", "two", "three", "four"]
```

### இணைக்கப்பட்ட பட்டியல்களின் வகைகள் (Types of Linked Lists)

இணைக்கப்பட்ட பட்டியல்களில் மூன்று வெவ்வேறு வகைகள் உள்ளன:

1. **ஒற்றை இணைக்கப்பட்ட பட்டியல்கள் (Singly Linked Lists):**  ஒவ்வொரு முனையும் (node) அடுத்த முனைக்கு ஒரு பாயிண்டரை (pointer) மட்டுமே கொண்டிருக்கும்.
2. **இரட்டை இணைக்கப்பட்ட பட்டியல்கள் (Doubly Linked Lists):**  ஒவ்வொரு முனையிலும் இரண்டு பாயிண்டர்கள் உள்ளன, ஒன்று அடுத்த முனைக்கும் மற்றொன்று முந்தைய முனைக்கும்.
3. **வட்ட இணைக்கப்பட்ட பட்டியல்கள் (Circular Linked Lists):**  ஒரு வட்ட இணைக்கப்பட்ட பட்டியல் கடைசி முனையை முதல் முனையையோ அல்லது அதற்கு முன் உள்ள வேறு ஏதேனும் முனையையோ சுட்டிக்காட்டுவதன் மூலம் ஒரு வளையத்தை (loop) உருவாக்குகிறது.

## சேர் (Add)

இணைக்கப்பட்ட பட்டியலில் மதிப்பைச் சேர்க்க `add` முறை இங்கே உருவாக்கப்பட்டுள்ளது.

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

## பாப் (Pop)

இணைக்கப்பட்ட பட்டியலிலிருந்து மதிப்பை அகற்ற, இங்கே ஒரு `pop` முறை உருவாக்கப்பட்டுள்ளது.

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

## முன்னொட்டு (Prepend)

இணைக்கப்பட்ட பட்டியலின் முதல் குழந்தைக்கு (child) முன் மதிப்பைச் சேர்க்க, இங்கே ஒரு `prepend` முறை உருவாக்கப்பட்டுள்ளது.

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

## ஷிப்ட் (Shift)

இணைக்கப்பட்ட பட்டியலின் முதல் உறுப்பை (element) அகற்ற, இங்கே `shift` முறை உருவாக்கப்பட்டுள்ளது.

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