// Exercice 1

// Vous allez créer un objet représentant un user. Il a pour firstName Yeppy et comme lastName Yep.
// Faites un console.log() de son firstName. Faites un console.log() de son lastName.
// Ensuite en gardant le même objet, modifiez son firstName qui doit devenir Yeppidy.
// Faites un console.log() de son firstName.

let user = {
  firstName: "Yeppy",
  lastName: "Yep",
};

console.log(user.firstName);
console.log(user.lastName);

user.firstName = "Yeppidy";
console.log(user.firstName);

//Exercice 2
//Parcourez le tableau et pour chacun des users, faites un console.log() de son firstName.

let users = [
  {
    firstName: "Teddy",
    lastName: "Roosevelt",
  },
  {
    firstName: "Barack",
    lastName: "Obama",
  },
  {
    firstName: "Donald",
    lastName: "Trump",
  },
];

users.forEach((user) => console.log(user.firstName));

//Exercice 3
//Pourcourez le tableau des pizzas. Si la pizza a 3 ingrédients ou moins son prix doit devenir 7.99
//si elle a plus de 3 ingrédients son prix doit devenir 8.99. Faites ensuite un console.log() du prix.

let pizzas = [
  {
    name: "Veggie",
    ingredients: ["Tomato", "Cheese", "Mushrooms"],
    price: null,
  },
  {
    name: "Meattie",
    ingredients: ["Tomato", "Cheese", "Meat"],
    price: null,
  },
  {
    name: "Fishie",
    ingredients: ["Tomato", "Cheese", "Fish"],
    price: null,
  },
  {
    name: "Supreme",
    ingredients: ["Tomato", "Cheese", "Meat", "Olive"],
    price: null,
  },
];

pizzas.forEach((pizza) => {
  if (pizza.ingredients.length <= 3) {
    pizza.price = 7.99;
  } else {
    pizza.price = 8.99;
  }
  console.log(`La pizza ${pizza.name} est à ${pizza.price} euros`);
});

//Exercice 4
//Parcourir le tableau, pour chacune des relations faites un console.log() du nom de la personne,
// puis un console.log() de chacun de ses ami-e-s.

let relationships1 = [
  {
    name: "Sarah",
    friends: ["John", "Sophie"],
  },
  {
    name: "John",
    friends: ["Sophie", "Simon"],
  },
  {
    name: "Simon",
    friends: ["John", "Sophie", "Sarah"],
  },
  {
    name: "Sophie",
    friends: ["John", "Sarah"],
  },
];

relationships1.forEach((relation) => {
  console.log(relation.name);
  relation.friends.forEach((friend) => console.log(friend));
});

// Affichage alternatif :

relationships1.forEach((relation) => {
  console.log(
    `${relation.name} a ${
      relation.friends.length
    } amis : ${relation.friends.join(", ")}`
  );
});

//Exercice 5
//Parcourir le tableau des relations, pour chacune des relations, faites un console.log() du nom de la personne et un console.log()
// du nom de chacun de ses ami-e-s réciproques. (A est ami-e avec B ET B est ami-e avec A).

let relationships2 = [
  {
    name: "Sarah",
    friends: ["John", "Sophie"],
  },
  {
    name: "John",
    friends: ["Sophie", "Simon"],
  },
  {
    name: "Simon",
    friends: ["John", "Sophie", "Sarah"],
  },
  {
    name: "Sophie",
    friends: ["John", "Sarah"],
  },
];

relationships2.forEach((relation) => {
  console.log(relation.name);

  relation.friends.forEach((friend) => {
    let reciprocalFriend = relationships2.find((rel) => rel.name === friend);
    if (reciprocalFriend && reciprocalFriend.friends.includes(relation.name)) {
      console.log(friend);
    }
  });
});
