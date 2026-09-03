---
chapter: 19
pageNumber: 113
description: டெம்ப்ளேட் லிட்டரல்கள் (Template literals) என்பவை பேக்டிக் `(``)` உடன் பிரிக்கப்பட்ட லிட்டரல்கள் (literals) மற்றும் சரங்களில் (strings) மாறி (variable) மற்றும் கோவை இடைக்கணிப்பில் (expression interpolation) பயன்படுத்தப்படுகின்றன.
---
# டெம்ப்ளேட் லிட்டரல்கள் (Template Literals)

டெம்ப்ளேட் லிட்டரல்கள் (Template literals) என்பவை பேக்டிக் `(``)` உடன் பிரிக்கப்பட்ட லிட்டரல்கள் மற்றும் சரங்களில் (strings) மாறி மற்றும் கோவை இடைக்கணிப்பில் பயன்படுத்தப்படுகின்றன.&#x20;

```javascript
let text1 = `Hello World!`;
// ஒரு சரத்தில் (single string) ஒற்றை மற்றும் இரட்டை மேற்கோள்களுடன் (single and double quotes) டெம்ப்ளேட் லிட்டரல்கள் (template literals)
let text2 = `He's often called "Johnny"`;
// பல் வரி சரங்களுடன் (multiline strings) டெம்ப்ளேட் லிட்டரல்கள்
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;

// மாறி இடைக்கணிப்புடன் (variable interpolation) டெம்ப்ளேட் லிட்டரல்கள்
const firstName = "John";
const lastName = "Doe";

const welcomeText = `Welcome ${firstName}, ${lastName}!`;

// கோவை இடைக்கணிப்புடன் (expression interpolation) டெம்ப்ளேட் லிட்டரல்கள்
const price = 10;
const VAT = 0.25;

const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

&#x20;
