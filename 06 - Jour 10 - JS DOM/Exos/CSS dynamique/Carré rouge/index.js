// RAPPEL : S'assurer que le DOM est chargé en mémoire avant de jouer avec

document.addEventListener('DOMContentLoaded', function () {
    console.log ("test")
    let redSquare = document.querySelector(".red-square")
    console.log ("le carré rouge",redSquare)
    
    
    
   // Exercice 1 : Positionner le carré de 150px vers la droite
   
   redSquare.style.marginLeft = '150px'

    // Exercice 2 : Positionner le carré de 100px vers le bas
    redSquare.style.marginTop = '100px'

    // Exercice 3 : Mettre le symbole 😊 dans le carré
    
    redSquare.innerHTML += '<p>😊</p>'

    // Exercice 4 : Changer la taille du carré en 300px de largeur et 300px de haut
    // redSquare.style.width = "300px"
    // redSquare.style.height = "300px"
    

// OU pour changer plusieurs propriétés à la fois

// la fonction Object.assign (), prend 2 argument en paramètres (cible, source), 
//et va permettre de copier les arguments de la source vers la cible 
//ici :- la cible : styles du redSquare qui sont un objet
//     - la source : ce qu'on veut modifier, à écrire sous la forme d'un objet

//attention : si il existe déjà des valeurs définies dans la cible, elles 
//seront remplacées par les valeurs de l'objet Source avec la fonction Object.assign()
// s'il n'y a aucune valeur spécifiée, elle sera simplement ajoutée.

Object.assign(redSquare.style, {
    width: '300px',
    height: '300px',
    border: "2px solid black" // test
});





    // Exercice 5 : Ajouter en image de fond, l'image fournie
    
    redSquare.style.backgroundImage = `url('cat.jpg')`

 
})
   