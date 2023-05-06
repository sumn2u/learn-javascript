# Comments

Comments are statements that will not be executed by the interpreter, comments are used to mark annotations for other programmers or small descriptions of what code does, thus making it easier for others to understand what your code does.

टिप्पणीहरू (comments) बयानहरू हुन् जसले अन्य प्रोग्रामरहरू वा के कोडले के गर्दछ भनेर सहज बनाउँदछन्।

In JavaScript, comments can be written in 2 different ways:

जाभास्क्रिप्टमा, टिप्पणीहरू २  तरीकाले लेख्न सकिन्छ:

* _Single-line comments_: It starts with two forward slashes (`//`) and continue until the end of the line. Anything following the slashes is ignored by the JavaScript interpreter. For example :&#x20;

* _एकल रेखा टिप्पणीहरू_: यो दुई फरवार्ड स्ल्याशहरू (`//`) बाट सुरु हुन्छ र रेखाको अन्त्यसम्म जारी रहन्छ। स्ल्याशहरू पछिको कुनै पनि कुरा जाभास्क्रिप्ट इन्तेर्प्रेटरद्वारा उपेक्षा गरिएको छ। उदाहरणका लागि:

```javascript
// This is a comment, it will be ignored by the interpreter
let a = "this is a variable defined in a statement";
```

* Multi-line comments: It starts with a forward slash and an asterisk (`/*`) and end with an asterisk and a forward slash (`*/`). Anything between the opening and closing markers is ignored by the JavaScript interpreter. For example:

* बहु-रेखा टिप्पणीहरू: अगाडिको स्लेश र तारांकन (`/*`) बाट सुरु हुन्छ र तारांकन र अगाडिको स्लेश (`*/`) सँग समाप्त हुन्छ। उद्घाटन र समापन मार्करहरू बीचको कुनै पनि कुरा जाभास्क्रिप्ट इन्तेर्प्रेटरद्वारा उपेक्षा गरिएको छ। उदाहरणका लागि:

```javascript
/*
This is a multi-line comment,
it will be ignored by the interpreter
*/
let a = "this is a variable defined in a statement";
```
