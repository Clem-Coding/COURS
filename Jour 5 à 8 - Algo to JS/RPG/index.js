/* pour mémo:  Math.random() génère un nombre flottant entre 0 et 1(exclus).
Math.random() * 100 donne un nombre entre 0 et 99.999....
Math.floor() arrondit à l'entier inférieur, ce qui donne un entier entre 0 et 99, ce pourquoi on doit ajouter + 1 si on veut être dans une plage entre 1 et 100.*/

/* on part sur une plage de points de vie allant de 1 à 100 */
let pvJoueurAsk = prompt("Combien points de vie as-tu entre 1 et 100?");
const pvJoueur = Number(pvJoueurAsk);
let pvEnnemi = Math.floor(Math.random() * 100) + 1;
console.log("Nombre de pv ennmi :", pvEnnemi);
console.log("Nombre de pv joueur:", pvJoueur);

/* on part sur une plage de points d'action allant de 1 à 10*/
let paEnnemi = Math.floor(Math.random() *10) + 1;
let paJoueurAsk = prompt("Combien points d'action as-tu entre 0 et 10?");
const paJoueur = Number(paJoueurAsk);
console.log("Nombre de points d'action ennemi:", paEnnemi);
console.log("Nombre de point d'action Joueur:", paJoueur);


function gameRPG(pvEnnemi, pvJoueur, paEnnemi, paJoueur) {
  
  
/*Tant que les deux, le joueur (pvJoueur) et l'ennemi (pvEnnemi), ont des points de vie supérieurs à 0, la boucle continue.*/
  while (pvJoueur > 0 && pvEnnemi > 0) { 
    
    pvEnnemi -= paJoueur;   /*on commence par l'attaque du joueur" */
    console.log ("Le joueur attaque! Points de vie ennemi restants: ", pvEnnemi)
    
    if (pvEnnemi > 0) {    /*Si l'ennemi n'est pas encore mort,il peut contre-attaquer.*/
      pvJoueur -= paEnnemi;
      console.log ("L'ennemi attaque! Points de vie joueur restants: ", pvJoueur)
    }
    
  }   /* Fin de la boucle ici: Si l'un d'eux tombe à 0 ou moins, la boucle s'arrête. */
  
  if (pvEnnemi <= 0) {
    console.log("Le joueur a gagné");
  } else {
    console.log("Le joueur à perdu");
  }
}



gameRPG(pvEnnemi, pvJoueur, paEnnemi, paJoueur);
