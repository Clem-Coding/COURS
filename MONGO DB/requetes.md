```javascript
// prettier-ignore

//EXERCICE 1

// Compter le nombre de restaurants dans le quartier de Brooklyn.

// Pour compter le résultat d’une requête vous avez deux syntaxes possibles :

let count = 0;
db.restaurants.find({ borough: "Brooklyn" }).forEach((doc) => count++);
console.log(count);

//  OU

db.restaurants.find({ borough: "Brooklyn" }).count();

//EXERCICE 2
// Vous allez devoir écrire la requête qui va insérer un nouveau restaurant :

// Ce restaurant s’appelera “Freshly Burger”, il proposera des burgers.

// Son adresse est le 165 Farragut Road dans le quartier de Brooklyn.

// L’id du restaurant est ‘45872563’.

// Il a été contrôlé 2 fois, la première le 03/04/2015, il a eu le grade ‘A+’ et la note de 15. La seconde fois le 06/06/2021, il a obtenu le grade ‘A++’ avec la note de 18.

db.restaurants.insertOne({
  name: "Freshly Burger",
  borough: "Brooklyn",
  _id: ObjectId(45872563),
  cuisine: "Burgers",
  address: {
    building: "165",
    street: "Farragut Road",
  },
  grades: [
    { date: ISODate("2021-06-06T00:00:00.000Z"), grade: "A++", score: 18 },
    { date: ISODate("2015-04-03T00:00:00.000Z"), grade: "A+", score: 15 },
  ],
});

// Vérifiez bien ensuite que votre restaurant a bien été inséré.

db.restaurants.findOne({ name: "Freshly Burger" });

// EXERCICE 3

//Donnez les noms (et uniquement les noms) des restaurants ayant déjà obtenu le score de 20.

db.restaurants.find({ "grades.score": 20 }, { _id: 0, name: 1 });

//REQUETES BONUS

// les noms de tous les restaurants situés dans le quartier de Brooklyn, en excluant leur identifiant (_id).
db.restaurants.find({ borough: "Brooklyn" }, { _id: 0, name: 1 });

//  le nom et le type de cuisine des restaurants situés dans le quartier du Bronx.
db.restaurants.find({ borough: "Bronx" }, { _id: 0, name: 1, cuisine: 1 });

//Affiche les restaurants qui ont obtenu un score supérieur à 15, en ne montrant que leur nom et leur score.

db.restaurants.find(
  { "grades.score": { $gte: 15 } },
  { _id: 0, name: 1, "grades.score": 1 }
);

// Trouve tous les restaurants qui ont obtenu le grade A et affiche leur nom et le grade.

db.restaurants.find(
  { "grades.grade": "A" },
  { _id: 0, name: 1, "grades.grade": 1 }
);

// Trouve tous les restaurants qui se trouvent dans le quartier de Brooklyn et qui servent de la cuisine italienne. Affiche leur nom et l'adresse (street).
db.restaurants.find(
  { borough: "Brooklyn", cuisine: "Italian" },
  { _id: 0, name: 1, "address.building": 1, "address.street": 1 }
);

// Trouver tous les types de cuisine
db.restaurants.distinct("cuisine");

// Trouve tous les restaurants ayant obtenu un grade B et affiche uniquement leur nom et le score du grade.
db.restaurants.find(
  { "grades.grade": "B" },
  { _id: 0, name: 1, "grades.grade": 1 }
);

// EXERCICES REQUETES

// Exercice 1

// Combien y a t il de restaurants qui font de la cuisine italienne et qui ont eu un score de 10 au moins ?

db.restaurants.find({cuisine:"Italian", "grades.score":{$gte: 10}}).count();

// Affichez également le nom, les scores et les coordonnées GPS de ces restaurants. Ordonnez les résultats par ordre décroissant sur les noms des restaurants.

// 💡Remarque pour la dernière partie de la question utilisez la méthode sort :

db.collection.find(query, restriction).sort({ key: 1 }); // 1 pour ordre croissant et -1 pour décroissant

//Solution : (pb à résoudre)
db.restaurants .find( { cuisine: "Italian", "grades.score": { $gte: 10 } }, { _id: 0, name:1, "grades.score": 1, "address.coord": 1 } ) .sort({ name: -1 });

// Exercice 2
// Quels sont les restaurants qui ont eu un grade A et un score supérieur ou égal à 20 ?
// Affichez uniquement les noms et ordonnez les par ordre décroissant. Affichez le nombre de résultat.

db.restaurants
  .find(
    { "grades.grade": "A", "grades.score": { $gte: 20 } },
    { _id: 0, name: 1 }
  )
  .sort({ name: -1 });

//   Exercice 3
//   A l’aide de la méthode distinct trouvez tous les quartiers distincts de NY.
// https://www.mongodb.com/docs/manual/reference/method/db.collection.distinct/

db.restaurants.distinct("borough");

// Exercice 4

// Trouvez tous les types de restaurants dans le quartiers du Bronx. Vous pouvez là encore utiliser distinct et un deuxième paramètre pour préciser sur quel ensemble vous voulez appliquer cette close.

db.restaurants.distinct("cuisine", { borough: "Bronx" });

// Exercice 5
// Trouvez tous les restaurants dans le quartier du Bronx qui ont eu 4 grades.

db.restaurants.find({
  borough: "Bronx",
  grades: { $size: 4 },
});

// Exercice 6

// Sélectionnez les restaurants dont le grade est A ou B dans le Bronx.

db.restaurants.find({ borough: "Bronx", "grades.grade": { $in: ["A", "B"] } });

// Exercice 7

// Même question mais, on aimerait récupérer les restaurants qui ont eu à la dernière inspection (elle apparaît théoriquement en premier dans la liste des grades) un A ou B. Vous pouvez utilisez la notion d’indice sur la clé grade :

// "grades.0.grade"; // équivalent de grades[0].grade en js

db.restaurants.find({borough : "Bronx", "grades.0.grade" :{$in : ["A", "B"]} });

// Exercice 8

// Sélectionnez maintenant tous les restaurants qui ont le mot “Coffee” ou “coffee” dans la propriété name du document.

// Utilisez une RegEx :

// /[cC]offee/

db.restaurants.find({ name: { $regex: /[cC]offee/ } });

// Exercice 9

// Même question mais uniquement dans le quartier du Bronx.

db.restaurants.find({ borough: "Bronx", name: { $regex: /[cC]offee/ } });

// Exercice 10
// Trouvez tous les restaurants avec les mots Coffee ou Restaurant et qui ne contiennent pas le mot Starbucks. 

db.restaurants.find({
  name: {
    $regex: /Coffee|Restaurant/
  },
  name: {
    $nin: [/Starbucks/]  
  }
});


// Puis, même question mais uniquement dans le quartier du Bronx.

db.restaurants.find({borough :"Bronx",
  name: {
    $regex: /Coffee|Restaurant/
  },
  name: {
    $nin: [/Starbucks/]  
  }
});


// Exercice 11
// Trouvez tous les restaurants qui ont dans leur nom le mot clé coffee, qui sont dans le bronx ou dans Brooklyn, qui ont eu exactement 4 appréciations (grades).


db.restaurants.find({borough : {$in:["Bronx", "Brooklyn"]}, name: {$regex: /Coffee/ }})



// Exercice 12
// Affichez la liste des restaurants dont le nom commence et se termine par une voyelle.

db.restaurants.find({name : {$regex: /^[aeiouAEIOU].*[aeiouAEIOU]$/}});





// REQUETES BONUS AVEC 



// Sélectionne tous les restaurants du Brooklyn qui ont un grade A ou B, et dont le score est supérieur ou égal à 15.


db.restaurants.find({ borough: "Brooklyn", "grades.grade": { $in: ["A", "B"] }, "grades.score": { $gte: 15 } });

// Trouver tous les restaurants du "Queens" ayant un grade "A" ou "B" et un score inférieur à 10.

db.restaurants.find({borough :"Queens", "grades.grade": {$in : ["A","B"]}, "grades.score" : {$lt :10}});




// Sélectionne tous les restaurants situés dans le Queens et dont le nom commence par la lettre "B". 
// Affiche uniquement le nom et leur nom de rue.

db.restaurants.find({borough : "Queens", name : {$regex : /^B/ }}, {_id:0, name : 1, "address.street" : 1});



// Trouver tous les restaurants dans le borough de "Manhattan" où le grade est "A" ou "B", et le score de la dernière inspection 
// (le premier élément dans le tableau grades) est supérieur ou égal à 15, tout en affichant uniquement 
// le nom et le score de cette dernière inspection. Trie les résultats par score décroissant.


db.restaurants.find({borough:"Manhattan", "grades.grade" :{$in : ["A","B"]},"grades.0.score" : {$gte : 15} }, {_id:0, name: 1, "grades.0.score": 1}).sort({"grades.0.score": -1})


// <!-- Exercice 18 (Camille)
// Quels sont les restaurants dont le nom contient le mot pizza ? -->


db.restaurants.find({ name: { $regex: /pizza/i } }, {_id:0,name:1})


// Mince !!!! Vous êtes atteins d'hexakosioïhexekontahexaphobie (littéralement, « peur du nombre 666 » )
// Trouver TOUS les restaurants qui ne contiennent pas le nombre 666 :
// Dans le n° de batiment
// Dans le Zipcode
// Dans les coordonées

db.restaurants.find({
  "address.building": { $not: { $regex: /666/ } },
  "address.zipcode": { $not: { $regex: /666/ } },
  "address.street": { $not: { $regex: /666/ } }
})





// <!-- Exercice 22 🥖  (Joris)
// Vous êtes Corentin le Chauvin !
// Trouver les restaurants proposant de la cuisine française dans le quartier de Manhattan -->

db.restaurants.find({cuisine:"French", borough: "Manhattan"}, {_id:0, name:1})


// Exercice 23 🤡  (Joris)
// Vous être Emile le Débile !
// Trouver les restaurant proposant uniquement des donuts.
//  Attention, le nom du restaurant ne doit en aucun cas contenir le nom "donut" !

db.restaurants.find(
  { cuisine: "Donuts", name: { $not: { $regex: /donut/i } } },{ _id: 0, name: 1 , cuisine : 1}
)


```



