# Location

# स्थान

`Location` object is used to retrieve the current location (URL) of the document and provides different methods to manipulate document location. One can access the current location by

`स्थानको वस्तुको हालको स्थान (यूआरएल) लाई कागजातको हालको स्थान (यूआरएल) पुनः प्राप्त गर्न प्रयोग गरिन्छ कागजात स्थान हेरफेर गर्न विभिन्न विधि प्रदान गर्दछ। एकले हालको स्थान पहुँच गर्न सक्दछ

```javascript
window.location
//or
document.location
//or
location
```

> _**Note**_: `window.location` and `document.location` references the same location object.

> _ ** नोट ** _: _: _ विन्डो। `विन्डो। कागजात। कागजात

Let's take an example of the following URL and explore the different properties of `location`

निम्न URL को एक उदाहरण लिनुहोस् र एक स्थानको बिभिन्न गुणहरू अन्वेषण गरौं

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)

[`HTTP: // लोभीस्ट: 000000 / ks / अनुक्रमणिका
```javascript
location.href //prints current document URL
location.protocol //prints protocol like http: or https:
location.host //prints hostname with port like localhost or localhost:3000
location.hostname //prints hostname like localhost or www.example.com
location.port //prints port number like 3000
location.pathname //prints pathname like /js/index.html
location.search //prints query string like ?type=listing&page=2
location.hash //prints fragment identifier like #title
```
