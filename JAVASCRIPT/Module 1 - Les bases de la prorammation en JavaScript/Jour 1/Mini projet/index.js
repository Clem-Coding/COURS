// Consigne version non guidée :
// Créez une boucle qui fait défiler les nombres de 0 à 100.
// De 0 à 50 affichez un nombre sur deux.
// De 51 à 100 affichez un nombre sur trois.
// Si le nombre est pair : affichez “Pair”.
// Si le nombre est impair : affichez “Impair”.

// Ma solution qui ne fonctionne pas absolument bien :
// let computerNumber = Math.floor(Math.random() * 100);
// console.log("le chiffre à trouver", computerNumber);
// let userAnswer = parseInt(window.prompt("donne un chiffre entre 0 et 100"));
// console.log("la réponse utilisateur", userAnswer);

// while (computerNumber !== userAnswer) {
//   if (userAnswer < computerNumber) {
//     userAnswer = parseInt(window.prompt("plus!"));
//   } else {
//     userAnswer = parseInt(window.prompt("moins!"));
//   }
// }

// window.alert(
//   `Bravo vous avez gagné, le nombre à trouver était bien ${computerNumber}`
// );

// la solution avec le guidage:

let number = Math.floor(Math.random() * 100);
console.log("nombre à trouver : ", number);
let win = false;

while (!win) {
  let guess = parseInt(window.prompt("Donnez un chiffre entre 0 et 100"));

  if (guess < number) {
    window.alert("plus");
  } else if (guess > number) {
    window.alert("moins");
  } else {
    win = true;
    window.alert(
      `Bravo vous avez gagné, le nombre à trouver était bien ${number}`
    );
  }
}
