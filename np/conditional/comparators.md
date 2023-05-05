# Comparators

Lets now focus on the conditional part:

अब सशर्त भागमा ध्यान दिनुहोस्:

```javascript
if (country === "France") {
    ...
}
```

The conditional part is the variable `country` followed by the three equal signs (`===`). Three equal signs tests if the variable `country` has both the correct value (`France`) and also the correct type (`String`). You can test conditions with double equal signs, too, however a conditional such as `if (x == 5)` would then return true for both `var x = 5;` and `var x = "5";`. Depending on what your program is doing, this could make quite a difference. It is highly recommended as a best practice that you always compare equality with three equal signs (`===` and `!==`) instead of two (`==` and `!=`).

सशर्त भाग भ्यारीएबल `देश" तीन बराबर संकेतहरू (`===`) को पछि हो। तीन बराबर संकेत परीक्षणहरू यदि भ्यारीएबल `देशको दुबै सही मान (` fram`) र सही प्रकार (`स्ट्रिंग`) पनि छ। तपाईं डबल बराबर संकेतहरू, पनि, यद्यपि सर्तहरू पनि जाँच गर्न सक्नुहुनेछ तपाईको कार्यक्रम के गर्दैछ निर्भर गर्दै, यसले धेरै फरक पार्न सक्छ। यो एक उत्तम अभ्यासको रूपमा अत्यधिक सिफारिश गरिएको छ जुन तपाईं जहिले पनि बराबर संकेतहरू (`===` `` `` = `) को सट्टामा तुलना गर्नुहोस् (` == `` `` `)।

Other conditional tests:

अन्य ससर्त परीक्षणहरू:

* `x > a`: is x bigger than a?

* `x> A` X: X X हो?
* `x < a`: is x less than a?

* `X <A`: X भन्दा कम छ?
* `x <= a`: is x less than or equal to a?

* `x <= a` x: x भन्दा कम वा बराबर हो?
* `x >=a`: is x greater than or equal to a?

* `x> = A`: X X भन्दा ठूलो वा बराबर हो?
* `x != a`: is x not a?
* `x`: does x exist?

## Logical Comparison

In order to avoid the if-else hassle, simple logical comparisons can be utilised.

क्रमशः यदि - अन्य समस्याहरू, साधारण तार्किक तुलनाहरू प्रयोग गर्न सकिन्छ।

```javascript
let topper = marks > 85 ? "YES" : "NO";
```

In the above example, `?` is a logical operator. The code says that if the value of marks is greater than 85 i.e. `marks > 85` , then `topper = YES` ; otherwise `topper = NO` . Basically, if the comparison condition proves true, the first argument is accessed and if the comparison condition is false, the second argument is accessed.

माथिको उदाहरणमा, `?` एक तार्किक अपरेटर हो। कोडले भन्छ कि यदि मार्कको मान 85 85 आईएमई भन्दा बढि छ भने `मार्कहरू> 85` `topperper =, त्यसपछि` टोपर = हो; अन्यथा `टपपर = नम्बर। सामान्यतया, यदि तुलना सर्तमान सत्य प्रमाणित हुन्छ भने, पहिलो तर्क सही छ र यदि तुलना अवस्था गलत छ भने, दोस्रो बहस पहुँच छ।
