---
layout: editorial
chapter: 17
pageNumber: 87
description: En programmation, les événements sont les actions ou les occurrences qui se produisent dans un système et pour lesquels le système vous indique que vous pouvez y répondre. Par exemple, quand vous cliquez sur un bouton de réinitialisation, cela vide le champ lié.
---

# Chapitre 17

# Événements

En programmation, les _événements_ sont les actions ou les occurrences qui se produisent dans un système et pour lesquels le système vous indique que vous pouvez y répondre. Par exemple, quand vous cliquez sur un bouton de réinitialisation, cela vide le champ lié.

Les interactions issues du clavier, comme le fait d'appuyer sur une touche ont besoin d'être lues constamment pour connaître l'état de la touche avant que celle-ci soit relâchée. Réaliser d'autres calculs qui sollicitent le facteur temps peuvent vous faire manquer l'appui sur une touche. Ceci était utilisé par le passé pour gérer les entrées sur certaines machines primitives. Une étape supplémentaire consiste à utiliser une file d'attente (on parle alors de queue). Il s'agit d'un programme qui vérifie périodiquement les nouveaux événements et permet d'y réagir. Cette approche est appelée le _polling_.

Le principal inconvénient de cette approche est qu'on doit surveiller la file d'attente en permanence ce qui peut provoquer des désagréments dès lors qu'un événement est déclenché. Le meilleur mécanisme à mettre en oeuvre consiste à notifier le code dès lors qu'un événement se produit. C'est ce que font les navigateurs modernes en nous autorisant l'usage de fonctions spécifiques appelées _handlers_ (qu'on peut traduire par "gestionnaire") charger de se déclencher lors de la survenue d'un événement particulier.

```javascript
<p>Cliquez moi pour activer le handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("cliqué");
  });
</script>
```

Ici, le `addEventListener` est appelé sur l'objet `window` (objet intégré fourni par le navigateur) pour enregistrer un handler sur l'ensemble de `window`. La méthode `addEventListener` fonctionne la manière suivante: lorsque l'événement passé en premier argument (ici `click`) est détecté, le second argument est déclenché.

{% hint style="info" %}
Les écouteurs d'événements sont appelés uniquement quand l'événement survient dans le contexte de l'objet sur lequel ils sont enregistrés.
{% endhint %}

Some of the common HTML events are mentioned here.

| Événement     | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| `onchange`    | Quand l'utilisateur change ou modifie la valeur dans une entrée de formulaire |
| `onclick`     | Quand l'utilisateur clique sur un élément                                     |
| `onmouseover` | Quand le curseur de la souris entre sur un élément                            |
| `onmouseout`  | Quand le curseur de la souris quitte un élément                               |
| `onkeydown`   | Quand l'utilisateur presse une touche et relâche une touche                   |
| `onload`      | Quand le navigateur a terminé son chargement                                  |

Il est courant pour les handlers enregistrés sur des noeuds avec enfants de recevoir également recevoir les événements de leurs enfants. Par exemple, si un bouton à l'intérieur d'un paragraphe est cliqué, les handlers enregistré sur le paragraphe recevront également l'événement clic. Dans le cas ou un gestionnaire est présent sur les deux éléments, celui le plus bas dans la hiérarchie sera déclenché le premier. On dit que l'événement se _propage_ à l'extérieur, du noeud initial vers son parent et à la racine du document.

Le gestionnaire d'événement peut appeler la méthode `stopPropagation` de l'objet `event` pour empêcher les gestionnaires supérieurs de recevoir l'événement. C'est utile dans un grand nombre de cas, par exemple quand vous avez un bouton à l'intérieur d'un élément cliquable et que vous ne souhaitez pas déclencher l'événement extérieur lors du clic sur le bouton interne.

```javascript
<p>Un paragraphe avec un <button>bouton</button>.</p>
<script>
  let para = document.querySelector("p"),
      button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Handler du paragraphe.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Handler du bouton.");
    event.stopPropagation();
  });
</script>
```

Ici, les handlers _`mousedown`_ sont enregistrés aussi bien par le paragraphe que le bouton. Lors d'un clic sur le bouton, le handler du bouton appelle la méthode `stopPropagation` ce qui va empêcher le handler du paragraphe de se lancer à son tour.

Les événements peuvent avoir un comportement par défaut. Par exemple, les liens cliquables permettent d'atteindre une cible, vous êtes dirigé vers le bas d'une page en cliquant sur une flèche vers le bas, et ainsi de suite. Ces comportements par défaut peuvent être évités en appelant la méthode `preventDefault` sur l'objet `event`.

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Non.");
    event.preventDefault();
  });
</script>
```

Ici, le comportement par défaut du lien est annulé, dans ce cas, se rendre vers la cible du lien en question lors du clic. Seul le message de la console est déclenché.
