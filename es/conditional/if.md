---
chapter: 5
pageNumber: 30
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
