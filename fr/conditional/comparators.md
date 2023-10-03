---
chapter: 5
pageNumber: 34
description: La comparaison est un mécanisme indissociable des conditions. En effet, c'est notamment grâce à elle qu'on est capable d'évaluer des valeur l'une avec l'autre et leurs relations. Le boolén renvoyé indique si les valeurs sont égales, supérieures ou inférieures à ou toute autre relation basée sur un critère de comparaison spécifique.
---

# Comparaison

Concentrons nous sur la partie conditionnelle:

```javascript
if (country === "France") {
    ...
}
```

La partie conditionnelle (ou la condition) est représentée par la variable `country` suivie par les trois signes égal (`===`). Cet opérateur d'égalité stricte teste si la variable `country` possède à la fois la valeur attendue (`France`) et le type requis (`String`). Bien sûr, il est possible de réaliser la condition suivante avec l'opérateur d'égalité à deux signes égal (`==`). Dans ce cas, on occultera le test du type de la variable. Ainsi, la condition `if (x == 5)` retournera true aussi bien pour `var x = 5;` que pour `var x = "5";`. Dans le premier cas x est du type `Number` et dans le second du type `String`. Vous en convenez, cela change pas mal de choses et cela peut créer des comportements indésirables. Pour prévenir ce genre de problème, il est recommandé de toujours tester l'égalité grâce à la comparaison stricte. Ainsi, on utilisera en priorité (`===` and `!==`) au lieu de (`==` and `!=`).

Autre test conditionnels fréquents:

- `x > a`: x est strictement supérieur à a?
- `x < a`: x est strictement inférieur à a?
- `x <= a`: x est inférieur ou égal à a?
- `x >=a`: x est supérieur ou égal à a?
- `x != a`: x est différent de a?
- `x`: est-ce que x existe?

## Comparaison logique - ternaire

Dans le but de s'éviter l'écriture trop rébarbative des blocs if/else, la syntaxe des ternaires peut-être mise en oeuvre. En substance, il s'agit d'écrire un if/else simple de manière rapide.

```javascript
let topper = marks > 85 ? "YES" : "NO";
```

Dans l'exemple ci-dessus, `?` est un opérateur logique. La condition à tester est l'opérande gauche (`marks > 85`). Si cette condition est remplie, la variable topper contiendra la chaîne "YES" et dans le cas contraire, elle se verra assigner la valeur "NO". En opérande droite, on fait apparaître les instructions à appliquer en fonction de l'évaluation de la condition. Les deux cas sont séparés par les `:`. Si la condition est évaluée à true, on accède à la partie gauche, à droite sinon.
