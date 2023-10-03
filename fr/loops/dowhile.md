---
chapter: 7
pageNumber: 52
description: L'instruction do...while permet de créer une boucle qui exécute un bloc d'instructions spécifiques jusqu'à ce que la condition de test soit fausse. La condition est évalue après avoir exécuté le bloc.
---
# Do...While


L'instruction do...while permet de créer une boucle qui exécute un bloc d'instructions spécifiques jusqu'à ce que la condition de test soit fausse. La condition est évalue après avoir exécuté le bloc. La syntaxe de la boucle est la suivante: 

```javascript
do {
  // instructions
} while (expression);
```

Affichons par exemple les nombres plus petits que 10 en utilisant la boucle `do...while`:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // incrémentation de i by 1
} while (i < 10);
```

> _**Note**_: `i = i + 1` peut être écrit: `i++`.

