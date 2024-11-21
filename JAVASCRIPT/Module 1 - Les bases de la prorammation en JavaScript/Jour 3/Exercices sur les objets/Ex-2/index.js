//Calculez la moyenne des notes du student et assignez cette moyenne à sa propriété average.

let student = {
  name: "Steven",
  age: 19,
  grades: [12, 14, 10],
  average: 0,
};

let notesSum = 0;

for (let note of student.grades) {
  notesSum += note;
}

student.average = notesSum / student.grades.length;

console.log("la moyenne de l'élève", student.average);
console.log(student);
