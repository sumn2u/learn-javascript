# Cookies (कुकीहरू)

Cookies are pieces of information that are store on a computer and can be accessed by the browser.

कुकीहरू जानकारीका टुक्राहरू हुन् जुन कम्प्युटरमा भण्डारण गरिन्छ र ब्राउजरद्वारा पहुँच गर्न सकिन्छ।

Communication between a web browser and the server is stateless meaning that it treats each request independently. There are cases where we need to store user information and make that information available to the browser. With cookies, information can be fetched from the computer whenever it is required.

वेब ब्राउजर र सर्भरबीचको सञ्चार स्टेटलेस अर्थ हो कि यसले प्रत्येक अनुरोधलाई स्वतन्त्र रूपमा व्यवहार गर्दछ। त्यहाँ केसहरू छन् जहाँ हामीले प्रयोगकर्ता जानकारी भण्डारण गर्न र ब्राउजरमा त्यो जानकारी उपलब्ध गराउन आवश्यक छ। कुकीजको साथ, आवश्यक पर्दा कम्प्युटरबाट जानकारी प्राप्त गर्न सकिन्छ।

Cookies are saved in name-value pair.

कुकीहरू नाम-मान जोडीमा बचत गरिन्छ।

```javascript
book = Learn Javascript
```

`document.cookie` property is used to create, read and delete cookies.Creating cookie is pretty easy you need to provide the name and value.

कुकीहरू सिर्जना गर्न, पढ्न र मेट्न `document.cookie` गुण प्रयोग गरिन्छ। कुकी सिर्जना गर्न धेरै सजिलो छ जुन तपाईंलाई नाम र मान प्रदान गर्न आवश्यक छ।

```javascript
document.cookie = "book=Learn Javacript";
```

By default,  a cookie gets deleted when the browser is closed. To make it persistent, we need to specify the expiry date(in UTC time).

पूर्वनिर्धारित रूपमा, ब्राउजर बन्द हुँदा कुकी मेटिन्छ। यसलाई निरन्तर बनाउन, हामीले समाप्ति मिति (यूटीसी समयमा) निर्दिष्ट गर्न आवश्यक छ।

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC";
```

We can add a parameter to tell which path the cookie belongs to. By default, the cookie belongs to the current page.

कुकी कुन मार्गसँग सम्बन्धित छ भनेर बताउन हामी एक प्यारामिटर थप्न सक्छौं। पूर्वनिर्धारित रूपमा, कुकी हालको पृष्ठसँग सम्बन्धित छ।

```javascript
document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
```

Here is a simple example of a cookie.

यहाँ एक कुकी को एक सरल उदाहरण दिइएको छ।

```javascript
var cookies = document.cookie;
// a simple way to reterive all cookie.

document.cookie = "book=Learn Javacript; expires=Fri, 08 Jan 2022 12:00:00 UTC; path=/";
// setting up a cookie
```
