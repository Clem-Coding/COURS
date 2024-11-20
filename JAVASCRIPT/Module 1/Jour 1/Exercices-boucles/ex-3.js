// Créez une boucle qui fait défiler les nombres de 0 à 100.
// De 0 à 50 affichez un nombre sur deux.
// De 51 à 100 affichez un nombre sur trois.
// Si le nombre est pair : affichez “Pair”.
// Si le nombre est impair : affichez “Impair”.

let i = 0;
while (i <= 100) {
  if (i % 2 === 0) {
    console.log("pair", i);
  } else {
    console.log("impair : ", i);
  }
  if (i <= 50) {
    i += 2;
  } else {
    i += 3;
  }
}
