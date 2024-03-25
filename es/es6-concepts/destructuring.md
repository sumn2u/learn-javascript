---
chapter: 25
pageNumber: 250
description: La desestructuración, una característica de ES6, agiliza la extracción de datos de matrices y objetos. Simplifica el proceso al permitirle asignar valores o propiedades específicas directamente a las variables, lo que mejora la claridad y la eficiencia del código. La desestructuración es una herramienta esencial para trabajar con estructuras de datos complejas en JavaScript.

---
# Desestructuración en ES6: descomprimiendo matrices y objetos

La desestructuración es una característica poderosa introducida en ES6 (ECMAScript 2015) que simplifica el proceso de extracción de valores de matrices y propiedades de objetos. Le permite "desempaquetar" valores en variables con una sintaxis concisa y legible.

**Desestructuración de matrices:**

**Sintaxis:**

```javascript
const [variable1, variable2, ...resto] = matriz;
```

- `variable1`, `variable2`: Estas son variables donde se asignan elementos de la matriz.
- `...resto` (operador resto): Esto reúne los elementos restantes en una nueva variable de matriz.

**Ejemplo:**

```javascript
const colores = ["rojo", "verde", "azul"];
const [primerColor, segundoColor] = colores;
console.log(primerColor); // Salida: "rojo"
console.log(segundoColor); // Salida: "verde"
```

**Desestructuración de objetos:**

**Sintaxis:**

```javascript
const { propiedad1, propiedad2, ...resto } = objeto;
```

- `propiedad1`, `propiedad2`: Estas son variables donde se asignan las propiedades del objeto.
- `...resto` (operador resto): Esto reúne las propiedades restantes en un nuevo objeto.

**Ejemplo:**

```javascript
const persona = { nombre: "Alicia", edad: 30, ciudad: "Nueva York" };
const { nombre, edad } = persona;
console.log(nombre); // Salida: "Alicia"
console.log(edad); // Salida: 30
```

**Casos de uso:**

La desestructuración se usa comúnmente para diversas tareas, que incluyen:

1. **Simplificación de la tarea:** Asignar rápidamente elementos de matriz o propiedades de objetos a variables.

2. **Intercambio de variables:** Intercambiar fácilmente los valores de dos variables sin una variable temporal.

3. **Parámetros de función:** Extraer propiedades específicas de un objeto pasado como un parámetro de función.

4. **Otros parámetros:** Reúna los elementos o propiedades restantes en una matriz u objeto.

Al emplear la desestructuración, puede hacer que su código sea más limpio, más expresivo y menos propenso a errores al trabajar con matrices y objetos en JavaScript.
