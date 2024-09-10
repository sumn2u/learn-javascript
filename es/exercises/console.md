---
chapter: 21
pageNumber: 179
---
# Console

En JavaScript, usamos `console.log()` para escribir un mensaje (el contenido de una variable, un)
In JavaScript, we use `console.log()` to write a message (the content of a variable, una cadena dada, etc.) en `console`. Se usa principalmente con fines de depuración, idealmente para dejar una traza del contenido de las variables durante la ejecución de un programa.

## Ejemplo 1

```javascript
console.log("Bienvenido a la edición para principiantes de Aprende JavaScript");
let edad = 30;
console.log(edad);
```

## Matemáticas en la consola

También puedes escribir una ecuación matemática en la `consola` para saber la respuesta a una expresión.

### Ejemplo

```javascript
console.log("¿Qué edad tendrá una década después?");
let edad = 30;
console.log(edad + 10);
//devuleve 40 en la consola
```

## Booleanos en la consola

Otra forma útil en la que los desarrolladores usan la consola es para comprobar si algo es verdadero o falso. Por ejemplo, en el ejemplo siguiente, puedes comprobar si la edad de una persona igual a 45 es verdadera o falsa.

### Ejemplo 3

```javascript
console.log("¿Tienen 50 años?");
let edad = 30;
console.log(edad === 50);
//resultado: false
```

## 📝 Tareas

- [ ] Escriba un programa para imprimir `Hola mundo` en la consola. ¡Siéntase libre de probar otras cosas también!
- [ ] Escriba un programa para imprimir variables en la `console`.
  1. Declare una variable `animal` y asígnele el valor dragón.
  2. Imprima la variable `animal` en la `console`.
- [ ] Escriba un programa para imprimir el número `45` con una expresión matemática de su elección. (¡Es una ventaja si uno de los números es una variable!)
- [ ] Escriba un programa en la consola que verifique si la cantidad de huevos es mayor que `12`.
  1. Declara una variable `huevos` y asígnale un número de tu elección
  2. Llame a la variable `eggs` en la `consola` y use el operador correcto para ver si el número asignado a `eggs` es mayor que 12
      Si el número de huevos es mayor, debe imprimir `true`, si no, debe imprimir `falso`.

## 💡 Consejos

- Visite el capítulo [Variables](../basics/variables.md) para entender más sobre variables.
- Visite el capítulo [Operadores](https://javascript.sumankunwar.com.np/en/numbers/operators.html) para conocer los posibles operadores que puede usar.

{% if output.name == "website" %}
{% aceeditor compilerTitle="¡Inténtelo!" %}
{% endaceeditor %}
{% endif %}
