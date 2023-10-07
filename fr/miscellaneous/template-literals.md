---
chapter: 19
pageNumber: 93
description: Les templates literals sont des literales (expressions) délimitées par des backticks (accent grave) ` ` et sont utilisées lorsque l'on fait l'interpolation de varibles dans une chaîne de caractères.
---
# Les Template Literals

Les templates literals sont des literales (expressions) délimitées par des backticks (accent grâve) `(``)` et sont utilisées lorsque l'on fait l'interpolation de varibles dans une chaîne de caractères.&#x20;

```javascript
let text = `Hello World!`;
// Les templates literals avec simple quote et double quote sur une même chaîne (sans échappement)
let text = `He's often called "Johnny"`;
// Les templates litterals en multiligne
let text =
`The quick
brown fox
jumps over
the lazy dog`;

// Les templates literals avec l'interpolation de variable
const firstName = "John";
const lastName = "Doe";

const welcomeText = `Welcome ${firstName}, ${lastName}!`;

// Les templates literals avec l'interpolation d'une expression
const price = 10;
const VAT = 0.25;

const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

&#x20;
