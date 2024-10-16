// 1. Lorsque l'utilisateur clique sur l'icone d'aide (classe js-help), ouvrir la popup

// 2. Lorsque l'utilisateur clique sur la croix en haut à droite de la popup d'aide (classe close-button), fermer la popup

// 3. Lorsque l'utilisateur clique sur l'icône menu (en haut à gauche), ouvrir / fermer le menu gauche

// 4. Lorsque l'utilisateur appuie sur la touche F (comme fullscreen)
// Afficher / masquer le header et le footer


document.addEventListener('DOMContentLoaded', function(event) {
    console.log(event);
    
    
// ______________________Sélection des éléments_________________________________

    let popupDOM = document.querySelector(".popup-help")
    let helpButton = document.querySelector('.js-help')
    let closeButton = document.querySelector('.close-button')
    let burgerButton = document.querySelector ('.js-menu')
    let sideMenu = document.querySelector('.left-panel')
    let headerDOM = document.querySelector('.header')
    let footerDOM = document.querySelector('.footer')
    console.log("test selection", footerDOM)
    
    
//________________________Ecouteurs d'événements _______________________________
    
    // faire apparaître la pop-pup help
    
    helpButton.addEventListener('click', function(){
        console.log("test btn")
        popupDOM.style.display = 'block'
    })
    
    
    //fermer la pop-up help
    
    closeButton.addEventListener('click', function(){
        console.log("je clique sur le bouton!!!")
        popupDOM.style.display = ''   //revenir à l'affichage par défaut "none
    })
    
    
    
    // Function toogle pour afficher et masquer
    
    function toogleDisplay(element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
           element.style.display = 'none'
        }
    }
    
    
    
    // ouvrir le menu latéral
    
    
    burgerButton.addEventListener('click', function(){
        

    })
    
    
    //Afficher et masquer le header avec la touche F
    
    document.addEventListener('keydown', function(event) {
       
      if (event.key === "f") {
          console.log("je presse la touche F")
          toogleDisplay(footerDOM, headerDOM);
      }   
 
    })
    
    
    
    
    
});
