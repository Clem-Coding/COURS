//Pour chacun des étudiants du tableau students, affichez son name, son age et son average
//en utilisant l’injection de variables dans un console.log().

let students = [
  {
    name: "Steven",
    age: 18,
    average: 10,
  },
  {
    name: "Jessica",
    age: 20,
    average: 13,
  },
  {
    name: "Charlie",
    age: 17,
    average: 12,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(
    `Nom: ${students[i].name}, Age : ${students[i].age}, Moyenne : ${students[i].average}`
  );
}
