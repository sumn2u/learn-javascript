---
chapter: 26
pageNumber: 254
description: Création d’animations rapides avec Velocity.js, un moteur d’animation performant.
---

## Animations rapides avec Velocity.js

Velocity.js s’agit d’un moteur d’animation haute performance qui est facile à utiliser et qui fonctionne avec et sans jQuery.

**Installation**

Vous pouvez inclure Velocity.js dans votre projet à l’aide de npm:

```bash
npm install velocity-animate
```

Vous pouvez également utiliser un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
```

**Animation de base**
Voici un exemple simple d’utilisation de Velocity.js pour animer un élément:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation Velocity.js</title>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background-color:red;"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js"></script>
    <script>
        Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000 });
    </script>
</body>
</html>
```

**Animation avancée**

Velocity.js fournit diverses fonctionnalités pour les animations avancées, telles que les séquences, l’accélération et les animations SVG.

- **Séquences**

Les séquences vous permettent d’enchaîner les animations. Voici un exemple:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000 })
    .then(() => {
        return Velocity(document.getElementById('box'), { top: "100px" }, { duration: 1000 });
    });
```


- **Assouplissement**

Velocity.js offre une variété d’options d’accélération pour rendre les animations plus naturelles. Voici un exemple:

```javascript
Velocity(document.getElementById('box'), { left: "100px" }, { duration: 1000, easing: "spring" });
```


- **Animations SVG**

Velocity.js pouvez également animer des éléments SVG. Voici un exemple:

```javascript
Velocity(document.querySelector('svg'), { strokeDashoffset: 0 }, { duration: 1000 });
```

{% hint style="info" %}
Pour plus de détails et d’exemples, consultez la documentation Velocity.js.
{% endhint %}
