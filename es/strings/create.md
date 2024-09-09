---
chapter: 4
pageNumber: 32
---
# Creación

Las cadenas se pueden definir encerrando el texto entre comillas simples o dobles:

```javascript
// Se pueden utilizar comillas simples
let str = "Nuestra hermosa cadena";

// Comillas dobles también
let otherStr = "Otra bonita cadena";
```

En Javascript, las cadenas pueden contener caracteres UTF-8:

```text
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```

También puedes usar el constructor `String` para crear un objeto de cadena:

```javascript
const stringObject = new String('Esto es una cadena');
```

Sin embargo, generalmente no se recomienda utilizar el constructor `String` para crear cadenas, ya que puede causar confusión entre las primitivas de cadena y los objetos de cadena. Normalmente es mejor utilizar cadenas literales para crear cadenas.

También puede utilizar literales de plantilla para crear cadenas. Los literales de plantilla son cadenas que están encerradas entre comillas invertidas `(``)` y pueden contener marcadores de posición para valores. Los marcadores de posición se indican con la sintaxis `` `${}` ``.

```javascript
const nombre = 'Juan';
const mensaje = `¡Hola, ${nombre}!`;
```

Los literales de plantilla también pueden contener varias líneas y pueden incluir cualquier expresión dentro de los marcadores de posición.

{% hint style="warning" %}
Las cadenas no se pueden restar, multiplicar ni dividir.
{% endhint %}

{% exercise %}
Utilice un literal de plantilla para crear una cadena que incluya los valores de `nombre` y `edad`. La cadena debe tener el siguiente formato: "Mi nombre es Juan y tengo 25 años".

{% initial %}
let nombre = "Juan";
let edad = 25;

// Mi nombre es Juan y tengo 25 años.
let resultado =  
{% solution %}
let nombre = "Juan";
let edad = 25;

// Mi nombre es Juan y tengo 25 años.
let resultado = `Mi nombre es ${nombre} y tengo ${edad} años.`

{% validation %}
assert(resultado == "Mi nombre es Juan y tengo 25 años.");

{% context %}
{% endexercise %}
