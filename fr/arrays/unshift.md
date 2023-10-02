---
chapter: 6
pageNumber: 38
description: Pour ajouter un élément au début d'un tableau, nous utilisons la méthode unshift. Il modifie le tableau d'origine et renvoie la nouvelle longueur du tableau.
---

# Unshift

La méthode `unshift` ajoute de nouveaux éléments séquentiellement au début du tableau. Il modifie le tableau d'origine et renvoie la nouvelle longueur du tableau. Par exemple.

```javascript
let array = [0, 5, 10];
array.unshift(-5); // 4

// RESULT: array = [-5 , 0, 5, 10];
```

{% hint style="warning" %}
La méthode `unshift()` écrase le tableau d'origine.
{% endhint %}

La méthode `unshift` prend un ou plusieurs arguments qui représentent les éléments à ajouter au début du tableau. Il ajoute les éléments dans l'ordre dans lequel ils sont fournis, le premier élément sera donc le premier élément du tableau.

Voici un exemple d'utilisation de `unshift` pour ajouter plusieurs éléments à un tableau :

```javascript
const numbers = [1, 2, 3];
const newLength = numbers.unshift(-1, 0);
console.log(numbers); // [-1, 0, 1, 2, 3]
console.log(newLength); // 5
```
