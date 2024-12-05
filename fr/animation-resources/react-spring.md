---
chapter: 26
pageNumber: 255
description: Utilisation de React Spring pour les animations dans les applications React.
---

## Utilisation de React Spring pour les animations

React Spring est une bibliothèque d’animation basée sur la physique des ressorts pour React qui facilite la création d’animations.

**Installation**

Vous pouvez inclure React Spring dans votre projet à l’aide de npm:

```bash
npm install react-spring
```

**Animation de base**

Voici un exemple simple d’utilisation de React Spring pour animer un composant:

```javascript
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedComponent = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return <animated.div style={props}>Je vais m’effacer</animated.div>;
};

export default AnimatedComponent;
```

**Animation avancée**

React Spring fournit diverses fonctionnalités pour les animations avancées, telles que les transitions, les traînées et les images clés.


- **Transitions**
Les transitions vous permettent d’animer les composants lors de leur montage et de leur démontage. Voici un exemple:

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


- **Sentiers**
Les traînées vous permettent d’animer une liste de composants en séquence. Voici un exemple:

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
Pour plus de détails et d’exemples, consultez la documentation de React Spring.
{% endhint %}