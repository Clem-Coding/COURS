//Faites en sorte que lorsque l’on clique sur le bouton,
// cela affiche une alerte qui dit “Vous avez cliqué sur le bouton”.

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("ex1Btn");

  button.addEventListener("click", () => {
    window.confirm("Vous avez cliqué sur le bouton");
  });
});
