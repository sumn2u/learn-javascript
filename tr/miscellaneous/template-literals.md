---
chapter: 19
pageNumber: 93
---

# Template Literals

Template literals ` (``) ` backtick'i ile ayrıştırılmış literallerdir ve dizelere değişken ve ifade eklemesinde kullanılırlar.&#x20;

```javascript
let text = `Hello World!`;
// tek bir dize içinde hem tek hem de çift kod içeren template literals
let text = `He's often called "Johnny"`;
// çoklu satırlı template literals
let text = `The quick
brown fox
jumps over
the lazy dog`;

// değişken içeren template literals
const firstName = "John";
const lastName = "Doe";

const welcomeText = `Welcome ${firstName}, ${lastName}!`;

// ifade içeren template literals
const price = 10;
const VAT = 0.25;

const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

&#x20;
