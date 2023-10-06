---
chapter: 6
pageNumber: 41
description: La méthode shift supprime le premier élément d’index du tableau et déplace tous les index vers la gauche. Elle modifie le tableau d'origine.
---

# Shift

La méthode `shift` supprime le premier élément d’index du tableau et déplace tous les index vers la gauche. Elle modifie le tableau d'origine. Voici la syntaxe de cette méthode

```javascript
array.shift();
```

Par exemple:&#x20;

```javascript
let array = [1, 2, 3];
array.shift();

// Résultat: array = [2,3]
```

Vous pouvez également utiliser la méthode `shift` en combinaison avec une boucle pour supprimer tous les éléments d'un tableau. Voici un exemple de la façon dont vous pourriez procéder :

```javascript
while (array.length > 0) {
  array.shift();
}

console.log(array); // Résultat: []
```

{% hint style="warning" %}
La méthode `shift` ne fonctionne que sur les tableaux, et pas sur d'autres objets similaires aux tableaux tels que les objets arguments ou les objets NodeList. Si vous devez déplacer des éléments de l'un de ces types d'objets, vous devrez d'abord le convertir en tableau à l'aide de la méthode `Array.prototype.slice()`.
{% endhint %}
