---
chapter: 20
pageNumber: 110
---
# Les constantes

Les constantes ont été introduites avec la norme ES6(2015).
Pour déclarer une constante on utilise le mot clé `const`.
Les variables déclarées avec `const` ne peuvent ni être modifiées (affectation) ou redéclarées.&#x20;

### Exemple:

```javascript
const VERSION = '1.2';
```

### 📝 Tâches :

* [ ] Exécutez le programme écrit ci-dessous et corrigez l'erreur que vous verrez sur la console. Faites en sorte qu'après la correction, le résultat d'exécution sur la console soit `0.9`.

```javascript
const VERSION = '0.7';
VERSION = '0.9';
console.log(VERSION);
```

### 💡 Indices :

* Visitez le chapitre sur les  [Variables](../basics/variables.md) pour plus d'informations concernant `const` et également faites des recherches à propos de "_TypeError assignment to constant variable_" sur les moteurs de recherches pour éviter ce genre d'erreur.&#x20;
