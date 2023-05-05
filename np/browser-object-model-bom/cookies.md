# Cookies

Cookies are pieces of information that are store on a computer and can be accessed by the browser.

कुकीज जानकारीको टुक्राहरू हुन् जुन कम्प्युटरमा स्टोर हुन् र ब्राउजर द्वारा पहुँच गर्न सकिन्छ।

Communication between a web browser and the server is stateless meaning that it treats each request independently. There are cases where we need to store user information and make that information available to the browser. With cookies, information can be fetched from the computer whenever it is required.

वेब ब्राउजर बीचको सञ्चार हो र सर्भरले मानव अर्थहीन अर्थ हो कि यसले प्रत्येक अनुरोधलाई स्वतन्त्र रूपमा व्यवहार गर्दछ। त्यहाँ त्यस्ता केसहरू छन् जहाँ हामीले प्रयोगकर्ता जानकारी भण्डारण गर्न र यो जानकारी ब्राउजरमा उपलब्ध गराउन आवश्यक छ। कुकीजको साथ, जानकारी कम्प्युटरबाट कम्प्युटरबाट ल्याउन सकिन्छ जब यो आवश्यक हुन्छ।

Cookies are saved in name-value pair

```javascript
book = Learn Javascript
```

`document.cookie` property is used to create, read and delete cookies.Creating cookie is pretty easy you need to provide the name and value

`कागजात

```javascript
document.cookie = "book=Learn Javacript";
```

By default, a cookie gets deleted when the browser is closed. To make it persistent, we need to specify the expiry date(in UTC time).

पूर्वनिर्धारित द्वारा, कुकी मेटाइन्छ जब ब्राउजर बन्द हुन्छ। यसलाई निरन्तर बनाउन, हामीले समाप्ति मिति निर्दिष्ट गर्न आवश्यक छ (USC समय मा)।

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

We can add a parameter to tell which path the cookie belongs to. By default, the cookie belongs to the current page.

हामी प्यारामिटर थप्न सक्दछौं कि कुकी को लागी कुन मार्गमा सम्बन्धित छ। पूर्वनिर्धारित द्वारा, कुकी हालको पृष्ठमा छ।

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

Here is a simple example of a cookie.

यहाँ कुकीको साधारण उदाहरण छ।

```javascript
let cookies = document.cookie;
// a simple way to reterive all cookie.

document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// setting up a cookie
```
