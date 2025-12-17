---
chapter: 16
pageNumber: 81
description: >-
  Les fenêtres contextuelles (ou modales), aussi appelées "popup", sont de
  petites fenêtres qui apparaissent au-dessus du navigateur principal pour
  fournir des informations. Elles sont utilisées pour af
---

# Popup (modale)

Les fenêtres contextuelles (ou modales), aussi appelées "popup", sont un moyen supplémentaire d'afficher des informations, d'obtenir la confirmation de l'utilisateur ou de prendre en compte les données de l'utilisateur à partir de documents supplémentaires. Une fenêtre contextuelle peut naviguer vers un nouvel URL et envoyer des informations à la fenêtre qui s'ouvre. Les fonctions globales dans lesquelles nous pouvons afficher les informations de la fenêtre contextuelle sont les suivantes : **Alerte**, **Confirmation** et **Prompt (demande)**.

1.  **alert()** : Elle affiche des informations à l'utilisateur et dispose d'un bouton "**OK**" pour interragir.

    ```javascript
    alert("Exemple de message d'alerte");
    ```
2.  **confirm()** : S'utilise comme une boîte de dialogue pour confirmer ou accepter quelque chose. Elle dispose de "**Ok**" et "**Cancel**" pour interragir. Si l'utilisateur clique sur "**Ok**", elle renvoie `true`, si l'utilisateur clique sur "**Cancel**", elle renvoie `false`.

    ```javascript
    let txt;
    if (confirm("Cliquez sur un bouton !")) {
      txt = "Vous avez appuyé sur OK !";
    } else {
      txt = "Vous avez appuyé sur Cancel !";
    }
    ```
3.  **prompt()** : Prend la valeur d'entrée de l'utilisateur avec les boutons "**Ok**" et "**Cancel**". Il renvoie `null` si l'utilisateur ne fournit aucune valeur d'entrée.

    ```javascript
    //syntaxe
    //window.prompt("sometext", "defaultText");

    let person = prompt("Entrez votre nom", "Harry Potter");

    if (person == null || person == "") {
      txt = "L'utilisateur a annulé l'invitation";
    } else {
      txt = "Bonjour " + person + " ! Comment allez-vous aujourd'hui ?";
    }
    ```
