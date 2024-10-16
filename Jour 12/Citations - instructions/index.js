// 1. Pour chaque popup, lorsque l'utilisateur clique sur le bouton de fermeture x,
// masquer la popup en utilisant la classe appropriée

// 2. Pour chaque bouton du menu, lorsque l'utilisateur clique dessus,
// afficher la popup correspondante (qui a la même position dans la liste)
// en utilisant la classe appropriée


document.addEventListener('DOMContentLoaded', function(event) {

    // Selection Element du DOM   
    
    let buttonsDOM = document.querySelectorAll('.js-menu button');
    let closeButtons = document.querySelectorAll('.close-button');
    let popupBoxes = document.querySelectorAll('.js-popup');

    console.log("les boutons généraux", buttonsDOM);
    console.log("les boutons de fermeture", closeButtons);
    console.log("les popups de citations", popupBoxes);

    

// Boucle qui parcourt les boutons du DOM et en fonction du bouton cliqué 
//(boutons DOM ou Fermeture), active ou desactive la classe CSS "Visible"
    
// pour chaque bouton de fermeture ou boutonDOM,on ajoute un écouteur qui attend un clic
    for (let i = 0; i < popupBoxes.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            popupBoxes[i].classList.remove('visible');
        })

        buttonsDOM[i].addEventListener('click', function() {
            popupBoxes[i].classList.add('visible');
        })
    }


});
