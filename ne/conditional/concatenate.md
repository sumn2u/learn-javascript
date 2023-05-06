# Concatenate

# संयोजन

Furthermore. you can concatenate different conditions with "`or`" or “`and`” statements, to test whether either statement is true, or both are true, respectively.

यसबाहेक, तपाईं `"वा"` वा `"र"` कथनहरूसँग विभिन्न अवस्थाहरू संयोजन गर्न सक्नुहुन्छ, क्रमशः कथन सत्य छ कि छैन, वा दुवै सत्य छन् कि छैन भनेर परीक्षण गर्न।

In JavaScript “or” is written as `||` and “and” is written as `&&`.

जाभास्क्रिप्टमा "वा" लाई `||` र " र " लाई `&&` को रूपमा लेखिएको छ।

Say you want to test if the value of x is between 10 and 20—you could do that with a condition stating:

एक्सको मान १० र २० को बीचमा छ कि छैन भनेर परीक्षण गर्न चाहनुहुन्छ — तपाईँले एउटा शर्तका साथ त्यसो गर्न सक्नुहुन्छ:

```javascript
if (x > 10 && x < 20) {
    ...
}
```

If you want to make sure that country is either “England” or “Germany” you use:

यदि तपाईं यो सुनिश्चित गर्न चाहनुहुन्छ कि देश "इङ्गल्याण्ड" वा "जर्मनी" हो भने तपाईंले प्रयोग गर्नुहुन्छ:

```javascript
if (country === "England" || country === "Germany") {
    ...
}
```

**Note**: Just like operations on numbers, Conditions can be grouped using parenthesis, ex: `if ( (name === "John" || name === "Jennifer") && country === "France")`.

**नोट**: संख्याहरूमा सञ्चालनहरू जस्तै, अवस्थाहरू कोष्ठक प्रयोग गरेर समूहीकृत गर्न सकिन्छ, उदाहरण: `यदि ( नाम === "जोन" || नाम === "जेनिफर") && देश === "फ्रान्स")`।
