# Basics (आधारभूत कुराहरू)

In this first chapter, we'll learn the basics of programming and the Javascript language.

यस पहिलो अध्यायमा हामी प्रोग्रामिंग र जाभास्क्रिप्ट भाषाको आधारभूत कुरा सिक्नेछौं।

Programming means writing code. A book is made up of chapters, paragraphs, sentences, phrases, words, and finally punctuation and letters, likewise a program can be broken down into smaller and smaller components. For now, the most important is a statement. A statement is analogous to a sentence in a book. On its own, it has structure and purpose, but without the context of the other statements around it, it isn't that meaningful.

प्रोग्रामिंगको अर्थ कोड लेख्ने हो। अध्याय अध्याय, अनुच्छेद, वाक्य, वाक्यांशहरू, र अन्तमा विराम चिह्नहरू, र अन्तमा विराम चिह्नहरू मिलेर बनेको छ, त्यस्तै कार्यक्रमलाई साना र साना कम्पोनेन्टहरूमा बिच्छेद गर्न सकिन्छ। अहिलेको लागि, सबैभन्दा महत्त्वपूर्ण एक बयान हो। एक बयाई एक पुस्तक मा एक वाक्य को एक वाक्य को रूपैगी छ। आफ्नै आफ्नै संरचना र उद्देश्य छ, तर वरपर अन्य कथनहरूको सन्दर्भ बिना यो अर्थपूर्ण छैन।

A statement is more casually (and commonly) known as a _line of code_. That's because statements tend to be written on individual lines. As such, programs are read from top to bottom, left to right. You might be wondering what code (also called source code) is. That happens to be a broad term which can refer to the whole of the program or the smallest part. Therefore, a line of code is simply a line of your program.

एक कथन अधिक अनौपचारिक (र सामान्य रूपमा) को 'को लागी एक _ लाईको रूपमा परिचित छ। त्यो किनभने बयान व्यक्तिगत लाइनहरूमा लेखिएको हुन्छ। त्यस्तै, कार्यक्रमहरू माथिबाट तलबाट तल पढिन्छ, बाँयामा दायाँ। तपाईं कुन कोडमा सोच्दै हुनुहुन्छ (स्रोत कोड पनि भनिन्छ) हो। त्यो एक फराकिलो अवधि हुन सक्छ जुन सम्पूर्ण कार्यक्रम वा सब भन्दा सानो भागमा सन्दर्भ गर्न सक्दछ। त्यसकारण, कोडको लाइन मात्र तपाईंको प्रोग्रामको लाइन हो।

Here is a simple example:

यहाँ एक साधारण उदाहरण छ:

```javascript
let hello = "Hello";
let world = "World";

// Message equals "Hello World"
let message = hello + " " + world;
```

This code can be executed by another program called an _interpreter_ that will read the code, and execute all the statements in the right order.

यो कोड अर्को प्रोग्राम द्वारा कार्यान्वयन गर्न सकिन्छ एक _इन्टपरपरेटर_ भनिन्छ जुन कोड पढ्नेछ, र सही क्रममा सबै कथनहरू कार्यान्वयन गर्दछ।
