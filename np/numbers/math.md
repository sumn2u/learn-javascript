# Math

# गणित

The `Math` object allows performing mathematical operations in JavaScript. The Math object is static and doesn't have a constructor. One can use method and properties of Math object without creating a Math object first. For accessing its property one can use _Math.property._ Some of the math properties are described below: \_\_

`मथको वस्तुले जाभास्क्रिप्टमा गणितीय अपरेशनहरू प्रदर्शन गर्दछ। गणित वस्तु स्थिर छ र एक कन्स्ट्रक्टर छैन। एकले पहिले गणित वस्तु सिर्जना बिना विधि र गुणहरू प्रयोग गर्न सक्दछ। यसको सम्पत्ति पहुँचको लागि एकले _ निर्माता ._ गणित गुणहरू तल वर्णन गरिएको छ: \ _ \ _

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

Examples of some of the math methods&#x20;

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

यसको विधि पहुँच गर्न, एक आवश्यक तर्कको साथ यसको विधिहरू कल गर्न सक्दछ।

| Method             | Description                                                                     |

| विद्युतन | वर्णन |
| ------------------ | ------------------------------------------------------------------------------- |
| `abs(x)`           | Returns absolute value of `x`                                                   |

| `एक्स (x) | `X` को पूर्ण मान फिर्ता
| `acos(x)`          | Returns arccosine of `x`, in radians                                            |

| `acos (x)` | रेडियोमा `x` को पार्सरिन फर्काउँछ
| `acosh(x)`         | Returns hyperbolic arccosine of `x`                                             |

| `acosh (x) | `X` | को हाइपरबोलिक पार्सिंगेन फर्काउँछ
| `asin(x)`          | Returns arcsine of `x`, in radians                                              |

| `Asin (x) | रेडियोमा `x` को आर्टिन फर्काउँछ |
| `asinh(x)`         | Returns hyperbolic arcsine of `x`                                               |

| `Asinh (x) | `X` | को हाइपरबोलिक आर्कन्ट्स फर्काउँछ
| `atan(x)`          | Returns arctangent of `x` as a numeric value between `-PI/2` and `PI/2` radians |

| `onan (x)` | `-PI / 2` र` र `र` को बीचमा संख्यात्मक मूल्यको रूपमा `x` को आर्क्द्ध
| `atan2(y,x)`       | Returns arctangent of the quotient of its arguments                             |

| `onan2 (y, x)` | यसको तर्कहरूको स्वीकृतिको आर्क्टिन फर्काउँछ |
| `atanh(x)`         | Returns hyperbolic arctangent of `x`                                            |

| `atanh (x)` | `X` | को हाइपरबोलिक आर्क्टिन्ट फर्काउँछ
| `crbt(x)`          | Returns cubic root of `x`                                                       |

| `crbt (x)` | `X` | को क्युबिक जड फर्काउँछ
| `ceil(x)`          | Returns rounded upwards to the nearest integer of `x`                           |

| `सिल (x)` | `X` | को नजिकको पूर्णांकमा माथि फर्काउँछ
| `cos(x)`           | Returns consine of `x`, in radians                                              |

| `cos (x)` | रेडियोमा `x` को तुलना
| `cosh(x)`          | Returns hyperbolic cosine of `x`                                                |

| `cosh (x)` | `X` | को हाइपरबोलिक कोसिन फिर्ता
| `exp(x)`           | Returns exponential value of `x`                                                |
| `floor(x)`         | Returns round downwards to the neareast integer of `x`                          |

| `भुइँ (X) | `X` को नजिकको पूर्णांकमा राउन्ड तल फर्किन्छ
| `log(x)`           | Returns natural logarithmetic of `x`                                            |

| `लग (x)` | `X` को प्राकृतिक लगर्जिनटिक फिर्ता
| `max(x,y,z,... n)` | Returns number with the highest value                                           |

| `अधिकतम (x, y, z, ... n) | उच्चतम मान संग नम्बर फिर्ता
| `min(x,y,z,... n)` | Returns number with the lowest value                                            |

| `मिनेट (x, y, z, ... n) | सबैभन्दा कम मानको साथ नम्बर फिर्ता
| `pow(x,y)`         | Returns value of `x` to the power of `y`                                        |

| `pow (x, y) | | `X` को मान फिर्ता` y` `` |
| random()           | Returns number between 0 and 1                                                  |

| अनियमित () | 0 र 1 बीचको नम्बर फर्काउँछ
| round(x)           | Rounds number to the neareast x                                                 |

| गोल (x) | नजिकको एक्स | मा गोल नम्बर |
| sign(x)            | Returns if x is negative, `null` or positive (-1,0,1)                           |

| चिन्ह (x) | X मा फर्किन्छ यदि X नकारात्मक छ भने, `nul`` वा सकारात्मक (-1,0,1) |
| sin(x)             | Returns sine of x, in radians                                                   |

| पाप (x) | रेडियोमा एक्स अफस् फर्काऊ
| sinh(x)            | Returns hyperbolic sine of x                                                    |

| पाप (x) | X को हाइपरबोलिक साइन फर्काउँछ |
| sqrt(x)            | Returns square root of x                                                        |

| SQRT (X) | X को वर्गमूल फर्काउँछ || tan(x)             | Returns tangent of an angle                                                     |

| ट्यान (x) | एक कोण को suntents फिर्ता |
| tanh(x)            | Returns hyperbolic tangent of x                                                 |

| तात्र (x) | X को हाइपरबोलिक ट्यान्जेन |
| trunc(x)           | Returns integer part of a number (x)                                            |

| ट्रंक (x) | | संख्या (x) | को पूर्णांक भाग फर्काउँछ

