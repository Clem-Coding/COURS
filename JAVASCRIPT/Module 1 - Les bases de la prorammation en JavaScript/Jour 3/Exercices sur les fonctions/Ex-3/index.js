// Consignes

// Vous allez créer une fonction appelée countTo qui prend un paramètre max qui a 10 comme valeur par défaut.
//Cette fonction va afficher les nombres de 0 à max. Elle ne retourne rien.
// Pour tester

// countTo();
// countTo(5);
// countTo(8);

function countTo(value = 10) {
  for (let i = 0; i <= value; i++) {
    console.log(i);
  }
}

countTo();
countTo(5);
countTo(8);
