document.addEventListener('DOMContentLoaded', function() {
    
    // Ecoute les événements clavier
    document.addEventListener('keydown', function(event) {
        // Code de la touche appuyée
        let code = event.code;
        
        // Récupérer l'élément HTML
        let element = document.querySelector('.red-square');
        
        if (code === 'ArrowLeft') {
            element.style.left = '10px';
            
        } else if (code === 'ArrowLeft') {
            element.style.right = '10px'
            
        } else if (code === 'ArrowDown') {
            element.style.top = '10px' 
                
        } else if (code === 'ArrowDown') {
            element.style.top = '500px'
        }
    });

    
});
