---
chapter: 20
pageNumber: 114
---
# Les objets

Les objets sont des collections de paires `clé`, `valeur` et chaque paire de clé-valeur est appelée propriété de l'objet en question. Ici, la `clé` peut être `string`, alors que la `valeur` peut être une valeur de n'importe quel type (`string`, `number`, etc.).

### 📝 Tâches :

Nous vous présentons la famille Dupon avec deux membres. Et pour chaque membre, ses informations sont données sous la forme d'un objet.&#x20;

```javascript
let personne = {
    prenom: "Jean",                    //String
    nom: "Dupon",
    age: 35,                         //Number
    genre: "masculin",
    nombresFetiches : [ 7, 11, 13, 17], //Array
    autrePersonneImportante: personne2       //Object, 
};

let personne2 = {
    prenom: "Jeanne",
    nom: "Dupon",
    age: 38,
    genre: "feminin",
    nombresFetiches : [ 2, 4, 6, 8],
    autrePersonneImportante: personne
};

let famille = {
    nom: "Dupon",
    membres : [personne, personne2]       //Array of objects
};
```

* [ ] Trouvez un moyen d'afficher sur la `console` le prénom du premier membre de la famille `Dupon`.
* [ ] Remplacer le quatrième `nombresFetiches` du deuxième membre de la famille `Dupon` par `33`.
* [ ] Ajouter un nouveau membre à la famille en créant une nouvelle personne : (`Jimmy` `Dupon`, `13`, `masculin`, `[1, 2, 3, 4]`, `null`) et mettez à jour la liste.
* [ ] Afficher la `SOMME` des nombres fétiches de la famille `Dupon` sur la `console`.&#x20;

### 💡 Indices :

* Visitez le chapitre sur les [objets](../objects/) pour en apprendre plus sur comment fonctionnent les objets.
* Vous pouvez récupérer la propriété `nombresFetiches` de chaque personne dans l'objet famille.
* Pour chauque personne, une fois que vous avez récupéré ses nombres fétiches, utilisez une boucle pour sommer ses valeurs et par après, additionnez les sommes partielles obtenues.
