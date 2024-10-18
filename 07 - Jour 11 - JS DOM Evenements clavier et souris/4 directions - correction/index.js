// Si la touche appuyée est N, afficher Nord dans le carré ET mettre en fond la couleur bleu glace

// Si la touche appuyée est E, afficher Est dans le carré ET mettre en fond la couleur rouge foncé

// Si la touche appuyée est S, afficher Sud dans le carré ET mettre en fond la couleur jaune

// Si la touche appuyée est O, afficher Ouest dans le carré ET mettre en fond la couleur bleu foncé

// Si la touche appuyée n'est aucune des 4 précédentes, afficher Inconnu dans le carré ET mettre en fond la couleur par défaut





document.addEventListener('DOMContentLoaded', function() {
    
    
   
    
    // Ecoute les événements clavier
    document.addEventListener('keydown', function(event) {
        
        
        // Code de la touche appuyée
        let code = event.code;

        
        // Récupérer l'élément HTML
        
         let element = document.querySelector('.square')
          console.log (element)
       
        
        if (code === 'KeyN') {
            
            element.textContent = 'Nord'
            element.style.backgroundColor = '#99dbe8'
            
        } else if (code === 'KeyE') {
            element.textContent = 'Est'
            element.style.backgroundColor = '#8B0000'
            
        } else if (code === 'KeyS') {
           element.textContent = 'Sud'
            element.style.backgroundColor = 'yellow';

        } else if (code === 'KeyO') {
            element.textContent = 'Ouest'
            element.style.backgroundColor = 'blue'
            
        } else {
           element.textContent = 'Inconnu' 
           element.style.backgroundColor = ''
           
        }
        
        
    });
});
