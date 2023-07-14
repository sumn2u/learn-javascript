---
chapter: 16
pageNumber: 82
---
# Navigator


`window.navigator` veya `navigator` özelliği salt okunur bir özelliktir ve tarayıcıyla ilgili çeşitli yöntem ve fonksiyonları içerir.

Birkaç örneğine bakalım:

1.  **navigator.appName**: Tarayıcı uygulamasının adını verir

    ```javascript
    navigator.appName; 
    // "Netscape"
    ```

    > _**Note:**_  "Netscape" IE11, Chrome, Firefox ve Safari için uygulama adıdır.
2.  **navigator.cookieEnabled**: Tarayıcıdaki çerez değerine bağlı olarak bir boolean değeri döndürür.

    ```javascript
    navigator.cookieEnabled;
    //true
    ```
3.  **navigator.platform**: İşletim sistemi hakkında bilgi sağlar.

    ```javascript
    navigator.platform;
    "MacIntel"
    ```



