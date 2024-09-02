---
title: Continue
description: Una explicación de la declaración continue en JavaScript con un ejemplo.
---

# Continue

La sentencia `continue` en JavaScript es una declaración de control de flujo utilizada para saltar la iteración actual de un bucle y continuar con la siguiente iteración. Permite omitir código específico dentro de un bucle bajo ciertas condiciones. Este documento proporciona una descripción general de la declaración `continue` en JavaScript, su sintaxis, casos de uso comunes y prácticas recomendadas.

## Sintaxis

En JavaScript, la declaración `continue` se usa dentro de los bucles. La sintaxis es sencilla:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Saltando 3.");
        continue;
    }
    console.log(`Valor actual de i: ${i}`);
}
```
