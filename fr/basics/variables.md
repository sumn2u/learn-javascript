---
chapter: 2
pageNumber: 11
description: Les variables sont utilisées stockées et mémoriser des données. Il est possible de stocker différents types de données dans les variables comme des nombres, des chaînes de caractères, des booléens, des objets, des tableaux, des fonctions et autres.
---

# Variables

Afin de bien comprendre la programmation, la première étape consiste à se rappeler l'algèbre. Si vous avez conservé quelques souvenirs de l'école, l'algèbre consiste à écrire les termes de la manière suivante.

```
3 + 5 = 8
```

Vous pouvez réaliser des calculs avec des chiffres avant d'introduire une inconnue, par exemple, x:

```
3 + x = 8
```

En déplaçant les termes qui entourent l'inconnue, vous pouvez déterminer la valeur de x:

```
x = 8 - 3
-> x = 5
```

Quand vous introduisez plus d'une inconnue, les termes deviennent plus flexibles - vous êtes en train d'utiliser des variables:

```
x + y = 8
```

En effet, vous pouvez faire varier les valeurs de x et de y tout en conservant la même égalité:

```
x = 4
y = 4
```

ou encore

```
x = 3
y = 5
```

L'approche est similaire pour les langages de programmation. En programmation, les variables sont des sortes de petites boîtes dont le contenu change. Les variables peuvent contenir toute sorte de valeur ou le résultat d'un calcul. Chaque variable possède un `nom` et une `valeur` séparés par un signe égal (=). Cependant, il est important de garder à l'esprit que le nom donné aux variables peut être conditionné par le langage dans lequel vous programmez. En effet, certains noms sont réservés et ne peuvent être utilisés pour nommer une variable.

Regardons comment ceci fonctionne en JavaScript. Le code suivant définit deux variables, calcule la somme des deux et assigne ce résultat au sein d'une troisième variable.

```javascript
let x = 5;
let y = 6;
let result = x + y;
```

Il existe quelques lignes directrices impératives à respecter quand vous nommez des variables. Ce sont les suivantes:

- Le nom d'une variable ne peut commencer que par une lettre, un underscore (\_) ou un signe dollar ($).
- Après le premier caractère, il est possible d'utiliser des lettres, des chiffres, des underscores ou des signes dollar.
- JavaScript fait la distinction entre les caractères en majuscules des caractères en minuscules. On dit que JavaScript est sensible à la casse. De ce fait, maVariable, MaVariable et MAVARIABLE sont trois variables distinctes.
- Pour rendre votre code facile à lire et à comprendre, il est recommandé d'utiliser des noms de variables qui possèdent un sens descriptif et qui reflète leur utilisation.

{% exercise %}
Définir une variable `x` égale à 20.

{% initial %}
let x =

{% solution %}
let x = 20;

{% validation %}
assert(x == 20);

{% context %}
{% endexercise %}
**ES6 Version**

[ECMAScript 2015 ou ES2015](https://262.ecma-international.org/6.0/) aussi appelé ES6 est une mise à jour significative du langage JavaScript ayant eu lieu en 2009. En ES6, il existe trois manière de déclarer des variables.&#x20;

```javascript
var x = 5;
const y = "Test";
let z = true;
```

Les types de déclarations influent sur la portée de la variable. À la différence du mot clé `var`, qui définit une variable globale à laquelle il est possible d'accéder depuis n'importe où, `let` limite l'utilisation de la variable au bloc dans laquelle elle est déclarée. Par exemple:

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // on intervient sur la même variable
    console.log(x); //2
  }
  console.log(x); //2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

Les variables `const` sont dites immutables, ce qui signifie qu'on ne peut plus changer leur valeur après leur déclaration. On les appelle aussi les constantes.

```javascript
const x = "hi!";
x = "bye"; // ceci provoquera une erreur puisqu'on tente d'affecter une nouvelle valeur à la variable
```
