
// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function ()  {
console.log ("test")



// Ce tableau contient la couleur de fond de chaque élément :
// l'élément 0 aura red, l'élément 1 aura blue, ...
let colors = ['red', 'blue', 'yellow', 'green', 'salmon', 'orange', 'purple', 'pink', 'navy', 'gold'];

// Ce tableau contient la position top/left de chaque élément :
// l'élément 0 aura top/left 1 à 1, l'élément 1 aura top/left à 2, ...
let positions = [1, 2, 9, 4, 5, 8, 3, 10, 6, 7];

/******************************** TODO  ********************************/


   // Récupérer TOUS les éléments ayant la classe js-magic-square
   
let squares = document.querySelectorAll(".js-magic-square")
console.log (squares)



for (let i = 0; i < squares.length ; i ++) {
   squares[i].style.backgroundColor = colors[i]
   squares[i].style.left = positions[i] + "em"
   squares[i].style.top = positions[i] + "em"
}



   // Pour chaque élément de la liste précédente

//       // Récupérer la position depuis le tableau positions
// let redSquare = squares[0]
// console.log ("le carré rouge",redSquare)
// redSquare.style.backgroundColor = colors[0]
// redSquare.style.top = positions[1] + "em"
// redSquare.style.left = positions[1] + "em"

// let blueSquare = squares[1]
// console.log ("le carré bleu",blueSquare)
// blueSquare.style.backgroundColor = colors[1]
// blueSquare.style.top = positions[2]
// blueSquare.style.left = positions[2]


// let yellowSquare = squares[2]
// console.log ("le carré jaune",yellowSquare)
// yellowSquare.style.backgroundColor = colors[2]
// yellowSquare.style.top = positions[9] + "em"
// yellowSquare.style.left = positions[9] + "em"



// let greenSquare = squares[3]
// console.log ("le carré vert",greenSquare)
// greenSquare.style.backgroundColor = colors[3]
// greenSquare.style.top = positions[4] + "em"
// greenSquare.style.left = positions[4] + "em"


// let salmonSquare = squares[4]
// console.log ("le carré saumon",greenSquare)
// salmonSquare.style.backgroundColor = colors[4]
// salmonSquare.style.top = positions[5] + "em"
// salmonSquare.style.left = positions[5] + "em"



// let orangeSquare = squares[5]
// console.log ("le carré orange",greenSquare)
// orangeSquare.style.backgroundColor = colors[5]
// orangeSquare.style.top = positions[8] + "em"
// orangeSquare.style.left = positions[8] + "em"



// let purpleSquare = squares[6]
// console.log ("le carré jaune",greenSquare)
// purpleSquare.style.backgroundColor = colors[6]
// purpleSquare.style.top = positions[3] + "em"
// purpleSquare.style.left = positions[3] + "em"


// let pinkSquare = squares[7]
// console.log ("le carré purple",greenSquare)
// pinkSquare.style.backgroundColor = colors[7]
// pinkSquare.style.top = positions[10] + "em"
// pinkSquare.style.left = positions[10] + "em"

// let navySquare = squares[8]
// console.log ("le carré navy",greenSquare)
// navySquare.style.backgroundColor = colors[8]
// navySquare.style.top = positions[6] + "em"
// navySquare.style.left = positions[6] + "em"


// let goldSquare = squares[7]
// console.log ("le carré gold",greenSquare)
// goldSquare.style.backgroundColor = colors[7]
// goldSquare.style.top = positions[7] + "em"
// goldSquare.style.left = positions[7] + "em"




      // Affecter à la propriété de style top : la position concaténée avec l'unité 'em'

      // Affecter à la propriété de style left : la position concaténée avec l'unité 'em'

      // Récupérer la couleur de fond de l'élement depuis le tableau colors

      // Affecter la couleur à la propriété de style background





})