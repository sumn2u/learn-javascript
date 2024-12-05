---
chapter: 26
pageNumber: 255
description: Utilisation de Framer Motion pour les animations dans les applications React.
---

## Animation à l’aide de Framer Motion

Framer Motion est une bibliothèque de mouvements prête pour la production pour React. Il facilite la création d’animations complexes.

**Installation**

Vous pouvez inclure Framer Motion dans votre projet à l’aide de npm:

```bash
npm install framer-motion
```

**Animation de base**

Voici un exemple simple d’utilisation de Framer Motion pour animer un composant:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
    return (
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
            Je vais me déplacer vers la droite
        </motion.div>
    );
};

export default AnimatedComponent;
```

**Animation avancée**

Framer Motion fournit diverses fonctionnalités pour les animations avancées, telles que les images clés, les mouvements et les animations de mise en page.


- **Images clés:**
Les images clés vous permettent de définir plusieurs étapes d’une animation. Voici un exemple :

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const KeyframeComponent = () => {
    return (
        <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            Je vais faire des allers-retours
        </motion.div>
    );
};

export default KeyframeComponent;
```


- **Gestes**
Framer Motion vous permet de créer des animations basées sur les gestes de l’utilisateur. Voici un exemple:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const GestureComponent = () => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
            Traîne-moi partout
        </motion.div>
    );
};

export default GestureComponent;
```


- **Animations de mise en page**
Framer Motion facilite l’animation des modifications de mise en page. Voici un exemple:

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LayoutAnimationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout onClick={() => setIsOpen(!isOpen)} style={{ background: 'lightblue', padding: '10px' }}>
            {isOpen ? 'Click to collapse' : 'Click to expand'}
        </motion.div>
    );
};

export default LayoutAnimationComponent;
```

{% hint style="info" %}
Pour plus de détails et d’exemples, consultez la documentation de Framer Motion.
{% endhint %}