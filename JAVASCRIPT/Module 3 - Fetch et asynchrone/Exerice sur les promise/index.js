//Vous allez créer une function qui reçoit un paramètre age. Cette fonction retourne une Promise qui vérifie si la personne est majeure :

// Si l’age est supérieur ou égal à 18, resolvez la Promise avec le message "Autorisation accordée."

// Si l’age est inférieur à 18. rejetez la Promise avec le message "Autorisation refusée"

// Testez votre fonction pour les ages 42 et 16 et affichez ses résultats.

function testNumber(number) {
  return new Promise((resolve, reject) => {
    console.log("Je dois apparraître en premier normalement");
    if (number >= 18) {
      resolve("Autorisation accordée");
    } else {
      reject("Autorisation refusée");
    }
  });
}

testNumber(42)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

testNumber(16)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// EXEMPLE BONUS

function checkDishAsync(dish) {
  return new Promise((resolve, reject) => {
    console.log(
      `On vérifie si le plat "${dish}" est prêt... (J'apparais en 2ème)`
    );
    setTimeout(() => {
      if (dish === "pizza") {
        resolve("La pizza est prête ! 🍕");
      } else {
        reject(`Désolé, pas de ${dish} aujourd'hui. 😔`);
      }
    }, 2000); // Délai simulé de 2 secondes
  });
}

// Appels asynchrones
checkDishAsync("pizza")
  .then((response) => console.log(response)) // Après 2 secondes : La pizza est prête !
  .catch((error) => console.log(error)); // Si échec

console.log("On continue le reste du programme...(j'apparais en 3ème)");

// Exercice sur async / await

// Créez une fonction asynchrone qui appelera votre function de l’exercice sur les Promise pour les ages suivants et affichera le résultat :

//     42
//     28
//     37

// Si vous essayez un âge en dessous de 18 il est possible que rien ne s’affiche et c’est normal, envoyez-moi un DM Discord si c’est le cas :)
