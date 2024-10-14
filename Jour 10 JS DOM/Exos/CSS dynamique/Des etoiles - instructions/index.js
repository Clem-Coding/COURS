document.addEventListener('DOMContentLoaded', function () {
    console.log ("test")



function createStar(container, size) {
    const star = document.createElement('div');
    star.className = 'shine';
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = (Math.random() * 100) + '%';
    star.style.animationDelay = (Math.random() * 20) + 's';
    star.style.mozAnimationDelay = (Math.random() * 20) + 's';
    star.classList.add(size);

    container.appendChild(star);
};

// IMPORTANT : Toujours commencer par ajouter le listener sur DOMContentLoaded

    // Récupérer l'élément ayant la classe js-stars-container
    
    
    let container = document.querySelector(".js-stars-container")
    console.log (container)

    // Créer 500 étoiles en appelant la fonction createStar,

 
    
for (let i = 0; i < 500; i++) {
  let size; // on définit la variable size, pour que le paramètre soit défini quands on appelle la fonction 
 
 // en fonction des étoiles créées, on va créer 3 types différents pour l'animation
 // grace à la logique ci-dessous

  if (i % 2 === 0) {
    size = "small";
  } else if (i % 3 === 0) {
    size = "medium";
  } else {
    size = "large";
  }
  
  
  // Les valeurs de size on été définies graçe à la boucle ci-dessus,
  // on peut donc appeler la fonction, qui prend 1er paramètre la div principale HTML
  // dont les styles sont définis en css. et la size qui est définie grace à la boucle
   createStar(container, size);
}
 

    // en passant les valeurs des deux paramètres container et size, comme suit :

        // 1. container sera valorisé par l'élément js-stars-container récupéré ci-dessus
        // 2. size sera valorisé comme suit :
        // - Si i est divisible par 2, alors passer la valeur 'small'
        // - Si i est divisible par 3, alors passer la valeur 'medium'
        // - Sinon passer la valeur 'large'


})