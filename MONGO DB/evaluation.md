```Javascript

//EVALUATION

// Affichez les types des articles pour les sociétés dont le nom commence par A

db.inventory.find({society : {$regex : /^A/ }}, {_id:0, type : 1})



// Affichez le nom des sociétés qui ont au moins un tag égal à "blank".
db.inventory.find( { tags: "blank" },{_id :0, society : 1});



// Affichez le nom des sociétés et leur(s) tag(s) si et seulement si ces sociétés ont au moins un tag.


db.inventory.find(  { tags: { $exists: true, $ne: [] } },{_id:0, society:1, tags:1});


// Affichez le nom des sociétés dont le statut est A ou le type est journal.

db.inventory.find({$or : [{status:"A"}, {type :"journal"}]},{_id:0, society:1});


// Affichez le nom des sociétés dont le statut est A ou le type est journal. Leur champ qty doit être inférieur strictement à 100.
db.inventory.find(
  {
    $or: [
      { status: "A" },
      { type: "journal" }
    ],
    qty: { $lt: 100 }
  },
  { _id: 0, society: 1 }
);




// Affichez le type des articles qui ont un prix de 0.99 ou de 1.99. Leur propriété sale doit être à true ou leur quantité strictement inférieure à 45.

db.inventory.find({price : {$in:[0.99,1.99]}, $or : [{sale:true}, {qty:{$lt : 45}}]},{_id:0,type:1});

db.inventory.find(
  {
    price: { $in: [0.99, 1.99] },
    $or: [
      { sale: true },
      { qty: { $lt: 45 } }
    ]
  },
  { _id: 0, type: 1 }
);



// Affichez les noms des sociétés depuis 2018 avec leur quantité (sans agrégation)

db.inventory.find({year : {$gte : 2018}},{_id:0, society:1, qty:1});


db.inventory.find(
  { year: { $gte: 2018 } },
  { _id: 0, society: 1, qty: 1 }
);


// Affichez le nom des sociétés dont la quantité d'articles est supérieure à 45.


db.inventory.find(
  {qty: {$gt : 45}},
  {_id:0,society :1}
);


db.inventory.find(
  { qty: { $gt: 45 } },
  { _id: 0, society: 1 }
);



// Affichez le nom des sociétés dont la quantité d'article(s) est strictement supérieure à 45 et inférieure ou égale à 90.

db.inventory.find(
  {qty: {$gt : 45,$lte:90}},
  {_id:0, society:1}
)


// Affichez tous les articles de type journal.
db.inventory.find({type : "journal"});

// Puis donnez la quantité totale de ces articles (somme des valeurs de la propriété qty).

db.inventory.aggregate([
  {
    $match: { type: "journal" }
  },
  {
    $group: {
      _id: null,
      totalQty: { $sum: "$qty" }
    }
  }
]);



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
