---
chapter: 19
pageNumber: 95
description: Le currying est une technique avancée dans la programmation modulaire qui consiste à transformer une fonction avec des arguments multiples en une séquence de fonctions imbriquées. Cela transforme la fonction de f(a, b, c) en f(a)(b)(c). Cela n'appelle pas la fonction, mais plutôt la transforme.
---
# Le currying

Le `currying` est une technique avancée dans la programmation modulaire qui consiste à transformer une fonction avec des arguments multiples en une séquence de fonctions imbriquées. Cela transforme la fonction de `f(a, b, c)` en `f(a)(b)(c)`. Cela n'appelle pas la fonction, mais plutôt la transforme.

En d'autres termes, le `currying` convertit une fonction avec plusieurs paramètres en une chaîne de fonctions unaires (à un seul argument).

Pour avoir une meilleure compréhension du principe, créons une simple fonction `add` qui additionne trois arguments et retourne leur somme.

```javascript
// Sans le currying
const add = (a, b, c)=>{
    return a+ b + c;
}
console.log(add(2, 3, 5))
```

Maintenant créons la version avec le `currying` de la fonction précédente qu'on va appeler `addCurrying`. Elle prend une seule entrée et renvoie une série de fonctions avec sa somme.

```javascript
// Avec le currying
const addCurry = (a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10
```

Nous constatons que les deux fonctions avec ou sans `currying` ont retourné le même résultat. Cette technique peut être bénéfique pous plusieurs raisons mentionnées ci-dessous:

* Cela permet d'éviter de passer la même variable encore et encore.
* Cela permet de diviser la fonctions en plusieurs morceaux avec une tâche spécifique, rendant la fonction moins sujette aux erreurs.
* Cela est utilisé dans la programmation fonctionnelle pour créer une fonction d'ordre supérieur. C'est-à-dire une fonction qui peut prendre comme paramètre d'autres fonctions et se charge de les exécuter. Ou encore une fonction qui retourne une fonction comme avec notre exemple ci-haut.
