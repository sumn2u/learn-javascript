---
chapter: 1
pageNumber: 7
description: JavaScript est un langage de haut niveau, interprété et typé dynamiquement qui a été initialement utilisé pour le développement web. Le langage permet de créer des sites web et des applications interactives et dynamiques.
---

# Chapitre 1

# Introduction

De nos jours, les ordinateurs sont partout. Ils sont à même d'accomplir une grande variété de tâches rapidement et précisément. On les utilise dans de nombreux secteurs différents, comme le commerce, la santé, l'éducation ou le divertissement. De plus, ils sont devenus incontournables dans nos vies de tous les jours. Enfin, les ordinateurs sont également utilisés pour réaliser des calculs scientifiques et mathématiques complexes, pour stocker et interpréter de larges quantités de données et pour communiquer avec n'importe qui à travers le monde.

Programmer implique le fait de créer une suite d'instructions, appelées "programme", et de les faire appliquer par un ordinateur. Certaines fois, écrire un programme peut s'avérer être une entreprise fastidieuse et frustrante, car les ordinateurs réclament de la précision et des instructions spécifiques pour accomplir les tâches qui leur sont demandées.

![Intro Page](../.gitbook/assets/intro.png)

Les langages de programmation sont des langages qui permettent d'échanger des instructions avec les ordinateurs. On les utilise dans la majorité des phases de programmation et ils sont établis sur la manière dont échangent les humains les uns avec les autres. Comme les langages que nous utilisons dans la vie de tous les jours, les langages de programmation utilisent les mots et les combinent dans des phrases pour exprimer un concept donné. Il est intéressant de noter que la manière la plus répandue de communiquer avec les machines est basée sur un langage similaire à celui utilisé par les humains dans la vie de tous les jours. Bien souvent, les mots-clés utilisés dans un langage de programmation tel que JavaScript sont en anglais et possèdent un "sens humain".

Par le passé, la manière privilégiée d'interagir avec les ordinateurs était basée sur des langages proches de la machine comme BASIC ou DOS. Aujourd'hui, cette manière a largement été supplantée par des interfaces visuelles, plus faciles à appréhender, mais qui offrent moins de flexibilité. Cependant, des langages comme _JavaScript_ sont toujours utilisés et ont su s'adapter pour être toujours au premier plan dans les interfaces modernes et les navigateurs web courants.

JavaScript (_JS en abrégé_) est le langage de programmation qui est utilisé pour créer des interactions dynamiques sur les pages web, les jeux, les applications et même les serveurs. JavaScript a été créé chez Netscape, un navigateur web développé dans les années 1990. De nos jours, c'est un des langages informatiques le plus répandu et utilisé de par le monde.

À l'origine, JavaScript a été imaginé pour rendre les sites web "vivants". D'ailleurs, à cette époque, le langage n'était capable de s'exécuter qu'au sein d'un navigateur web. Actuellement, JavaScript peut être exécuté sur n'importe quel support qui est capable d'héberger son moteur de rendu. Les objets standards comme [Array](./arrays/README.md), [Date](./date-and-time.md), et [Math](./numbers/math.md) sont disponibles en JavaScript. De la même manière, le langage supporte les opérateurs, les structures de contrôles et les déclarations. _JavaScript côté client_ et _JavaScript côté serveur_ sont deux manières d'appréhender le langage.

- _JavaScript côté client_ permet de renforcer et de contrôler les pages web et le navigateur du client. Par exemple, il est possible de réagir aux événements utilisateur comme le clic de souris, la soumission d'un formulaire ou la navigation sur la page. En somme, JavaScript procure du contrôle et de l'interactivité.
- _JavaScript côté serveur_ permet de créer et de paramétrer les serveurs, les bases de données et les systèmes de fichiers.

JavaScript est un langage interprété. Cela signifie que lors de l'exécution du code écrit en JavaScript, un programme spécifique appelé interpréteur est chargé de traduire les directives en langage machine. Les navigateurs modernes utilisent la technologie Just In Time (JIT) pour compiler le langage à la volée en code source exécutable.

{% hint style="info" %}
"LiveScript" était le nom initial donné à JavaScript.
{% endhint %}

### Le code, et que faire avec

_Le code_ est l'ensemble des instructions écrites qui permettent de concevoir un programme. Dans cet ouvrage, de nombreux chapitres contiennent des exemples de code. Au cours de votre apprentissage, il est capital de lire et d'écrire à votre tour des instructions pour progresser. Vous ne pouvez pas vous contenter de lire rapidement les exemples - essayez de mettre en place une lecture active. Pour ce faire, entrez en profondeur dans les instructions et essayez de comprendre leur sens et leurs répercussions. Au début, vous rencontrerez probablement quelques difficultés à réaliser cette tâche, mais en faisant preuve de détermination, vous gagnerez en compréhension. Il en va de même pour les exercices - essayez de pratiquer et de résoudre ces derniers avant de consulter la solution. C'est la clé pour progresser dans votre acquisition des concepts du langage. Il peut aussi être utile d'écrire votre code dans un interpréteur JavaScript (en ligne ou directement dans votre navigateur) pour tester celui-ci. Progressivement, vous gagnerez en expérience au gré des exercises proposés.

### Conventions typographiques

Ci-dessous, le texte écrit dans la police monospace représente les éléments d'un programme. Ceci peut être un code à part entière ou une partie d'un programme plus complet. Les programmes, comme celui écrit ci-dessous, le sont toujours de cette manière:

```javascript
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

Parfois, la sortie attendue d'une suite d'instructions est écrite immédiatement après celles-ci. Elle est précédée de deux slashs indiquant le résultat _Result_, comme en suivant:

```javascript
console.log(txt);

// Result: txt = '45491625'
```
