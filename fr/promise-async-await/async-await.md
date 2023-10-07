---
chapter: 18
pageNumber: 91
description: La fonctionnalité Async/Await a été introduite avec ECMAScript 2017 (ES8) qui fourni une syntaxe plus concise et lisible de la programmation asynchrone en JavaScript. Il est construit au dessus des Promesses en JavaScript et est utilisée pour gérer les opérations asynchrones de façon synchrone.
---
# Async/Await

Avec les promesses, nous pouvons utiliser le mot clé `async` pour déclarer les fonctions asynchrones qui vont renvoyer une promesse. Tandis que  le mot clé `await` fait attendre JavaScript jusqu'à ce que la promesse s'achève et renvoie une réponse. Ces deux mots clés rendent l'écriture des promesses plus facile. Voici un exemple:

```javascript
// Une fonction asynchrone f
async function f() {
  return 1;
}
// La résolution d'une promesse
f().then(alert); // 1
```

L'exemple ci-dessus peut être écrit comme suit :

```javascript
function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async` fait en sorte que la fonction renvoie une promesse, cela permet d'encapsuler les valeurs qui ne sont pas des promesses. Avec `await`, nous pouvons indiquer à JavaScript d'attendre jusqu'à ce que la promesse soit résulue et renvoie sa valeur.&#x20;

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Welcome to Learn JavaScript!"), 1000)
  });
  
  let result = await promise; // Attend la résolution de la promesse.
  alert(result); // "Welcome to Learn JavaScript!"
}

f();
```

{% hint style="warning" %}
Le mot clé `await` net peut être utilisé que dans une fonction déclarée avec `async`.
{% endhint %}
