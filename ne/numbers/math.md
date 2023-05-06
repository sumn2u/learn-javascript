# Mat (गणित)

The `Math` object allows performing mathematical operations in JavaScript. The Math object is static and doesn't have a constructor. One can use method and properties of Math object without creating a Math object first. For accessing its property one can use _Math.property._ Some of the math properties are described below:

`गणित (Math)` वस्तुले जाभास्क्रिप्टमा गणितीय सञ्चालनहरू प्रदर्शन गर्न अनुमति दिन्छ। गणित वस्तु स्थिर छ र कन्स्ट्रक्टर छैन। पहिले गणित वस्तु सिर्जना नगरी गणित वस्तुको विधि र गुणहरू प्रयोग गर्न सकिन्छ। यसको सम्पत्ति पहुँचका लागि _Math.property._ प्रयोग गर्न सकिन्छ। गणितका केही गुणहरू तल वर्णन गरिएका छन्:

```javascript
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
```

Examples of some of the math methods:

केही गणित विधिहरू मध्ये केही र # X20;

```javascript
Math.pow(8, 2); // 64
Math.round(4.6); // 5
Math.ceil(4.9); // 5
Math.floor(4.9); // 4
Math.trunc(4.9); // 4
Math.sign(-4); // -1
Math.sqrt(64); // 8
Math.abs(-4.7); // 4.7
Math.sin(90 * Math.PI / 180);  // 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180); // 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
Math.random(); // 0.44763808380924375
Math.log(2); // 0.6931471805599453
Math.log2(8); // 3
Math.log10(1000); // 3
```

To access its method, one can call its methods directly with arguments wherever necessary.

| Method             | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `abs(x)`           | Returns absolute value of `x`                                                   |
| `acos(x)`          | Returns arccosine of `x`, in radians                                            |
| `acosh(x)`         | Returns hyperbolic arccosine of `x`                                             |
| `asin(x)`          | Returns arcsine of `x`, in radians                                              |
| `asinh(x)`         | Returns hyperbolic arcsine of `x`                                               |
| `atan(x)`          | Returns arctangent of `x` as a numeric value between `-PI/2` and `PI/2` radians |
| `atan2(y,x)`       | Returns arctangent of the quotient of its arguments                             |
| `atanh(x)`         | Returns hyperbolic arctangent of `x`                                            |
| `crbt(x)`          | Returns cubic root of `x`                                                       |
| `ceil(x)`          | Returns rounded upwards to the nearest integer of `x`                           |
| `cos(x)`           | Returns consine of `x`, in radians                                              |
| `cosh(x)`          | Returns hyperbolic cosine of `x`                                                |
| `exp(x)`           | Returns exponential value of `x`                                                |
| `floor(x)`         | Returns round downwards to the neareast integer of `x`                          |
| `log(x)`           | Returns natural logarithmetic of `x`                                            |
| `max(x,y,z,... n)` | Returns number with the highest value                                           |
| `min(x,y,z,... n)` | Returns number with the lowest value                                            |
| `pow(x,y)`         | Returns value of `x` to the power of `y`                                        |
| random()           | Returns number between 0 and 1                                                  |
| round(x)           | Rounds number to the neareast x                                                 |
| sign(x)            | Returns if x is negative, `null` or positive (-1,0,1)                           |
| sin(x)             | Returns sine of x, in radians                                                   |
| sinh(x)            | Returns hyperbolic sine of x                                                    |
| sqrt(x)            | Returns square root of x                                                        |
| tan(x)             | Returns tangent of an angle                                                     |
| tanh(x)            | Returns hyperbolic tangent of x                                                 |
| trunc(x)           | Returns integer part of a number (x)                                            |


यसको विधि पहुँच गर्न, एक आवश्यक तर्कको साथ यसको विधिहरू कल गर्न सक्दछ।

| विद्युतन | वर्णन |
| ------------------ | ------------------------------------------------------------------------------- |
| `abs(x)`           | `x` को निरपेक्ष मान फर्काउँछ                                                   |
| `acos(x)`          | रेडियनमा `x` को आर्ककोसाइन फर्काउँछ                                            |
| `acosh(x)`         | `x` को हाइपरबोलिक आर्ककोसाइन फर्काउँछ                                             |
| `asin(x)`          | रेडियनमा `x` को आर्कसिन फर्काउँछ                                              |
| `asinh(x)`         | `x` को हाइपरबोलिक आर्कसिन फर्काउँछ                              |
| `atan(x)`       | `-PI/२` र `-PI/२` रेडियनबीच सङ्ख्यात्मक मानको रूपमा `x` को आर्कट्यान्जेन्ट फर्काउँछ |
| `atan2(y,x)`       | यसको तर्कको भागफलको आर्कट्यान्जेन्ट फर्काउँछ                             |
| `atanh(x)`         | `x` को हाइपरबोलिक आर्कट्यान्जेन्ट फर्काउँछ                                            |
| `crbt(x)`          | `x` को घन मूल फर्काउँछ                                                       |
| `ceil(x)`          | `x` को निकटतम पूर्णांकमा माथितिर गोलाकार फर्काउँछ                           |
| `cos(x)`           | रेडियनमा `x` को कन्साइन फर्काउँछ                                              |
| `cosh(x)`          | `x` को हाइपरबोलिक कोसाइन फर्काउँछ                                                |
| `exp(x)`           | `x` को घातीय मान फर्काउँछ                                                |
| `floor(x)`         | `x` को नजिकको पूर्व पूर्णांकमा राउन्ड तल फर्काउँछ                          |
| `log(x)`           | `x` को प्राकृतिक लघुगणक फर्काउँछ                                            |
| `max(x,y,z,... n)` | उच्चतम मानसँग नम्बर फर्काउँछ                                           |
| `min(x,y,z,... n)` | सबैभन्दा कम मान भएको सङ्ख्या फर्काउँछ                                            |
| `pow(x,y)`         | `y` को शक्तिमा `x` को मान फर्काउँछ                                        |
| random()           | ० र १ बीचको सङ्ख्या फर्काउँछ                                                  |
| round(x)           | नजिकको पूर्व एक्समा राउन्ड नम्बर                                                 |
| sign(x)            | यदि x ऋणात्मक, 'शून्य' वा धनात्मक छ भने फर्काउँछ (-१,०,१)                       फर्काउँछ    |
| sin(x)             | रेडियनमा, `x` को साइन फर्काउँछ                                                   |
| sinh(x)            | `x` को हाइपरबोलिक साइन फर्काउँछ                                                    |
| sqrt(x)            | `x` को वर्गमूल फर्काउँछ                                                        |
| tan(x)             | कोणको स्पर्शरेखा फर्काउँछ                                                     |
| tanh(x)            | `x` को हाइपरबोलिक स्पर्शरेखा फर्काउँछ                                                 |
| trunc(x)           | सङ्ख्याको पूर्णांक भाग फर्काउँछ (x)                                            |
