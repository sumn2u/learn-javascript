---
layout: editorial
chapter: 14
pageNumber: 73
description: Une expression rationnelle, aussi appelée expression régulière et abrégé "regex", est un outil puissant pour la correspondance de modèles et la recherche à l'intérieur des chaînes. Les regex apportent une manière rapide et flexible de chercher, faire correspondre et manipuler le texte en se basant sur des modèles spécifiques.
---

# Chapter 14

# Expression régulières

Une expression régulière est un objet qui peut être indifféremment construit grâce au constructeur `RegEx` ou écrit comme une valeur littérale délimitée par des slash avant `(/)`. Les syntaxes pour créer une expression rationnelle sont expliquées ci-dessous.

```javascript
// en utilisant le constructeur de l'objet `RegExp`
new RegExp(pattern[, flags]);

// en utilisant les littéraux
/pattern/modifiers
```

Les drapeaux (ou modificateurs) sont optionnels lorsque l'on crée une regex en utilisant les littéraux. Un exemple de création d'expression régulière à l'aide de la méthode mentionnée ci-dessus est le suivant.

```javascript
let re1 = new RegExp("xyz");
let re2 = /xyz/;
```

Ces deux manières créeront un objet regex et auront les mêmes méthodes et propriétés. Il existe des cas où nous pourrions avoir besoin de valeurs dynamiques pour créer une expression régulière, dans ce cas, les littéraux ne fonctionneront pas et les regex devront être créés via la méthode du constructeur.

{% hint style="info" %}
Dans les cas où nous voulons qu'un slash fasse partie d'une expression régulière, nous devons échapper le slash `(/)` par un antislash `(\)`.
{% endhint %}

Les différents modificateurs utilisés pour effectuer des recherches insensibles à la casse sont:

- `g` - recherche globale (trouve toutes les occurrences au lieu de s'arrêter à la première occurrence)
- `i` - recherche insensible à la casse
- `m` - correspondance multiligne

Les _crochets_ sont utilisés à l'intérieur d'une expression régulière pour trouver une plage de caractères. Certaines d'entre elles sont mentionnées ci-dessous.

- `[abc]` - trouve n'importe quel caractère entre les crochets
- `[^abc]` - trouve n'importe quel caractère qui n'est pas entre les crochets
- `[0-9]` - trouve n'importe quel chiffre entre les crochets
- `[^0-9]` - trouve n'importe quel caractère qui n'est pas entre les crochets (non numérique)
- `(x|y)`- trouve l'une des alternatives séparées par |

Les _métacaractères_ sont des caractères spéciaux qui possèdent une signification particulière au sein de l'expression. Ces caractères sont décrits en détail ci-après :

| Métacaractère | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `.`           | Matche tous les caractères sauf une nouvelle ligne ou un terminateur         |
| `\w`          | Matche un caractère alphanumérique `[a-zA-Z0–9_]`                            |
| `\W`          | Matche tous les caractères non alphanumériques (identique à `[^a-zA-Z0–9_]`) |
| `\d`          | Matche tous les caractères numériques ( same as `[0-9]`)                     |
| `\D`          | Matche tous les caractères non numériques                                    |
| `\s`          | Matche tous les caractères d'espacement (espaces, tabulations, etc)          |
| `\S`          | Matche tous les caractères qui ne sont pas des caractères d'espacement       |
| `\b`          | Matche le début / la fin d'un mot                                            |
| `\B`          | Matche tous les caractères hormis le début / la fin d'un mot                 |
| `\0`          | Matche un caractère `NULL`                                                   |
| `\n`          | Matche un caractère de nouvelle ligne                                        |
| `\f`          | Matche un caractère de saut de page                                          |
| `\r`          | Matche un caractère de type retour chariot                                   |
| `\t`          | Matche un caractère tabulaire                                                |
| `\v`          | Matche un caractère tabulaire vertical                                       |
| `\xxx`        | Matche un caractère spécifié par un nombre octal `xxx`                       |
| `\xdd`        | Matche un caractère spécifié par un nombre hexadécimal `dd`                  |
| `\udddd`      | Matche un caractère Unicode spécifié par un nombre hexadécimal `dddd`        |

Les propriétés et les méthodes supportées par les regex sont listées ci-dessous:

| Nom           | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| `constructor` | Renvoie la fonction qui a créé le prototype de l'objet `RegExp`                              |
| `global`      | Vérifie si le modificateur `g` est défini                                                    |
| `ignoreCase`  | Vérifie si le modificateur `i` est défini                                                    |
| `lastIndex`   | Spécifie l'index auquel commencer le prochain match                                          |
| `multiline`   | Vérifie si le modificateur `m` est défini                                                    |
| `source`      | Retourne le texte d'une chaîne                                                               |
| `exec()`      | Teste la correspondance et renvoie la première occurrence. S'il n'y en a pas, renvoie "null" |
| `test()`      | Teste la correspondance et renvoie `true` ou `false`                                         |
| `toString()`  | Renvoie la valeur de chaîne de l'expression régulière                                        |

{% hint style="warning" %}
La méthode `compile()` recompile une expression régulière et est dépréciée. Elle ne doit plus être utilisée.
{% endhint %}

Quelques exemples d'expressions régulières sont présentés ici.

```javascript
let text = "Les meilleures choses dans la vie sont gratuites";
let result = /e/.exec(text); // cherche le matche d'un e dans la chaîne "text"
// résultat: e

let helloWorldText = "Hello world!";
// Recherchons "Hello"
let pattern1 = /Hello/g;
let result1 = pattern1.test(helloWorldText);
// Résultat: true

let pattern1String = pattern1.toString();
// pattern1String : '/Hello/g'
```
