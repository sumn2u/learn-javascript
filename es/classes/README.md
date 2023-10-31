---
layout: editorial
chapter: 15
pageNumber: 75
description: Las clases son plantillas para crear un objeto. Encapsula datos con código para trabajar con datos. La palabra clave class se utiliza para crear una clase. 
---

# Capítulo 15

## Clases

Las clases son plantillas para crear un objeto. Encapsula datos con código para trabajar con datos. La palabra clave `class` se utiliza para crear una clase. Y se utiliza un método específico llamado `constructor` para crear e inicializar un objeto creado con una `class`. A continuación se muestra un ejemplo de clase de automóvil.



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
