// Exercice 4 : générer du HTML avec les infos récupérées avec fetch

// let url = "https://maridoucet.sites.3wa.io/user-api/user/18"

// Après avoir récupéré les infos avec fetch, faites en sorte de les afficher dans le DOM :

//     username est un h1
//     firstName et lastName dans un h2 unique
//     email dans un h3

let body = document.querySelector("body");

// test avec tous les utilisateurs
async function displayUsers() {
  let response = await fetch("https://maridoucet.sites.3wa.io/user-api/users");
  let usersData = await response.json();
  console.log(usersData.data);
  let usersArray = usersData.data;

  usersArray.forEach((user) => {
    let h1 = document.createElement("h1");
    let h1text = document.createTextNode(user.username);
    h1.appendChild(h1text);

    let h2 = document.createElement("h2");
    let h2text = document.createTextNode(`${user.firstName} ${user.lastName}`);
    h2.appendChild(h2text);

    let h3 = document.createElement("h3");
    let h3text = document.createTextNode(user.email);
    h3.appendChild(h3text);

    body.appendChild(h1);
    body.appendChild(h2);
    body.appendChild(h3);
  });
}

displayUsers();
