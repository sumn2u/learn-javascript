---
chapter: 16
pageNumber: 86
description: L'objet Location (emplacement) est un objet intégré qui représente l'URL actuelle de la page web affichée dans le navigateur. Il fournit l'emplacement de la page Web actuelle et permet d'effectuer diverses opérations liées aux URL.
---

# Location

L'objet `location` est utilisé pour récupérer l'emplacement actuel (URL) du document et fournit différentes méthodes pour manipuler l'emplacement du document. On peut accéder à l'emplacement actuel par:

```Javascript
window.location
//ou
document.location
//ou
location
```

> _**Note**_ : `window.location` et `document.location` font référence au même objet `location`.

Prenons l'exemple de l'URL suivante et explorons les différentes propriétés de `location`:

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing&page=2#title)

```javascript
location.href; //affiche l'URL du document actuel
location.protocol; //affiche le protocole comme http : ou https :
location.host; //affiche le nom de l'hôte avec le port comme localhost ou localhost:3000
location.hostname; //affiche le nom d'hôte comme localhost ou www.example.com
location.port; //affiche le numéro de port comme 3000
location.pathname; //affiche le nom du chemin d'accès comme /js/index.html
location.search; //affiche la chaîne de requête comme ?type=listing&page=2
location.hash; //affiche l'identifiant du fragment comme #title
```
