---
chapter: 4
pageNumber: 33
---
# Replace

El método `replace` nos permite reemplazar un caracter, una palabra, o una declaración dentro de una cadena. Por ejemplo.

```javascript
let str = "¡Hola, mundo!";
let new_str = str.replace("Hola", "Hey");

console.log(new_str);

// Resultado: ¡Hey, mundo!
```

{% hint style="warning" %}
Para reemplazar un valor en todas las instancias de una [expresión regular](../regular-expression.md) se establece con un modificador `g`.
{% endhint %}

Busca una cadena para un valor o una expresión regular y devuelve una nueva cadena con los valores reemplazados. No cambia la cadena original. Veamos el ejemplo de reemplazo global que no distingue entre mayúsculas y minúsculas.

```javascript
let texto = "El Señor Azul tiene un hogar azul y un auto azul.";
let resultado = texto.replace(/azul/gi, "rojo"); 

console.log(resultado); 
//Resultado: El Señor rojo tiene un hogar rojo y un auto rojo.
```
