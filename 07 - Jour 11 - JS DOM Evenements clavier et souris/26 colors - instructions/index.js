document.addEventListener("DOMContentLoaded", function () {

  // Ecoute les événements clavier
  document.addEventListener("keydown", function (event) {
    // Code de la touche appuyée
    let code = event.key.toUpperCase()
    console.log (code)


    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    let colors = [
      "#FF0000", // KeyA -> Rouge
      "#00FF00", // KeyB -> Vert
      "#0000FF", // KeyC -> Bleu
      "#FFFF00", // KeyD -> Jaune
      "#FF00FF", // KeyE -> Magenta
      "#00FFFF", // KeyF -> Cyan
      "#800000", // KeyG -> Marron
      "#808000", // KeyH -> Olive
      "#008000", // KeyI -> Vert foncé
      "#800080", // KeyJ -> Violet
      "#FFA500", // KeyK -> Orange
      "#A52A2A", // KeyL -> Brun
      "#808080", // KeyM -> Gris
      "#C0C0C0", // KeyN -> Argent
      "#FFC0CB", // KeyO -> Rose
      "#FFD700", // KeyP -> Or
      "#ADD8E6", // KeyQ -> Bleu clair
      "#F08080", // KeyR -> Rouge clair
      "#90EE90", // KeyS -> Vert clair
      "#20B2AA", // KeyT -> Bleu sarcelle
      "#9370DB", // KeyU -> Violet clair
      "#FF6347", // KeyV -> Tomate
      "#4682B4", // KeyW -> Bleu acier
      "#DAA520", // KeyX -> Or foncé
      "#B22222", // KeyY -> Rouge foncé
      "#DC143C" // KeyZ -> Cramoisi
    ];

    // En fonction de la touche appuyée,
    // mettre en couleur de fond du carré la couleur correspondante
    // (c'est à dire la couleur au même index que l'index de la lettre)

    let squareDOM = document.querySelector(".square");
   

    
    // Variable pour savoir si une couleur a été trouvée
    let colorFound = false;

    for (let i = 0; i < alphabet.length; i++) {
      if (code === alphabet[i].toUpperCase()) {
        squareDOM.style.backgroundColor = colors[i]; // Change la couleur du carré
        colorFound = true;
        break; // Sort de la boucle une fois la bonne lettre trouvée
      }
    }

    // Si aucune couleur correspondante n'a été trouvée, on met une couleur par défaut
    if (!colorFound) {
      squareDOM.style.backgroundColor = ""; // Couleur par défaut 
    }
    
  });
});
