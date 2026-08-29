---
layout: editorial
title: ஜாவாஸ்கிரிப்டில் உருவாக்க வடிவமைப்பு முறைகள் (Creational Design Patterns in Javascript)
description: உருவாக்க வடிவமைப்பு முறைகள் (Creational design patterns) பொருள்களை உருவாக்கும் வழிமுறைகளில் (object creation mechanisms) கவனம் செலுத்துகின்றன
chapter: 23
pageNumber: 196
---

# உருவாக்க வடிவமைப்பு முறைகள் (Creational Design Patterns)

உருவாக்க வடிவமைப்பு முறைகள் பொருள்களை உருவாக்கும் வழிமுறைகளில் கவனம் செலுத்துகின்றன

## 1. தொழிற்சாலை முறை (Factory Method)

தொழிற்சாலை செயல்பாடு (factory function) என்பது ஒரு பொருளை உருவாக்கி அதைத் திரும்பப் பெறும் ஒரு செயல்பாடாகும். இது ஒரு உருவாக்க வடிவமைப்பு முறையாகும், இது பயன்படுத்த வேண்டிய சரியான வகுப்பு (class) அல்லது கன்ஸ்ட்ரக்டரைக் (constructor) குறிப்பிடாமல் பொருள்களை உருவாக்க உங்களை அனுமதிக்கிறது. இது பொருளை உருவாக்கும் தர்க்கத்தை (logic) மையப்படுத்துகிறது, பல்வேறு வகையான பொருள்களை உருவாக்குவதில் நெகிழ்வுத்தன்மையை (flexibility) அனுமதிக்கிறது. உங்களிடம் ஒரு வலைத்தளம் (website) உள்ளது என்று வைத்துக்கொள்வோம், மேலும் html பொருள்களை எளிதாக உருவாக்கவும் அவற்றை DOM இல் சேர்க்கவும் உங்களை அனுமதிக்கும் ஒரு முறையை நீங்கள் உருவாக்க விரும்புகிறீர்கள். இதற்கு தொழிற்சாலை (factory) சரியான தீர்வாகும், மேலும் இதை நாம் எவ்வாறு செயல்படுத்தலாம் என்பது இங்கே 

### 1.1. தொழிற்சாலை முறையின் கூறுகள் (Components of the Factory Method)

*உருவாக்குபவர் (Creator)*: இது புதிய தயாரிப்புகளை (products) உருவாக்கும் தொழிற்சாலையில் செயல்படுத்தப்படும் முறையாகும். 

*சுருக்கத் தயாரிப்பு (Abstract Product)*: உருவாக்கப்படும் தயாரிப்புக்கான இடைமுகம் (interface).

*கான்கிரீட் தயாரிப்பு (Concrete Product)*: இது உருவாக்கப்படும் உண்மையான பொருளாகும். 

### 1.2. தொழிற்சாலை முறையின் நன்மைகள்

**பொருளை உருவாக்குவதற்கான சுருக்கம் (Abstraction of Object Creation)**

இது ஒரு பொருளை உருவாக்குவதன் சிக்கலை நீக்குகிறது, கிளையன்ட் (client) குறியீட்டை உருவாக்கப்பட்ட பொருள்களில் மட்டும் கவனம் செலுத்த அனுமதிக்கிறது. 

**நெகிழ்வுத்தன்மை மற்றும் தனிப்பயனாக்கம் (Flexibility and Customization)**

தொழிற்சாலைகள் பொருளை உருவாக்கும் செயல்முறையைத் தனிப்பயனாக்குவதை (customization) செயல்படுத்துகின்றன, உருவாக்கப்பட்ட பொருள்களில் மாறுபாடுகளை அனுமதிக்கின்றன.

**உருவாக்கும் தர்க்கத்தின் உறைப்பொதியாக்கம் (Encapsulation of Creation Logic)**

உருவாக்கும் தர்க்கம் தொழிற்சாலைக்குள் இணைக்கப்பட்டுள்ளது (encapsulated), இதனால் கிளையன்ட் குறியீட்டைப் பாதிக்காமல் உருவாக்கும் செயல்முறையை மாற்றுவது அல்லது நீட்டிப்பது (extend) எளிதாகிறது.

**சிக்கலான பொருள் உருவாக்கம் (Complex Object Creation)**

பொருள்களை உருவாக்குவது சிக்கலானதாக இருக்கும்போது, பல படிகளை உள்ளடக்கியிருக்கும்போது அல்லது சில நிபந்தனைகளைப் பூர்த்தி செய்ய வேண்டியிருக்கும் போது தொழிற்சாலைகள் பயனுள்ளதாக இருக்கும்.

### 1.3. எடுத்துக்காட்டு

```javascript
    function elementFactory(type, text, color){
        const newElement = document.createElement(type)
        newElement.innerText = text 
        newElement.style.color = color 
        document.body.append(newElement)
        
        
    function setText(newText) {
         newElement.innerText = newText;
    }
        
    function setColor(newColor) { 
        newElement.innerText = newColor; 
    }
        
    return {
        newElement, 
        setText,
        setColor,
        }

    }

const h1Tag = elementFactory('h1','Initial Text','Blue'); 

h1Tag.setText('Hello world');

h1Tag.setColor('Red');
```

## 2. சுருக்க தொழிற்சாலை முறை (Abstract Factory Method)

சுருக்க தொழிற்சாலைகள் (Abstract factories) மற்றொரு உருவாக்க வடிவமைப்பு முறையாகும். இதன் முக்கிய குறிக்கோள், தொடர்புடைய அல்லது சார்புடைய (dependent) பொருள்களின் குடும்பங்களை (families) அவற்றின் கான்கிரீட் வகுப்புகளைக் (concrete classes) குறிப்பிடாமல் உருவாக்குவதற்கான ஒரு இடைமுகத்தை (interface) வழங்குவதாகும். உருவாக்கப்பட்ட பொருள்கள் இணக்கமாக (compatible) இருப்பதையும் ஒன்றாக வேலை செய்வதையும் இந்த முறை உறுதி செய்கிறது. 

### 2.1. ஒரு சுருக்க தொழிற்சாலையின் 4 கூறுகள்

*சுருக்க தொழிற்சாலைகள் (Abstract Factories)*

இது தொடர்புடைய பொருள்களின் குடும்பங்களான (எ.கா. UI கூறுகள்) சுருக்கத் தயாரிப்புகளை உருவாக்குவதற்கான இடைமுகத்தை வரையறுக்கிறது. சுருக்க தொழிற்சாலை குடும்பத்தில் உள்ள ஒவ்வொரு வகை தயாரிப்புகளுக்கும் உருவாக்கும் முறைகளை அறிவிக்கிறது. 

*கான்கிரீட் தொழிற்சாலைகள் (Concrete Factories)*

இவை சுருக்க தொழிற்சாலை இடைமுகத்தை செயல்படுத்தும் வகுப்புகளாகும், கான்கிரீட் தயாரிப்புகளை உருவாக்குவதற்கான குறிப்பிட்ட செயலாக்கங்களை (implementations) வழங்குகின்றன. ஒவ்வொரு கான்கிரீட் தொழிற்சாலையும் தொடர்புடைய தயாரிப்புகளின் குடும்பத்தை உருவாக்குகிறது (எ.கா. UI தொழிற்சாலை ஒரு பொத்தான் (button) அல்லது செக்பாக்ஸை (checkbox) உருவாக்கலாம்).

*சுருக்க தயாரிப்புகள் (Abstract Products)*

இவை சுருக்க தொழிற்சாலை உருவாக்கும் தயாரிப்புகளுக்கான இடைமுகங்கள் அல்லது அடிப்படை வகுப்புகளாகும். குடும்பத்தில் உள்ள ஒவ்வொரு தயாரிப்பு வகையும் அதன் சொந்த சுருக்க தயாரிப்பு வரையறையைக் (definition) கொண்டுள்ளது (எ.கா., பொத்தான், செக்பாக்ஸ்).

*கான்கிரீட் தயாரிப்புகள் (Concrete Products)*

இவை சுருக்க தயாரிப்புகளின் உண்மையான செயலாக்கங்களாகும். ஒவ்வொரு கான்கிரீட் தொழிற்சாலையும் கான்கிரீட் தயாரிப்புகளின் சொந்தத் தொகுப்பை உருவாக்குகிறது. கான்கிரீட் தயாரிப்புகள் அவற்றின் குடும்பத்திற்காக வரையறுக்கப்பட்ட சுருக்க தயாரிப்பு இடைமுகங்களை செயல்படுத்துகின்றன (எ.கா., HTMLButton, WindowsButton).

### 2.2. சுருக்க தொழிற்சாலைகளின் நன்மைகள்

**நிலைத்தன்மை (Consistency)**

உருவாக்கப்பட்ட பொருள்கள் இணக்கமாக இருப்பதையும் நிலையான தீம் (theme) அல்லது பாணியைப் (style) பின்பற்றுவதையும் இது உறுதி செய்கிறது.

**பொறுப்புகளை தனிமைப்படுத்துதல் (Isolation of Responsibilities)** 

இது கிளையன்ட் குறியீட்டிலிருந்து பொருள்களை உருவாக்குவதைத் தனிமைப்படுத்துகிறது, கவலைகளைச் சுத்தமாகப் பிரிப்பதை (clean separation of concerns) ஊக்குவிக்கிறது.

**நெகிழ்வுத்தன்மை மற்றும் அளவிடுதல் (Flexibility and Scalability)**

தற்போதுள்ள கிளையன்ட் குறியீட்டை மாற்றாமல் புதிய தயாரிப்பு குடும்பங்களை எளிதாகச் சேர்க்க இது அனுமதிக்கிறது.

### 2.3. எடுத்துக்காட்டு 

```javascript 
 // Abstract Factory: UIFactory
class UIFactory {
    createButton() {
        throw new Error('createButton method must be overridden');
    }

    createCheckbox() {
        throw new Error('createCheckbox method must be overridden');
    }
}

// Concrete Factory: WindowsUIFactory
class WindowsUIFactory extends UIFactory {
    createButton() {
        return new WindowsButton();
    }

    createCheckbox() {
        return new WindowsCheckbox();
    }
}

// Concrete Factory: MacUIFactory
class MacUIFactory extends UIFactory {
    createButton() {
        return new MacButton();
    }

    createCheckbox() {
        return new MacCheckbox();
    }
}

// Abstract Product: Button
class Button {
    render() {
        throw new Error('render method must be overridden');
    }
}

// Concrete Product: WindowsButton
class WindowsButton extends Button {
    render() {
        console.log('Rendering a Windows button');
    }
}

// Concrete Product: MacButton
class MacButton extends Button {
    render() {
        console.log('Rendering a Mac button');
    }
}

// Abstract Product: Checkbox
class Checkbox {
    render() {
        throw new Error('render method must be overridden');
    }
}

// Concrete Product: WindowsCheckbox
class WindowsCheckbox extends Checkbox {
    render() {
        console.log('Rendering a Windows checkbox');
    }
}

// Concrete Product: MacCheckbox
class MacCheckbox extends Checkbox {
    render() {
        console.log('Rendering a Mac checkbox');
    }
}

// Usage
const windowsFactory = new WindowsUIFactory();
const macFactory = new MacUIFactory();

const windowsButton = windowsFactory.createButton();
windowsButton.render();  // Output: Rendering a Windows button

const macCheckbox = macFactory.createCheckbox();
macCheckbox.render();  // Output: Rendering a Mac checkbox
```

## 3. பில்டர் (Builder) 

பில்டரின் (Builder) குறிக்கோள் ஒரு பொருளின் கட்டுமானத்தை அதன் பிரதிநிதித்துவத்திலிருந்து (representation) பிரிப்பதாகும். பில்டர் முறை அடிப்படையில் என்ன செய்கிறது என்றால், பொருளின் வகை மற்றும் உள்ளடக்கத்தை மட்டுமே அனுப்புவதன் மூலம் ஒரு சிக்கலான பொருளை உருவாக்க கிளையன்ட்டை அனுமதிக்கிறது. கட்டுமான விவரங்களைப் பற்றி கிளையன்ட் கவலைப்படத் தேவையில்லை.

## 3.1. பில்டரின் 4 கூறுகள்

*பில்டர் (Builder)*

பொருளின் பல்வேறு பகுதிகளை உருவாக்குவதற்கான தொடர்ச்சியான முறைகளை (methods) பில்டர் பொதுவாகக் கொண்டுள்ளது.

*கான்கிரீட் பில்டர் (Concrete Builder)*

பொருளின் பகுதிகளை உருவாக்க பில்டர் இடைமுகத்திலிருந்து முறைகளைச் செயல்படுத்துகிறது 

*இயக்குநர் (Director) (விருப்பத் தேர்வு - Optional)* 

இது எப்போதும் அவசியமில்லை ஆனால் ஒரு குறிப்பிட்ட கட்டுமான செயல்முறையைப் பயன்படுத்தி இறுதிப் பொருளை உருவாக்க உதவும் 

*பொருள் (Object)* 

இறுதித் தயாரிப்பின் பிரதிநிதித்துவம் (Representation). பில்டரால் கட்டப்பட்ட பகுதிகளைக் கொண்டுள்ளது

## 3.2. பில்டர் முறையின் நன்மைகள் 

**கவலைகளைப் பிரித்தல் (Separation of Concerns)**

பில்டர் முறை ஒரு சிக்கலான பொருளின் கட்டுமானத்தை அதன் பிரதிநிதித்துவத்திலிருந்து பிரிக்கிறது, பில்டர்களின் வெவ்வேறு செயலாக்கங்களை (implementations) உள் பிரதிநிதித்துவத்தை (internal representation) மாற்ற அனுமதிக்கிறது.

**நெகிழ்வான பொருள் உருவாக்கம் (Flexible Object Creation)**

ஒரு பொதுவான கட்டுமானச் செயல்முறையைப் பயன்படுத்துவதன் மூலம் ஒரு சிக்கலான பொருளின் வெவ்வேறு கட்டமைப்புகளை (configurations) உருவாக்க இது அனுமதிக்கிறது. பொருளின் குறிப்பிட்ட மாறுபாடுகளை (variations) உருவாக்க பில்டர்களை வடிவமைக்கலாம் (tailored).

**மேம்படுத்தப்பட்ட வாசிப்புத்திறன் (Improved Readability)**

ஒரு பில்டரைப் பயன்படுத்துவது ஒரு பொருளை உருவாக்குவதற்குத் தேவையான படிகளைத் தெளிவாக கோடிட்டுக் காட்டுவதன் மூலம் குறியீட்டின் வாசிப்புத்திறனை (code readability) மேம்படுத்தலாம். இறுதிப் பொருளுக்கு ஒவ்வொரு படியும் என்ன பங்களிக்கிறது என்பதைப் புரிந்துகொள்வது எளிது.

**அளவுருவாக்கப்பட்ட கட்டுமானம் (Parameterized Construction)**

கட்டுமானப் படிகளுக்கு அளவுருக்களை (parameters) அனுப்புவதன் மூலம் ஒரு பொருளை உருவாக்க பில்டர்கள் உங்களை அனுமதிக்கிறார்கள், பொருளின் உருவாக்கம் மற்றும் கட்டமைப்பின் மீது நுணுக்கமான கட்டுப்பாட்டை (fine-grained control) இயக்குகிறார்கள்.

**மறுபயன்பாடு (Reusability)**

குறியீடு மறுபயன்பாட்டை (code reuse) ஊக்குவிக்கும் மற்றும் கட்டுமான தர்க்கத்தின் நகலெடுப்பைக் (duplication) குறைக்கும் வகையில், வெவ்வேறு கட்டமைப்புகளுடன் சிக்கலான பொருளின் பல நிகழ்வுகளை (instances) உருவாக்க பில்டர்களை மீண்டும் பயன்படுத்தலாம்.

## 3.3. எடுத்துக்காட்டு 

```Javascript 
//Builder
class ComputerBuilder {
    buildCPU() {}
    buildRAM() {}
    buildStorage() {}
    getResult() {}
}

//Concrete Builders
class GamingComputerBuilder extends ComputerBuilder {
    // Implement specific steps to build a gaming computer
}

class OfficeComputerBuilder extends ComputerBuilder {
    // Implement specific steps to build an office computer
}

//Object class
class Computer {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }
}

// Director (Optional)
class ComputerAssembler {
    constructor(builder) {
        this.builder = builder;
    }

    assembleComputer() {
        this.builder.buildCPU();
        this.builder.buildRAM();
        this.builder.buildStorage();
        return this.builder.getResult();
    }
}
```

## 4. சிங்கிள்டன் (Singleton)

சிங்கிள்டன் (Singleton) என்பது ஒரு முறை மட்டுமே நிறுவப்படக்கூடிய (instantiated) ஒரு பொருளாகும் (object). கணினி அளவிலான (system wide) செயல்களை ஒற்றை மைய இடத்திலிருந்து ஒருங்கிணைக்க வேண்டியிருக்கும் போது சிங்கிள்டன்கள் பயனுள்ளதாக இருக்கும். சிங்கிள்டன்கள் குளோபல் மாறிகளுக்கான (global variables) தேவையைக் குறைக்கின்றன, இது ஜாவாஸ்கிரிப்டில் மிகவும் முக்கியமானது, ஏனெனில் இது பெயர்வெளி மாசுபாட்டைக் (namespace pollution) கட்டுப்படுத்துகிறது.

## 4.1. ஒரு சிங்கிள்டனின் கூறுகள்

*அநாமதேய செயல்பாடு (Anonymous Function)*

ஒரு அநாமதேய செயல்பாட்டைப் பயன்படுத்தி சிங்கிள்டன் செயல்படுத்தப்படுகிறது

*getInstance செயல்பாடு (getInstance Function)*

இது தனித்துவமான (unique) நிறுவப்பட்ட (instantiated) பொருளைத் திரும்பப் பெறும் ஒரு செயல்பாடாகும்

*கன்ஸ்ட்ரக்டர் (Constructor) (விருப்பத் தேர்வு)* 

ஜாவாஸ்கிரிப்டில், சிங்கிள்டன் முறையைச் செயல்படுத்த ஒரு கன்ஸ்ட்ரக்டர் தேவையில்லை ஆனால் ஒரு கன்ஸ்ட்ரக்டரைக் கொண்டிருப்பது பொதுவானது, ஏனெனில் இது சிங்கிள்டனை உள்ளமைக்கவும் (configure) துவக்க தர்க்கத்தை (initialization logic) சேர்க்கவும் உங்களை அனுமதிக்கிறது. 

## 4.2. ஒரு சிங்கிள்டனின் நன்மைகள் 

**குளோபல் மாறிகளைக் குறைத்தல் (Reduce Global Variables)**

சிங்கிள்டன்கள் உங்கள் நிரலில் தேவைப்படும் குளோபல் மாறிகளின் எண்ணிக்கையைக் குறைக்க உதவும், சிறந்த குறியீட்டு அமைப்பு மற்றும் பராமரிப்பை (maintainability) ஊக்குவிக்கும். 

**நினைவகத் திறன் (Memory Efficient)**

ஒரு சிங்கிள்டன் ஒரே நேரத்தில் ஒரே ஒரு நிகழ்வு (instance) மட்டுமே இருப்பதை உறுதி செய்வதால், ஒரே வகுப்பின் (class) பல நிகழ்வுகளைக் கொண்டிருப்பதை நீங்கள் தவிர்ப்பதால் நினைவகம் சேமிக்கப்படுகிறது.

**அணுகலின் உலகளாவிய புள்ளி (Global Point of Access)**

சிங்கிள்டன்கள் நிகழ்விற்கான அணுகலின் உலகளாவிய புள்ளியை (global point of access) வழங்குகின்றன. இது நிரலின் மற்ற பகுதிகளை அதே நிகழ்வைச் சுற்றிச் செல்லாமலேயே அணுகவும் பயன்படுத்தவும் அனுமதிக்கிறது. 

**வளப் பகிர்வு (Resource Sharing)**

பகிரப்பட்ட வளங்களை (shared resources) நிர்வகிப்பது போன்ற பணிகளுக்கு சிங்கிள்டன்கள் மிகவும் பயனுள்ளதாக இருக்கும். தரவுத்தள இணைப்புகள் (database connections), கோப்பு கையாளுபவர்கள் (file handlers) மற்றும் த்ரெட் பூல்களை (thread pools) நிர்வகிக்க சிங்கிள்டன்களைப் பயன்படுத்தலாம், இந்த வளங்கள் பயன்பாடு முழுவதும் திறமையாகப் பகிரப்படுவதை உறுதிசெய்கிறது. 

## 4.3. எடுத்துக்காட்டு 

```javascript
class Singleton {
  constructor() {
    const privateVariable = 'This is a private variable';

    function privateMethod() {
      console.log('This is a private method.');
    }

    return {
      publicMethod: function() {
        console.log('This is a public method.');
      },
      publicVariable: 'I am public'
    };
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Outputs: true
```

## 5. முன்மாதிரி (Prototype) 

முன்மாதிரி (Prototype) முறை என்பது பரம்பரை (inheritance) முறையை செயல்படுத்துவதற்கான ஒரு மாற்று வழியாகும், ஆனால் முக்கிய வேறுபாடு என்னவென்றால், ஒரு வகுப்பிலிருந்து (class) பண்புகளைப் பெறுவதற்குப் பதிலாக, பொருள்கள் (objects) முன்மாதிரி பொருளிலிருந்து (prototype object) பண்புகளைப் பெறுகின்றன. முன்மாதிரி முறை பண்புகள் முறை (properties pattern) என்றும் குறிப்பிடப்படுகிறது மற்றும் ஜாவாஸ்கிரிப்ட் முன்மாதிரிகளுக்கு (prototypes) பூர்வீக ஆதரவைக் (native support) கொண்டுள்ளது. ஜாவாஸ்கிரிப்டில், ஒவ்வொரு பொருளுக்கும் ஒரு முன்மாதிரி (மற்றொரு பொருளுக்கான குறிப்பு (reference)) உள்ளது. பொருளில் இல்லாத ஒரு பண்பை அணுக நீங்கள் முயற்சிக்கும்போது ஜாவாஸ்கிரிப்ட் அதை பொருளின் முன்மாதிரியில் தேடும், அதைக் கண்டுபிடிக்கும் வரை அல்லது சங்கிலியின் முடிவை அடையும் வரை முன்மாதிரி சங்கிலியில் (prototype chain) தொடரும். 

## 5.1. முன்மாதிரி முறையின் கூறுகள்

*முன்மாதிரி பொருள் (Prototype Object)* 

அனைத்து புதிய நிகழ்வுகளும் (instances) பெறும் (inherit) பண்புகள் (properties) மற்றும் முறைகளைக் (methods) கொண்டுள்ளது

*கிளையன்ட் (Client)*

முன்மாதிரியின் அடிப்படையில் புதிய பொருள்களை உருவாக்குவதற்கு கிளையன்ட் பொறுப்பாகும். கிளையன்ட் முன்மாதிரியின் அடிப்படையில் புதிய நிகழ்வுகளை உருவாக்கி அவற்றின் பண்புகளை அதற்கேற்ப மாற்றியமைக்கலாம். 

*குளோன்/உருவாக்க பொறிமுறை (Clone/Creation Mechanism)*

முன்மாதிரியின் அடிப்படையில் புதிய பொருளை உருவாக்கப் பயன்படுத்தப்படும் பொறிமுறை. ஜாவாஸ்கிரிப்டில் இதை `Object.create()` செயல்பாட்டைப் பயன்படுத்தி அடையலாம். 

## 5.2. முன்மாதிரி முறையின் நன்மைகள் 

**திறமையான நிகழ்வு உருவாக்கம் (Efficient Instance Creation)**

முன்மாதிரியின் புதிய நிகழ்வுகளை உருவாக்குவது பாரம்பரிய வகுப்புகள் மற்றும் கன்ஸ்ட்ரக்டர்களைப் (constructors) பயன்படுத்துவதை விட மிகவும் திறமையானது. முன்மாதிரியை குளோனிங் (cloning) செய்வதன் மூலம் பொருள்கள் உருவாக்கப்படுகின்றன, இது வகுப்புகள் மற்றும் துவக்க தர்க்கத்தை (initialization logic) அமைப்பதற்கான தேவையைக் குறைக்கிறது. 

**குறியீடு மறுபயன்பாடு (Code Reusability)**

முன்மாதிரி முறை, ஒரு முன்மாதிரி பொருளில் இயல்புநிலை பண்புகள் மற்றும் முறைகளின் தொகுப்பை (default properties and methods) வரையறுக்க உங்களை அனுமதிக்கிறது. இது பல நிகழ்வுகளைக் குறியீட்டை நகலெடுக்காமல் ஒரே நடத்தை மற்றும் கட்டமைப்பைப் (behaviour and structure) பகிர அனுமதிக்கிறது. இது நினைவகப் பயன்பாட்டைக் குறைக்கிறது, ஏனெனில் ஒவ்வொரு நிகழ்வும் முன்மாதிரிகளின் பண்புகளின் நகல்களைச் சேமிக்க வேண்டியதில்லை. 

**நெகிழ்வான பொருள் உருவாக்கம் (Flexible Object Creation)**

முன்மாதிரி முறையைப் பயன்படுத்தி உருவாக்கப்பட்ட பொருள்களின் பண்புகளை மாற்றுவதன் மூலமோ அல்லது நிகழ்வுக்குக் குறிப்பிட்ட புதிய பண்புகளைச் சேர்ப்பதன் மூலமோ எளிதாகத் தனிப்பயனாக்கலாம் (customized).

**டைனமிக் ரன்டைம் மாற்றங்கள் (Dynamic Runtime Changes)** 

இயக்க நேரத்தில் (runtime) முன்மாதிரி பொருளில் செய்யப்படும் மாற்றங்கள் முன்மாதிரியின் அடிப்படையில் அனைத்து நிகழ்வுகளிலும் (instances) பிரதிபலிக்கின்றன. இந்த நடத்தை முன்மாதிரியின் புதுப்பிப்புகள் மற்றும் மாற்றங்களை அனுமதிக்கிறது, அதே முன்மாதிரியைப் பகிரும் அனைத்து நிகழ்வுகளையும் பாதிக்கிறது. 

## 5.3. எடுத்துக்காட்டு 

```javascript 
const cameraPrototype = {
    model = 'default',
    make = 'default',
    shutter: function () {
        console.log(`The ${this.make} ${this.model} has taken a photo`);
    }
};

const camera1 = Object.create(cameraPrototype);
camera1.model = 'X-Pro 3';
camera1.make = 'Fujifilm';

const camera1 = Object.create(cameraPrototype);
camera1.model = 'R5';
camera1.make = 'Canon';
```

---
