```Javascript

// Exercices UPDATE and DELETE

// Exercice 1

// Augmentez de 50% la quantité de chaque document qui a un status C ou D.




db.inventory.updateMany(
  { status: { $in: ["C", "D"] } },
  { $mul: { qty: 1.5 } }

)
 



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



// Exercice 2

// Augmentez maintenant de 150% les documents ayant un status A ou B et au moins 2 tags.
// Exercice 3

//     Ajoutez un champ scores de type array avec le score 19 pour les entreprises ayant une qty supérieure ou égale à 75.
//     Puis mettre à jour les entreprises ayant au moins une lettre a ou A dans leurs noms de société et ajouter leur un score 11 (champ scores).
//     Affichez les docs qui ont un score de 11
//     Ajoutez une clé comment pour les sociétés Alex et ajouter un commentaire : “Hello Alex”.
//     Affichez maintenant tous les docs qui n’ont pas la clé comment.

// Exercice 4

// Supprimez la propriété level se trouvant dans un/les document(s). Vérifiez qu’il existe au moins un doc qui possède le champ ou la clé level à l’aide d’une requête avant cette action.

// Vérifiez que le champ level n’existe plus après suppression.


