---
chapter: 6
pageNumber: 39
description: La méthode map itère chaque élément d'un tableau et modifie l'élément courant en utilisant une fonction de rappel. Cette callback est appliquée sur chaque élément composant le tableau.
---

# Map

La méthode `Array.prototype.map()` itère chaque élément d'un tableau et modifie l'élément courant en utilisant une fonction de rappel. Cette callback est appliquée sur chaque élément composant le tableau.

Voici la syntaxe pour utiliser `map`.

```javascript
let newArray = oldArray.map(function (element, index, array) {
  // element: l'élément en cours de traitement dans le tableau
  // index: l'index de l'élément en cours de traitement dans le tableau
  // array: le tableau sur lequel la méthode est appelée
  // Retourne l'élément à ajouter à newArray
});
```

Par exemple, disons que vous disposez d'un tableau de nombres et que vous souhaitez créer un nouveau tableau qui double les valeurs des nombres du tableau d'origine. Vous pouvez le faire en utilisant `map` comme ceci.

```javascript
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// Résultat: [4, 8, 12, 16]
```

Vous pouvez aussi utiliser une fonction fléchée pour définir la callback passée à `map`.

<pre class="language-typescript"><code class="lang-typescript"><strong>let doubledNumbers = numbers.map((number) => {
</strong>  return number * 2;
});
</code></pre>

ou

```typescript
let doubledNumbers = numbers.map((number) => number * 2);
```

{% hint style="info" %}
La méthode `map()` n'exécute pas la callback pour les éléments vides et ne modifie pas le tableau d'origine.
{% endhint %}
