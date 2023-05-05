# Events

In programming, _events_ are actions or occurrences in a system that the system informs you about so you can respond to them. For example, when you click the reset button it clears the input.&#x20;

प्रोग्रामिंगमा, _ वासैनिकहरू_ कार्यहरूमा कार्यहरू वा घटनाहरू हुन् जुन प्रणालीले तपाईंलाई यसको बारेमा जानकारी दियो ताकि तपाईं तिनीहरूलाई प्रतिक्रिया दिन सक्नुहुन्छ। उदाहरण को लागी, जब तपाईं रिसेट बटन क्लिक गर्नुहुन्छ यसले इनपुटलाई खाली गर्दछ। & # X20;

Interactions from the keyboard such as keypresses need to be constantly read to catch the key’s state before it’s released again.  Performing other time-intensive computations might cause you to miss a key press. This used to be the input handling mechanism of some primitive machines. A further step up is to use a queue, I.e. a program that periodically checks the queue for new events and reacts to it. This approach is called _polling_.

कुञ्जीप्रेटीबाट अन्तर्क्रियाहरू जस्तै कुञ्जीप्रेसहरू लगातार पढ्न लगातार पढ्न आवश्यक छ यो फेरि जारी गर्नु अघि कुञ्जी राज्यलाई समात्न आवश्यक छ। अन्य समय-गहन कम्पनीहरू प्रदर्शन गर्दै तपाईंलाई एउटा मुख्य प्रेस छुटाउन सक्छ। यो केहि आदिम मेशिनहरूको इनपुट ह्यान्डलिंग संयन्त्र हुन प्रयोग गरियो। अर्को कदम माथि एक लाम प्रयोग गर्नु हो, i.e. एक कार्यक्रम जुन आवधिक रूपमा नयाँ घटनाहरूको लागि कतार जाँच गर्दछ र यसलाई प्रतिक्रिया गर्दछ। यो दृष्टिकोणलाई _polling_ भनिन्छ।

The main drawback of this approach is that it has to look at the queue every now and then, causing disruption when an event is triggered. The better mechanism for this is to notify the code when an event occurs.  This is what modern browsers do by allowing us to register functions as _handlers_ for specific events.

यस दृष्टिकोणको मुख्य कमजोरी यो हो कि यो सबै अहिले र त्यसपछि, जब घटना ट्रिगर गरिएको छ भने, अवरोध पैदा गर्नुपर्दछ। यसको लागि राम्रो संयन्त्र कोड सूचित गर्नु हो जब घटना हुन्छ। यो आधुनिक ब्राउजरहरू हो जुन हामीलाई निर्दिष्ट घटनाहरूको लागि _चन्डर_ को रूपमा कार्यहरू दर्ता गर्न अनुमति दिँदै गर्दछ।

```javascript
<p>Click me to activate the handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("clicked");
  });
</script>
```

Here, the `addEventListener` is called on the `window` object (built-in object provided by the browser) to register a handler for the whole `window`. Calling its `addEventListener` method registers the second argument to be called whenever the event described by its first argument occurs.

यहाँ, `Addderlitlister` मा` विन्डो` को आंकडा (निर्मित वस्तु (निर्मित वस्तु द्वारा प्रदान गरिएको एक ह्यान्डलर प्रदान गर्न सम्पूर्ण `विन्डो को लागी एक ह्यान्डलर दर्ता गर्न। यसको लागि कल गर्दै `ADDERIVELISTRENGRINGR` Questive यस पहिलो तर्कले वर्णन गरेको घटना हुन्छ जहाँ यसको पहिलो तर्क बाहेक वर्णन गरिएको घटना हो।

{% hint style="info" %}


Event listeners are called only when the event happens in the context of the object they are registered on.

घटना श्रोताहरूलाई मात्र भनिन्छ जब घटना तिनीहरू वस्तुको सन्दर्भमा दर्ता गरिन्छ।
{% endhint %}

Some of the common HTML events are mentioned here.

केहि सामान्य HTML घटनाहरू उल्लेख गरिएका छन्।

| Event         | Description                                               |
| ------------- | --------------------------------------------------------- |
| `onchange`    | When the user changes or modifies the value of form input |

| `अपरिवर्तनीय | | जब प्रयोगकर्ताले फारम इनपुटको मान परिवर्तन गर्दछ वा परिमार्जन गर्दछ
| `onclick`     | When the user clicks on the element                       |

| `अनक्कीक्निक | जब प्रयोगकर्ता जियोसमा क्लिक गर्दछ
| `onmouseover` | When cursor of the mouse comes over the element           |

| `inmungose` | जब माउसको कर्सर तत्वमा आउँछ
| `onmouseout`  | When cursor of the mouse comes leaves the element         |

| `Inm आंकआउटआउट माउसको कर्सरमा आउँदछ
| `onkeydown`   | When the user press and then releases the key             |

| `ओन्कीडडड` | जब प्रयोगकर्ता प्रेस गर्दछ र त्यसपछि कुञ्जी रिहा हुन्छ |
| `onload`      | When the browser has finished the loading                 |

| `ओसलोड | जब ब्राउजर लोड समाप्त भयो

It is common for handlers registered on nodes with children to also receive events from the children. For example, if a button inside a paragraph is clicked, handlers registered on the paragraph will also receive the click event. In case of the presence of handlers in both, the one at the bottom gets to go first. The event is said to _propagate_ outward, from the initiating node to its parent node and on the root of the document.

युवाहरूसँग बच्चाहरूसँगै दर्ता भएका छन् बच्चाहरू सँग पनि बच्चाहरूबाट घटनाहरू प्राप्त गर्न सामान्य छ। उदाहरण को लागी, यदि एक अनुच्छेद भित्र एक बटन क्लिक, अनुच्छेद मा दर्ता गरिएको छ भने क्लिक घटना प्राप्त हुनेछ। दुबैमा ह्यान्डलरको उपस्थितिमा, तल एक पहिले जान जान्छ। कार्यक्रममा _propagote_ बाहिर भनिन्छ, यसको अभिभावक नोडमा र कागजातको जडमा।

The event handler can call the `stopPropagation` method on the event object to prevent handlers further up from receiving the event. This is useful in cases like, you have a button inside a clickable element and you don’t want to trigger the outer element's clickable behavior from a button click.

घटना ह्यान्डलरले कार्यक्रमको वस्तुमा `स्टपप्रोट्यूशन (ह्यान्डलरहरू अगाडि बढ्नबाट रोक्नको लागि घटना वस्तुमा कल गर्न सक्दछ। यो केसहरूमा उपयोगी छ जस्तो, तपाईंसँग क्लिक योग्य तत्व भित्र बटन छ र तपाईं एक बटन क्लिकबाट बाहिरी तत्वको क्लिकपबल व्यवहार ट्रिगर गर्न चाहनुहुन्न।

```javascript
<p>A paragraph with a <button>button</button>.</p>
<script>
  let para = document.querySelector("p"),
      button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Paragraph handler.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Button handler.");
    event.stopPropagation();
  });
</script> 
```

Here, the “_`mousedown`_” handlers are registered by both paragraph and button. Upon clicking the button, the handler for the button calls `stopPropagation`, which will prevent the handler on the paragraph from running.

यहाँ, "_ _ मंडिडाउन`_" ह्यान्डलरहरू दुबै अनुच्छेद र बटन द्वारा दर्ता छन्। बटन क्लिक गरेर, बटनले ह्यान्डलरको लागि ह्यान्डलरलाई आह्वान गर्दछ, जसले ह्यान्डलरलाई चार्जमा रोक्दछ।

Events can have a default behavior. For example, links navigate to the link’s target upon click, you get navigated to the bottom of a page upon clicking the down arrow, and so on. These default behaviors can be prevented by calling a `preventDefault` method on the event object.

घटनाहरू पूर्वनिर्धारित व्यवहार हुन सक्छ। उदाहरण को लागी, लिंक लिंक को लक्ष्य मा नेभिगेटिग, तपाईं एक पृष्ठ को तल नेभगेट प्राप्त गर्न को लागी तल एर्रो क्लिक गर्दा र यस्तै। यी पूर्वनिर्धारित व्यवहार घटना वस्तुमा `डिग्रीडफेफल्ट` विधिलाई कल गरेर रोक्न सकिन्छ।

```javascript
<a href="https://developer.mozilla.org/">MDN</a>
<script>
  let link = document.querySelector("a");
  link.addEventListener("click", event => {
    console.log("Nope.");
    event.preventDefault();
  });
</script>
```

link'sHere, the default behavior of the link upon click is prevented, i.e. navigating towards the link' target.

लि Clow ्क देशको पूर्वनिर्धारित व्यवहार क्लिक गर्नुहोस् क्लिक गर्नुहोस् क्लिक गर्नुहोस् क्लिक गर्नुहोस्।

