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

/**************************************************************/
/*                       FUNCTIONS                            */
/**************************************************************/

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
  deleteButton.setAttribute("data-bs-toggle", "modal");
  deleteButton.setAttribute("data-bs-target", "#deleteUserModal");
  deleteButton.setAttribute(
    "data-bs-username",
    `${user.firstName} ${user.lastName}`
  );
  deleteButton.setAttribute("data-bs-user", id);

  let deleteButtonSpan = document.createElement("span");
  deleteButtonSpan.classList.add("bi");
  deleteButtonSpan.classList.add("bi-trash-fill");
  deleteButton.appendChild(deleteButtonSpan);
  actionTd.appendChild(deleteButton);

  tr.appendChild(actionTd);

  return tr;
}

function renderUsers() {
  for (let i = 0; i < users.length; i++) {
    let userRow = createUserRow(i + 1, users[i]);
    let tbody = document.querySelector("tbody");
    tbody.appendChild(userRow);
  }
}

function addUser() {
  let addUserFirstName = document.getElementById("addUserFirstName").value;
  let addUserLastName = document.getElementById("addUserLastName").value;
  let addUserEmail = document.getElementById("addUserEmail").value;
  let id = users.length + 1;

  let newUser = {
    id: id,
    firstName: addUserFirstName,
    lastName: addUserLastName,
    email: addUserEmail,
    active: true,
  };

  users.push(newUser);

  let userRow = createUserRow(id, newUser);
  let tbody = document.querySelector("tbody");
  tbody.appendChild(userRow);
}

/************************************************************/
/*                      Main Programm                      */
/**************************************************************/
document.addEventListener("DOMContentLoaded", function (event) {
  renderUsers();

  saveButton.addEventListener("click", () => {
    addUser();
  });

  // _____________Delete Modal_________________
  const deleteModal = document.getElementById("deleteUserModal");

  deleteModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const userName = button.getAttribute("data-bs-username");
    let userIndex = button.getAttribute("data-bs-user");

    // Ici vous pouvez faire en sorte de modifier le modal-body
    let modalBody = document.querySelector("#deleteUserModal .modal-body");
    modalBody.innerHTML = "";
    let text = document.createTextNode(
      `Voulez-vous vraiment supprimer ${userName} ?`
    );
    modalBody.appendChild(text);

    let deleteButton = document.getElementById("deleteUserFormButton");
    deleteButton.setAttribute("data-bs-user", userIndex);
  });

  let deleteButton = document.getElementById("deleteUserFormButton");

  deleteButton.addEventListener("click", (event) => {
    let button = event.target;
    let userId = button.getAttribute("data-bs-user");

    users.splice(userId - 1, 1);

    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    renderUsers();
  });
});
