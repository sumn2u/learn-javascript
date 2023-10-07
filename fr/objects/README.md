---
layout: editorial
chapter: 9
pageNumber: 56
description: Un objet est un type de données composé qui vous permet de stocker et organiser plusieurs valeurs (propriétés) en des paires de clés et de valeur. Il s'agit d'une structure de données tout à fait fondamentale dans en JavaScript et est largement utilisé pour représenter des données complexes et des entitées structurées.
---

# Chapitre 9
# Les objets

En JavaScript, les objets sont **mutables** car on change directement les valeurs pointées par l'objet de référence, alors que quand on change les valeurs des types primitifs, nous modifions en réalité leur référence qui pointe vers la nouvelle valeur (ce qui signifie que les types primitifs sont **non mutables**). Les types primitifs en JavaScript sont: `true`, `false`, `numbers`, `strings`, `null` et `undefined`. Toute autre valeur est de type `object`. Les objets contiennent des paires de : `nomPropriete`: `valeurPropriete`. Il existe trois façons de créer un objet en JavaScript.

1.  De façon Litérale

    ```javascript
    let object = {};
    // Oui, seulement des paires d'accolades.
    ```

    > _**Note:**_ Ceci est la méthode **recommandée**.
2.  De façon orientée objet

    ```javascript
    let object = new Object();
    ```

    > _**Note:**_ A peu près la même syntaxe qu'en Java.
3.  Et à travers la méthode: `Object.create()`

    ```javascript
    let object = Object.create(proto[, propertiesObject]);
    ```

    > _**Note:**_ Cette syntaxe pemet de créer un nouveau objet avec les propriétés du prototype spécifié.
