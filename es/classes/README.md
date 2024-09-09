---
layout: editorial
chapter: 15
pageNumber: 124
description: Las clases son plantillas para crear un objeto. Encapsula datos con código para trabajar con datos. La palabra clave class se utiliza para crear una clase. 
---

# Capítulo 15

## Clases

Las clases son plantillas para crear un objeto. Encapsulan datos con código para trabajar con los datos. Por ejemplo, si queremos crear un árbol genealógico de pájaros, podemos crear una clase de pájaro y cada objeto de pájaro que creemos tendrá los métodos y datos de la clase de pájaro.

La palabra clave `class` se utiliza para crear una clase. Y un método específico llamado `constructor` se utiliza para crear e inicializar un objeto creado con una `class`. A continuación se muestra un ejemplo de una clase de automóvil.

```javascript
class Automovil {
  constructor(nombre, año) {
    this.nombre = nombre;
    this.año = año;
  }
  edad() {
    let fecha = new Date();
    return fecha.getFullYear() - this.año;
  }
}

let miCoche = new Automovil("Toyota", 2021);
console.log(miCoche.edad()) // 1 (si el año actual es 2022)
```

{% hint style="info" %}
La clase debe definirse antes de su uso.
{% endhint %}

En el cuerpo de la clase, los métodos o constructores se definen y ejecutan en `strict mode` (modo estricto, en español). La sintaxis que no se adhiere al modo estricto genera error.

Cada vez que creamos un objeto a partir de una clase, estamos creando una **instancia** de esa clase, por ejemplo, la variable `miCoche` que está arriba de nosotros con la palabra clave `new` es una instancia. Las instancias son *independientes*, lo que significa que no afectan a ninguna otra instancia. Es por eso que se piensa que las clases son plantillas para los objetos, ya que una vez que creas ese objeto de instancia, tendrá los mismos métodos que la clase original.

En este capítulo, exploraremos los siguientes temas:

* [Modificadores de acceso](./access-modifiers.md)
* [Herencia](./inheritance.md)
* [Static](./static.md)