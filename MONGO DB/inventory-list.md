```Javascript

// Liste de base



clementineblondeau> db.inventory.find()
[
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
  {
    _id: ObjectId("678f6371ca24ea1794770059"),
    sale: false,
    price: 1.99,
    society: 'Alan',
    type: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A',
    tags: [ 'blank', 'red', 'blank', 'blank' ],
    year: 2019
  },
  {
    _id: ObjectId("678f6371ca24ea179477005a"),
    sale: true,
    price: 1.5,
    society: 'Albert',
    type: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A',
    tags: [ 'gray' ],
    year: 2019
  },
  {
    _id: ObjectId("678f6371ca24ea179477005b"),
    sale: true,
    price: 7.99,
    society: 'Alice',
    type: 'lux paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D',
    year: 2020
  },
  {
    _id: ObjectId("678f6371ca24ea179477005c"),
    sale: true,
    price: 2.99,
    society: 'Sophie',
    type: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D',
    tags: [ 'gel', 'blue' ],
    year: 2017
  },
  {
    _id: ObjectId("678f6371ca24ea179477005d"),
    sale: false,
    price: 0.99,
    society: 'Phil',
    type: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A',
    tags: [ 'gray' ],
    year: 2018
  },
  {
    _id: ObjectId("678f6371ca24ea179477005e"),
    sale: true,
    price: 4.99,
    society: 'Nel',
    type: 'journal',
    qty: 19,
    size: { h: 10, w: 21, uom: 'cm' },
    status: 'B',
    tags: [ 'blank', 'blank', 'blank', 'red' ],
    year: 2019,
    level: 100
  },
  {
    _id: ObjectId("678f6371ca24ea179477005f"),
    sale: true,
    price: 4.99,
    society: 'Alex',
    type: 'journal',
    qty: 15,
    size: { h: 17, w: 20, uom: 'cm' },
    status: 'C',
    tags: [ 'blank' ],
    year: 2019
  },
  {
    _id: ObjectId("678f6371ca24ea1794770060"),
    sale: false,
    price: 5.99,
    society: 'Tony',
    type: 'journal',
    qty: 100,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'B',
    tags: [ 'blank', 'blank', 'blank', 'red' ],
    year: 2020
  }
]
clementineblondeau> db.inventory.find()
[
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
  {
    _id: ObjectId("678f6371ca24ea1794770059"),
    sale: false,
    price: 1.99,
    society: 'Alan',
    type: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A',
    tags: [ 'blank', 'red', 'blank', 'blank' ],
    year: 2019
  },
  {
    _id: ObjectId("678f6371ca24ea179477005a"),
    sale: true,
    price: 1.5,
    society: 'Albert',
    type: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A',
    tags: [ 'gray' ],
    year: 2019
  },
  {
    _id: ObjectId("678f6371ca24ea179477005b"),
    sale: true,
    price: 7.99,
    society: 'Alice',
    type: 'lux paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D',
    year: 2020
  },
  {
    _id: ObjectId("678f6371ca24ea179477005c"),
    sale: true,
    price: 2.99,
    society: 'Sophie',
    type: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D',
    tags: [ 'gel', 'blue' ],
    year: 2017
  },
  {
    _id: ObjectId("678f6371ca24ea179477005d"),
    sale: false,
    price: 0.99,
    society: 'Phil',
    type: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A',
    tags: [ 'gray' ],
    year: 2018
  },
  {
    _id: ObjectId("678f6371ca24ea179477005e"),
    sale: true,
    price: 4.99,
    society: 'Nel',
    type: 'journal',
    qty: 19,
    size: { h: 10, w: 21, uom: 'cm' },
    status: 'B',
    tags: [ 'blank', 'blank', 'blank', 'red' ],
    year: 2019,
    level: 100
  },
  {
    _id: ObjectId("678f6371ca24ea179477005f"),
    sale: true,
    price: 4.99,
    society: 'Alex',
    type: 'journal',
    qty: 15,
    size: { h: 17, w: 20, uom: 'cm' },
    status: 'C',
    tags: [ 'blank' ],
    year: 2019
  },
  {
    _id: ObjectId("678f6371ca24ea1794770060"),
    sale: false,
    price: 5.99,
    society: 'Tony',
    type: 'journal',
    qty: 100,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'B',
    tags: [ 'blank', 'blank', 'blank', 'red' ],
    year: 2020
  }
]

```
