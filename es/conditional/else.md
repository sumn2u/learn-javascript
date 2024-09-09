---
chapter: 5
pageNumber: 43
description: La palabra clave else se utiliza junto con la declaración if para proporcionar un bloque de código alternativo para ejecutar cuando la condición especificada en la declaración if se evalúa como falsa.
---
# Else

También hay una cláusula `else` que se aplicará cuando la primera condición no sea verdadera. Esto es muy poderoso si desea reaccionar ante cualquier valor, pero seleccione uno en particular para recibir un tratamiento especial.

```javascript
let paraguasObligatorio;

if (pais === "Inglaterra") {
  paraguasObligatorio = true;
} else {
  paraguasObligatorio = false;
}
```

La cláusula `else` se puede unir con otra `if`. Rehagamos el ejemplo del artículo anterior.

```javascript
if (pais === "Inglaterra") {
  ...
} else if (pais === "Francia") {
  ...
} else if (pais === "Alemania") {
  ...
}
```

{% exercise %}

A partir de los siguientes valores, escriba una declaración condicional que verifique si `num1` es mayor que `num2`. Si es así, asigne "num1 es mayor que num2" a la variable `resultado`. Si no es así, asigne "num1 es menor o igual que num2".

{% initial %}
let num1 = 10;
let num2 = 5;
let resultado;

// comprobar si num1 es mayor que num2
if( condition ) {

}else {

}
{% solution %}
let num1 = 10;
let num2 = 5;
let resultado;

// comprobar si num1 es mayor que num2
if (num1 > num2) {
  resultado = "num1 es mayor que num2";
} else {
  resultado = "num1 es menor o igual que num2";
}

{% validation %}
assert(resultado == "num1 es mayor que num2" );

{% context %}
{% endexercise %}
