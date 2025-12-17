---
chapter: 19
pageNumber: 101
description: L'empreinte globale fait reférence à l'impact ou l'influence qu'un script ou une application a sur la portée globale de l'environnement d'exécution. Quand un script ou une application crée des variables ou des fonctions de portée globale, cela affecte l'empreinte globale.
---
# L'Empreinte Globale

Quant vous développeé un module, qui pourrait s'exécuter sur une page web, qui exécute également d'autres modules, alors vous devez faire attention au chevauchement du nom des variables.

Imaginez qu'on soit en train de développer un module `counter`:

```javascript
let myCounter = {
  number: 0,
  plusPlus: function () {
    this.number = this.number + 1;
  },
  isGreaterThanTen: function () {
    return this.number > 10;
  },
};
```

> _**Note:**_ Cette technique est utilisée la plupart du temps avec les closures afin de rendre l'état interne du module inaccessible depuis l'extérieur.

Le module maintenant consiste en une seule variable `myCounter`. Si un autre module sur la page web utilise des noms de variables tels que `number` ou `isGreaterThanTen`, chaque module sera protégé car il ne risque pas d'écraser les variables d'un autre.
