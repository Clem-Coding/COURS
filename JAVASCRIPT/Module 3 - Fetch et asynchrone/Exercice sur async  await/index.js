// Exercice sur async / await

// Créez une fonction asynchrone qui appelera votre function de l’exercice sur les Promise pour les ages suivants et affichera le résultat :

//     42
//     28
//     37

// Si vous essayez un âge en dessous de 18 il est possible que rien ne s’affiche et c’est normal, envoyez-moi un DM Discord si c’est le cas :)

function testNumber(number) {
  return new Promise((resolve, reject) => {
    if (number >= 18) {
      resolve("Autorisation accordée");
    } else {
      reject("Autorisation refusée");
    }
  });
}

async function testNumbers() {
  let responseForFortyTwo = await testNumber(42);
  console.log(responseForFortyTwo);

  let responseForTwentyEigth = await testNumber(28);
  console.log(responseForTwentyEigth);

  let responseForThirtySeven = await testNumber(37);
  console.log(responseForThirtySeven);
}

testNumbers();
