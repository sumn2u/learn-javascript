---
chapter: 5
pageNumber: 32
description: Switch es una declaración condicional que realiza acciones basadas en diferentes condiciones. Utiliza una comparación estricta para hacer coincidir las condiciones y ejecuta los bloques de código de la condición coincidente.
---
# Switch

Un `switch` es una declaración condicional que realiza acciones basadas en diferentes condiciones. Utiliza una comparación estricta (`===`) para hacer coincidir las condiciones y ejecuta los bloques de código de la condición coincidente. La sintaxis de la expresión `switch` se muestra a continuación.

```javascript
switch(expression) {
  case x:
    // bloque de código
    break;
  case y:
    // bloque de código
    break;
  default:
    // bloque de código
}
```

La expresión se evalúa una vez y se compara con cada caso. Si se encuentra una coincidencia, entonces se ejecuta el bloque de código asociado y si no se encuentran coincidencias, se ejecuta el bloque de código `default`. La palabra clave `break` detiene la ejecución y se puede colocar en cualquier lugar. En su ausencia, la siguiente condición se evalúa incluso si las condiciones no coinciden.

A continuación se muestra un ejemplo de cómo obtener un nombre de día de la semana según la condición del switch.

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
     day = "Martes";
    break;
  case 3:
    day = "Miércoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case 6:
    day = "Sábado";
}
```

En casos de coincidencia múltiple, se selecciona el **primer** valor coincidente; de lo contrario, se selecciona el valor predeterminado. En ausencia de un caso predeterminado y sin coincidencia, el programa continúa con las siguientes declaraciones después de las condiciones de cambio.

{% exercise %}
A partir de los siguientes valores, escriba una sentencia `switch` que verifique el valor de diaDeLaSemana. Si `diaDeLaSemana` es "Lunes", "Martes", "Miércoles", "Jueves" o "Viernes", asigne "Es un día laborable" a la variable de resultado. Si `diaDeLaSemana` es "Sábado" o "Domingo", asigne "Es fin de semana" al resultado.

{% initial %}
let diaDeLaSemana = "Lunes";
let resultado;
// comprobar si es un día laborable o el fin de semana
switch(expression) {
  case x:
    // bloque de código
    break;
  case y:
    // bloque de código
    break;
  default:
    // bloque de código
}
{% solution %}
let diaDeLaSemana = "Lunes";
let resultado;
// comprobar si es un día laborable o el fin de semana
switch (diaDeLaSemana) {
  case "Lunes":
  case "Martes":
  case "Miércoles":
  case "Jueves":
  case "Viernes":
    resultado = "Es un día laborable";
    break;
  case "Sábado":
  case "Domingo":
    resultado = "Es fin de semana";
    break;
  default:
    resultado = "Día de la semana no válido";
    break;
}
{% validation %}
assert(resultado == "Es un día laborable" );

{% context %}
{% endexercise %}
