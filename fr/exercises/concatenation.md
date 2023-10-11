---
chapter: 20
pageNumber: 111
---
# La concaténation

Dans tous les langages de programmation, la `concaténation` signifie tout simplement `"coller bout-à-bout"` une ou plusieurs chaînes de caractères à une autre. Par exemple, quand les chaînes "_World_" et "_Good Afternoon_" sont concatenées avec la chaîne "_Hello_", elles forment "_Hello World, Good Afternoon_". Nous pouvons concatener des chaînes de plusieurs façons en JavaScript.

### Example:

```javascript
const icon = '👋';

// En utilisant les templates
`hi ${icon}`;

// En utilisant la méthode join()
['hi', icon].join(' ');

// En utilisant la méthode concat()
''.concat('hi ', icon);

//  En utilisant l'opérateur +
'hi ' + icon;

// RESULTAT
// hi 👋
```

### 📝 Tâches :

* [ ] Ecrire un programme qui initialise deux variables `str1`et `str2` pour que le code affiche '_Hello World_' sur la console.

### 💡 Indices :

* Visitez le chapitre sur la [concaténation](../strings/concat.md) des chaînes de caractères pour plus d'informations.
