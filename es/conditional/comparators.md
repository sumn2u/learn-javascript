---
chapter: 5
pageNumber: 46
description: Los comparadores son funciones que se utilizan para comparar dos valores y determinar su relación. Aquí, el valor devuelto indica si los valores son iguales, mayores que, menores que o alguna otra relación basada en un criterio de comparación específico.  
---
# Comparadores

Centrémonos ahora en la parte condicional:

```javascript
if (pais === "Francia") {
    ...
}
```

La parte condicional es la variable `país` seguida de los tres signos iguales (`===`). Tres signos iguales prueban si la variable `país` tiene tanto el valor correcto (`Francia`) como el tipo correcto (`String`). También puede probar condiciones con signos dobles de igual; sin embargo, un condicional como `if (x == 5)` devolvería verdadero tanto para `var x = 5;` como para `var x = "5";`. Dependiendo de lo que esté haciendo su programa, esto podría marcar una gran diferencia. Se recomienda encarecidamente como práctica recomendada que siempre compare la igualdad con tres signos iguales (`===` y `!==`) en lugar de dos (`==` y `!=`).

Otras pruebas condicionales:

* `x > a`: ¿es x mayor que a?
* `x < a`: ¿es x menor que a?
* `x <= a`: ¿es x menor o igual que a?
* `x >=a`: ¿es x mayor o igual que a?
* `x != a`: ¿es x distinto de a?
* `x`: ¿existe x?

## Comparación lógica

Para evitar la molestia de si o si no, se pueden utilizar comparaciones lógicas simples.

```javascript
let topper = marcas > 85 ? "SI" : "NO";
```

En el ejemplo anterior, `?` es un operador lógico. El código dice que si el valor de las marcas es mayor que 85, es decir, `marcas > 85`, entonces `topper = SI`; de lo contrario `topper = NO`. Básicamente, si la condición de comparación resulta verdadera, se accede al primer argumento y si la condición de comparación es falsa, se accede al segundo argumento. Este operador abreviado también se conoce como `operador ternario`, ya que toma tres operandos.

```javascript
condicion ? expresion1 : expresion2
```
