// Lien vers les consignes : https://kornog-dev.github.io/BRE03/js/j6/

// VARIABLES

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

let saveButton = document.getElementById("addUserFormButton");

// FONCTIONS

function createUserRow(id, user) {
  let tr = document.createElement("tr");

  let idTd = document.createElement("td");
  let idText = document.createTextNode(id);
  idTd.appendChild(idText);
  tr.appendChild(idTd);

  let firstNameTd = document.createElement("td");
  let firstNameText = document.createTextNode(user.firstName);
  firstNameTd.appendChild(firstNameText);
  tr.appendChild(firstNameTd);

  let lastNameTd = document.createElement("td");
  let lastNameText = document.createTextNode(user.lastName);
  lastNameTd.appendChild(lastNameText);
  tr.appendChild(lastNameTd);

  let emailTd = document.createElement("td");
  let emailText = document.createTextNode(user.email);
  emailTd.appendChild(emailText);
  tr.appendChild(emailTd);

  let statusTd = document.createElement("td");

  let statusText = "";

  if (user.active === true) {
    statusText = document.createTextNode("Actif");
  } else {
    statusText = document.createTextNode("Inactif");
  }

  statusTd.appendChild(statusText);
  tr.appendChild(statusTd);

  let actionTd = document.createElement("td");

  let showButton = document.createElement("button");
  showButton.setAttribute("type", "button");
  showButton.classList.add("btn");
  showButton.classList.add("btn-primary");
  showButton.classList.add("mx-1");

  let showButtonSpan = document.createElement("span");
  showButtonSpan.classList.add("bi");
  showButtonSpan.classList.add("bi-eye-fill");
  showButton.appendChild(showButtonSpan);
  actionTd.appendChild(showButton);

  let editButton = document.createElement("button");
  editButton.setAttribute("type", "button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-success");

  let editButtonSpan = document.createElement("span");
  editButtonSpan.classList.add("bi");
  editButtonSpan.classList.add("bi-pencil-fill");
  editButton.appendChild(editButtonSpan);
  actionTd.appendChild(editButton);

  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.classList.add("mx-1");

  let deleteButtonSpan = document.createElement("span");
  deleteButtonSpan.classList.add("bi");
  deleteButtonSpan.classList.add("bi-trash-fill");
  deleteButton.appendChild(deleteButtonSpan);
  actionTd.appendChild(deleteButton);

  tr.appendChild(actionTd);

  return tr;
}

// MAIN PROGRAMM

document.addEventListener("DOMContentLoaded", function (event) {
  for (let i = 0; i < users.length; i++) {
    let userRow = createUserRow(i + 1, users[i]);
    let tbody = document.querySelector("tbody");
    tbody.appendChild(userRow);
  }

  saveButton.addEventListener("click", () => {
    let addUserFirstName = document.getElementById("addUserFirstName").value;
    let addUserLastName = document.getElementById("addUserLastName").value;
    let addUserEmail = document.getElementById("addUserEmail").value;

    let newUser = {
      firstName: addUserFirstName,
      lastName: addUserLastName,
      email: addUserEmail,
      active: true,
    };

    users.push(newUser);

    let userRow = createUserRow(users.length + 1, newUser);
    let tbody = document.querySelector("tbody");
    tbody.appendChild(userRow);
  });
});
