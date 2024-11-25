//Faites en sorte que lorsque vous cliquez sur le bouton la section#grid ait la classe grid-3.

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("ex3Btn");
  let grid = document.getElementById("grid");

  button.addEventListener("click", () => {
    grid.classList.toggle("grid-2");
    grid.classList.toggle("grid-3");
  });
});
