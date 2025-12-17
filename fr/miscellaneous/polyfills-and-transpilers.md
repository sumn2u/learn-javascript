---
chapter: 19
pageNumber: 96
description: Les Polyfills et les Transpileurs sont deux outils importants qui sont utilisés dans le développement web pour faire en sorte que le code JavaScript moderne peut s'exécuter sur les vieux navigateurs et de prendre avantages sur les dernières fonctionnalitées de JavaScript en maintenant la compatibilité avec les environnement désuets.
---
# Les Polyfills et les Transpileurs

Le JavaScript évolue à chaque instant. Très souvent, les propositions de nouvelles fonctionnalités sont soumises, analysées et ajoutées à [https://tc39.github.io/ecma262/ ](https://tc39.github.io/ecma262/) et ensuite incorporées dans la spécification. Il se peut qu'il y ait des différences sur la façon dont la fonctionnalité est implémentée dans les moteurs JavaScript en fonction du navigateur. Certains pourraient implémenter des version d'essai, tandis que d'autres attendent jusqu'à ce que la spécification entière sorte. Des soucis liés compatibilité avec les anciennes versions peuvent survenir lorsque des nouvelles fonctionnalités sont introduites.&#x20;

Pour prendre en charge le code moderne dans les anciens navigateurs, nous utilisons deux outils : `transpileurs` et `polyfills`.

**Les transpileurs**

Un transpileur est un programme qui traduit un code *moderne* et le réécrit en utilisant les anciennes syntaxes pour faire en sorte que les les anciennes versions des moteurs d'exécution du JavaScript puisse le comprendre. Par exemple, l'opérateur de fusion nulle `??` a été introduit en 2020 et les navigateurs obsolètes ne pouvaient comprendre cette syntaxe.

Maintenant, c'est le job du transpileur de faire en sorte que l'opérateur de fusion nulle soit compréhensible par les navigateurs obsolètes.&#x20;

```javascript
// Avant l'exécution du transpileur
height = height ?? 200;

// Après la transpilation
height = (height !== undefined && height !== null) ? height: 200;

```

{% hint style="info" %}
&#x20;[Babel](https://babeljs.io/) est l'un des tranpileurs les plus en avant. Dans le process de développement, nous pouvons utiliser les outils de compilation tels que [webpack](https://webpack.js.org/) ou [parcel](https://parceljs.org/) pour transpiler le code.
{% endhint %}

**Les polyfills**

Il arrive qu'une nouvelle fonctionnalité ne soit pas disponnible dans les moteurs obsolètes. Dans ce cas, le code qui utilise la nouvelle fonctionnalité ne fonctionnera pas. Pour éviter cela, nous ajoutons les fonctionnalités manquantes (qu'on appelle `polyfills`). Par exemple, la méthode `filter()` qui a été introduite avec ES5 et qui n'est pas supportée par certains navigateurs. Cette méthode accepte une fonction et retourne un tableau qui contient uniquement les valeurs du tableau original pour lesquelles la fonction a retourné `true`.

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter((e) => e % 2 === 0); // se débarasse des valeurs paires.
console.log(filtered);

// [2, 4, 6]
```

Un polyfill pour la méthode `filter` est:


```javascript
Array.prototype.filter = function (callback) {
  const result = []; // le tableau à retourner
  for (let i = 0; i < this.length; i++) {
    // Appeller la fonction callback avec l'élement courant, l'indexe et le contexte.
    // Si le test est bon, ajouter l'élement dans le nouveau tableau.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result; // Retourner le nouveau tableau (filtré)
}
```

{% hint style="info" %}
Le site [caniuse](https://caniuse.com/) montre les versions mises à jour et les syntaxes supportées par différents moteurs JavaScript.
{% endhint %}
