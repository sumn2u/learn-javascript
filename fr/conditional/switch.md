---
chapter: 5
pageNumber: 32
description: >-
  Le switch permet de mettre en place un test conditionnel et d'alléger un peu
  la syntaxe if/else if/else. Le switch utilise la comparaison stricte et
  exécute le code correspondant si la condition est r
---

# Switch

Un bloc de condition de type `switch` permet de réaliser des opérations basées sur différentes conditions. Il utilise la comparaison stricte ( `===` ) pour déterminer si une condition est remplie ou non. Comme dans un bloc if/else if/else, le code placé après la condition évaluée à true est exécutée. La syntaxe du `switch` est écrite ci-dessous. Notez qu'à la différence du if/else, le code qui suit la condition n'est pas entouré par une paire de crochets.

```javascript
switch (expression) {
  case x:
    // bloc d'instructions
    break;
  case y:
    // bloc d'instructions
    break;
  default:
  // bloc d'instructions
}
```

L'expression est évaluée une première fois avant d'être comparée à chaque case (cas). Si une condition est true, le code associé est exécuté. Dans le cas contraire, si chaque case renvoie false, c'est le bloc `default` qui est exécuté. Par ailleurs, le mot clé `break` permet d'indiquer à l'interpréteur que le bloc de code à exécuter est terminé et qu'il faut sortir du `switch`. Si le mot clé `break` est absent, l'exécution du `switch` se poursuivra à la fin du bloc d'instructions. Ce comportement est inutile est préjudiciable en termes de mémoire.

Voici l'exemple d'un code qui reçoit un jour de la semaine et qui utilise un switch pour renvoyer son nom.

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Dimanche";
    break;
  case 1:
    day = "Lundi";
    break;
  case 2:
    day = "Mardi";
    break;
  case 3:
    day = "Mercredi";
    break;
  case 4:
    day = "Jeudi";
    break;
  case 5:
    day = "Vendredi";
    break;
  case 6:
    day = "Dimanche";
}
```

Dans le cas où plusieurs cas peuvent remplir la conditions, seul le **premier** cas true rencontré est exécuté. Dans le cas où aucun cas n'est évalué à true alors le bloc default est exécuté. En l'absence de bloc default et si aucun cas n'est évalué à true, le programme sort du switch sans aucun effet et poursuit son exécution.
