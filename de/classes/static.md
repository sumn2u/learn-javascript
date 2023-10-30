---
capítulo: 15
número de página: 76
descripción: La palabra clave `static` define métodos o propiedades estáticas para una clase. Cuando un método o propiedad se define como estático dentro de una clase, pertenece a la clase en sí en lugar de a instancias (objetos) de la clase.
---

# Estático

La palabra clave `static` define métodos o propiedades estáticas para una clase. Estos métodos y propiedades se llaman en la propia clase.

```javascript
class Coche {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static saludar(x) {
    return "Hola " + x.nombre;
  }
}
let miCoche = new Coche("Toyota");

console.log(miCoche.saludar()); // Esto lanzará un error
console.log(Coche.saludar(miCoche));
// Resultado: Hola Toyota
```
{% hint style="info" %}
Se puede acceder al método o propiedad estática de otro método estático de la misma clase utilizando la palabra clave `this`.
{% endhint %}
