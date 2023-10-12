---
chapter: 18
pageNumber: 89
description: Une Promesse (Promise en anglais) est un objet qui représente l'achèvement (ou l'échec) d'une tâche asychrone et sa valeur de retour. Les Promesses nous donnent une meilleur struture de gestion des opérations asynchrones telles que les appels réseaux, la lecture des fichiers ou l'interation avec les bases de données.
---

# Chapitre 18
# Les Promesses, async/await

Alors, mettez-vous dans la peau d'un écrivain et vous êtes actuellement en train de planifier la sortie de votre prochaine oeuvre. Les lecteurs qui s'intéressent à ce livre l'ajoutent à leur liste de souhait et sont notifiés lorsque le livre paraît ou même quand la date de sortie est repoussée. Le jour de la sortie, tout le monde peut l'acheter et tout le monde est content. Ceci est une analogie avec le fonctionnement des promesses (autrement appelées **Promises**) en JavaScript.

1. Le "_producteur_" est un bloc d'instructions qui prend du temps à s'exécuter et accomplit quelque chose. Ici, c'est l'écrivain.
2. Le "_consommateur_" est quelque chose qui consomme ce que produit le producteur une fois que c'est prêt. Dans notre parabole, il s'agit du "lecteur".
3. Ce qui lie le "_producteur_" et le "_consommateur_" peut être appellé une _promesse_ parce qu'elle permet de fournir le résultat du "_producteur_" au "_consommateur_".

# Promise

L'analogie qui nous avons faite est aussi vraie pour les objets de type `promise` en JavaScript. La syntaxe de création à partir du constructeur est comme suit:

```javascript
let promise = new Promise(function(resolve, reject) {
  // Le producteur ici
});
```

Ici, une fonction est passée au constructeur `new Promise`, aussi connu sous le nom d'_exécutant_ et s'exécute automatiquement dès l'appel du constructeur. Il contient le code de production qui retourne le résultat. `resolve` et `reject` sont les arguments fournis par JavaScript lui-même et sont appelés dans les conditions suivantes:

* `resolve(value):` Une fonction de callback qui renvoie `value` comme résultat.
* `reject(error)`: Une fonction de callback qui renvoie `error` en cas d'erreur.

![Promesses avec des fonctions de callback resolve et reject](../../.gitbook/assets/async_await.png)

Les propriétés internes de la promesse retournée par l'appel du constructeur `new Promise` sont :

* `state` - initialement `pending` (en cours), ensuite change à soit `fulfill` (accomplie) lorsque `resolve` est appelée, soit `rejected` (rejetée) lorsque c'est `reject` qui est appelée.
* `result` - initialement `undefined`, ensuite change à `value` en cas d'appel à `resolve` ou `error` lorsque c'est `reject` qui est appelée.

{% hint style="warning" %}
Nous ne pouvons pas accéder aux propriétés : `state` et `result`. Les méthodes spécifiques au type Promise sont nécessaires pour gérer les promesses.
{% endhint %}

Exemple d'une promesse :

```javascript
let promiseOne = new Promise(function(resolve, reject) {
  // La fonction est exécutée automatiquement après l'appel du constructeur

  // Là nous lui disons : attends une seconde et renvoie un signal "done" comme résultat
  setTimeout(() => resolve("done"), 1000);
})

let promiseTwo = new Promise(function(resolve, reject) {
  // La fonction est exécutée automatiquement lorsque la promesse est initiée (appel du constructeur)

  // Là nous lui disons: attends une seconde et renvoie une erreur: "Whoops!"
  setTimeout(() => reject(new Error("Whoops!")), 1000);
})
```

Ici, la promesse `promiseOne` est un exemple de promesse "_fulfilled_", (i.e _accomplie_) parce qu'elle est résolue (appel de _resolve()_) tandis que la promesse `promiseTwo` est une promesse "_rejected_" (i.e _rejetée_) parce que c'est la fonction _reject_ qui fut appelée par l'exécuteur. 

Une promesse qui n'est ni _rejected_, ni _resolved_ est appelée _settled_ en opposition à l'état _pending_ initial. On peut consommer la promesse en utilisant les méthodes `.then` et `.catch`. Nous pouvons également ajouter `.finally` pour effectuer des actions après l'appel de l'une des méthodes précédentes.

```javascript
let promiseOne = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve exécute la première fonction qu'on fourni à .then
promiseOne.then(
  result => alert(result), // affiche "done!" après 1 seconde
  error => alert(error) // Ne s'exécute pas
);

let promiseTwo = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject exécute la deuxième fonction qu'on fournit à .then
promiseTwo.then(
  result => console.log(result), // Ne s'exécute pas
  error => console.log(error) // Affiche l'erreur "Error: Whoops!" après une seconde
);

let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) est pareil que promise.then(null, f)
promiseThree.catch(alert); // montre l'erreur "Error: Whoops!" après une seconde
```

{% hint style="warning" %}
Dans la méthode `Promise.then()`, toutes les deux fonctions de callback sont optionels.
{% endhint %}
