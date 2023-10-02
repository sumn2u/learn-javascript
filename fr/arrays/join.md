---
chapter: 6
pageNumber: 43
description: La méthode join transforme le tableau en une chaîne et le rassemble sans modifier le tableau d'origine.
---

# Join

La méthode `join`, transforme un tableau en chaîne de caractère et le rassemble. La méthode ne modifie pas le tableau original. Voici la syntaxe de la méthode `join`:

```c
array.join([separator]);
```

L'argument optionnel `separator` spécifie le caractère utilisé pour séparer les éléments dans la chaîne générée. S'il n'est pas précisé, les éléments seront séparés par une virgule (`,`).

Par exemple:

```javascript
let array = ["one", "two", "three", "four"];

console.log(array.join(" "));

// Résultat: one two three four
```

{% hint style="warning" %}
N'importe quel séparateur peut-être spécifié, mais la virgule est le séparateur par défaut `(,)`.
{% endhint %}

Dans l'exemple ci-dessus, un espace est utilisé comme séparateur. Vous pouvez aussi utiliser `join` pour convertir un objet de type tableau (tel qu'un objet d'arguments ou un objet NodeList) en chaîne en le convertissant d'abord en tableau à l'aide de la méthode `Array.prototype.slice()`:

```javascript
function printArguments() {
  console.log(Array.prototype.slice.call(arguments).join(", "));
}

printArguments("a", "b", "c"); // Result: "a, b, c"
```
