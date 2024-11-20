// Consigne : Créer un script qui construit un tableau avec les nombres du tableau
// numbers triés du plus petit au plus grand, puis affichez votre tableau.
//Vous n’avez pas le droit d’utiliser Array.sort ou toute autre fonction de tri fournie par JavaScript.

// https://kornog-dev.github.io/BRE03/js/j2/bonus/

let numbers = [
  -23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28,
];

for (let i = 0; i < numbers.length; i++) {
  //////
}

// pseudo code, source wikipedia "tri à bulles" :
// tri_à_bulles(Tableau T)
//  pour i allant de (taille de T)-1 à 1
//  pour j allant de 0 à i-1
//      si T[j+1] < T[j]
//          (T[j+1], T[j]) ← (T[j], T[j+1])

// version optimisée :
// tri_à_bulles_optimisé(Tableau T)
//     pour i allant de (taille de T)-1 à 1
//         tableau_trié ← vrai
//         pour j allant de 0 à i-1
//             si T[j+1] < T[j]
//                 (T[j+1], T[j]) ← (T[j], T[j+1])
//                 tableau_trié ← faux
//         si tableau_trié
//             fin tri_à_bulles_optimisé
