---
chapter: 6
pageNumber: 48
description: Les tableaux sont des collections d'éléments et chacun d'entre eux est positionné numériquement à l'intérieur du tableau grâce à un index (ou indices). Les indices sont basés sur 0 ce qui signifie que le premier élément possède l'index 0, le deuxième est à l'index 1 et ainsi de suite.
---

# Indices

Désormais vous possédez un tableau stockant des données, mais comment faire pour accéder à un élément spécifique ? C'est ici que les indices entrent en jeu. Un **index** r
So you have your array of data elements, but what if you want to access a specific element? That is where indices come in. Un **index** fait référence à un endroit du tableau. Les indices progressent logiquement un par un, mais il convient de noter que le premier index d'un tableau est 0, comme c'est le cas dans la plupart des langages. Les crochets `[]` sont utilisés pour signifier que vous faites référence à l'index d'un tableau.

```javascript
// Voici un tableau stockant des chaînes de caractères
let fruits = ["apple", "banana", "pineapple", "strawberry"];

// On fixe la variable banana à la valeur du deuxième élément du
// tableau de fruits. Rappelez-vous que les indices commencent à 0, de ce fait 1
// pointe sur le deuxième élément. Résultat: banana = "banana"
let banana = fruits[1];
```

Vous pouvez aussi utiliser les index pour modifier la valeur d'un élément au sein du tableau:

```javascript
let array = ["a", "b", "c", "d", "e"];
//  indices:  0    1    2    3    4
array[4] = "f";
console.log(array); // Résultat: ['a', 'b', 'c', 'd', 'f']
```

Notons que si vous essayez d'accéder à un élément en utilisant un index situé hors des limites du tableau (par exemple, un index plus petit que 0 ou plus grand ou égal à la longueur du tableau), vous recevrez une valeur de type `undefined`.

```javascript
console.log(array[5]); // Sortie: undefined
array[5] = "g";
console.log(array); // Résultat: ['a', 'b', 'c', 'd', 'f', undefined, 'g']
```
