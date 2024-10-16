/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.

let damierButton = document.querySelector('.js-damier')
let discoButton = document.querySelector('.js-disco')
let labyrinthButton = document.querySelector('.js-labyrinth')
let cells = document.querySelectorAll(".js-cell")

let row1 = document.querySelectorAll('.js-row1')
console.log("row1", row1)



console.log("le bouton damier", damierButton)
console.log("le bouton disco", discoButton)
console.log("le bouton labyrinth", labyrinthButton)
console.log("toutes les cellules", cells)


/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.

function createCheckboard() {
  console.log("test fonction CREATE Checkboard");

  for (let i = 0; i < cells.length; i++) {
    let row = Math.floor(i / 8)
    let col = i % 8; // 

    if (row % 2 === 0 && col % 2 === 0) { // si les lignes et colonnes sont paires
      cells[i].classList.add("black");

    }
    else if (row % 2 !== 0 && col % 2 !== 0) { // si les lignes et colonnes sont impaires
      cells[i].classList.add("black");

    }
  }
}


function createRandomizeColors() {
  const classes = ['disco-color1', 'disco-color2', 'disco-color3', 'disco-color4', 'disco-color5']
 
  // cells.classList.remove(randomizeClasses)

  cells.forEach((cell) => {
    
    let randomizeClasses = classes[Math.floor(Math.random() * classes.length)]
    console.log(randomizeClasses)
    cell.classList.add(randomizeClasses)
  })
}


function clearCheckboard() {
  console.log("test fonction CLEAR checkboard");
  
  cells.forEach(function(cell) {

  const classesToRemove = ['disco-color1', 'disco-color2', 'disco-color3', 'disco-color4', 'disco-color5', 'black'];
    classesToRemove.forEach(className => {
      cell.classList.remove(className);
    });
  })
}

/************************************************************/
/*                      Event listeners                       */
/**************************************************************/

// Les Event Listener sont déclarés ici.
function onDamierClick() {
  console.log("je teste la fonction Damier")
  clearCheckboard();
  createCheckboard();
}

function onDancefloorClick() {
  console.log("je teste la fonction DanceFloor")
  clearCheckboard();
  createRandomizeColors()
  
}


function onLabyrinthClick() {
  console.log("je teste la fonction labyrinthe")
  clearCheckboard();
  
}

/**************************************************************/
/*                       Main Program                         */
/**************************************************************/

// IMPORTANT Rappel : Pas de traitement ici,
// uniquement les déclarations des Event Listener.

document.addEventListener('DOMContentLoaded', () => {


  // Afficher les numéros de case ci après :
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = i
  }





  // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
  // Afficher un damier dans la grille

  damierButton.addEventListener('click', onDamierClick)

  // TIP : Ajouter la classe .black sur les cases concernées


  // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
  // Afficher un dancefloor de lumières dans la grille

  // TIP : Ajouter les classes .color1, ... .color5 aléatoirement


  discoButton.addEventListener('click', onDancefloorClick)

  // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
  // Afficher le motif présent sur le bouton dans la grille

  // TIP : Ajouter la classe .black sur les cases concernées

  labyrinthButton.addEventListener('click', onLabyrinthClick)




  // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")


  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée


  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau

  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
