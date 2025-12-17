---
chapter: 12
pageNumber: 68
description: >-
  En programmation, les erreurs surviennent pour diverses raisons, certaines
  sont dues à des erreurs de code, d'autres à des entrées erronées, et d'autres
  encore sont imprévisibles. Le try catch permet
layout: editorial
---

# try...-catch

## Chapitre 12

## Gestion des erreurs

En programmation, les erreurs surviennent pour diverses raisons, certaines sont dues à des erreurs de code, d'autres à des entrées erronées, et d'autres encore sont imprévisibles. Lorsqu'une erreur se produit, le code s'arrête et génère un message d'erreur généralement affiché dans la console.

## try... catch

Au lieu d'arrêter l'exécution du code, nous pouvons utiliser la construction `try...catch` qui permet d'attraper les erreurs sans interrompre le script. La construction `try...catch` a deux blocs principaux; `try` et ensuite `catch`.

```javascript
try {
  // code...
} catch (err) {
  // gestion des erreurs
}
```

Dans un premier temps, le code du bloc `try` est exécuté. Si aucune erreur n'est rencontrée, il saute le bloc `catch`. Si une erreur survient, l'exécution du bloc `try` est arrêtée, déplaçant la séquence de contrôle vers le bloc `catch`. La cause de l'erreur est capturée dans la variable `err`.

```javascript
try {
  // code...
  alert("Welcome to Learn JavaScript");
  asdk; // erreur la variable asdk n'est pas définie
} catch (err) {
  console.log("Une erreur s'est produite");
}
```

{% hint style="info" %}
`try...catch` fonctionne pour les erreurs d'exécution, ce qui signifie que le code doit être exécutable et synchrone.
{% endhint %}

Pour lancer une erreur personnalisée, une instruction `throw` peut être utilisée. L'objet error, qui est généré par les erreurs, a deux propriétés principales.

**name** : nom de l'erreur **message** : détails sur l'erreur

{% hint style="info" %}
Si nous n'avons pas besoin d'un message d'erreur, la capture peut être omise.
{% endhint %}
