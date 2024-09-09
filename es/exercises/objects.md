---
chapter: 21
pageNumber: 189
---
# Objetos

Los objetos son colecciones de pares `clave`, `valor` y cada par de clave-valor se conoce como propiedad. Aquí, la propiedad de la `clave` puede ser una `cadena` mientras que su valor puede ser de cualquier tipo.

## 📝 Tareas

Dada una familia Doe que incluye dos miembros, donde la información de cada miembro se proporciona en forma de un objeto.

```javascript
let persona = {
    nombre: "John",                    //String
    apellido: "Doe",
    edad: 35,                         //Number
    genero: "masculino",
    numerosAfortunados: [ 7, 11, 13, 17], //Array
    pareja: persona2       //Object, 
};

let persona2 = {
    nombre: "Jane",
    apellido: "Doe",
    edad: 38,
    genero: "femenino",
    numerosAfortunados: [ 2, 4, 6, 8],
    pareja: persona
};

let familia = {
    apellido: "Doe",
    miembros: [persona, persona2]       //Matriz de objetos
};
```

- [ ] Encuentre una forma de imprimir el nombre del primer miembro de la familia Doe en una `consola`.
- [ ] Cambien el cuarto `numerosAfortunados` del segundo miembros de la familia Doe a `33`.
- [ ] Agregue un nuevo miembro a la familia creando una nueva persona (`Jimmy,` `Doe`, `13`, `masculino`, `[1, 2, 3, 4]`, `null`) y actualize la lista de miembros.
- [ ] Imprima la `SUMA` de los números de la suerte de la familia Doe en la `consola`.

## 💡 Consejos

- Visite el capítulo [objetos](../objects/) para entender cómo trabajan los objetos.
- Puede obtener los `numerosAfortunados` de cada objeto persona dentro del objeto familia.
- Una vez obtenga cada matriz simplemente itere sobre ella agregando cada elemento y después sume cada uno de los tres miembros de la familia.

{% aceeditor compilerTitle="¡Inténtelo!" %}
{% endaceeditor %}
