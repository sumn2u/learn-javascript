---
layout: editorial
chapter: 9
pageNumber: 71
description: Un objeto es un tipo de datos compuesto que le permite almacenar y organizar múltiples valores (propiedades) como pares clave-valor. Es una estructura de datos fundamental en el lenguaje y se usa ampliamente para representar datos complejos y crear entidades estructuradas.
---

# Capítulo 9

## Objetos

En javascript los objetos son **mutables** porque cambiamos los valores apuntados por el objeto de referencia, en cambio, cuando cambiamos un valor primitivo estamos cambiando su referencia que ahora apunta al nuevo valor y por lo tanto los primitivos son **inmutables**. Los tipos primitivos de JavaScript son `true`, `false`, `numbers`, `strings`, `null` e `undefined`. Cualquier otro valor es un `object`. Los objetos contienen pares `nombrePropiedad`:`valorPropiedad`. Hay tres formas de crear un "objeto" en JavaScript:

1. literal

    ```javascript
    let object = {};
    // Sí, ¡simplemente un par de llaves!
    ```

    > _**Nota:**_ esta es la forma **recomendada**.
2. orientada a objetos

    ```javascript
    let object = new Object();
    ```

    > _**Nota:**_ es casi como Java.
3. y usando `object.create`

    ```javascript
    let object = Object.create(proto[, propertiesObject]);
    ```

    > _**Nota:**_ crea un nuevo objeto con el objeto prototipo y las propiedades especificadas.

En este capítulo, exploraremos los siguientes temas:

* [Delete](./delete.md)
* [Enumeración](./enumeration.md)
* [Mutable](./mutable.md)
* [Propiedades](./properties.md)
* [Prototype](./prototype.md)
* [Referencia](./reference.md)
