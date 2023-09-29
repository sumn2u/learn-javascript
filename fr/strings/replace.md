---
chapter: 4
pageNumber: 26
---

# Remplacement

La méthode `replace` nous permet de remplacer un caractère, un mot, ou une phrase entière dans une chaîne. Par exemple:

```javascript
let str = "Hello World!";
let new_str = str.replace("Hello", "Hi");

console.log(new_str);

// Resultat: Hi World!
```

{% hint style="warning" %}
Pour remplacer une valeur sur l'ensemble des occurrences d'une [expression régulière](../regular-expression.md) on devra indiquer un drapeau `g`.
{% endhint %}

La méthode `replace` recherche une valeur ou la présence d'une expression rationnelle dans une chaîne et retourne une nouvelle chaîne avec les valeurs remplacées. Cette opération ne modifie pas la chaîne originelle. Voyons le cas d'un remplacement global non sensible à la casse. Ici on recherche les occurrences de l'expression rationnelle `/blue/` en lui précisant les drapeaux `g` (global) et `i` (non sensible à la casse). On remplace les occurrences trouvées par la chaîne en second paramètre (ici "red").

```javascript
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red");

console.log(result);
//Result: Mr red has a red house and a red car
```
