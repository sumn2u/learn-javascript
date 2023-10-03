---
chapter: 4
pageNumber: 25
---

# Création de chaînes

Les chaînes de caractères peuvent être définies par du texte entouré par une paire d'apostrophes simples ou doubles:

```javascript
// On peut tout aussi bien utiliser les apostrophes simples...
let str = "Our lovely string";

// ...Que les apostrophes doubles
let otherStr = "Another nice string";
```

En JavaScript, les chaînes de caractères peuvent contenir des caractères codés en UTF-8

```
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

Vous pouvez également utiliser le constructeur `String` pour créer une instance de l'objet chaîne de caractère:

```javascript
const stringObject = new String("Je suis une chaîne");
```

Cependant, il n'est généralament pas recommandé d'utiliser le constructeur `String` pour créer des chaînes de caractères. En effet, cela peut être source de confusion entre le type primitif string et les objets chaînes de caractères. Il est davantage conseillé d'utiliser les It is usually better to use chaînes littérales pour créer des chaînes de caractères.

Vous avez également la possibilité d'utiliser d
You can also use littéraux de gabarits pour créer des chaînes. Les littéraux de gabarits sont simplement des chaînes qui sont entourées par des backticks ` (``) ` et qui contiennent des espaces réservés pour recevoir les valeurs. Les espaces réservés sont déclarés avec la syntaxe suivante `` `${}` ``. Entre les crochets, on indiquera le nom de la variable à substituer. On appelle ce mécanisme l'interpolation de chaîne.

```javascript
const name = "John";
const message = `Hello, ${name}!`;
```

Les littéraux de gabarit peuvent également contenir plusieurs lignes et inclure des expressions au sein des espaces réservés.

{% hint style="warning" %}
Les chaînes de caractères ne peuvent être soustraites, multipliées ou divisées.
{% endhint %}

{% exercise %}
Utilisez les littéraux de gabarit pour créer une chaîne qui inclus les valeurs de `name` et `age`. La chaîne finale doit ressembler à cela: "Mon nom est John et j'ai 25 ans."

{% initial %}
let name = "John";
let age = 25;

// Mon nom est John et j'ai 25 ans.
let result =  
{% solution %}
let name = "John";
let age = 25;

// Mon nom est John et j'ai 25 ans.
let result = `Mon nom est ${name} et j'ai ${age} ans.`

{% validation %}
assert(result == "Mon nom est John et j'ai 25 ans.");

{% context %}
{% endexercise %}
