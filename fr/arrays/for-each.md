---
chapter: 6
pageNumber: 46
description: La méthode forEach (pour chaque) exécute une fonction sur chaque élément d'un tableau.
---

# For Each

La méthode `forEach` (pour chaque) exécute une fonction sur chaque élément d'un tableau. Voici la syntaxe de la méthode `forEach`:

```javascript
array.forEach(function (element, index, array) {
  // element: l'élément courant
  // index: l'index de l'élément courant
  // array: le tableau sur lequel la méthode forEach est appelée
});
```

Par exemple, imaginons que vous avez un tableau de nombre et que vous voulez afficher le double de chacun d'entre eux dans la console. Vous pouvez faire ceci en utilisant `forEach`:

```typescript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number * 2);
});
```

Vous pouvez tout aussi bien utiliser une fonction fléchée pour définir la callback passée à `forEach`:

```typescript
numbers.forEach((number) => {
  console.log(number * 2);
});
```

or

```typescript
numbers.forEach((number) => console.log(number * 2));
```

La méthode `forEach` ne modifie pas le tableau original. Elle itère simplement les éléments les uns après les autres et exécute le colback sur chacun d'entre eux.

{% hint style="warning" %}
La méthode `forEach()` n'est pas exécutée dans le cas d'une instruction vide.
{% endenta %}
