// Exercice 5 : générer du contenu riche avec les infos récupérées avec fetch

// let url = "https://maridoucet.sites.3wa.io/user-api/users";

// Après avoir récupéré les infos avec fetch, faites en sorte de les afficher dans le DOM :
// Affichez une <table> avec une ligne par utilisateur / utilisatrice (si vous voulez, vous avez le droit à Bootstrap 😂)

let tbody = document.querySelector("tbody");

async function displayUsers() {
  let response = await fetch("https://maridoucet.sites.3wa.io/user-api/users");
  let usersData = await response.json();
  console.log(usersData.data);
  let usersArray = usersData.data;

  usersArray.forEach((user) => {
    let row = document.createElement("tr");

    let usernameCell = document.createElement("td");
    let usernameCellText = document.createTextNode(user.username);
    usernameCell.appendChild(usernameCellText);
    row.appendChild(usernameCell);

    let firstNameCell = document.createElement("td");
    let firstNameCellText = document.createTextNode(user.firstName);
    firstNameCell.appendChild(firstNameCellText);
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    let lastNameCellText = document.createTextNode(user.lastName);
    lastNameCell.appendChild(lastNameCellText);
    row.appendChild(lastNameCell);

    let emailCell = document.createElement("td");
    let emailText = document.createTextNode(user.email);
    emailCell.appendChild(emailText);
    row.appendChild(emailCell);

    tbody.appendChild(row);
  });
}

displayUsers();

// ALTERNATIVE

// let tbody = document.querySelector("tbody");

// async function displayUsers() {
//   let response = await fetch("https://maridoucet.sites.3wa.io/user-api/users");
//   let usersData = await response.json();
//   console.log(usersData.data);

//   usersData.data.forEach((user) => {
//     let row = `
//       <tr>
//         <td>${user.username}</td>
//         <td>${user.firstName}</td>
//         <td>${user.lastName}</td>
//         <td>${user.email}</td>
//       </tr>
//     `;

//     tbody.innerHTML += row;
//   });
// }

// displayUsers();
