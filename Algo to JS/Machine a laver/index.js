let niveauEau = 0; // L
let temperature = 0; //°C
let temps = 0;  // min

//Fonction Cycle Tambour
function cycleTambour(nombreDeTours) {
  for (let i = 0; i < nombreDeTours; i++) {
    console.log("le tambour tourne");
    console.log("le tambour s'arrête");
  }
}

//Fonction Vidange
function vidange() {
  console.log("L'eau se vidange");
  while (niveauEau < 50) {
    niveauEau -= 1;
    console.log("- 1L");
  }
}

// Fonction Remplissage

function remplissage() {
  console.log("Vanne ouverte : La machine à laver se remplit de 50L");
  while (niveauEau < 50) {
    niveauEau += 1; //on incrémente le niveau d'eau de 1, quand on arrivera à 50, on sort de la boucle
   
  }
  console.log("L'eau chauffe à 40°C");
  while (temperature < 40) {
    temperature += 1;//on incrémente la température de 1, quand on arrivera à 40, on sort de la boucle
   
  }
}

// Fonction essorage
function essorage() {
  console.log("L'eau se vidange");
  console.log("Le tambour tourne en continu pendant 30min");
  while (temps < 30) {
    temps += 1; //on incrémente la temps de 1, quand on arrivera à 30 soit 30 minutes, on sort de la boucle
   
  }
}

// Fonction adoucissant

function adoucissant() {
  remplissage();
  console.log("De l'adoucissant est mis");
  cycleTambour(10);
  vidange();
}

// Fonction Rinçage

function rincage(nombreRincage) {
  for (let i = 0; i < nombreRincage; i++) {
    remplissage();
    cycleTambour(10);
    vidange();
  }
}

// Fonction Lavage

function lavage() {
  remplissage();
  console.log("De la lessive est mise");
  cycleTambour(20);
  vidange();
}

//Programme complet

function programme() {
  console.log("PHASE DE LAVAGE");
  lavage();
  console.log("PHASE DE RINCAGE");
  rincage(4);
  console.log("PHASE ADOUCISSANT");
  adoucissant();
  console.log("PHASE DE RINCAGE");
  rincage(2);
  console.log("PHASE D'ESSORAGE");
  essorage();
  console.log("Le linge est propre, il ne reste plus qu'à l'étendre!");
}

// Appel la fonction globale
programme();
