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
let bobbyImg = document.getElementById("bobby")
let catImg = document.getElementById("cat")





console.log("le bouton damier", damierButton)
console.log("le bouton disco", discoButton)
console.log("le bouton labyrinth", labyrinthButton)
console.log("toutes les cellules", cells)


/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/

// Les fonctions (appelées par les Event Listener) sont déclarées ici.


//__________________________ Tools _____________________________________________


// fonction pour récupéer les "coordonnées" des colonnes et des lignes
function getRowCol(index) {
  return {
    row: Math.floor(index / 8),
    col: index % 8
  };
}



function clearCheckboard() {
  console.log("test fonction CLEAR checkboard");

  cells.forEach(function (cell) {
    const classesToRemove = [
      "disco-color1",
      "disco-color2",
      "disco-color3",
      "disco-color4",
      "disco-color5",
      "black"
    ];
    classesToRemove.forEach((className) => {
      cell.classList.remove(className);
    });
  });
}



//_________________PREMIER EXO : Damier floor___________________________________

function createCheckboard() {
  console.log("test fonction CREATE Checkboard");

  for (let i = 0; i < cells.length; i++) {
    const { row, col } = getRowCol(i); // récupération des coordonnées avec getRowCol()

    if (row % 2 === 0 && col % 2 === 0) { // si les lignes et colonnes sont paires
      cells[i].classList.add("black");

    }
    else if (row % 2 !== 0 && col % 2 !== 0) { // si les lignes et colonnes sont impaires
      cells[i].classList.add("black");

    }
  }
}


//_________________DEUXIEME EXO : Disco floor___________________________________

function createRandomizeColors() {
  
  
  
// Tableau des classes  
  const classes = [
    "disco-color1",
    "disco-color2",
    "disco-color3",
    "disco-color4",
    "disco-color5"
  ];



  cells.forEach((cell) => {
    let randomizeClasses = classes[Math.floor(Math.random() * classes.length)];
    console.log(randomizeClasses);
    cell.classList.add(randomizeClasses);
  });
}




//_________________TROISIEME EXO : Labyrinthe floor_____________________________

function createLabyrinth() {
  console.log("Création du labyrinthe");
  
 
  for (let i = 0; i < cells.length; i++) {
    const { row, col } = getRowCol(i); // récupération des coordonnées


    const key = `${row},${col}` // clé et "gabarit" pour le switch

    switch (key) {

      case `${row},0`: // toute la colonne 0
      case `${row},7`: // toute la colonne 7
      case `7,${col}`: // toute la ligne 7
        cells[i].classList.add("black");
        break;

      case `0,${col}`: // ligne 0, indifféremment les colonnes
        if (col !== 1) { // Exclut la colonne 1
          cells[i].classList.add("black");
        }
        break;

      case `${row},5`: // indifféramment toutes les lignes, colonne 5
        if (row !== 6) { // Exclut la ligne 6
          cells[i].classList.add("black");
        }
        break;


      case `1,3`: // juste la cellule en ligne 1 et colonne 3
        cells[i].classList.add("black");
        break;


      case `3,${col}`: //ligne 3, colonnes de 1 à 3
        if (col >= 1 && col <= 3) {
          cells[i].classList.add("black");
        }
        break;


      case `5,${col}`: // ligne 5, colonnes de 1 à 3
        if (col >= 2 && col <= 4) {
          cells[i].classList.add("black");
        }
        break;


    }
  }
}


//____________QUATRIEME EXO : Push Pull Boom au click___________________________


function makePush() {
  const cell = this;
  cell.classList.add("push");
}

function makePull() {
  const cell = this;
  cell.classList.remove("push")
  cell.classList.add("pull");

}


function makeBoom() {
  const cell = this;
  cell.classList.add("boom");

}



//_________________CINQUIEME EXO  : faire déplacer Bobby________________________

let positionX = 0;
let positionY = 0;

function bobbyMove(event) {
  let key = event.key;
  console.log(key);
  
  if (
    key === "ArrowDown" ||
    key === "ArrowUp" ||
    key === "ArrowLeft" ||
    key === "ArrowRight"
  ) {
    bobbyImg.classList.add("visible");
}


  switch (key) {
    case "ArrowRight":
      positionX += 3;
      bobbyImg.style.left = positionX + "rem";
      break;

    case "ArrowLeft":
      positionX -= 3; //
      bobbyImg.style.left = positionX + "rem";
      break;

    case "ArrowDown":
      positionY += 3;
      bobbyImg.style.top = positionY + "rem";
      break;

    case "ArrowUp":
      positionY -= 3;
      bobbyImg.style.top = positionY + "rem";
      break;

  }
}



//_________________SIXIEME EXO : Le chat qui avance random______________________



let cellSize = 3;  // en rem
let currentIndex = 0


function moveCatRandom() {
  
  const { row, col } = getRowCol(currentIndex); // récupère les coordonnées des lignes/colonnes
  
  
  let directions = ["up", "down", "left", "right"];
  let randomDirection = directions[Math.floor(Math.random() * directions.length)];

  switch (randomDirection) {
    case 'left':
      if (col > 0) { // Vérifie qu'on n'est pas dans la première colonne
        currentIndex -= 1; // On peut le déplacer d'une case vers la gauche ( //Si colonne 0 ou moins, auncun mouvement)
      }                   
      break;

    case 'right':
      if (col < 7) { // Vérifie qu'on n'est pas dans la dernière colonne
        currentIndex += 1; // On peut le déplacer d'une case vers la droite
      }
      break;

    case 'up':
      if (row > 0) { // Vérifie qu'on n'est pas dans la première ligne
        currentIndex -= 8; ; // On l'envoie sur la ligne d'avant en le bougeant de 8 cases.
      }
      break;

    case 'down':
      if (row < 7) { // Vérifie qu'on n'est pas dans la dernière ligne
        currentIndex += 8; // On l'envoie sur la ligne d'après en le bougeant de 8 cases.
      }
      break;
  }

  // On récupère les nouvelles positions du chat ici
  const position = getRowCol(currentIndex);
  console.log (position)

  // Appliquer les nouvelles positions au chat
  catImg.style.top = position.row * cellSize + "rem";
  catImg.style.left = position.col * cellSize + "rem";

  return currentIndex; // Retourne la nouvelle position de l'index
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
  createLabyrinth()

}


function pushPullBoom() {
  cells.forEach(cell => {
    cell.addEventListener("mousedown", makePush);
    cell.addEventListener("mouseup", makePull);
    cell.addEventListener("dblclick", makeBoom)
  });
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

  pushPullBoom()



  // Afficher "push" sur fond jaune (utiliser la classe "push")
  // Puis, lorsqu'il relâche le bouton, 
  // afficher "pull" sur fond orange (utiliser la classe "pull")
  // Enfin, s'il double clique sur la case,
  // afficher "boom" sur fond rouge (utiliser la classe "boom")


  // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
  // Afficher bobby et le déplacer sur le grille (de case en case)

  document.addEventListener('keydown', bobbyMove)

  // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
  // Le déplacer de case en case
  // dans la direction de la flèche appuyée


  // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau


setInterval(moveCatRandom, 1000);

  // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
  // dans une direction aléatoire toutes les secondes

});
