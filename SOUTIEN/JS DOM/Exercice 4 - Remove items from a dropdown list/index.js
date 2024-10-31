// Au clic sur le bouton ayant la classe js-remove-button
// Supprimer l'élément sélectionné dans la liste js-color-selector

// ASTUCE : Pour empêcher le rafraichissement de la page lors du clic sur le bouton,
// utiliser la fonction preventDefault sur l'événement click

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector(".js-remove-button");
  let colorSelector = document.querySelector(".js-color-selector");

  let selectedColor = colorSelector.options[colorSelector.selectedIndex];

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    selectedColor.remove();
  });
});
