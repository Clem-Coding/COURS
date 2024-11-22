//Exercice 2
//Parcourir le tableau avec la méthode for ... of ou la méthode for(let i...)
//et affichez les nombres s’ils sont égaux ou supérieurs à 100.

let numbers = [23, 54, 145, 325, 42, 987, -21];

for (let number of numbers) {
  if (number > 100) {
    console.log(number);
  }
}

//Exercice 3
//Parcourir le tableau et ses tableaux imbriqués et affichez chacun des noms et nombres qu’ils contiennent.

let data = [
  ["George", "Barack", "Donald"],
  [43, 44, 45],
  ["Superman", "Batman", "Iron Man"],
  ["Clark", "Bruce", "Tony"],
];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    console.log(data[i][j]);
  }
}

//Exercice 4
//Objectif : Construire un tableau sans doublons à partir d’un tableau qui lui contient des doublons.
let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];

//La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent
// une condition déterminée par la fonction callback. Ici il s'agit de comparer la première occurence de chaque élément
// parcouru avec son index. Si les deux sont égaux, l'élément est gardé
// (car c'est la première fois qu'il est rencontré), sinon il est éliminé.

function removeDuplicates(ages) {
  return ages.filter((age, index) => ages.indexOf(age) === index);
}

console.log(removeDuplicates(ages));

//Exercice 5
//Parcourir le tableau grades et ses tableaux imbriqués pour constuire un tableau averages
//qui contient les moyennes des tableaux imbriqués.

let grades = [
  [12, 11, 18],
  [13, 17, 9],
  [10, 15, 8],
  [14, 18, 13],
];

function calculateAverageOfSubArrays() {
  let averages = [];
  for (let i = 0; i < grades.length; i++) {
    let averageSubArrays = 0;
    for (let j = 0; j < grades[i].length; j++) {
      averageSubArrays += grades[i][j] / grades[i].length;
    }
    if (Number.isInteger(averageSubArrays)) {
      averages.push(averageSubArrays);
    } else {
      averages.push(Number(averageSubArrays.toFixed(2)));
    }
  }
  return averages;
}

console.log(calculateAverageOfSubArrays());
