---
chapter: 16
pageNumber: 80
description: Window est un objet global qui représente la fenêtre ou l'onglet du navigateur dans lequel la page web en cours est chargée. L'objet window agit comme l'objet global pour le JavaScript côté client, ce qui signifie que les variables et les fonctions déclarées sans les mots-clés var, let ou const deviennent des propriétés et des méthodes de l'objet window.
---

# Window (fenêtre)

L'objet `window` représente la fenêtre du navigateur et est supporté par les navigateurs. Les variables globales, les objets et les fonctions font également partie de l'objet window.

Les **variables** globales sont des **propriétés** et les **fonctions** sont des **méthodes** de l'objet window.

Prenons l'exemple des propriétés de l'écran. Elle est utilisée pour déterminer la taille de la fenêtre du navigateur et est mesurée en pixels.

- `window.innerHeight` - la hauteur intérieure de la fenêtre du navigateur
- `window.innerWidth` - la largeur intérieure de la fenêtre du navigateur

> _**Note**_ : `window.document` est identique à `document.location` car le document object model\(DOM\) fait partie de l'objet window.

Quelques exemples de méthodes de fenêtre:

- `window.open()` - ouvre une nouvelle fenêtre
- `window.close()` - fermer la fenêtre courante
- `window.moveTo()` - déplace la fenêtre courante
- `window.resizeTo()` - redimensionne la fenêtre courante
