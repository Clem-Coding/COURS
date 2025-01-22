```Javascript

// Exercices UPDATE and DELETE

// Exercice 1

// Augmentez de 50% la quantité de chaque document qui a un status C ou D.


  db.inventory.updateMany(
  { status: { $in: ["C", "D"] } },
  { $mul: { qty: 1.5 } }

)


db.inventory.find({$or : [{status : "C"}, {status : "D"}]});
db.inventory.find( { status: { $in: ["C", "D"] } });








// Exercice 2

// Augmentez maintenant de 150% les documents ayant un statut A ou B et au moins 2 tags.

db.inventory.updateMany(
  { status: {$in :["A", "B"]},
  "tags.1": { $exists: true }
  },
  {
    $mul: { qty: 2.5 }
  }
)



// Exercice 3

//     Ajoutez un champ scores de type array avec le score 19 pour les entreprises ayant une qty supérieure ou égale à 75.

db.inventory.updateMany(
{qty: {$gte :75}},
{ $set: { score: [19] } }
)

//     Puis mettre à jour les entreprises ayant au moins une lettre a ou A dans leurs noms de société et ajouter leur un score 11 (champ scores).

db.inventory.updateMany(
   {society : {$regex : /a/i}},
     {$set : {score : [11]}}
)
//     Affichez les docs qui ont un score de 11

db.inventory.find(
    {score : 11}, {_id:0, society:1}
)
//     Ajoutez une clé comment pour les sociétés Alex et ajouter un commentaire : “Hello Alex”.

db.inventory.updateMany(
    {society : "Alex"},
    {$set : {comment : "Hello Alex"}});



    db.inventory.find({society : "Alex"});


//     Affichez maintenant tous les docs qui n’ont pas la clé comment.

db.inventory.find ({comment : {$exists : false}})




// Exercice 4

// Supprimez la propriété level se trouvant dans un/les document(s).

db.inventory.updateOne({level : {$exists : true}},{$unset : {level :""}});
//
//  Vérifiez qu’il existe au moins un doc qui possède le champ ou la clé level à l’aide d’une requête avant cette action.

// Vérifiez que le champ level n’existe plus après suppression.

  db.inventory.find({level : {$exists : true}})





// Exercice switch

// Ajoutez la propriété label pour les documents ayant la propriété tags uniquement. Label prendra les valeurs suivantes selon le nombre de tags :

//     si le nombre de tags est strictement supérieur à 1 : A
//     si le nombre de tags est strictement supérieur à 3 : AA
//     Et B sinon.

// Pour vérifier une taille dans un switch :

// { $size :  "$tags" }

db.inventory.updateMany(
  { tags: { $exists: true } },
  {
    $set: {
      label: {
        $switch: {
         branches: [
            { case: { $gt: [{ $size: "$tags" }, 3] }, then: "AA" },
            { case: { $gt: [{ $size: "$tags" }, 1] }, then: "A" }

          ],
          default: "B"
        }
      }
    }
  }
);





db.inventory.updateMany(
  { tags: { $exists: true } },
  [
    {
      $set: {
        label: {
          $switch: {
            branches: [
              { case: { $gt: [{ $size: "$tags" }, 3] }, then: "AA" },
              { case: { $gt: [{ $size: "$tags" }, 1] }, then: "A" }
            ],
            default: "B"
          }
        }
      }
    }
  ]
);



{
    _id: ObjectId("678f6371ca24ea1794770058"),
    sale: true,
    price: 0.99,
    society: 'Alex',
    type: 'postcard',
    qty: 19,
    size: { h: 11, w: 29, uom: 'cm' },
    status: 'A',
    tags: [ 'blank', 'blank', 'blank' ],
    year: 2019
  },
```
