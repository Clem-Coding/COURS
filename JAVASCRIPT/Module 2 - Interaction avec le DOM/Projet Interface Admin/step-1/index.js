// Lien vers les consignes : https://kornog-dev.github.io/BRE03/js/j6/

let users = [
  {
    firstName: "Marc",
    lastName: "Beaufort",
    email: "marc.beaufort@test.fr",
    active: true,
  },
  {
    firstName: "Lucie",
    lastName: "Carmin",
    email: "lucie.carmin@test.fr",
    active: true,
  },
  {
    firstName: "Armand",
    lastName: "Perrot",
    email: "armand.perrot@test.fr",
    active: false,
  },
  {
    firstName: "Sarah",
    lastName: "Calmels",
    email: "sarah.calmels@test.fr",
    active: true,
  },
];

// users.forEach((user) => user.indexOf(user));

let table = document.querySelector(".table >tbody");

// création des boutons
let buttonsCell = document.createElement("td");

//le bouton "show"
let primarySpan = document.createElement("span");
primarySpan.classList.add("bi", "bi-eye-fill");
let primaryButton = document.createElement("button");
primaryButton.classList.add("btn", "btn-primary");
primaryButton.appendChild(primarySpan);

//le bouton pen

let editSpan = document.createElement("span");
editSpan.classList.add("bi", "bi-pencil-fill");
let editButton = document.createElement("button");
editButton.classList.add("btn", "btn-success");
editButton.appendChild(editSpan);

//le bouton corbeille
let binSpan = document.createElement("span");
binSpan.classList.add("bi", "bi-trash-fill");
let binButton = document.createElement("button");
binButton.classList.add("btn", "btn-danger");
binButton.appendChild(binSpan);

buttonsCell.appendChild(primaryButton);
buttonsCell.appendChild(editButton);
buttonsCell.appendChild(binButton);

function addRowToTable() {
  let row = document.createElement("tr");
  let idCell = document.createElement("td");
  let firstNameCell = document.createElement("td");
}

let id = i + 1;
let firstName = users[i].firstName;
let lastName = users[i].lastName;
let email = users[i].email;
let status = users[i].active;

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < users.length; i++) {}
});

// idCell.appendChild(id);
// row.appendChild(idCell);
// row.appendChild(firstNameCell);
// table.appendChild(row);

// addRowToTable();
