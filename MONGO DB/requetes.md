```javascript
//EXERCICE 1

// Compter le nombre de restaurants dans le quartier de Brooklyn.

// Pour compter le résultat d’une requête vous avez deux syntaxes possibles :

 db.restaurants.find({ borough: "Brooklyn" }).forEach((doc) => count++);
 count

//  OU

db.restaurants.find({borough:"Brooklyn"}).count();



//EXERCICE 2
// Vous allez devoir écrire la requête qui va insérer un nouveau restaurant :

// Ce restaurant s’appelera “Freshly Burger”, il proposera des burgers.

// Son adresse est le 165 Farragut Road dans le quartier de Brooklyn.

// L’id du restaurant est ‘45872563’.

// Il a été contrôlé 2 fois, la première le 03/04/2015, il a eu le grade ‘A+’ et la note de 15. La seconde fois le 06/06/2021, il a obtenu le grade ‘A++’ avec la note de 18.


db.restaurants.insertOne({
...   address: {
...     building: '165',
...     coord: [-73.951012, 40.661121],
...     street: 'Farragut Road',
...     zipcode: '11213'
...   },
...   borough: 'Brooklyn',
...   cuisine: 'Burgers',
...   grades: [
...     {
...       date: ISODate("2015-04-03T00:00:00.000Z"),
...       grade: 'A+',
...       score: 15
...     },
...     {
...       date: ISODate("2021-06-06T00:00:00.000Z"),
...       grade: 'A++',
...       score: 18
...     }
...   ],
...   name: 'Freshly Burger',
...   restaurant_id: '45872563'
... });




// Vérifiez bien ensuite que votre restaurant a bien été inséré.

db.restaurants.find({name:"Freshly Burger"});

// EXERCICE 3

//Donnez les noms (et uniquement les noms) des restaurants ayant déjà obtenu le score de 20.

db.restaurants.find({ "grades.score": 20 }, { _id: 0, name: 1 });





//REQUETES BONUS

// les noms de tous les restaurants situés dans le quartier de Brooklyn, en excluant leur identifiant (_id).
db.restaurants.find({ borough: "Brooklyn" }, { _id: 0, name: 1 });

//  le nom et le type de cuisine des restaurants situés dans le quartier du Bronx.
db.restaurants.find({ borough: "Bronx" }, { _id: 0, name: 1, cuisine: 1 });

//Affiche les restaurants qui ont obtenu un score supérieur à 15, en ne montrant que leur nom et leur score.

db.restaurants.find({ "grades.score": { $gte: 15 } },{ _id: 0, name: 1, "grades.score": 1 });


// Trouve tous les restaurants qui ont obtenu le grade A et affiche leur nom et le grade.

db.restaurants.find({"grades.grade": "A"},  { _id: 0, name: 1, "grades.grade":1})


// Trouve tous les restaurants qui se trouvent dans le quartier de Brooklyn et qui servent de la cuisine italienne. Affiche leur nom et l'adresse (street).
db.restaurants.find({borough:"Brooklyn", cuisine:"Italian"}, { _id: 0, name: 1, "address.building":1, "address.street":1})


// Trouver tous les types de cuisine
db.restaurants.distinct("cuisine")

```
