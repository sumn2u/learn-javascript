---
capítulo: 16
número de página: 83
descripción: El objeto `navigator` es un objeto incorporado que proporciona información sobre el navegador web del usuario y el sistema del usuario. Contiene varias propiedades y métodos que brindan acceso a información sobre el entorno del usuario, como el nombre del navegador, la versión, el agente de usuario, las preferencias de idioma y más.
---

# Navegador

La propiedad `window.navigator` o `navigator` es de **solo lectura** y contiene diferentes métodos y funciones relacionadas con el navegador.&#x20;

Echemos un vistazo a algunos ejemplos de navegación.

1. **navigator.appName**: Devuelve el nombre de la aplicación del navegador.

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**Nota:**_ "Netscape" es el nombre de la aplicación para IE11, Chrome, Firefox y Safari.

2. **navigator.cookieEnabled**: Devuelve un valor booleano basado en el valor de las cookies en el navegador.

    ```javascript
    navigator.cookieEnabled;
    //true
    ```

3. **navigator.platform**: Proporciona información sobre el sistema operativo del navegador.

    ```javascript
    navigator.platform;
    "MacIntel"
    ```
