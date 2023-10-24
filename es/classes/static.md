---
chapter: 15
pageNumber: 76
description: La palabra clave static define los métodos o propiedades estáticas de una clase. Cuando un método o propiedad se define como estático dentro de una clase, entonces pertenece a la clase misma y no a instancias (objetos) de la clase.
 
---
# Static

La palabra clave `static` define los métodos o propiedades estáticas de una clase. Estos métodos y propiedades se llaman en la propia clase.

```javascript
class Vehiculo {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static hola(x) {
    return "Hola " + x.nombre;
  }
}
let miVehiculo = new Vehiculo("Toyota");

console.log(miVehiculo.hola()); // Esto arrojará un error
console.log(Vehiculo.hola(miVehiculo));
// Resultado: Hola Toyota
```

{% hint style="info" %}
Se puede acceder al método estático o propiedad de otro método estático de la misma clase usando la palabra clave `this`.
{% endhint %}
