---
chapter: 16
pageNumber: 132
description: La propiedad navigator es un objeto integrado que proporciona información sobre el navegador web del usuario y el sistema del usuario. Contiene varias propiedades y métodos que dan acceso a información sobre el entorno del usuario, como el nombre del navegador, la versión, el agente de usuario, las preferencias de idioma y más. 

---
# Navigator

`window.navigator` o `navigator` es una propiedad **de solo lectura** y contiene diferentes métodos y funciones relacionadas con el navegador.

Veamos algunos ejemplos de de uso.

1. **navigator.appName**: Da el nombre de la aplicación del navegador.

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**Nota:**_ "Netscape" es el nombre de la aplicación para IE11, Chrome, Firefox y Safari.
2. **navigator.cookieEnabled**: Devuelve un valor booleano basado en el valor de la cookie en el navegador.

    ```javascript
    navigator.cookieEnabled;
    //true
    ```

3. **navigator.platform**: Proporciona información sobre el sistema operativo del navegador.

    ```javascript
    navigator.platform;
    "MacIntel"
    ```
