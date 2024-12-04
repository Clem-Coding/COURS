//Faites en sorte que lorsque vous cliquez sur le bouton un <li> contenant le mot “Beurre” s’ajoute à la fin du ul#crepe.

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("ex4Btn");
  let list = document.getElementById("crepe");

  button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = "Beurre";
    list.appendChild(listItem);
  });
});
