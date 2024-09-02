---
chapter: 5
pageNumber: 40
description: La condición if evalúa la condición y, si la condición es verdadera, se ejecuta el bloque de código que sigue a la declaración if; de lo contrario, se omite.
---

# If

La condición más sencilla es una declaración if y su sintaxis es `if (condición) {haz esto...}`. La condición debe ser verdadera para que se ejecute el código dentro de las llaves. Por ejemplo, puede probar una cadena y establecer el valor de otra cadena dependiendo de su valor como se describe a continuación.

```javascript
let pais = "Francia";
let clima;
let comida
let divisa;

if (pais === "Gran Bretaña") {
  clima = "horrible";
  comida = "relleno";
  divisa = "libra esterlina";
}

if (pais === "Francia") {
  clima = "lindo";
  comida = "impresionante, pero casi nunca vegetariana";
  divisa = "divertida, pequeña y colorida";
}

if (pais === "Alemania") {
  clima = "promedio";
  comida = "lo peor que he visto nunca";
  divisa = "divertida, pequeña y colorida";
}

let mensaje =
  "esto es " +
  pais +
  ", el clima es " +
  clima +
  ", la comida es " +
  comida +
  " y la " +
  "divisa es " +
  divisa;
  
console.log(mensaje);
// 'Esto es Francia, el clima es agradable, la comida es espectacular, pero casi nunca es vegetariana y la moneda es divertida, pequeña y colorida.'
```

{% hint style="info" %}
Las condiciones también se pueden anidar.
{% endhint %}

## If-Else anidado

En JavaScript, puedes usar declaraciones `if-else` anidadas para crear una lógica condicional más compleja.

### Sintaxis básica

```javascript
if (condicion1) {
  // Código a ejecutar cuando condicion1 es 'true'
} else {
  if (condicion2) {
    // Código a ejecutar cuando condicion1 es 'false' y condicion2 es 'true'
  } else {
    // Código a ejecutar cuando tanto condicion1 como condicion2 son 'false'
  }
}
```

El siguiente programa determina el estado de estudiante de una persona en función de su edad e imprime un mensaje correspondiente.

```JavaScript
let edad = 20;
let esAlumno = true;

if (edad >= 18) {
  if (esAlumno) {
    console.log("Usted es un alumno adulto.");
  } else {
    console.log("Usted es un adulto, pero no un alumno.");
  }
} else {
  console.log("Usted no es un adulto.");
}

// Salida: Usted es un alumno adulto.
```

Este programa verifica la lluvia, la temperatura y la nieve para brindar asesoramiento meteorológico.

```JavaScript
let temperatura = 25;
let estaLloviendo = true;
let estaNevando = false;

if (estaLloviendo) {
  console.log("Está lloviendo. No olvides tu paraguas.");

  if (temperatura < 10) {
    console.log("Y hace frío. Quizá necesites un abrigo también.");
  }
} else if (estaNevando) {
  console.log("Está nevando. Prepárese para carreteras resbaladizas.");
} else {
  console.log("No llueve ni nieva. ¡Disfruta del clima!");
}

// Salida: Está lloviendo. No olvides tu paraguas.
```

Este programa verifica la edad de una persona, su experiencia de conducción previa y el estado de la prueba escrita para determinar su elegibilidad para una licencia de conducir.

```JavaScript
let edad = 19;
let tieneExperienciaPrevia = true;
let haPasadoExamenEscrito = true;

if (edad >= 18) {
  if (tieneExperienciaPrevia) {
    console.log("¡Felicitaciones! Usted es elegible para obtener una licencia de conducir.");
  } else {
    console.log("Lo sentimos, necesita experiencia previa de conducción para obtener una licencia de conducir.");
  }
} else {
  console.log("Lo sentimos, debes tener 18 años o más para solicitar una licencia de conducir.");

  if (haPasadoExamenEscrito) {
    console.log("Has aprobado el examen escrito, pero debes esperar hasta cumplir 18 años para presentar la solicitud.");
  } else {
    console.log("Primero debes aprobar el examen escrito y esperar hasta tener 18 años para postularte.");
  }
}

// Salida: ¡Felicitaciones! Usted es elegible para obtener una licencia de conducir.

```
