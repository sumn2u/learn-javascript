---
chapter: 16
pageNumber: 82
description: L'objet screen contient des informations sur l'écran sur lequel la fenêtre actuelle est affichée. Il permet aux développeurs d'accéder aux propriétés liées à la taille de l'écran de l'utilisateur, à la résolution, à la profondeur des couleurs et à d'autres informations relatives à l'affichage.
---

# Screen (écran)

L'objet `screen` contient des informations sur l'écran sur lequel la fenêtre courante est affichée. Pour accéder à l'objet `screen`, nous pouvons utiliser la propriété `screen` de l'objet `window`.

```javascript
window.screen;
//ou
screen;
```

L'objet `window.screen` possède différentes propriétés, dont certaines sont listées ici :

| Propriété     | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `height`      | Représente la hauteur en pixels de l'écran                                                                       |
| `left`        | Représente la distance en pixels du côté gauche de l'écran actuel                                                |
| `pixelDepth`  | Propriété en lecture seule qui renvoie la profondeur de bits de l'écran                                          |
| `top`         | Représente la distance en pixels du haut de l'écran actuel                                                       |
| `width`       | Représente la largeur en pixels de l'écran                                                                       |
| `orientation` | Retourne l'orientation de l'écran telle que spécifiée dans l'API Orientation de l'écran                          |
| `availTop`    | Propriété en lecture seule qui renvoie le premier pixel du haut qui n'est pas occupé par des éléments du système |
| `availWidth`  | Propriété en lecture seule qui renvoie la largeur en pixels de l'écran sans les éléments du système              |
| `colorDepth`  | Une propriété en lecture seule qui renvoie le nombre de bits utilisés pour représenter les couleurs              |
