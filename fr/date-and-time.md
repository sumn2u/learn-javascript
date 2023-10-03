---
layout: editorial
chapter: 10
pageNumber: 64
description: L'objet date permet d'indiquer les dates et le temps et fournit des méthodes pour les manipuler. Les objets date sont statiques et utilisent le fuseau horaire du navigateur pour afficher la date sous forme de texte.
---

# Chapter 10

# Date et temps

L'objet `date` stocke des dates et le temps et fournit les méthodes pour les manipuler. Les objets date sont statiques et utilisent le fuseau horaire du navigateur pour afficher la date sous forme de texte.

Pour créer un objet `date` on utilise le constructeur avec le mot clé `new`. En plus de la syntaxe de base `new Date()`, on peut passer des paramètres pour affiner le retour.

```javascript
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```

{% hint style="warning" %}
Les mois sont spécifiés de `0` à `11`, si on excède ces index, on débordera sur l'année suivante.
{% endhint %}

Les méthodes et les propriétés supportées par `date` sont décrites ci-dessous:

| Name                   | Description                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| `constructor`          | Renvoie la fonction qui a créé le prototype de l'objet Date                                                    |
| `getDate()`            | Renvoie le jour (1-31) du mois en cours                                                                        |
| `getDay()`             | Renvoie le jour (0-6) de la semaine en cours                                                                   |
| `getFullYear()`        | Renvoie l'année (sur 4 chiffres)                                                                               |
| `getHours()`           | Renvoie l'heure (0-23)                                                                                         |
| `getMilliseconds()`    | Renvoie les millisecondes (0-999)                                                                              |
| `getMinutes()`         | Renvoie les minutes (0-59)                                                                                     |
| `getMonth()`           | Renvoie le mois (0-11)                                                                                         |
| `getSeconds()`         | Renvoie les secondes (0-59)                                                                                    |
| `getTime()`            | Renvoie la valeur de la date en millisecondes écoulées depuis le 1er janvier 1970                              |
| `getTimezoneOffset()`  | Renvoie l'écart en minutes entre la date et le fuseau horaire UTC                                              |
| `getUTCDate()`         | Renvoie le jour (1-31) du mois de la date d'après UTC                                                          |
| `getUTCDay()`          | Renvoie le jour (0-6) de la semaine d'après UTC                                                                |
| `getUTCFullYear()`     | Renvoie l'année (sur 4 chiffres) d'après UTC                                                                   |
| `getUTCHours()`        | Renvoie les heures (0-23) d'après UTC                                                                          |
| `getUTCMilliseconds()` | Renvoie les millisecondes (0-999) d'après UTC                                                                  |
| `getUTCMinutes()`      | Renvoie les minutes (0-59) d'après UTC                                                                         |
| `getUTCMonth()`        | Renvoie les mois (0-11) d'après UTC                                                                            |
| `getUTCSeconds()`      | Renvoie les secondes (0-59) d'après UTC                                                                        |
| `now()`                | Renvoie le nombre de millisecondes écoulées depuis le 1er janvier 1970                                         |
| `parse()`              | Formate une date passée en paramètre et renvoie sa valeur en millisecondes écoulées depuis le 1er janvier 1970 |
| `prototype`            | Permet d'ajouter des propriétés                                                                                |
| `setDate()`            | Définit le jour du mois (relatif au début du mois courant) pour une date passée en paramètre                   |
| `setFullYear()`        | Définit l'année                                                                                                |
| `setHours()`           | Définit l'heure                                                                                                |
| `setMilliseconds()`    | Définit les millisecondes                                                                                      |
| `setMinutes()`         | Définit les minutes                                                                                            |
| `setMonth()`           | Définit le mois                                                                                                |
| `setSeconds()`         | Définit les secondes                                                                                           |
| `setTime()`            | Définit le temps                                                                                               |
| `setUTCDate()`         | Définit le jour du mois d'après UTC                                                                            |
| `setUTCFullYear()`     | Définit l'année d'après UTC                                                                                    |
| `setUTCHours()`        | Définit l'heure d'après UTC                                                                                    |
| `setUTCMilliseconds()` | Définit les millisecondes d'après UTC                                                                          |
| `setUTCMinutes()`      | Définit les minutes d'après UTC                                                                                |
| `setUTCMonth()`        | Définit le mois d'après UTC                                                                                    |
| `setUTCSeconds()`      | Définit les secondes d'après UTC                                                                               |
| `toDateString()`       | Renvoie la date dans un format lisible par un humain                                                           |
| `toISOString()`        | Renvoie la date au format ISO                                                                                  |
| `toJSON()`             | Renvoie la date en tant que chaîne, au format JSON                                                             |
| `toLocaleDateString()` | Renvoie la date en tant que chaîne en utilisant les conventions de la locale                                   |
| `toLocaleTimeString()` | Renvoie le temps en tant que chaîne en utilisant les conventions de la locale                                  |
| `toLocaleString()`     | Renvoie la date en utilisant les conventions de la locale                                                      |
| `toString()`           | Renvoie une chaîne de caractères représentant l'objet                                                          |
| `toTimeString()`       | Renvoie la partie _temps_ de la date dans un format lisible par un humain                                      |
| `toUTCString()`        | Convertit la date en chaîne selon le format universel                                                          |
| `toUTC()`              | Renvoie les millisecondes écoulées depuis le 1er janvier 1970 au format UTC                                    |
| `valueOf()`            | Renvoie la valeur primitive de l'objet `Date`                                                                  |
