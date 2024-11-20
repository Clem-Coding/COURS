let i = 0;

// consigne 1 : Créez une boucle qui affiche les chiffres de 0 à 10.

while (i <= 10) {
  console.log("chiffres de 0 à 10", i);
  i += 1;
}

// consigne 2 : Créez une autre boucle qui affiche les chiffres de 25 à 20.

i = 25;
while (i >= 20) {
  console.log("chiffres de 25 à 20", i);

  i -= 1;
}

// consigne 3 :  Créez une autre boucle qui n’affiche que les chiffres pairs entre 0 et 20

i = 0;

while (i <= 20) {
  if (i % 2 === 0) {
    console.log("chiffres pairs entre 0 et 20", i);
  }
  i += 1;
}
