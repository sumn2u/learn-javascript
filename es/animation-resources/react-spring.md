---
chapter: 26
pageNumber: 300
description: Usando React Spring para animaciones en aplicaciones React.
---

# Uso de React Spring para animaciones

React Spring es una biblioteca de animación basada en física de resortes para React que facilita la creación de animaciones.

## Instalación

Puedes incluir React Spring en tu proyecto usando npm:

```bash
npm install react-spring
```

## Animación básica

A continuación se muestra un ejemplo sencillo del uso de React Spring para animar un componente:

```javascript
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return <animated.div style={props}>Me desvaneceré</animated.div>;
};

export default AnimatedComponent;
```

## Animación avanzada

React Spring proporciona varias funciones para animaciones avanzadas, como transiciones, estelas y fotogramas clave.

- **Transiciones**
Las transiciones permiten animar los componentes mientras se montan y desmontan. A continuación, se muestra un ejemplo:

```javascript
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const TransitionComponent = () => {
    const [items, setItems] = useState([]);
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    });

    return (
        <div>
            <button onClick={() => setItems([...items, { key: items.length }])}>
                Add Item
            </button>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>{item.key}</animated.div>
            ))}
        </div>
    );
};

export default TransitionComponent;
```

- **Estelas**
Las estelas permiten animar una lista de componentes en secuencia. A continuación, se muestra un ejemplo:

```javascript
import React from 'react';
import { useTrail, animated } from 'react-spring';

const items = [1, 2, 3];

const TrailComponent = () => {
    const trail = useTrail(items.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
        <div>
            {trail.map((props, index) => (
                <animated.div key={index} style={props}>
                    {items[index]}
                </animated.div>
            ))}
        </div>
    );
};

export default TrailComponent;
```

{% hint style="info" %}
Para obtener más detalles y ejemplos, consulte la documentación de React Spring.
{% endhint %}
