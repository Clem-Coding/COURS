//Faites en sorte qu’à la soumission du formulaire, votre script filtre les rangées de la table :

// Toutes : toutes les rangées sont affichées
// Actif : seules les rangées avec le statut Actif sont affichées
// Inactif : seules les rangées avec le statut inactif sont affichées

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx4");
  let statusFilter = document.getElementById("statusFilter");
  let allRows = document.querySelectorAll("tbody > tr");
  let activeRows = document.querySelectorAll(".active");
  let inactiveRows = document.querySelectorAll(".inactive");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (statusFilter.value === "active") {
      inactiveRows.forEach((row) => {
        row.style.display = "none";
      });

      activeRows.forEach((row) => {
        row.style.display = "grid";
      });
    } else if (statusFilter.value === "inactive") {
      activeRows.forEach((row) => {
        row.style.display = "none";
      });

      inactiveRows.forEach((row) => {
        row.style.display = "grid";
      });
    } else {
      allRows.forEach((row) => {
        row.style.display = "grid";
      });
    }
  });
});
