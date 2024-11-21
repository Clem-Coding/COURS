// Créez une boucle qui fait défiler les chiffres de 0 à 10.
// Si le chiffre est pair : affichez “Pair”.
// Si le chiffre est impair : affichez “Impair”.

let i = 0;

while (i <= 10) {
  if (i % 2 === 0) {
    console.log("pair :", i);
  } else {
    console.log("impair : ", i);
  }
  i += 1;
}
