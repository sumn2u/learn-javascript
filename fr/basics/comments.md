---
chapter: 2
pageNumber: 10
description: Les commentaires sont utilisés pour faire apparaître des annotations à destination des autres programmeurs. Les commentaires permettent aussi de fournir de courtes descriptions sur le code afin d'aider le lecteur à comprendre ce dernier. Les commentaires sont ignorés par l'interpréteur.
---

# Commentaires

Les commentaires sont des déclarations qui ne sont pas exécutées par l'interpréteur. En effet, les commentaires sont faits pour faire apparaître des annotations à destination des autres programmeurs ou de courtes descriptions sur le fonctionnement du code. Les commentaires doivent fournir des explications supplémentaires de manière à mieux comprendre le code. D'autre part, les commentaires peuvent servir à "échapper" temporairement du code sans toucher au reste du programme.

En JavaScript, les commentaires peuvent être écrits de deux manières:

- _Commentaire monoligne_: Le commentaire commence avec deux slashs (`//`) et se prolonge jusqu'à la fin de la ligne courante. Tout ce qui suit le double slash sera ignoré par l'interpréteur JavaScript. Par exemple:

```javascript
// Ceci est un commentaire monoligne, il sera ignoré par l'interpréteur
let a = "ceci est une variable définie dans une déclaration";
```

- _Commentaires multilignes_: Le commentaire commence avec un slash suivi directement par un astérisque (`/*`) et se termine par un astérisque suivi directement par un slash (`*/`). Tout ce qui est contenu entre ces deux paires de signes sera ignoré par l'interpréteur JavaScript. Par exemple:

```javascript
/*
Ceci est un commentaire multilignes,
il sera ignoré par l'interpréteur 
*/
let a = "ceci est une variable définie dans une déclaration";
```

Inclure des commentaires dans son code est essentiel pour assurer la qualité du code, favoriser la collaboration et simplifier les phases de debug. En apportant du contexte et des explications sur différentes parties du programme, les commentaires permettent de rendre le code compréhensible sur le long terme. De plus, commenter son code est considéré comme une pratique bénéfique.
