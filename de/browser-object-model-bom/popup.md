---
capítulo: 16
número de página: 81
descripción: Las ventanas emergentes son ventanas pequeñas que aparecen en la parte superior del navegador principal para proporcionar información. Se utilizan para mostrar notificaciones, alertas, cuadros de diálogo, formularios de inicio de sesión o cualquier otro contenido que deba aparecer temporalmente o en un contexto separado de la página principal.
---

# Ventana emergente

Las ventanas emergentes son una forma adicional de mostrar información, obtener la confirmación del usuario o recopilar datos de entrada adicional a través de documentos adicionales. Una ventana emergente puede navegar a una nueva URL y enviar información a la ventana que la abrió. Las funciones globales **alert**, **confirm** y **prompt** son utilizadas para mostrar información en ventanas emergentes.

1. **alert()**: Muestra información al usuario y tiene un botón "**OK**" para proceder.

    ```javascript
    alert("Ejemplo de mensaje de alerta");
    ```

2. **confirm()**: Se utiliza como un cuadro de diálogo para confirmar o aceptar algo. Tiene botones "**Aceptar**" y "**Cancelar**" para proceder. Si el usuario hace clic en "**Aceptar**", devuelve `true`; si hace clic en "**Cancelar**", devuelve `false`.&#x20;

    ```javascript
    let txt;
    if (confirm("¡Presione un botón!")) {
      txt = "¡Usted presionó Aceptar!";
    } else {
      txt = "¡Usted presionó Cancelar!";
    }
    ```

3. **prompt()**: Permite al usuario ingresar un valor con los botones "**Aceptar**" y "**Cancelar**". Devuelve `null` si el usuario no proporciona ningún valor de entrada.

    ```javascript
    //sintaxis 
    //window.prompt("algún texto","texto predeterminado");

    let person = prompt("Por favor, ingrese su nombre", "Harry Potter");

    if (person == null || person == "") {
      txt = "El usuario canceló la entrada.";
    } else {
      txt = "¡Hola " + person + "! ¿Cómo estás hoy?";
    }
    ```
