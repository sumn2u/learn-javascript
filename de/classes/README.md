---
capítulo: 15
número de página: 75
descripción: Las clases son plantillas para crear un objeto. Encapsulan datos con código para trabajar con datos. La palabra clave `class` se utiliza para crear una clase. 
---

# Capítulo 15
# Clases

Las clases son plantillas para crear un objeto. Encapsulan datos con código para trabajar con datos. Se utiliza la palabra clave `class` para crear una clase. Y se utiliza un método específico llamado `constructor` para crear e inicializar un objeto creado con una `class`. A continuación se muestra un ejemplo de una clase de automóvil.

```javascript
class Coche {
  constructor(nombre, año) {
    this.nombre = nombre;
    this año = año;
  }
  edad() {
    let fecha = new Date();
    return fecha.getFullYear() - this año;
  }
}

let miCoche = new Coche("Toyota", 2021);
console.log(miCoche.edad()) // 1

```

{% hint style="info" %}
La clase debe estar definida antes de su uso.
{% endhint %}

En el cuerpo de la clase se definen métodos o constructores y se ejecutan en `modo estricto`. La sintaxis que no cumple con el modo estricto da como resultado un error.
