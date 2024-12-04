document.addEventListener("DOMContentLoaded", function () {
  let choices = ["PIERRE", "FEUILLE", "CISEAU"];
  let computerNumber = Math.floor(Math.random() * 3);
  let computerChoice = choices[computerNumber];

  let userChoice = window
    .prompt("Choisissez entre pierre, feuille ou ciseau")
    .toUpperCase();
  console.log(
    `Le joueur a choisi ${userChoice}, l'ordinateur a choisi ${computerChoice}`
  );

  if (userChoice === "FEUILLE" && computerChoice === "CISEAU") {
    console.log("L'ordinateur a gagné");
  } else if (userChoice === "CISEAU" && computerChoice === "FEUILLE") {
    console.log("Vous avez gagné");
  } else if (userChoice === "PIERRE" && computerChoice === "FEUILLE") {
    console.log("Vous avez perdu");
  } else if (userChoice === "FEUILLE" && computerChoice === "PIERRE") {
    console.log("L'ordinateur a gagné");
  } else if (userChoice === "CISEAU" && computerChoice === "FEUILLE") {
    console.log("Vous avez gagné");
  } else if (userChoice === "FEUILLE" && computerChoice === "CISEAU") {
    console.log("L'ordinateyr à gagné");
  } else if (userChoice === "PIERRE" && computerChoice === "CISEAU") {
    console.log("Vous avez gagné");
  } else if (userChoice === "CISEAU" && computerChoice === "PIERRE") {
    console.log("L'ordinateur a gagné");
  } else {
    console.log("Match null");
  }
});
