---
chapter: 26
pageNumber: 302
description: Uso de Framer Motion para animaciones en aplicaciones React.
---

# Animación con Framer Motion

Framer Motion es una biblioteca de movimiento lista para producción para React. Facilita la creación de animaciones complejas.

## Instalación

Puedes incluir Framer Motion en tu proyecto usando npm:

```bash
npm install framer-motion
```

## Animación básica

A continuación se muestra un ejemplo sencillo del uso de Framer Motion para animar un componente:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
    return (
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
            Me moveré hacia la derecha
        </motion.div>
    );
};

export default AnimatedComponent;
```

## Animación avanzada

Framer Motion proporciona varias funciones para animaciones avanzadas, como fotogramas clave, gestos y animaciones de diseño.

- **Fotogramas clave:**
Los fotogramas clave permiten definir varias etapas de una animación. A continuación, se muestra un ejemplo:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const KeyframeComponent = () => {
    return (
        <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            Me moveré de un lado a otro
        </motion.div>
    );
};

export default KeyframeComponent;
```

- **Gestos**
Framer Motion te permite crear animaciones basadas en los gestos del usuario. Aquí tienes un ejemplo:

```javascript
import React from 'react';
import { motion } from 'framer-motion';

const GestureComponent = () => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
            Arrástrame por ahí
        </motion.div>
    );
};

export default GestureComponent;
```

- **Animaciones de diseño**
Framer Motion facilita la animación de cambios de diseño. A continuación, se muestra un ejemplo:

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LayoutAnimationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout onClick={() => setIsOpen(!isOpen)} style={{ background: 'lightblue', padding: '10px' }}>
            {isOpen ? 'Haga clic para contraer' : 'Haga clic para expandir'}
        </motion.div>
    );
};

export default LayoutAnimationComponent;
```

{% hint style="info" %}
Para obtener más detalles y ejemplos, consulte la documentación de Framer Motion.
{% endhint %}
