---
chapter: 16
pageNumber: 80
---
# Popup

Popups (Açık pencereler) bilgi göstermek, kullanıcı onayı almak veya ek belgelerden kullanıcı girişi almak için ek bir yoldur. Bir popup yeni bir URL'ye gidebilir ve açılan pencereye bilgi gönderebilir. **Uyarı kutusu** (*Alert box*), **Onay kutusu** (*Confirmation box*) ve **Girdi kutusu** (*Prompt box*) pop-up bilgilerini gösterebileceğimiz global fonksiyonlardır.

1.  **alert()**: Kullanıcıya bilgi görüntüler ve devam etmek için bir "**OK**" butonu vardır.

    ```javascript
    alert("Örnek alert mesajı!");
    ```
2.  **confirm()**: Bir şeyi onaylamak veya kabul etmek için bir etkileşim kutusu olarak kullanın. Devam etmek için "**Ok**" ve "**Cancel**" vardır. Kullanıcı "**Ok**" seçeneğine tıklarsa "true", "**Cancel**" seçeneğine tıklarsa "false" döndürür.&#x20;

    ```javascript
    let txt;
    if (confirm("Bir butona basın!")) {
      txt = "OK Butonuna bastınız!";
    } else {
      txt = "Cancel butonuna bastınız!";
    }
    ```
3.  **prompt()**: "**Ok "** ve "**İptal "** düğmeleri ile kullanıcı girdi alır. Kullanıcı herhangi bir girdi değeri sağlamazsa `null` döndürür.

    ```javascript
    //syntax 
    //window.prompt("sometext","defaultText");

    let person = prompt("Lütfen adınızı girin", "Harry Potter");

    if (person == null || person == "") {
      txt = "Kullanıcı prompt girmedi";
    } else {
      txt = "Merhaba " + person + "! Bugün nasılsınız?";
    }
    ```









