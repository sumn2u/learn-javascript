# Template Literals

# टेम्प्लेट शाब्दिक

Template literals are literals delaminated with backtick `(``)` and are used in variable and expression interpolation into strings.&#x20;

टेम्प्लेट शाब्दिक हरू ब्याकटिक `(``)` को साथ डिलेमिनेटेड शाब्दिकहरू हुन् र स्ट्रिंगहरूमा चर र अभिव्यक्ति प्रक्षेपमा प्रयोग गरिन्छ।

```javascript
let text = `Hello World!`;
// template literals with both single and double code inside a single string
let text = `He's often called "Johnny"`;
// template literals with multiline strings
let text =
`The quick
brown fox
jumps over
the lazy dog`;

// template literals with variable interpolation
const firstName = "John";
const lastName = "Doe";

const welcomeText = `Welcome ${firstName}, ${lastName}!`;

// template literals with expression interpolation
const price = 10;
const VAT = 0.25;

const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

&#x20;
