// 1. Au premier clic, mettre la couleur de fond du carré à rouge

// 2. Au second clic, mettre la couleur de fond du carré à bleu

// 3. Au troisième clic, remettre la couleur de fond par défaut

// 4. Au quatrième clic, on reboucle à 1.

// etc...

document.addEventListener('DOMContentLoaded', function() {
    

 
 let buttonDOM = document.querySelector('.js-button');
 let squareDOM = document.querySelector('.js-square');
 let countClick = 0
    
  console.log (buttonDOM)  
  
 
  
  
  
//   for (let i =0; i <3, i++)
  
  
  
  buttonDOM.addEventListener('click', function (event) {
     
      countClick ++
      console.log (countClick)
       
      if (countClick === 1) {
      squareDOM.style.backgroundColor = "red"
           
      } else if (countClick === 2) {
      squareDOM.style.backgroundColor = "blue"
        
      } else if (countClick === 3) {
          
      squareDOM.style.backgroundColor = ""  
      countClick = 0 // réinitialise le compteur à zéro
           
      }

    


    })
    
})