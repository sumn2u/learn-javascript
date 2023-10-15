---
layout: editorial
chapter: 7
pageNumber: 49
description: Los bucles son estructuras de control que le permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica. Son esenciales para automatizar tareas repetitivas e iterar sobre estructuras de datos como matrices y cadenas.
---

# Capítulo 7

## Bucles

Los bucles son condiciones repetitivas en las que cambia una variable del bucle. Los bucles son útiles si desea ejecutar el mismo código una y otra vez, cada vez con un valor diferente.

En lugar de escribir:

```javascript
hacerAlgo(coches[0]);
hacerAlgo(coches[1]);
hacerAlgo(coches[2]);
hacerAlgo(coches[3]);
hacerAlgo(coches[4]);
```

Puede escribir:

```javascript
for (var i = 0; i < coches.length; i++) {
  hacerAlgo(coches[i]);
}
```
