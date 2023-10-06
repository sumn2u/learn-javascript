---
chapter: 16
pageNumber: 84
description: Les cookies sont des petits fichiers stockés sur un ordinateur et accessibles par le navigateur.
---

# Cookies 🍪

Les cookies sont des petits fichiers stockés sur un ordinateur et accessibles par le navigateur.

La communication entre un navigateur Web et le serveur est sans état, ce qui signifie qu'elle traite chaque requête indépendamment. Il existe des cas où nous devons stocker les informations de l'utilisateur et mettre ces informations à la disposition du navigateur. Avec les cookies, les informations peuvent être récupérées de l'ordinateur chaque fois que cela est nécessaire.

Les cookies sont sauvegardés sous la forme de paires clé-valeur

```javascript
book = Learn Javascript
```

La propriété `document.cookie` permet de créer, lire et supprimer des cookies. Créer un cookie est assez simple, vous devez fournir son nom suivi de sa valeur.

```javascript
document.cookie = "book=Learn Javacript";
```

Par défaut, un cookie est supprimé quand le navigateur est fermé. Pour le faire persister, nous devons spécifier une date d'expiration (en temps UTC).

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

Il est possible d'ajouter un paramètre pour préciser à quel chemin appartient le cookie. Par défaut, celui-ci appartient à la page courante.

```javascript
document.cookie =
  "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

Voici l'example simple d'un cookie.

```javascript
let cookies = document.cookie;
// un moyen simple de récupérer tous les cookies.

document.cookie =
  "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// enregistrer un cookie.
```
