---
layout: editorial
chapter: 3
pageNumber: 16
description: Los números se refieren al tipo de datos utilizado para representar valores numéricos. Los números en JavaScript pueden ser números enteros (números enteros) o números de punto flotante (números decimales)
---

# Capítulo 3

## Números

JavaScript tiene **solo un tipo de número**: punto flotante de 64 bits. Es lo mismo que el `double` de Java. A diferencia de la mayoría de los otros lenguajes de programación, no existe un tipo entero separado, por lo que 1 y 1,0 tienen el mismo valor. Crear un número es fácil, se puede hacer como con cualquier otro tipo de variable usando la palabra clave `var`.

Los números se pueden crear desde un valor constante:

```javascript
// Esto es un número de punto flotante (float):
let a = 1.2;

// Esto es un entero:
let b = 10;
```

O, desde el valor de otra variable:

```javascript
let a = 2;
let b = a;
```

La precisión de los números enteros es de hasta 15 dígitos y el número máximo es 17.

```javascript
let x = 999999999999999;   // x será 999999999999999
let y = 9999999999999999;  // y será 10000000000000000
```

Las constantes numéricas se interpretan como hexadecimales si van precedidas de un `0x`.

```javascript
let z = 0xFF; // 255
```
