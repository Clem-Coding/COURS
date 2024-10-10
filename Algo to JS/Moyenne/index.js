
//  Pour mémo : .map() est une méthode en JavaScript qui permet de transformer chaque élément d'un tableau en appliquant une fonction à chacun d'eux. 
//  Cette fonction retourne un nouveau tableau avec les éléments modifiés, sans changer le tableau original.
//  Lorsqu'on utilise map, la fonction callback fournie en argument est exécutée une fois pour chacun des éléments du tableau, dans l'ordre du tableau. 
//  Ici on va utiliser la fonction Number en paramètre de map() pour convertir chaque nombre String en Number.



let notes = prompt("veuillez saisir une liste de notes séparées par des virgules. Les nombres décimaux utilisent un point").split(",").map(Number)
console.log ("Voici les notes :", notes)

let somme=0
for (let i=0; i <notes.length;i++){
  somme = somme + notes[i]
  
}

let moyenne= somme/notes.length

console.log ("La moyenne des notes est : ", moyenne)