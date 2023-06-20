---
chapter: 16
pageNumber: 86
---
# Location

`location` objesi, belgenin geçerli (URL) konumunu almak için kullanılır ve konumunu manipüle etmek için farklı yöntemler sağlar. Geçerli konuma şu şekilde erişilebilir

```javascript
window.location
//veya
document.location
//veya
location
```

> _**Note**_: `window.location` ve `document.location` aynı konum objesine referans verir.

Aşağıdaki URL örneğini ele alalım ve `location` objesinin farklı özelliklerini inceleyelim

[`http://localhost:3000/js/index.html?type=listing&page=2#title`](http://localhost:8080/js/index.html?type=listing\&page=2#title)

```javascript
location.href //mevcut URL'yi yazdırır.
location.protocol //protokolleri yazdırır örn: http,https
location.host //hostname'i port ile birlikte yazdırır örn: localhost:3000
location.hostname //hostname'i yazdırır örn: localhost, www.example.com
location.port //port numarasını yazdırır örn: 3000
location.pathname //sayfa yolunu(*path*) yazdırır örn: /js/index.html
location.search //sorgu dizelerini yazdırır örn: ?type=listing&page=2
location.hash //title gibi bileşen tanımlayıcısını yazdırır
```
