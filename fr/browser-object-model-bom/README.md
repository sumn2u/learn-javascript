---
layout: editorial
chapter: 16
pageNumber: 79
description: Le modèle objet du navigateur (browser object model, BOM) nous permet d'interagir avec la fenêtre du navigateur. Grâce à lui, on peut contrôler ou manipuler divers aspects du navigateur, tels que la fenêtre, les cadres, l'historique, l'emplacement, etc.
---

# Chapter 16

# Browser Object Model (BOM)

Le modèle objet du navigateur (Browser Object Model, BOM) nous permet d'interagir avec la fenêtre du navigateur. L'objet `window` représente la fenêtre du navigateur et est supporté par tous les navigateurs.

L'objet `window` est l'objet par défaut d'un navigateur, nous pouvons donc spécifier `window` ou appeler directement toutes les fonctions.

```javascript
window.alert("Bienvenue dans Apprendre JavaScript");

alert("Bienvenue dans Apprendre JavaScript");
```

De la même manière, nous pouvons appeler d'autres propriétés sous l'objet fenêtre, telles que l'historique, l'écran, le navigateur, l'emplacement, etc.
