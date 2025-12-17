---
chapter: 12
pageNumber: 69
description: >-
  Le bloc try...catch...finally permet aux développeurs de gérer avec élégance
  les exceptions (erreurs) qui peuvent survenir au cours de l'exécution d'un
  bloc de code et de s'assurer que certaines actio
---

# try...catch...finally

Nous pouvons ajouter une construction supplémentaire à `try...catch` appelée `finally`, ce code s'exécute dans tous les cas, c'est-à-dire après `try` lorsqu'il n'y a pas d'erreur et après un `catch` en cas d'erreur. La syntaxe pour `try ...catch...finally` est la suivante.

```javascript
try {
  // essaie d'exécuter le code
} catch (err) {
  // gère les erreurs
} finally {
  // s'exécute quoi qu'il arrive
}
```

Exécution du code de l'exemple du monde réel.

```javascript
try {
  alert("try");
} catch (err) {
  alert("catch");
} finally {
  alert("finally");
}
```

Dans l'exemple ci-dessus, le bloc `try` est exécuté en premier, puis il est suivi par `finally` puisqu'il n'y a pas d'erreur.
