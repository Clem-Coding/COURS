let nombre1 = Number(prompt('saisir un 1er nombre'));
console.log(nombre1);
let operateur = prompt('saisir un opérateur');
console.log(operateur);
let nombre2 = Number(prompt('saisir un 2ème nombre'));
console.log(nombre2);

let resultat = 0;

if (operateur === '+') {
    resultat = nombre1 + nombre2;

}

else if (operateur === '*') {
    resultat = nombre1 * nombre2;

}

else if (operateur === '/') {
    resultat = nombre1 / nombre2;

}

else if (operateur === '-') {
    resultat = nombre1 - nombre2;

}






console.log("le résultat de l'opération est :", resultat);
