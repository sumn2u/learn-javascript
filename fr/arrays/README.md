---
layout: editorial
chapter: 6
pageNumber: 36
description: Les tableaux sont des listes de données qui constituent une partie essentielle en programmation. Grâce à eux, on peut stocker et représenter un grand nombre de données.
---

# Chapitre 6

# Tableaux

Les tableaux sont une partie essentielle de la programmation. Un tableau n'est ni plus ni moins qu'une liste de données. Grâce à eux, on peut stocker de nombreuses données à l'intérieure d'une seule variable, ce qui rend notre code plus facile à lire et à comprendre. Les tableaux permettent aussi de réaliser de nombreuses actions sur les données qu'ils stockent.

Les données au sein d'un tableau s'appellent les **éléments**.

Voici un exemple simple de tableau:

```javascript
// 1, 1, 2, 3, 5, et 8 sont les éléments de ce tableau
let numbers = [1, 1, 2, 3, 5, 8];
```

Les tableaux peuvent être aisément créés en utilisant la syntaxe littérale ou grâce au mot clé `new`.&#x20;

```javascript
const cars = ["Saab", "Volvo", "BMW"]; // en utilisant la syntaxe littérale entre crochets
const cars = new Array("Saab", "Volvo", "BMW"); // en utilisant le mot clé new
```

Un numéro d'index est utilisé pour accéder aux valeurs au sein d'un tableau. L'index du premier élément d'un tableau est toujours `0` comme le tableau commence toujours son indexation à `0`. Le numéro d'index peut aussi être utilisé pour mettre à jour les éléments au sein du tableau.

```javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
// Résultat: Saab

cars[0] = "Opel"; // changeons le premier élément du tableau
console.log(cars);
// Résultat: ['Opel', 'Volvo', 'BMW']
```

{% hint style="warning" %}
Les tableaux sont un type spécial d'objets. On peut même stocker des [objects](../objects/) dans un tableau.
{% endhint %}

&#x20;La propriété `length` d'un tableau retourne le nombre d'éléments qui le constitue. Voici les méthodes supportées par les tableaux:

| Nom               | Description                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `concat()`        | Retourne deux ou plus tableaux concaténés                                                                                                           |
| `join()`          | Rassemble tous les éléments du tableau sous la forme d'une chaîne de caractères                                                                     |
| `push()`          | Ajoute un ou plusieurs éléments à la fin du tableau et renvoie la nouvelle longueur de celui-ci                                                     |
| `pop()`           | Supprime le dernier élément d'un tableau et retourne l'élément supprimé                                                                             |
| `shift()`         | Supprime le premier élément d'un tableau et retourne l'élément supprimé                                                                             |
| `unshift()`       | Ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle longueur de celui-ci                                                  |
| `slice()`         | Extrait la partie d'un tableau et retourne la partie extraite sous la forme d'un nouveau tableau                                                    |
| `at()`            | Renvoie l'élément à l'index spécifié ou `undefined`                                                                                                 |
| `splice()`        | Supprime l'élément du tableau et (en option) remplace celui-ci avant de retourner le nouveau tableau                                                |
| `reverse()`       | Transpose les éléments d'un tableau en le retournant et renvoie le tableau modifié                                                                  |
| `flat()`          | Renvoie un nouveau tableau avec tous les éléments du sous-tableau concaténés de manière récursive jusqu'à la profondeur spécifiée                   |
| `sort()`          | Trie les éléments d'un tableau et renvoie le tableau modifié                                                                                        |
| `indexOf()`       | Renvoie l'index du premier match de l'élément recherché                                                                                             |
| `lastIndexOf()`   | Renvoie l'index du dernier match de l'élément recherché                                                                                             |
| `forEach()`       | Exécute une fonction de rappel sur chaque élément du tableau et renvoie undefined                                                                   |
| `map()`           | Returns a new array with a return value from executing `callback` on every array item.                                                              |
| `flatMap()`       | Exécute un `map()` suivi d'un `flat()` de profondeur 1                                                                                              |
| `filter()`        | Retourne un nouveau tableau contenant tous les éléments qui renvoient true à la fonction de `callback` passée                                       |
| `find()`          | Renvoie le premier élément qui renvoie true pour la `callback` passée                                                                               |
| `findLast()`      | Renvoie le dernier élément qui renvoie true pour la `callback` passée                                                                               |
| `findIndex()`     | Renvoie l'index du premier élément qui renvoie true pour la `callback` passée                                                                       |
| `findLastIndex()` | Renvoie l'index du dernier élément qui renvoie true pour la `callback` passée                                                                       |
| `every()`         | Renvoie `true` si la `callback` renvoie `true` sur chaque élément du tableau                                                                        |
| `some()`          | Renvoie `true` si la `callback` renvoie `true` sur au moins 1 élément du tableau                                                                    |
| `reduce()`        | Utilise la `callback(accumulator, currentValue, currentIndex, array)` pour réduire le tableau et renvoie la valeur finale de la fonction `callback` |
| `reduceRight()`   | Fonctionne de la même manière qu'un `reduce()` mais commence à partir du dernier élément                                                            |
