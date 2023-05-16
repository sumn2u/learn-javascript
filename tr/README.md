# Giriş

Bilgisayarlar günümüzde çok çeşitli görevleri hızlı ve doğru bir şekilde yerine getirebildikleri için yaygın bir şekilde kullanılmaktadır. İş, sağlık, eğitim, eğlence gibi birçok farklı sektörde kullanılmakta ve birçok insan için günlük yaşamın önemli bir parçası haline gelmiştir. Ayrıca, karmaşık bilimsel ve matematiksel hesaplamalar yapmak, büyük miktarda veriyi depolamak ve işlemek ve dünyanın dört bir yanındaki insanlarla iletişim kurmak için de kullanılırlar.

Programlama, bir bilgisayarın takip etmesi için program adı verilen bir dizi talimat oluşturmayı içerir. Bilgisayarlar verilen görevi tamamlamak için açık ve belirli talimatlara ihtiyaç duyar bu da zaman zaman sıkıcı ve sinir bozucu olabilir.

![Intro Page](../.gitbook/assets/intro.png)

Programlama dilleri, bilgisayarlara talimat vermek için kullanılan yapay dillerdir. Çoğu programlama görevinde kullanılırlar ve insanların birbirleriyle iletişim kurma şekline dayanırlar. İnsan dilleri gibi, programlama dilleri de yeni kavramları ifade etmek için sözcüklerin ve ifadelerin birleştirilmesine izin verir. İlginç olan, bilgisayarlarla iletişim kurmanın en etkili yolu, insan diline benzeyen bir dil kullanmaktır.

Geçmişte, bilgisayarlarla etkileşim kurmanın temel yolu, BASIC ve DOS komutları gibi dil tabanlı arayüzlerdi. Bunlar büyük ölçüde daha kolay öğrenilebilir olsalar da daha az esneklik sunan görsel arayüzlerle değiştirildi. Ancak _Javascript_ gibi bilgisayar dilleri hala kullanımda ve modern web tarayıcılarında ve çoğu cihazda bulunabilir.

JavaScript (_kısaca JS_), web sayfaları, oyunlar, uygulamalar ve hatta sunucular geliştirilirken dinamik etkileşim yaratmak için kullanılan bir programlama dilidir. 1990'larda geliştirilen bir web tarayıcısı olan Netscape'te başlayan JavaScript, bugün en ünlü ve kullanılan programlama dillerinden biridir.

Başlangıçta, web sayfalarını canlandırmak için oluşturulmuş ve yalnızca bir tarayıcıda çalışabilen bir dildi. Şimdi ise, JavaScript motorunu destekleyen herhangi bir cihazda çalışabilir. JavaScript'de Array, Date ve Math gibi standart nesnelerin yanı sıra operatörler, kontrol yapıları ve ifadeler mevcuttur. _İstemci tarafında çalışan Javascript_ ve _Sunucu tarafında çalışan Javascript_, ana Javascript'in genişletilmiş versiyonlarıdır.

- _İstemci tarafında çalışan JavaScript_ web sayfalarının ve istemci tarayıcılarının geliştirilmesi ve düzenlenmesi için kullanılır. Kullanıcı etkileşimlerine yanıt vermek için: fare tıklamaları, form girişi, sayfa gezinme gibi örnekler verilebilir.
- _Sunucu tarafında çalışan JavaScript_ sunuculara, veritabanlarına ve dosya sistemlerine erişim sağlar.

Javascript yorumlanan(_interpreted_) bir dildir. Javascript çalıştırılırken bir yorumlayıcı(_interpreter_) her satırı yorumlar ve çalıştırır. Modern tarayıcı, derleme(_compilation_) için Javascript'i çalıştırılabilir bytecode'a derleyen Just In Time(JIT) teknolojisini kullanır.

> JavaScript'in ilk ismi "LiveScript" idi.

Bu kitap üç ana bölüme ayrılmıştır. İlk 14 bölüm JavaScript dilini anlatmaktadır. Sonraki üç bölüm JavaScript'in web tarayıcılarını programlamak için nasıl kullanıldığını tartışmaktadır. Son iki bölüm ise çeşitli bölümler ve alıştırmalardan oluşmaktadır. JavaScript programlama ile ilgili çeşitli önemli konular ve vakalar Miscellaneous bölümünde anlatılmakta ve bunu alıştırmalar takip etmektedir.

### Kod ve onunla ne yapmalı

_Kod_, bir programı oluşturan yazılı talimatlardır. Bu kitaptaki birçok bölüm çok sayıda kod içerir ve programlamayı öğrenmenin bir parçası olarak kod okumak ve yazmak önemlidir. Örnekleri sadece hızlıca gözden geçirmemelisiniz - dikkatlice okuyun ve anlamaya çalışın. Bu ilk başta zor olabilir, ancak pratik yaptıkça gelişeceksiniz. Aynı şey alıştırmalar için de geçerlidir - onları anladığınızı varsaymadan önce gerçekten bir çözüm yazmaya çalıştığınızdan emin olun. Çözümlerinizi bir JavaScript yorumlayıcısında çalıştırmayı denemeniz de yararlı olacaktır, çünkü bu, kodunuzun doğru çalışıp çalışmadığını görmenizi sağlayacak ve sizi denemeler yapmaya ve alıştırmaların ötesine geçmeye teşvik edebilir.

### Tipografik standartlar

Bu kitapta, eşit aralıklı bir yazı tipi kullanılarak yazılmış metinler bir programın unsurlarını temsil eder. Bu yazı tipi, kod örnekleri, program unsurları ve program çıktıları gibi her türlü program öğesinin okuyucular tarafından daha kolay takip edilmesini sağlar.

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

Örneğin, yukarıdaki kod örneği, bir dizi içindeki sayıları birleştirerek bir metin oluşturur ve oluşturulan metni yazdırır. Kod örneğinin sonunda, çıktının nasıl olması gerektiği, iki eğik çizgi işaretiyle (//) "Result" (Sonuç) ibaresinin ardından belirtilmiştir.

```javascript
console.log(txt);

// Result: txt = '45491625'
```

Bu kitapta, bazı kod örneklerinde ve açıklamalarda Türkçe karakterler kullanılsa da, programların dilinin İngilizce olması nedeniyle kod örnekleri tamamen İngilizce'dir. Başarılar! 🍀
