document.addEventListener("DOMContentLoaded", function () {
  // Au clic sur le bouton ayant la classe js-submit-button
  // Changer la taille, famille et couleur de la police
  // de l'élément ayant la classe js-text

  let submitBtn = document.querySelector(".js-submit-button");
  let textEl = document.querySelector(".js-text");

  submitBtn.addEventListener("click", () => {
    textEl.style.fontSize = "60px";
    textEl.style.fontFamily = "Arial";
    textEl.style.color = "red";
  });
});
