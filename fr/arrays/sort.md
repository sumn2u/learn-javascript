---
chapter: 6
pageNumber: 47
description: La méthode sort trie les éléments d’un tableau dans un ordre spécifique. Par défaut, elle trie les éléments sous forme de chaînes et les organise par ordre croissant en fonction de leurs valeurs d'unité de code UTF-16.
---

# Sort

La méthode `sort` trie les éléments d'un tableau dans un ordre spécifique (croissant ou décroissant). Par défaut, la méthode `sort` trie les éléments sous forme de chaînes et les organise par ordre croissant en fonction de leurs valeurs d'unité de code UTF-16.

Voici la syntaxe pour utiliser la méthode `sort`:

```javascript
array.sort([compareFunction]);
```

L'argument `compareFunction` est facultatif et spécifie une fonction qui définit l'ordre de tri. S'il est absent, les éléments sont triés par ordre croissant en fonction de leur représentation sous forme de chaîne.

Par exemple:

```javascript
let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let sortedCity = city.sort();

console.log(sortedCity);

// Résultat: ['Barcelona', 'California', 'Kathmandu', 'Paris']
```

{% hint style="info" %}
Les nombres peuvent être mal triés numériquement lors de `sort`. Par exemple, "35" est plus grand que "100", car "3" est plus grand que "1".
{% endhint %}

Pour résoudre le problème de tri en nombres, des fonctions de comparaison sont utilisées. Les fonctions de comparaison définissent des ordres de tri et renvoient une valeur **négative**, **zéro** ou **positive** en fonction des arguments, comme ceci :

- Une valeur négative si `a` doit être trié avant `b`
- Une valeur positive si `a` doit être trié après `b`
- `0` si `a` et `b` sont égaux et leur ordre n'a pas d'importance

```javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {
  return a - b;
});

// Résultat: [1, 5, 10, 25, 40, 100]
```

{% hint style="warning" %}
La méthode `sort()` écrase le tableau original.
{% endhint %}
