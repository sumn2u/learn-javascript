---
chapter: 6
pageNumber: 45
description: La méthode push ajoute un élément dans un tableau, faisant du dernier index l'élément nouvellement ajouté. Cette méthode modifie la longueur du tableau et renvoie une nouvelle longueur.
---

# Push

On peut ajouter certains éléments dans un tableau, faisant du dernier index l'élément nouvellement ajouté. La méthode `psuh` modifie la longueur d'un tableau et renvoie une nouvelle longueur.

Voici la syntaxe pour utiliser `push`:

```javascript
array.push(element1[, ...[, elementN]]);
```

Les arguments `element1, ..., elementN` représentent les éléments à ajouter à la fin d'un tableau.

Par exemple:

```javascript
let array = [1, 2, 3];
array.push(4);

console.log(array);

// Résultat: array = [1, 2, 3, 4]
```

Vous pouvez également utiliser `push` pour ajouter des éléments à la fin d'un objet de type tableau (comme un objet arguments ou un objet NodeList) en le convertissant d'abord en tableau à l'aide de la méthode `Array.prototype.slice()` :

```javascript
function printArguments() {
  let args = Array.prototype.slice.call(arguments);
  args.push("d", "e", "f");
  console.log(args);
}

printArguments("a", "b", "c"); // Résultat: ["a", "b", "c", "d", "e", "f"]
```

> **Note**: La méthode `push` modifie le tableau d'origine. Cela ne crée pas de nouveau tableau.
