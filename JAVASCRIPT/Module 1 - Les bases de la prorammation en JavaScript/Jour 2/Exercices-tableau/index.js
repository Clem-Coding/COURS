// // Exercice 1 : Afficher tous les éléments du tableau animals avec la syntaxe simple

let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Afficher tous les éléments du tableau gods avec la syntaxe for ... of
// (pour mémo : "for... in" est utilisé pour itérer sur les clés ou indices, "for...of" sur les valeurs)

let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];

for (let god of gods) {
  console.log(god);
}

// Exercice 2 :
// pour le tableau animals_even : afficher les animaux dont la clé est un nombre pair
// pour le tableau animals_odd : afficher les animaux dont la clé est un nombre impair

let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

for (let i = 0; i < animals_even.length; i++) {
  if (i % 2 === 0) {
    console.log("les animaux pairs", animals_even[i]);
  }
}

for (let i = 0; i < animals_odd.length; i++) {
  if (i % 2 !== 0) {
    console.log("les animaux impairs", animals_odd[i]);
  }
}

// Comme nos deux tableaux ont la même longueur on peut même faire une seule boucle

for (let i = 0; i < animals_even.length; i++) {
  if (i % 2 === 0) {
    console.log(animals_even[i]);
  } else {
    console.log(animals_odd[i]);
  }
}

// Exercice 3 : Dans la variable sum, calculer la somme de tous les nombres du tableau numbers
// en le parcourant avec une boucle puis afficher la variable sum.

let numbers = [10, 11, 15, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("la somme des nombres (exercice 3): ", sum);

// exercice 4 : Affichez tous les nombres compris dans les sous-tableaux dans la variable en utilisant des boucles.

let numbersExo4 = [
  [71, 15, 28],
  [33, 44],
  [-5, 11, 85],
];

for (let i = 0; i < numbersExo4.length; i++) {
  for (let j = 0; j < numbersExo4[i].length; j++) {
    console.log("les nombres de l'exo 4", numbersExo4[i][j]);
  }
}

// exercice 5 : Affichez tous les nombres compris dans le tableau numbers et ses sous tableaux en utilisant des boucles.

let numbersExo5 = [29, [71, 15, 28], 35, [33, 44], [-5, 11, 85], 56];

for (let i = 0; i < numbersExo5.length; i++) {
  if (numbersExo5[i].length) {
    for (let j = 0; j < numbersExo5[i].length; j++) {
      console.log(numbersExo5[i][j]);
    }
  } else {
    console.log(numbersExo5[i]);
  }
}

// exercice 6 : Dans la variable average, calculer la moyenne de toutes les notes des tableaux
// imbriqués dans "grades" en les parcourant avec des boucles puis afficher la variable "average".

// let grades = [
//   [20, 10],
//   [15, 20],
//   [13, 18],
// ];

// let average = 0;

// // là on parcourt le tableau, chaque itétartion correspond à un sous-tableau
// for (let i = 0; i < grades.length; i++) {
//   let sumSubArray = 0;

//   // là je parcours les sous-tableaux
//   for (let j = 0; j < grades[i].length; j++) {
//     sumSubArray += grades[i][j];
//   }

//   // verifications intermédiaires
//   console.log("la taille pour chaque sous-tableau", grades[i].length);
//   console.log("la somme pour chaque sous-tableau", sumSubArray);

//   let averageSubArray = sumSubArray / grades[i].length;
//   console.log("la moyenne pour chaque sous-tableau", averageSubArray);
//   average += averageSubArray;
// }

// average = average / grades.length;

// console.log("la moyenne totale", average);

let grades = [
  [20, 10],
  [15, 20],
  [13, 18],
];

let sumArray = 0;
let numberOfGrades = 0;

for (let i = 0; i < grades.length; i++) {
  for (let j = 0; j < grades[i].length; j++) {
    sumArray = sumArray + grades[i][j];
    console.log("sumarrayy", sumArray);
    numberOfGrades = numberOfGrades + 1;
    console.log("numberOfgrades", numberOfGrades);
  }
}

let average = sumArray / numberOfGrades;

console.log("la moyenne", average);
