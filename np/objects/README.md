# Objects

In javascript the objects are **mutable** because we change the values pointed by the reference object, instead, when we change a primitive value we are changing its reference which now is pointing to the new value and so primitive are **immutable**. The primitive types of JavaScript are `true`, `false`, numbers, strings, `null` and `undefined`. Every other value is an `object`.Objects contain `propertyName`: `propertyValue` pairs. There are three ways to create an `object` in JavaScript:

जाभास्क्रिप्टमा वस्तुहरू ** ismable ** किनभने हामी सन्दर्भ वस्तुले पोस्ट गर्ने वस्तुहरू परिवर्तन गर्दछौं, जब हामी यससँग नयाँ मान परिवर्तन गर्दैछौं ** अपरिवर्तनीय * * जाभास्क्रिप्टका आदिम प्रकारहरू `सही ',` झूटा, संख्या, तारहरू, `nul`ned र un अपहीन"। प्रत्येक अन्य मान भनेको एक `वस्तु` हो। जाभास्क्रिप्टमा `वस्तु` सिर्जना गर्न तीन तरिकाहरू छन्:

1.  literal

    ```javascript
    let object = {};
    // Yes, simply a pair of curly braces!

// हो केवल घुमाउरो कोष्ठक को एक जोडी!
    ```

    > _**Note:**_ this is the **recommended** way.

> _ ** नोट: ** _ यो ** सिफारिस गरिएको ****।
2.  object-oriented

2. वस्तु उन्मुख

    ```javascript
    let object = new Object();
    ```

    > _**Note:**_ it's almost like Java.
3.  and using `object.create`

And। र `वस्तु

    ```javascript
    let object = Object.create(proto[, propertiesObject]);

वस्तु = वस्तु = वस्तु
    ```

    > _**Note:**_ it creates a new object with the specified prototype object and properties.

> _ ** नोट: ** _ _ _ यसले निर्दिष्ट प्रोटोटाइप वस्तु र गुणहरूको साथ नयाँ वस्तु सिर्जना गर्दछ।
