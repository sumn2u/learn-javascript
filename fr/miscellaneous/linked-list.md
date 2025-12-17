---
chapter: 19
pageNumber: 98
description: Les Listes chaînées sont des structures de données linéaire qui sont utilisées pour stocker des élements appellés noeuds. Chaque noeud dans la liste contient deux parties, les informations (ou valeur) qu'il représente et la reférence (pointeur) vers l'élément suivant dans la séquence. Le dernier noeud de la liste pointe vers null, cela indique la fin de la liste.
---
# Listes Chaînées

Les Listes Chaînées représentent une des structures de données courantes qu'on retrouve dans tous les langages de programmation. Une Liste Chaînée est très simimlaire à un tableau normal en JavaScript. Il agit juste un petit peu différemment.

Ici, chaque élément dans la liste est un objet séparé contenant un lien ou pointeur vers l'élément suivant. Il n'y pas de méthode ou fonction natif en JavaScript propre aux Listes Chaînées, c'est donc à nous de l'implémenter. En voici un exemple d'implémentation.&#x20;

```javascript
["un", "deux", "trois", "quatre"];
```

**Les types de Listes Chaînées**

Il y a trois différents types de listes chaînées:

1. **Les Listes Simplement Chaînées :**  Chaque noeud contient seulement un pointeur vers l'élément suivant (noeud).
2. **Les Listes Doublement Chaînées :**  Il y a deux noeuds pour chaque noeud, un vers l'élément suivant et l'autre vers l'élement précedent.
3. **Les Listes Chaînées Circulaires :**  Une Liste Chaînée Circulaire forme une boucle en ayant le dernier noeud qui pointe vers le premier ou tout autre élément derrière lui.

# Ajouter à la fin

La méthode `add` est utilisée pour ajouter un noeud à la fin de la liste chaînée.

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

# Retirer à la fin

La méthode `pop` est utilisée pour supprimer le dernier noeud de la liste chaînée.

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

# Ajouter au début

La méthode `prepend` est créée pour ajouter une valeur au début de la liste chaînée.

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

# Retirer au début

La méthode `shift` est créée pour retirer le premier élément de la Liste Chaînée.

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