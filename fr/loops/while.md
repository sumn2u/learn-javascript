---
chapter: 7
pageNumber: 51
description: La boucle while exécute de façon répétée un bloc de code tant qu'une codition spécifiée est vraie.
---

# While

La boucle while exécute de façon répétée un bloc de code tant qu'une codition spécifiée est vraie. Grâce à cette dernière, nous pouvons automatiser des tâches répétées ou effectuer des itérations en fonction de l'évalutation d'une condition.


```javascript
while (condition) {
  // instruction à exécuter tant que la condition est vraie
}
```

Par exemple, le code de la boucle dans cet exemple sera exécuté tant que la valeur de la variable `i` est inférieure à 5.


```javascript
var i = 0,
x = "";
while (i < 5) {
  x = x + "Le nombre est " + i + '\n';
  i++;
}
console.log(x);
```

{% hint style="warning" %}
&#x20; Faites attention d'éviter les boucles infinies qui arrivent lorsque la condition est indéfiniment évaluée à vraie.
{% endhint %}
