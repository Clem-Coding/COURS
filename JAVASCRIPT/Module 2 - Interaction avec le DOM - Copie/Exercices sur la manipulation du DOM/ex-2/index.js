//Faites en sorte que lorsque vous cliquez sur le bouton, le texte du <h2> s’affiche en violet.

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("ex2Btn");
  let title = document.querySelector("main > h2");

  button.addEventListener("click", () => {
    title.style.color = "violet";
  });
});
