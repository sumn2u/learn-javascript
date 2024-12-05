---
chapter: 26
pageNumber: 254
description: Création d’animations avec Anime.js, une bibliothèque d’animations JavaScript légère.
---

## Création d’animations avec Anime.js

Anime.js s’agit d’une bibliothèque d’animation JavaScript légère dotée d’une API simple mais puissante.

**Installation**

Vous pouvez inclure Anime.js dans votre projet à l’aide de npm :

```bash
npm install animejs
```

Vous pouvez également utiliser un CDN :

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
```

**Animation de base**

Voici un exemple simple d’utilisation de Anime.js pour animer un élément :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation Anime.js</title>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background-color:red;"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script>
        anime({
            targets: '#box',
            translateX: 250,
            duration: 1000
        });
    </script>
</body>
</html>
```

**Animation avancée**

Anime.js fournit diverses fonctionnalités pour les animations avancées, telles que les images clés, la chronologie et l’accélération.


- **Images clés:**
Les images clés vous permettent de définir plusieurs étapes d’une animation. Voici un exemple:

```javascript
anime({
    targets: '#box',
    keyframes: [
        {translateX: 100},
        {translateY: 100},
        {translateX: 0},
        {translateY: 0}
    ],
    duration: 4000
});
```


- **Chronologie:**
Les chronologies vous permettent de séquencer des animations. Voici un exemple:

```javascript
var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

tl.add({
    targets: '#box',
    translateX: 250
}).add({
    targets: '#box',
    translateY: 250
}, '-=500'); // Démarre 500 ms avant la fin de l’animation précédente
```


- **Assouplissement:**
Anime.js offre une variété d’options d’accélération pour rendre les animations plus naturelles. Voici un exemple:

```javascript
anime({
    targets: '#box',
    translateX: 250,
    duration: 1000,
    easing: 'easeInOutQuad'
});
```

{% hint style="info" %}
Pour plus de détails et d’exemples, consultez la documentation Anime.js.
{% endhint %}