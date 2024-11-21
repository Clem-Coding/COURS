// Consignes

// Vous allez créer une fonction appelée concatString qui prend deux paramètres firstString et secondString.
// Cette fonction va concatener les deux string qu’elle reçoit en paramètre dans une seule string.
//Elle retourne la string concaténée.

// Pour tester :

// console.log(concatString("Salut ", "Nounou!"));
// console.log(concatString("Tous les hommes naissent et demeurent ", "libres et égaux en dignité et en droits"));
// console.log(concatString("La vie, l'univers ", "et tout le reste"));

function concatString(firstString, secondString) {
  return firstString + secondString;
}

console.log(concatString("Salut ", "Nounou!"));
