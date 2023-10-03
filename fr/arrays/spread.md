---
chapter: 6
pageNumber: 40
description: L’opérateur de décomposition (spread) permet à un tableau ou à un objet de manipuler rapidement des tableaux et des objets. Il fournit une syntaxe concise pour copier, fusionner ou extraire des éléments de tableaux et pour copier des propriétés d'objets.
---

# Opérateur de décomposition (spread)

Un tableau ou un objet peut être rapidement copié dans un autre tableau ou objet en utilisant l'opérateur de décomposition (spread) `(...)`. Il permet à un itérable tel qu'un tableau d'être développé aux endroits où zéro ou plusieurs arguments (pour les appels de fonction) ou éléments (pour les littéraux de tableau) sont attendus, ou à une expression d'objet d'être développée aux endroits où zéro ou plusieurs paires clé-valeur (pour les littéraux d'objet) sont attendus.

Voici certains exemples d'utilisation:

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(...arr);
// Résultat: 1 2 3 4 5

let arr1;
arr1 = [...arr]; //copie arr dans arr1

console.log(arr1); //Résultat: [1, 2, 3, 4, 5]

arr1 = [6, 7];
arr = [...arr, ...arr1];

console.log(arr); //Résultat: [1, 2, 3, 4, 5, 6, 7]
```

{% hint style="warning" %}
L'opérateur de décomposition spread fonctionne uniquement avec les navigateurs modernes qui supportent la fonctionnalités. Si vous souhaitez l'utiliser avec d'anciens navigateurs, vous devrez utiliser un transpiler comme Babel pour convertir la syntaxe du spread dans son équivalent ES5.
{% endhint %}
