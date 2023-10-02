---
chapter: 16
pageNumber: 83
description: Le navigateur est un objet intégré qui fournit des informations sur le navigateur Web et le système de l'utilisateur. Il contient diverses propriétés et méthodes qui donnent accès à des informations sur l'environnement de l'utilisateur, telles que le nom du navigateur, sa version, l'agent utilisateur, les préférences linguistiques, etc.
---

# Navigateur

Le `window.navigator` ou `navigator` est une propriété **en lecture seule** et contient différentes méthodes et fonctions liées au navigateur.&#x20;

Voyons quelques exemples de navigation.

1.  **navigator.appName**: Fournit le nom du navigateur utilisé

    ```javascript
    navigator.appName;
    // "Netscape"
    ```

    > _**Note:**_ "Netscape" est le nom de l'application pour IE11, Chrome, Firefox et Safari.

2.  **navigator.cookieEnabled**: Renvoie un booléen basée sur la valeur du cookie dans le navigateur.

    ```javascript
    navigator.cookieEnabled;
    //true
    ```

3.  **navigator.platform**: Fournit des informations sur le système d'exploitation du navigateur.

    ```javascript
    navigator.platform;
    ("MacIntel");
    ```
