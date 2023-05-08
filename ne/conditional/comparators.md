# Comparators (तुलनात्मक)

Lets now focus on the conditional part:

अब सशर्त भागमा ध्यान केन्द्रित गरौं।

```javascript
if (country === "France") {
    ...
}
```

The conditional part is the variable `country` followed by the three equal signs (`===`). Three equal signs tests if the variable `country` has both the correct value (`France`) and also the correct type (`String`). You can test conditions with double equal signs, too, however a conditional such as `if (x == 5)` would then return true for both `var x = 5;` and `var x = "5";`. Depending on what your program is doing, this could make quite a difference. It is highly recommended as a best practice that you always compare equality with three equal signs (`===` and `!==`) instead of two (`==` and `!=`).

सशर्त भाग चर 'देश' हो जुन तीन बराबर चिन्हहरू (`===`) द्वारा पीछा गरिन्छ। यदि चर `देश` सँग सही मान (`फ्रान्स`) र सही प्रकार (`स्ट्रिङ`) दुवै छ भने तीन बराबर चिन्हहरूले परीक्षण गर्दछ। तपाईं डबल बराबर चिन्हहरूको साथ शर्तहरू पनि परीक्षण गर्न सक्नुहुन्छ, तथापि सशर्त जस्तै 'यदि (एक्स == 5)' त्यसपछि `var x = 5;` र `var x = "5";` दुवैको लागि सत्य फर्काउँछ। तपाईंको प्रोग्राम ले के गरिरहेको छ भन्ने आधारमा, यसले धेरै फरक पार्न सक्छ। यो एक उत्तम अभ्यासको रूपमा अत्यधिक सिफारिस गरिएको छ कि तपाईं सँधै समानतालाई दुई ('==' र '!=') को सट्टा तीन बराबर चिन्हहरू ('==' र '!=') सँग तुलना गर्नुहोस्।

Other conditional tests:

अन्य ससर्त परीक्षणहरू:

- `x > a`: is x bigger than a?
- `x > a`: के x a भन्दा ठूलो छ?

- `x < a`: is x less than a?
- `x < a`: के x a भन्दा कम छ?

- `x <= a`: is x less than or equal to a?
- `x <= a`: के x a भन्दा कम वा बराबर छ?

- `x >=a`: is x greater than or equal to a?
- `x >=a`: के x a भन्दा ठूलो वा बराबर छ?

- `x != a`: is x not a?
- `x != a`: के x a होइन?

## Logical Comparison

In order to avoid the if-else hassle, simple logical comparisons can be utilised.

यदि-अन्य झंझटबाट बच्नको लागि, सरल तार्किक तुलनाहरू प्रयोग गर्न सकिन्छ।

```javascript
let topper = marks > 85 ? "YES" : "NO";
```

In the above example, `?` is a logical operator. The code says that if the value of marks is greater than 85 i.e. `marks > 85` , then `topper = YES` ; otherwise `topper = NO` . Basically, if the comparison condition proves true, the first argument is accessed and if the comparison condition is false, the second argument is accessed.

माथिको उदाहरणमा, `?` एक तार्किक अपरेटर हो। कोडले भन्छ कि यदि अंकको मान 85 भन्दा बढी छ अर्थात् `अंक > 85`, तब `टपर = हो`; अन्यथा `टपर = होइन`। मूलतः, यदि तुलना अवस्था सत्य साबित हुन्छ भने, पहिलो तर्क पहुँच गरिएको छ र यदि तुलना शर्त गलत छ भने, दोस्रो तर्क पहुँच गरिएको छ।
