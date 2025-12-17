---
chapter: 9
pageNumber: 94
description: Un objeto es un tipo de datos compuesto que le permite almacenar y organizar datos en pares clave-valor. Cada par clave-valor de un objeto se denomina propiedad. Las propiedades se utilizan para representar características, atributos o rasgos del objeto.
---
# Propiedades

La propiedad del objeto es un par `nombrePropiedad`:`valorPropiedad`, donde **el nombre de propiedad puede ser solo una cadena**. Si no es una cadena, se convierte en una cadena. Puede especificar propiedades **al crear** un objeto **o después**. Puede haber cero o más propiedades separadas por comas.

```javascript
let lenguaje = {
  nombre: "JavaScript",
  estaSoportadoPorNavegadores: true,
  creadoEn: 1995,
  autor: {
    nombre: "Brendan",
    apellido: "Eich",
  },
  // ¡Sí, los objetos se pueden anidar!
  obtenNombreCompletoAutor: function () {
    return this.autor.nombre + " " + this.autor.apellido;
  },
  // Sí, ¡las funciones también pueden ser valores!
};
```

El siguiente código demuestra cómo **obtener** el valor de una propiedad.

```javascript
let variable = lenguaje.nombre;
// variable ahora contiene una cadena "JavaScript".
variable = lenguaje["nombre"];
// Las líneas de arriba hacen lo mismo. La diferencia es que el segundo te permite usar literalmente cualquier cadena como nombre de propiedad, pero es menos legible.
variable = lenguaje.nuevaPropiedad;
// variable ahora no está definida porque aún no hemos asignado esta propiedad.
```

El siguiente ejemplo muestra cómo **agregar** una nueva propiedad **o cambiar** una existente.

```javascript
lenguaje.nuevaPropiedad = "nuevo valor";
// Ahora el objeto tiene una nueva propiedad. Si la propiedad ya existe, se repondrá su valor.
lenguaje["nuevaPropiedad"] = "valor cambiado";
// Una vez más, puede acceder a las propiedades en ambos sentidos. Se recomienda la primera (notación de puntos).
```
