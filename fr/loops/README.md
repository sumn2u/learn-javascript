---
layout: editorial
chapter: 7
pageNumber: 49
description: Les boucles sont des structures de controles qui vous permettent d'exécuter un bloc de code de façon répétée jusquà ce que une condition précise soit remplie. Les boucles sont essentielles pour automatiser des tâches répétitives et l'itération sur les structures de données telles que les tableaux et les chaînes de caractères.
---

# Chapitre 7
# Les boucles

Les boucles sont des instructions répétitives où une variable de la boucle change. Les boucles sont utiles: si vous voulez exécuter le même code encore et encore, à chaque fois avec une valeur différente.

Au lieu d'écrire:

```javascript
faireQqch(voiture[0]);
faireQqch(voiture[1]);
faireQqch(voiture[2]);
faireQqch(voiture[3]);
faireQqch(voiture[4]);
```

Vous pouvez écrire:

```javascript
for (var i = 0; i < voiture.length; i++) {
  faireQqch(voiture[i]);
}
```
