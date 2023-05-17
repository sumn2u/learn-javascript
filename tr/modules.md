# Modüller

Gerçek dünyada, bir program yeni işlevlerin ihtiyaçlarını karşılamak için doğal olarak büyür. Büyüyen kod tabanının yapılandırılması ve koruması ek çalışma gerektirir. Gelecekte ödeyecek olsa da, bunu ihmal etmek daha cazip gelebilir. Gerçekte, uygulamanın karmaşıklığını artırır, çünkü sistem hakkında bütüncül bir anlayış oluşturmak zorunda kalırsınız ve herhangi bir parçayı izole bir şekilde incelemekte zorluk yaşarsınız. İkinci olarak, işlevselliğini kullanabilmek için düğümleri çözmek için daha fazla zaman harcamanız gerekmektedir. 

Bu sorunları önlemek için _modüller_ mevcuttur. Bir `modül`, hangi kod parçalarına bağlı olduğunu ve diğer modüller için hangi işlevselliği sağladığını belirtir. Başka bir module bağlı olan modüller _dependencies_(bağımlılıklar) olarak adlandırılır. Çeşitli modül kütüphaneleri, kodu modüllerde düzenlemek ve talep üzerine yüklenmek için mevcuttur.

* AMD - başlangıçta [require.js](https://requarejs.org/) tarafından kullanılan en eski modül sistemlerinden biridir.
* CommonJS - Node.js sunucusu için oluşturulan modül sistemi.
* UMD - AMD ve CommonJS ile uyumlu modül sistemi.

Modüller birbirlerini yükleyebilir ve işlevselliği değiş tokuş etmek ve birbirlerinin işlevlerini çağırmak için import ve export özel direktiflerini kullanır.

* `export` - mevcut modülün dışarıdan erişilebilir olmasını istediğiniz işlevleri ve değişkenleri etiketler
* `import` - dışarıdan modülden işlevselliği içe aktarır

Modüllerde `import`  ve `export` mekanizmasını görelim. `sayHi.js` dosyasından `sayHi` fonksiyonun dışa aktarıldığını görüyoruz.


```javascript
// 📁 sayHi.js
export const sayHi = (user) => {
  alert(`Hello, ${user}!`);
}
```

`main.js` dosyasında `sayHi` işlevi `import` direktifi yardımıyla içe aktarılır.

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('Kelvin'); // Hello, Kelvin!
```

Burada import direktifi dosya yolunu içe aktararak modülü yükler ve `sayHi` değişkenine atar.
Modüller iki şekilde dışa aktarılabilir: **Named**(Adlandırılmış) ve **Default**(Varsayılan). Ayrıca, _Named_ dışa aktarmalar satır içi veya ayrı ayrı atanabilir.

```javascript
// 📁 person.js 

// inlined named exports
export const name = "Kelvin";
export const age = 30;

// at once
const name = "Kelvin";
const age = 30;
export {name, age};
```

{% hint style="warning" %}
Bir dosyada yalnızca bir tane `default` dışa aktarım olabilir!
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">// 📁 message.js 
const message = (name, age) => {
<strong>    return `${name} is ${age} years old.`;
</strong>};
export default message;
</code></pre>

Dışa aktarmaya bağlı olarak, iki şekilde içe aktarabiliriz. _Named_(Adlandırılmış) dışa aktarmalar süslü parantezler kullanılarak oluşturulurken, varsayılan dışa aktarmalar kullanılmaz.
```javascript
import { name, age } from "./person.js"; // named export import
import message from "./message.js"; // default export import
```

Modüller atandığında, döngüsel bağımlılıktan kaçınmalıyız. Döngüsel bağımlılık, bir modülün B'ye, B'nin de doğrudan veya dolaylı olarak A'ya bağımlı olduğu durumdur.
