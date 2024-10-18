// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded

// 1. Initialisation de la valeur affichée
// - Récupérer la valeur de l'élément ayant la classe "js-number-input"
// - La recopier dans l'élément ayant la classe "js-number-display"

// 2. Mise à jour automatique de la valeur affichée lorsque l'utilisateur bouge le slider
//   - Ajouter un listener sur l'événement "change" de l'élément ayant la classe "js-number-input"
//   - Récupérer la valeur de l'élément "js-number-input"
//   - La recopier dans l'élément ayant la classe "js-number-display"


document.addEventListener('DOMContentLoaded', function(event) {
    
    // selection éléments du DOM
    
    let inputElement = document.querySelector('.js-number-input');
    let jsNumberDisplay = document.querySelector('.js-number-display');
    console.log (jsNumberDisplay)
    
    
    // Récuprer la valeur initiale
    
    let inputElementValue = inputElement.value
    console.log("valeur initiale", inputElementValue)
    jsNumberDisplay.textContent = inputElementValue
    
    
    // mettre à jour la valeur affichée
    
    inputElement.addEventListener('input', function(){
        inputElementValue = inputElement.value;  // 
        console.log("valeur mise à jour", inputElementValue)
        jsNumberDisplay.textContent = inputElementValue
        
    })
    
    
    
    
    
    
});

