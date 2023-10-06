---
chapter: 2
pageNumber: 15
description: L'opérateur d'égalité est utilisé pour la comparaison. Il permet de déterminer si deux variables sont égales, même si celle-ci ne sont pas du même type.
---

# Égalité

Lorsque nous écrivons un programme, nous avons souvent besoin de déterminer l'égalité entre différentes variables. Ce test de comparaison est réalisé grâce à un opérateur d'égalité. L'opérateur d'égalité le plus courant est le double égal `==`. Cet opérateur permet de déterminer si deux variables sont égales l'une à l'autre, ce même si elles ne sont pas du même type.

Par exemple, considérons:

```javascript
let foo = 42;
let bar = 42;
let baz = "42";
let qux = "life";
```

Comme on peut s'y attendre, `foo == bar` sera évalué à `true` tandis que `baz == qux` sera évalué `false`. Cependant, `foo == baz` sera également évalué à `true` en dépit du fait que `foo` et `baz` sont de types différents. En coulisses, l'opérateur d'égalité `==` essaye de forcer les opérandes à être de même type pour pouvoir effectuer la comparaison. C'est la différence significative qui existe avec l'opérateur d'égalité `===`.

L'opérateur d'égalité triple égal `===` évalue l'égalité en se basant à la fois sur la valeur des variables _et_ sur leur type. Si l'on reprend l'exemple précédent, cela revient à dire que `foo === bar` sera toujours évalué à `true`, mais que `foo === baz` sera à présent évalué `false`. En effet, bien que les valeurs semblent être égales, le type des variables diffère, l'égalité n'est pas retenue par l'opérateur triple égal. Quant à lui, `baz === qux` sera toujours `false`.

{% exercise %}
Utilisez les opérateurs d'égalité `==` et `===` pour comparer les valeurs de `str1` et de `str2`.

{% initial %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// comparez en utilisant ==
let stringResult1 =
let boolResult1 =
// comparez en utilisant ===
let stringResult1 =
let boolResult2 =
{% solution %}
let str1 = "hello";
let str2 = "HELLO";
let bool1 = true;
let bool2 = 1;
// comparez en utilisant ==
let stringResult1 = str1 == str2 // false
let boolResult1 = bool1 == bool2 // true

// comparez en utilisant ===
let stringResult2 = str1 === str2 // false
let boolResult2 = bool1 === bool2 // false

{% validation %}
assert(stringResult1 === false && stringResult2 === false && boolResult1 ==true && boolResult2 === false );

{% context %}
{% endexercise %}
