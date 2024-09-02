---
chapter: 8
description: Una explicación de las funciones recursivas en JavaScript.
---

# Funciones recursivas

En JavaScript, una función recursiva es una función que se llama a sí misma para resolver un problema. La recursión es un concepto poderoso que se puede utilizar para resolver problemas complejos dividiéndolos en subproblemas más pequeños y manejables. Este documento proporciona una descripción general de las funciones recursivas en JavaScript, su sintaxis, casos de uso comunes y prácticas recomendadas.

## Sintaxis

Una función recursiva normalmente tiene la siguiente estructura:

```javascript
function funcionRecursiva(parametros) {
  // Caso base: el escenario más simple
  if (/* condición caso base */) {
    // devuelve un valor o realiza una acción
  } else {
    // Caso recursivo: se llama a la función con parámetros modificados
    return funcionRecursiva(parametrosModificados);
  }
}
```

## Casos de uso común

Las funciones recursivas suelen utilizarse para resolver problemas que se pueden dividir en subproblemas más pequeños y similares. A continuación, se muestran algunos casos de uso habituales:

**Cálculo de factoriales**:

Se puede utilizar una función recursiva para calcular el factorial de un número.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1; // Caso base
  } else {
    return n * factorial(n - 1); // Caso recursivo
  }
}

factorial(5); // Devuelve 120
```

**Secuencia de Fibonacci**:

La secuencia de Fibonacci se puede calcular mediante recursión.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n; // Casos base: F(0) = 0, F(1) = 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Caso recursivo
  }
}

fibonacci(5); // Devuelve 5
```

Las funciones recursivas son una herramienta valiosa en JavaScript para resolver problemas que involucran subtareas repetitivas. Cuando se utilizan correctamente, pueden generar soluciones elegantes y eficientes.
