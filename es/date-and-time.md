---
layout: editorial
chapter: 10
pageNumber: 79
description: El objeto date almacena la fecha y la hora y proporciona métodos para administrarla. Los objetos Date son estáticos y utilizan la zona horaria predeterminada del navegador para mostrar la fecha como una cadena de texto completo.
---

# Capítulo 10

## Fecha y hora

El objeto `date` almacena la fecha y la hora y proporciona métodos para gestionarla. Los objetos de fecha son estáticos y utilizan la zona horaria predeterminada del navegador para mostrar la fecha como una cadena de texto completo.

Para crear `date` utilizamos un constructor `new Date()` y se puede crear de las siguientes maneras.

```javascript
new Date()
new Date(cadena_con_una_fecha)
new Date(año,mes)
new Date(año,mes,dia)
new Date(año,mes,dia,hora)
new Date(año,mes,dia,hora,minutos)
new Date(año,mes,dia,hora,minutos,segundos)
new Date(año,mes,dia,hora,minutos,segundos,ms)
new Date(milliseconds)
```

{% hint style="warning" %}
Los meses se pueden especificar de `0` a `11`, más de eso resultará en un desbordamiento al año siguiente.
{% endhint %}

Los métodos y propiedades admitidos por date se describen a continuación:

| Nombre                   | Descripción                                                  |
| ---------------------- | -------------------------------------------------------------- |
| `constructor`          | Devuelve la función que creó el prototipo del objeto date.     |
| `getDate()`            | Devuelve el dia (1-31) de un mes                               |
| `getDay()`             | Devuelve el dia (0-6) de una semana                            |
| `getFullYear()`        | Devuelve el año (4 digits)                                     |
| `getHours()`           | Devuelve la hour (0-23)                                        |
| `getMilliseconds()`    | Devuelve los milliseconds (0-999)                              |
| `getMinutes()`         | Devuelve los minutos (0-59)                                    |
| `getMonth()`           | Devuelve el mes (0-11)                                         |
| `getSeconds()`         | Devuelve los segundos (0-59)                                   |
| `getTime()`            | Devuelve el numeric value of a specified date in milliseconds since midnight Jan 1 1970 |
| `getTimezoneOffset()`  | Devuelve el desplazamiento de la zona horaria en minutos       |
| `getUTCDate()`         | Devuelve el dia (1-31) de un mes según la hora universal       |
| `getUTCDay()`          | Devuelve el dia de la semana (0-6) según la hora universal.    |
| `getUTCFullYear()`     | Devuelve el año (4 dígitos) según la hora universal.           |
| `getUTCHours()`        | Devuelve la hora (0-23) según la hora universal.               |
| `getUTCMilliseconds()` | Devuelve los milisegundos (0-999) según la hora universal      |
| `getUTCMinutes()`      | Devuelve los minutos (0-59) según hora universal               |
| `getUTCMonth()`        | Devuelve el mes (0-11) según la hora universal.                |
| `getUTCSeconds()`      | Devuelve los segundos (0-59) según la hora universal           |
| `now()`                | Devuelve el valor numérico en milisegundos desde la medianoche del 1 de enero de 1970 |
| `parse()`              | Analiza la cadena de fecha y devuelve el valor numérico en milisegundos desde la medianoche del 1 de enero de 1970 |
| `prototype`            | Permite agregar propiedades                                    |
| `setDate()`            | Establece el día de un mes                                     |
| `setFullYear()`        | Establece el año                                               |
| `setHours()`           | Establece la hora                                              |
| `setMilliseconds()`    | Establece los milisegundos                                     |
| `setMinutes()`         | Establece los minutos                                          |
| `setMonth()`           | Establece el mes                                               |
| `setSeconds()`         | Estsablece el segundo                                          |
| `setTime()`            | Establece la hora                                              |
| `setUTCDate()`         | Establece el dia del mes según la hora universal.              |
| `setUTCFullYear()`     | Establece el año según la hora universal.                      |
| `setUTCHours()`        | Establece la hora según la hora universal.                     |
| `setUTCMilliseconds()` | Establece los milisegundos según la hora universal.            |
| `setUTCMinutes()`      | Configura los minutos según la hora universal.                 |
| `setUTCMonth()`        | Establece el mes según la hora universal.                      |
| `setUTCSeconds()`      | Ajusta el segundo según la hora universal.                     |
| `toDateString()`       | Devuelve la fecha en formato legible por humanos.              |
| `toISOString()`        | Devuelve la fecha según el formato ISO.                        |
| `toJSON()`             | Devuelve la fecha en una cadena, formateada como fecha JSON    |
| `toLocaleDateString()` | Devuelve la fecha en una cadena usando convenciones locales    |
| `toLocaleTimeString()` | Devuelve la hora en una cadena usando convenciones locales     |
| `toLocaleString()`     | Fecha de devolución utilizando convenciones locales            |
| `toString()`           | Devuelve una representación de cadena de la fecha especificada. |
| `toTimeString()`       | Devuelve la parte _time_ en un formato legible por humanos     |
| `toUTCString()`        | Convierte la fecha en una cadena según el formato universal.   |
| `toUTC()`              | Devuelve los milisegundos desde la medianoche del 1 de enero de 1970 en formato UTC |
| `valueOf()`            | Devuelve el valor primitivo de `Date                           |
