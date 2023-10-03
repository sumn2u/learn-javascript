---
chapter: 5
pageNumber: 30
description: Le mot clé if (si) permet de mettre en place une condition. Si cette condition est évaluée à true (vrai), alors le bloc de code qui suit sera exécuté. Dans le cas contraire, il sera ignoré.
---

# If

La condition la plus basique est la déclaration if et sa syntaxe est la suivante `if(condition){ do this … }`. La condition doit être évaluée à true pour que le code contenu entre crochets soit exécuté. Par exemple, vous pourriez vouloir tester la valeur d'une chaîne.

```javascript
let country = "France";
let weather;
let food;
let currency;

if (country === "Angleterre") {
  weather = "horrible";
  food = "passable";
  currency = "livre sterling";
}

if (country === "France") {
  weather = "agréable";
  food = "formidable, mais peu adaptée aux végétariens";
  currency = "marrante, petite et colorée";
}

if (country === "Allemagne") {
  weather = "correct";
  food = "vraiment pas bon";
  currency = "marrante, petite et colorée";
}

let message =
  "Il s'agit de la " +
  country +
  ", le temps est " +
  weather +
  ", la nourriture est " +
  food +
  " et la " +
  "monnaie est " +
  currency;

console.log(message);
// 'Il s'agit de la France, le temps est agréable, la nourriture est formidable, mais peu adaptée aux végétariens et la monnaie est marrante, petite et colorée'
```

{% hint style="info" %}
Les conditions peuvent également être imbriquées les unes dans les autres.
{% endhint %}
