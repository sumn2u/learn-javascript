---
chapter: 4
pageNumber: 28
---

# Concaténation

La concaténation signifie l'addition de deux ou plusieurs chaînes l'une à l'autre. Le résultat de la concaténation crée une chaîne plus grande contenant les données combinées des deux chaînes originales. La concaténation d'une chaîne ajoute celle-ci à une ou plusieurs autres. Voici comment on réalise cette opération en JavaScript.

- en utilisant l'opérateur **`+`**
- en utilisant la méthode `concat()`
- en utilisant la méthode de tableau `join()`
- en utilisant les littéraux de gabarits (depuis ES6)

La méthode de chaîne `concat()` accepte une liste de chaînes en paramètres et retourne une nouvelle chaîne, résultat de la concaténation. En substance, le résultat correspond à la combinaison de toutes les chaînes. Alors que la
The string `concat()` method accepts the list of strings as parameters and returns a new string after concatenation i.e. combination of all the strings. La méthode de tableau `join()` est quant à elle utilisée pour concaténer tous les éléments présents dans un tableau en les convertissant en une seule et unique chaîne.&#x20;

Les littéraux de gabarits utilisent les backticks ` (``) ` et procurent un moyen simple de créer des chaînes sur plusieurs lignes. De la même manière, c'est grâce à eux que l'on peut réaliser l'interpolation de chaîne. En effet, on peut utiliser une expression à l'intérieur de la syntaxe `${}` pour la remplacer par la valeur de l'expression `${expression}`.

```javascript
const icon = "👋";
// en utilisant les littéraux de gabarits
`hi ${icon}`;

// en utilisant la méthode join()
["hi", icon].join(" ");

// en utilisant la méthode concat()
"".concat("hi ", icon);

//  en utilisant l'opérateur +
"hi " + icon;
// hi 👋
```
