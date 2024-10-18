// correspondance saisie utilisateur et mois

let arr = ["", "janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]




// Fonction pour vérifier si le mois est de 30 jours
function estUnMoisDeTrenteJours(mois) {
  if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    return 1;
  } else {
    return 0;
  }
}

// Fonction pour vérifier si le mois est de 31 jours
function estUnMoisDeTrenteEtUnJours(mois) {
  if (
    mois === 1 ||
    mois === 3 ||
    mois === 5 ||
    mois === 7 ||
    mois === 8 ||
    mois === 10 ||
    mois === 12
  ) {
    return 1;
  } else {
    return 0;
  }
}

// Fonction pour vérifier si l'année est bissextile
function estAnneBissextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    console.log(`${annee} est une année bissextile`);
    
    return 1
   
  } else {
  
    return 0;
  }
}

// Fonction pour vérifier l'année et le nombre de jours dans le mois
function nombreDeJours(mois, annee) {
  let estTrente = estUnMoisDeTrenteJours(mois);
  let estTrenteEtUn = estUnMoisDeTrenteEtUnJours(mois);

  if (estTrenteEtUn === 1) {
    return 31;
  } else if (estTrente === 1) {
    return 30
  } else {
    if (estAnneBissextile(annee) === 1) {
      return 29;
    } else {
      return 28;
    }
  }
}

// Fonction du programme principal

function programmePrincipal() {
  let saisieMois = prompt("Veuillez saisir un numéro de mois entre 1 et 12");
  let mois = Number(saisieMois);

  while (mois < 1 || mois > 12) {
    saisieMois = prompt(
      "Veuillez saisir un numéro de mois valide (entre 1 et 12)"
    );
    mois = Number(saisieMois);
  }

  let saisieAnnee = prompt("Veuillez saisir une année entre 1588 et 2023");
  let annee = Number(saisieAnnee);

  // Boucle pour redemander tant que la saisie n'est pas correcte
  while (annee < 1588 || annee > 2023) {
    saisieAnnee = prompt(
      "Veuillez saisir une année valide (entre 1588 et 2023)"
    );
    annee = Number(saisieAnnee);
  }

  let nombre = nombreDeJours(mois, annee);
  
  
  
  // condition pour afficher le nombre de jours dans le mois avec vérification 
  //du numéro de mois pour distinguer "d' " (ex: d'octobre) ou "de" (ex: de février)
  
  if (arr[mois]===arr[4] || arr[mois]===arr[8] ||arr[mois]===arr[10]) {
    console.log  (`Le mois d'${arr[mois]} de l'année ${annee} a ${nombre} jours.`);
  } else {
    console.log(`Le mois de ${arr[mois]} de l'année ${annee} a ${nombre} jours.`);
  }
}

// Appel de la fonction principale
programmePrincipal();
