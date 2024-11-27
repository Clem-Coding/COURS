// Lien vers les consignes : https://kornog-dev.github.io/BRE03/js/dom-practice/consignes/ex-4/

let recipe = {
  ingredients: [
    "300g de farine",
    "3 oeufs",
    "1L de lait",
    "80g de beurre demi-sel",
  ],
  steps: [
    "Faire un nid avec la farine",
    "Casser les oeufs et les placer dans le nid",
    "Battre les oeufs et la farine en ajoutant doucement le lait",
    "Faire fondre le beurre",
    "Ajouter le beurre fondu à la pâte",
  ],
};

let ingredientsDOM = document.getElementById("ingredients");
let stepsDOM = document.getElementById("steps");

document.addEventListener("DOMContentLoaded", function () {
  recipe.ingredients.forEach((ingredient) => {
    let item = document.createElement("li");
    let itemText = document.createTextNode(ingredient);
    item.appendChild(itemText);
    ingredientsDOM.appendChild(item);
  });

  recipe.steps.forEach((step) => {
    let item = document.createElement("li");
    let itemText = document.createTextNode(step);
    item.appendChild(itemText);
    stepsDOM.appendChild(item);
  });
});
