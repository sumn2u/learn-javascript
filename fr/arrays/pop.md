---
chapter: 6
pageNumber: 42
description: La méthode pop supprime le dernier élément d'un tableau et renvoie l'élément supprimé. Cette méthode change la longueur du tableau.
---

# Pop

La méthode `pop` supprime le dernier élément d'un tableau et renvoie l'élément supprimé. Cette méthode change la longueur du tableau.

Voici la syntaxe utilisée pour la méthode `pop`:

```javascript
array.pop();
```

Par exemple:

```javascript
let arr = ["one", "two", "three", "four", "five"];
arr.pop();

console.log(arr);

// Résultat: ['one', 'two', 'three', 'four']
```

Vous pouvez aussi utiliser la méthode `pop` en conjonction avec une boucle pour supprimer tous les éléments d'un tableau. Voici un exemple de comment vous pourriez faire cela:

```c
while (array.length > 0) {
  array.pop();
}

console.log(array); // Résultat: []
```

{% hint style="warning" %}
La méthode `pop` ne fonctionne que sur les tableaux, et non sur d'autres objets similaires aux tableaux tels que les objets arguments ou les objets NodeList. Si vous devez extraire des éléments de l'un de ces types d'objets, vous devrez d'abord le convertir en tableau à l'aide de la méthode `Array.prototype.slice()`.
{% endhint %}
