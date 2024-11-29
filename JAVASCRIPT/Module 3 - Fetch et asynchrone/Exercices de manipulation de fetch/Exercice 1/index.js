//Exercice 1 : récupérer les données d’un utilisateur
// Lien vers l'exercice : https://kornog-dev.github.io/BRE03/js/j8/exercices/fetch/#exercice-1--r%C3%A9cup%C3%A9rer-les-donn%C3%A9es-dun-utilisateur

// let url = "https://maridoucet.sites.3wa.io/user-api/user/15"

// Vous allez utiliser fetch pour appeler l’URL ci-dessus et récupérer les infos qu’elle vous renvoie en JSON.

// Transformez-les en objet JavaScript (JSON.parse dans le cours d’hier).

// Affichez ensuite l’objet avec un console.log().

async function getInfos() {
  let url = "https://maridoucet.sites.3wa.io/user-api/user/15";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  console.log("Juste l'émail: ", data.data.email);
  console.log("Juste le prénom: ", data.data.firstName);
}

getInfos();

// Fonction pour récupérer les informations de l'API OpenTDB
async function getTrivia() {
  let url2 = "https://opentdb.com/api.php?amount=10";
  let response = await fetch(url2);
  let data = await response.json();
  console.log("test test", data.results[0].question);
}

getTrivia(); // Appel de la seconde fonction
