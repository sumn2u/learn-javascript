---
chapter: 5
pageNumber: 35
description: La concaténation de conditions renvoie au fait de combiner les conditions entre elles. Cela permet de procéder à des tests logiques poussés et complexes.
---

# Concaténation de conditions

De même, vous avez la possibilité d'associer les conditions entre elles grâce aux instructions "`or`" ou “`and`”. Cela permet de tester si toutes les conditions sont remplies, seulement l'une ou aucune d'entre elles.

En JavaScript "ou" s'écrit grâce au double pipe `||` quand "et" s'écrit avec le double esperluète `&&`.

Imaginons que vous vouliez tester si une valeur x est comprise entre 10 et 20. Voilà comment vous pourriez écrire cette condition globale en combinant deux sous-conditions:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

Si maintenant vous voulez vous assurer que le pays contenu dans la variable country est soit égal à "Angleterre" soit "Allemagne", vous utiliseriez:
If you want to make sure that country is either “England” or “Germany” you use:

```javascript
if (country === "Angleterre" || country === "Allemagne") {
    ...
}
```

> **Note**: À l'image des opérations sur les nombres, les conditions peuvent être priorisées en utilisant les parenthèses. Par exemple: `if ( (name === "John" || name === "Jennifer") && country === "France")`. Dans ce cas, on testera d'abord la condition relative au nom `name` avant d'évaluer la condition mettant en oeuvre le "et" logique.
