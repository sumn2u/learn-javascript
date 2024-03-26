---
chapter: 25
pageNumber: 251
description: Los literales de plantilla, introducidos en ES6 (ECMAScript 2015), ofrecen una forma poderosa de crear cadenas dinámicas en JavaScript. Le permiten incrustar expresiones directamente dentro de cadenas, haciendo que su código sea más legible y expresivo. Los literales de plantilla se usan comúnmente para generar contenido dinámico, como HTML, y para simplificar la manipulación de cadenas en JavaScript.
---

# Literales de plantilla en ES6: creación de cadenas dinámicas

Los literales de plantilla, introducidos en ES6 (ECMAScript 2015), proporcionan una forma poderosa de crear cadenas dinámicas en JavaScript. Estos literales están encerrados entre comillas invertidas (\` \`) en lugar de comillas simples o dobles y permiten la incrustación perfecta de expresiones directamente dentro de la cadena.

**Sintaxis:**

```javascript
const cadenaDinamica = `Esta es una cadena dinámica con ${expresion}`;
```

- `cadenaDinamica`: Aquí es donde almacena la cadena dinámica.

- `${expresion}`: Aquí es donde se insertan expresiones, variables o funciones de JavaScript, que se evalúan e incluyen dentro de la cadena.

**Ejemplo:**

A continuación se muestra un ejemplo sencillo del uso de literales de plantilla para crear cadenas dinámicas:

```javascript
const nombre = "Juan";
const saludo = `¡Hola, ${nombre}!`;
console.log(saludo); // Salida: ¡Hola, Juan!
```

**Casos de uso:**

Los literales de plantilla se utilizan habitualmente para diversos fines, entre ellos:

1. **Interpolación de cadenas:** Insertar variables o expresiones dentro de cadenas.

2. **Cadenas multilínea:** Creación de cadenas de varias líneas sin necesidad de saltos de línea ni concatenación.

3. **HTML dinámico:** Generación dinámica de contenido HTML para aplicaciones web.

4. **Plantillas etiquetadas:** Permitir el procesamiento personalizado de literales de plantilla a través de funciones de etiquetas de plantilla.

Al utilizar literales de plantilla, puede simplificar la concatenación de cadenas, mejorar la legibilidad de su código y hacer que la creación dinámica de cadenas sea muy sencilla en JavaScript.
