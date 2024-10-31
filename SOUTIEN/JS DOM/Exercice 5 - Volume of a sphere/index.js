// Lorsque l'utilisateur saisi le rayon dans le champ radius
// Puis clique sur le bouton "Calculate"
// Calculer le volume d'une sphère et mettre le résultat dans le champ volume
// ASTUCE : volume sphère = (4/3) * PI * (rayon puissance 3)

let radiusInput = document.getElementById("radius");
let volumeInput = document.getElementById("volume");
let calculateBtn = document.querySelector(".js-submit-button");

function calculateVolumeOfSphere() {
  return (4 / 3) * Math.PI * Math.pow(Number(radiusInput.value), 3);
}

document.addEventListener("DOMContentLoaded", function () {
  calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    volumeInput.value = calculateVolumeOfSphere();
  });
});
