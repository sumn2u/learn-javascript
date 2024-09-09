---
chapter: 7
pageNumber: 68
description: Los bucles while ejecutan repetidamente un bloque de código siempre que una condición especificada sea verdadera.
---
# While

Los bucles while ejecutan repetidamente un bloque de código siempre que una condición especificada sea verdadera. Proporciona una forma de automatizar tareas repetitivas y realizar iteraciones basadas en la evaluación de la condición.

```javascript
while (condicion) {
  // hazlo siempre que la condición sea verdadera
}
```

Por ejemplo, el bucle en este ejemplo ejecutará repetidamente su bloque de código siempre que la variable i sea menor que 5:

```javascript
var i = 0,
  x = "";
while (i < 5) {
  x = x + "El número es " + i;
  i++;
}
```

{% hint style="warning" %}
¡Tenga cuidado de evitar bucles infinitos si la condición siempre es verdadera!
{% endhint %}
