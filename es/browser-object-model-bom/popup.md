---
chapter: 16
pageNumber: 130
description: Las ventanas emergentes son pequeñas ventanas que aparecen en la parte superior del navegador principal para proporcionar información. Se utiliza para mostrar notificaciones, alertas, cuadros de diálogo, formularios de inicio de sesión o cualquier otro contenido que deba aparecer temporalmente o en un contexto separado de la página principal.
---
# Ventanas emergentes (Popup windows, en inglés)

Las ventanas emergentes son una forma adicional de mostrar información, recibir confirmación del usuario o recibir información del usuario de documentos adicionales. Una ventana emergente puede navegar a una nueva URL y enviar información a la ventana de apertura. **Cuadro de alerta** (función `alert()`), **Cuadro de confirmación** (función `confirm()`) y **Cuadro de mensaje** (función `prompt()`) son las funciones globales donde podemos mostrar la información emergente.

1. **alert()**: Muestra información al usuario y tiene un botón "**OK**" para continuar.

    ```javascript
    alert("Ejemplo de mensaje de alerta");
    ```

2. **confirm()**: Utilícelo como cuadro de diálogo para confirmar o aceptar algo. Tiene los botones "**Aceptar**" y "**Cancelar**" para continuar. Si el usuario hace clic en "**Aceptar**", devuelve `true`, si hace clic en "**Cancelar**", devuelve `false`.

    ```javascript
    let txt;
    if (confirm("¡Presiona un botón!")) {
      txt = "¡Presionó Aceptar!";
    } else {
      txt = "¡Presionó Cancelar!";
    }
    ```

3. **prompt()**: Toma el valor ingresado por el usuario con los botones "**Aceptar"** y "**Cancelar"**. Devuelve "nulo" si el usuario no proporciona ningún valor de entrada.

    ```javascript
    //sintaxis
    //window.prompt("alguntexto","textopredeterminado");

    let persona = prompt("Por favor, introduzca su nombre", "Harry Potter");

    if (persona == null || persona == "") {
      txt = "El usuario canceló el mensaje.";
    } else {
      txt = "¡Hola, " + persona + "! ¿Cómo estás hoy?";
    }
    ```
