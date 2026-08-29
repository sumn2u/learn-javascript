---
chapter: 8
pageNumber: 55
description: இந்த அத்தியாயம் இட சிக்கலானதை (space complexity) விளக்குகிறது, இது உள்ளீட்டு அளவோடு (input size) தொடர்புடைய ஒரு அல்காரிதத்தின் நினைவகப் பயன்பாட்டை (memory usage) அளவிடுகிறது. வெவ்வேறு அல்காரிதம்கள் நினைவகத்தை எவ்வாறு பயன்படுத்துகின்றன என்பதை விளக்க ஜாவாஸ்கிரிப்டில் உள்ள எடுத்துக்காட்டுகளை இது உள்ளடக்கியது. மாறுபட்ட உள்ளீட்டு அளவுகளுடன் நினைவகத் தேவைகள் எவ்வாறு மாறுகின்றன என்பதைப் புரிந்துகொள்வதில் கவனம் செலுத்தப்படுகிறது.
---

# இட சிக்கலானது (Space Complexity)

இட சிக்கலானது (Space complexity) என்பது ஒரு நிரலின் உள்ளீட்டின் அளவைப் பொறுத்து (size of the input) இயங்குவதற்கு (run) எடுக்கும் நினைவகத்தின் (memory) அளவாகும்.

இந்த அத்தியாயத்தில், பின்வரும் இட சிக்கல்களைப் பற்றி அறிந்து கொள்வோம்:

- O(n) - நேரியல் இட சிக்கலானது (linear space complexity)
- O(n^2) - இருபடி இட சிக்கலானது (quadratic space complexity)
- O(1) - நிலையான இட சிக்கலானது (constant space complexity) 

### **நேரியல் இட சிக்கலானது (Linear Space Complexity): O(n)**
செயல்படுத்தத் தேவையான நினைவகத்தின் அளவு உள்ளீட்டின் அளவிற்கு விகிதாசாரமாக (proportional) இருந்தால் ஒரு அல்காரிதம் நேரியல் இட சிக்கலானது.

**எடுத்துக்காட்டு:**
```javascript
function squareElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
}

const myArray = [1, 2, 3, 4, 5];
console.log(squareElements(myArray)); // வெளியீடு: [1, 4, 9, 16, 25]
```
இந்த எடுத்துக்காட்டில், இட சிக்கலானது O(n) ஆகும், ஏனெனில் result வரிசையானது (array) உள்ளீட்டு வரிசையான `arr` இன் விகிதத்தில் வளர்கிறது.

### **இருபடி இட சிக்கலானது (Quadratic Space Complexity): O(n^2)**
தேவைப்படும் நினைவகம் உள்ளீட்டு அளவின் வர்க்கத்திற்கு (square of the input size) விகிதாசாரமாக வளர்கிறது.

**எடுத்துக்காட்டு:**
```javascript
function createMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    return matrix;
}

const matrix = createMatrix(3);
console.log(matrix); // வெளியீடு: [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
```

உள்ளீட்டு அளவு `n` உடன் தேவையான இடம் இருமடியாக (quadratically) வளர்கிறது.

### **நிலையான இட சிக்கலானது (Constant Space Complexity): O(1)**
உள்ளீட்டு அளவைப் பொருட்படுத்தாமல் தேவைப்படும் நினைவகம் அப்படியே இருக்கும்.

**எடுத்துக்காட்டு:**
```javascript
function printCube(num) {
    const result = num * num * num;
    console.log(result);
}

printCube(3); // வெளியீடு: 27
```

தேவையான இடம் உள்ளீட்டு அளவைப் பொறுத்தது அல்ல.
