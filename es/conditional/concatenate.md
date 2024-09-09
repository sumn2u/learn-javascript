---
chapter: 5
pageNumber: 47
description: La condición de concatenación se refiere a la combinación de múltiples condiciones utilizando operadores lógicos para crear condicionales más complejos y sofisticados.
---
# Concatenación

Además, puede concatenar diferentes condiciones con los operadores "`o`" o "`y`", para probar si alguna de ellas es verdadera o si ambas son verdaderas, respectivamente.

En JavaScript, "o" se escribe como `||` y "y" se escribe como `&&`.

Supongamos que desea probar si el valor de x está entre 10 y 20. Podría hacerlo con una condición que indique:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

Si desea asegurarse de que el país sea "Inglaterra" o "Alemania", utilice:

```javascript
if (pais === "Inglaterra" || pais === "Alemania") {
    ...
}
```

> **Nota**: Al igual que las operaciones con números, las condiciones se pueden agrupar usando paréntesis, por ejemplo: `if ( (nombre === "Juan" || nombre === "Genoveva") && país === "Francia")`.
