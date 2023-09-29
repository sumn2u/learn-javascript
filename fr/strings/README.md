---
layout: editorial
chapter: 4
pageNumber: 23
---

# Chapitre 4

# Chaînes de caractères

Les chaînes de caractères en JavaScript partagent beaucoup de similitudes avec les implémentations d'autres langages de haut niveau. Celles-ci représentent des données basées sur le texte et des données textuelles. Dans ce chapitre, nous découvrirons les bases des chaînes de caractères. Par exemple, nous verrons comment créer de nouvelles chaînes et réaliser des opérations sur celles-ci.

Voici un exemple de chaîne de caractères:

```
"Hello World"
```

Les chaînes de caractères sont indexées sur une base 0. Cela signifie que la position du premier caractère est située à l'index `0` et les autres suivent dans un ordre incrémental. Différentes méthodes sont disponibles pour les chaînes de caractères et retournent une nouvelle valeur. Ces méthodes sont décrites ci-dessous.

| Nom                  | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `charAt()`           | Renvoie un caractère à l'index spécifié en paramètre                                                                             |
| `charCodeAt()`       | Renvoie le caractère Unicode à l'index spécifié en paramètre                                                                     |
| `concat()`           | Renvoie deux chaînes ou plus passées en paramètres combinées                                                                     |
| `constructor`        | Renvoie le constructeur d'une chaîne de caractères                                                                               |
| `endsWith()`         | Vérifie si une chaîne de caractères se termine par une valeur spécifiée en paramètre                                             |
| `fromCharCode()`     | Renvoie une chaîne de caractères créée à partir de valeurs Unicode passées en paramètres                                         |
| `includes()`         | Vérifie si une chaîne de caractères contient une valeur spécifiée en paramètre                                                   |
| `indexOf()`          | Renvoie l'index de la première occurrence de la valeur en paramètre                                                              |
| `lastIndexOf()`      | Renvoie l'index de la dernière occurrence de la valeur en paramètre                                                              |
| `length`             | Renvoie la longueur d'une chaîne de caractères                                                                                   |
| `localeCompare()`    | Compare deux chaînes de caractères en incorporant les règles lexicographiques de la locale                                       |
| `match()`            | Renvoie le tableau de correspondance entre une chaîne de caractères et une expression rationnelle passée en paramètres           |
| `prototype`          | Utilisé pour ajouter des propriétés et des méthodes à un objet                                                                   |
| `repeat()`           | Renvoie une nouvelle chaîne de caractères d'un nombre de copies spécifié en paramètre                                            |
| `replace()`          | Renvoie une nouvelle chaîne dans laquelle tout ou partie des valeurs sont remplacées par un modèle défini                        |
| `search()`           | Exécute une recherche dans une chaîne de caractères grâce à une expression rationnelle et renvoie le premier index correspondant |
| `slice()`            | Renvoie une chaîne de caractères contenant une partie de la chaîne initiale                                                      |
| `split()`            | Divise une chaîne de caractères en un tableau de sous-chaînes                                                                    |
| `startsWith()`       | Vérifie si une chaîne de caractères commence par le caractère spécifié                                                           |
| `substr()`           | Extrait une partie de chaîne, depuis un index de départ                                                                          |
| `substring()`        | Extrait une partie de chaîne, entre deux index spécifiés en paramètres                                                           |
| `toLocalLowerCase()` | Renvoie une chaîne avec des caractères en minuscule en utilisant la local lexicographique de l'utilisateur                       |
| `toLocalUpperCase()` | Renvoie une chaîne avec les caractères en majuscule en utilisant la local lexicographique de l'utilisateur                       |
| `toLowerCase()`      | Renvoie une chaîne avec des caractères en minuscule                                                                              |
| `toString()`         | Renvoie une chaîne ou un objet chaîne de caractère sous forme de chaîne                                                          |
| `toUpperCase()`      | Renvoie une chaîne avec des caractères en minuscule                                                                              |
| `trim()`             | Renvoie une chaîne de caractères dépourvue des espaces                                                                           |
| `trimEnd()`          | Renvoie une chaîne de caractères dépourvue des espaces à la fin                                                                  |
| `trimStart()`        | Renvoie une chaîne de caractères dépourvue des espaces au début                                                                  |
| `valueOf()`          | Renvoie la valeur primitive d'une chaîne ou d'un objet chaîne de caractères                                                      |
