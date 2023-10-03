---
chapter: 4
pageNumber: 27
---

# Longueur des chaînes

En JavaScript, c'est un jeu d'enfant de savoir combien de caractères composent une chaîne. Pour ce faire, on utilise la propriété `.length` sur la chaîne en question. La propriété `length` renvoie le nombre de caractères contenus dans la chaîne, en incluant les espaces et les caractères spéciaux non alphanumériques.

```javascript
let size = "Notre chaîne merveilleuse".length;
console.log(size);
// size: 25

let emptyStringSize = "".length;
console.log(emptyStringSize);
// emptyStringSize: 0
```

La propriété `length` d'une chaîne vide est `0`.&#x20;

{% hint style="warning" %}
La propriété `length`est en lecture seule, cela signifie qu'il est impossible de lui assigner une nouvelle valeur.
{% endhint %}
