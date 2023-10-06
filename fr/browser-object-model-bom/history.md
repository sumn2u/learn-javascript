---
chapter: 16
pageNumber: 85
description: L'objet History gère l'historique du navigateur. Au fur et à mesure que nous naviguons sur les pages, de nouvelles entrées sont poussées dans cette pile.
---

# Historique

Lorsque nous ouvrons un navigateur web et que nous surfons sur une page web, une nouvelle entrée est créée dans la pile de l'historique. Au fur et à mesure que nous naviguons sur des pages différentes, de nouvelles entrées sont ajoutées à cette pile.

Pour accéder à l'objet historique, nous pouvons utiliser

```javascript
window.history;
// ou
history;
```

Pour naviguer entre les différentes piles d'historique, nous pouvons utiliser les méthodes `go()` , `foward()` et `back()` de l'objet **history**.

1. **go\(\)**: est utilisé pour naviguer dans l'URL spécifique de la pile d'historique.

   ```javascript
   history.go(-1); // fait reculer d'une page
   history.go(0); // rafraîchit la page actuelle
   history.go(); // rafraîchit la page actuelle
   history.go(1); // déplace la page vers l'avant
   ```

   > _**Note:**_ la position de la page actuelle dans l'historique est **0**.

2. **back\(\)** : Pour naviguer vers l'arrière de la page, nous utilisons la méthode `back()`.

   ```javascript
   history.back();
   ```

3. **forward\(\)**: Il charge la liste suivante dans l'historique du navigateur. Ceci est similaire à cliquer sur le bouton "avancer" dans le navigateur.

   ```javascript
   history.forward();
   ```
