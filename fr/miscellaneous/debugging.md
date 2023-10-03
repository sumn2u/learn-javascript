---
chapter: 19
pageNumber: 102
description: Dans la programmation, des erreurs peuvent arriver lorsque vous écrivez du code. Ces erreurs peuvent être d'origine syntaxique ou logique. Le processus qui vous mène à retrouver ces erreurs peut être très pénible et prendre du temps; ceci est appelé le débogage.
---
# Le débogage

Dans la programmation, des erreurs peuvent arriver lorsque vous écrivez du code. Ces erreurs peuvent être d'origine syntaxique ou logique. Le processus qui vous mène à retrouver ces erreurs peut être très pénible et prendre du temps; ceci est appelé le débogage.

Heureusement, la plupart des navigateurs modernes de nos jours ont des débogeurs internes. On peut les activer ou pas, forçant ainsi le signalement des erreurs. Il est aussi possible de mettre des points d'arrêts durant l'exécution du code pour stopper l'exécution et examiner les variables. Pour ce faire, il suffit d'ouvrir la fenêtre d'inspection et placer le mot clé `debugger` dans le code JavaScript. Au niveau de chaque breakpoint, le flux d'exécution s'interrompt permettant aux développeurs d'examiner les variables et continuer l'exécution du code.

Vous pouvez aussi utiliser la fonction `console.log()` pour laisser des messages sur la console (au niveau de la fenêtre de débogage).

```javascript
const a = 5, b = 6;
const c = a + b;
console.log(c);
// Result : c = 11;
```
