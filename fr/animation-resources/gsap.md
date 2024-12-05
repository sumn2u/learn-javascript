---
chapter: 26
pageNumber: 291
description: Premiers pas avec GSAP, une bibliothèque puissante pour créer des animations hautes performances.
---

## Premiers pas avec GSAP

GSAP (GreenSock Animation Platform) est une bibliothèque puissante pour la création d’animations hautes performances. Il est largement utilisé en raison de sa robustesse et de sa flexibilité.

**Installation**

Vous pouvez inclure GSAP dans votre projet à l’aide de npm: 


```bash
npm install gsap
```

Vous pouvez également utiliser un CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
```

**Animation de base**

Voici un exemple simple d’utilisation de GSAP pour animer un élément:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation GSAP</title>
</head>
<body>
    <div id="box" style="width:100px; height:100px; background-color:red;"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script>
        gsap.to("#box", {x: 100, duration: 1});
    </script>
</body>
</html>
```

**Animation avancée**

GSAP fournit diverses fonctionnalités pour les animations avancées, telles que les chronologies, l’échelonnement et l’assouplissement.


- **Chronologie:**
Les chronologies vous permettent de séquencer des animations. Voici un exemple:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```


- **Tituber:**
Tituber vous permet d’animer plusieurs éléments avec un délai entre chacun. Voici un exemple: 

```javascript
gsap.to(".box", {x: 100, duration: 1, stagger: 0.2});
```


- **Assouplissement:**
GSAP offre une variété d’options d’accélération pour rendre les animations plus naturelles. Voici un exemple:

```javascript
gsap.to("#box", {x: 100, duration: 1, ease: "bounce"});
```

{% hint style="info" %}
Pour plus de détails et d’exemples, consultez la documentation GSAP.
{% endhint %}