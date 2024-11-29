// Exercice 2 : récupérer un tableau de données utilisateurs

// let url = "https://maridoucet.sites.3wa.io/user-api/users";

// Vous allez utiliser fetch pour appeler l’URL ci-dessus et récupérer les infos qu’elle vous renvoie en JSON.

// Transformez-les en objet JavaScript (JSON.parse dans le cours d’hier).

// Affichez ensuite l’objet avec un console.log().

async function getInfos() {
  let url = "https://maridoucet.sites.3wa.io/user-api/users";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  console.log("premier user: ", data.data[0]);
  console.log("l'username du premier user: ", data.data[0].username);
}

getInfos();
