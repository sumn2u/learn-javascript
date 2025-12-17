---
chapter: 8
pageNumber: 78
description: Los cierres son un concepto de JavaScript que permite a las funciones acceder y recordar variables de su ámbito de contención, incluso después de que la función externa haya terminado de ejecutarse. Son fundamentales para la encapsulación de datos, las variables privadas y varios patrones de diseño en JavaScript. Los cierres mejoran la flexibilidad y la capacidad de mantenimiento del código.
---

# Cierres (Closures, en inglés)

En JavaScript, los cierres son un concepto fundamental y poderoso que desempeña un papel crucial en el lenguaje. Comprender los cierres es esencial para escribir código limpio, eficiente y fácil de mantener. En este capítulo, exploraremos qué son los cierres, cómo funcionan y por qué son importantes en JavaScript.

## ¿Qué son los cierres?

Un cierre es una función que conserva el acceso a las variables de su ámbito léxico contenedor (que las encierra) incluso después de que la función externa haya terminado su ejecución. En términos más simples, un cierre "cierra" las variables, preserva sus valores y permite que las funciones internas accedan a ellas.

## Cómo funcionan los cierres

Los cierres en JavaScript se crean cuando se define una función dentro de otra función y se hace referencia a variables de la función externa. A continuación, se ofrece una explicación paso a paso de cómo funcionan los cierres:

1. **Definición de función**: Una función se define dentro de otra función.

2. **Referencia de variable**: La función interna hace referencia a variables de la función externa.

3. **Creación de un cierre**: Cuando se crea la función interna, ésta forma un cierre, capturando las variables a las que hace referencia.

4. **Acceso al ámbito circundante**: la función interna aún puede acceder y usar las variables de la función externa, incluso después de que esta última haya terminado de ejecutarse.

## Ejemplo práctico

Ilustremos los cierres con un ejemplo práctico:

```javascript
function funcionExterna() {
  const variableExterna = 'Soy de la funcion externa';
  
  function funcionInterna() {
    console.log(variableExterna);
  }
  
  return funcionInterna;
}

const funcionCierre = funcionExterna(); // Crea un cierre
funcionCierre(); // Registra "Soy de la función exterior"
```

En este ejemplo, `funcionExterna` define `variableExterna` y `funcionInterna` accede a `variableExterna` dentro de su ámbito. Cuando se invoca `funcionExterna` y se le asigna a `funcionCierre` el valor que devuelve, crea un cierre que conserva el acceso a `variableExterna`. Más tarde, cuando se llama a `funcionCierre`, todavía tiene acceso a `variableExterna`, aunque `funcionExterna` haya completado la ejecución.

## Casos de uso para cierres

Los cierres tienen varios casos prácticos de uso en JavaScript, entre ellos:

- **Encapsulación de datos**: los cierres se pueden utilizar para encapsular y proteger datos, haciéndolos inaccesibles desde el exterior. Este es un concepto fundamental en muchos patrones de diseño.

- **Fábricas de funciones**: los cierres permiten la creación de funciones de fábrica que generan funciones con comportamientos específicos.

- **Variables privadas**: los cierres permiten la creación de variables y métodos privados dentro de los objetos, manteniendo ciertos datos ocultos del código externo.

- **Funciones de devolución de llamada**: las devoluciones de llamada a menudo implican cierres para mantener el contexto y los datos entre operaciones asincrónicas.

Los cierres son una característica poderosa en JavaScript que permite que las funciones conserven el acceso a las variables desde su ámbito de contención. Comprender los cierres es esencial para escribir código limpio y eficiente. Se utilizan comúnmente en varios patrones de diseño y brindan soluciones para la encapsulación de datos, fábricas de funciones y más.

Los cierres pueden ser tanto una herramienta poderosa como una fuente potencial de fugas de memoria si no se utilizan con prudencia. Por lo tanto, es fundamental comprender el concepto y utilizarlo con criterio en el código JavaScript.

---
