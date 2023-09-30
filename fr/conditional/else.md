---
chapter: 5
pageNumber: 31
description: Le mot clé else (sinon) est utilisé en combinaison avec le mot clé if. Il permet d'apporter un bloc alternatif dans le cas où la condition du if est évaluée à false (faux).
---

# Else

De la même manière qu'il existe un `if`, il existe une condition appelée sinon `else`. Celle-ci s'applique quand la condition dans le if est évaluée à false. Cette combinaison si/sinon donne tout son sens aux conditions et est très puissante. En effet, elle permet de définir la manière de traiter n'importe quelle valeur, dans un cas ou dans l'autre.

```javascript
let umbrellaMandatory;

if (country === "Angleterre") {
  umbrellaMandatory = true;
} else {
  umbrellaMandatory = false;
}
```

L'instruction `else`peut également être assortie d'un autre `if`, on parle dans ce cas d'un sinon si. Chaque condition va être testée à la suite l'une de l'autre. Dès lors que l'une d'entre elles sera évaluée à true, l'exécution du code se pousuivra dans le bloc de code correspondant et il en sera fini pour ce bloc. Dans ce cas, les conditions placées en dessous ne seront pas évaluées. Réécrivons l'exemple précédent en suivant cette logique du si/sinon si/sinon.

```javascript
if (country === "Angleterre") {
  ...
} else if (country === "France") {
  ...
} else if (country === "Allemagne") {
  ...
}
```

{% exercise %}
Avec les valeurs suivantes, écrivez une structure conditionnnelle qui vérifie si `num1` est plus grand que `num2`. Si c'est le cas, affectez "num1 est plus grand que num2" dans la variable `result`. Dans le cas contraire, la variable `result` devra être égale à "num1 est plus petit ou égal à num2"

{% initial %}
let num1 = 10;
let num2 = 5;
let result;

// vérifie si num1 est plus grand que num2
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let result;

// vérifie si num1 est plus grand que num2
if (num1 > num2) {
result = "num1 est plus grand que num2";
} else {
result = "num1 est plus petit ou égal à num2";
}

{% validation %}
assert(result == "num1 est plus grand que num2" );

{% context %}
{% endexercise %}
