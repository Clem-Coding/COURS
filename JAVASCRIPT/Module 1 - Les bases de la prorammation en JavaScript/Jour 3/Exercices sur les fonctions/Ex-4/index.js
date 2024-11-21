// Consignes

// Pour cet exercice, vous allez créer deux fonctions différentes :

// Une fonction computeVat qui prend deux paramètres : price et vat. vat a une valeur par défaut de 1.2.
//Cette fonction va calculer le prix price multiplié par le taux de TVA vat.
//Elle retourne le produit de price et vat.

// Une fonction computePrice qui prend en argument deux tableaux : lowVatPrices et highVatPrices.
//Elle a pour but de calculer le prix total d’une commande où il y a des articles
//avec une TVA à 10% lowVatPrices et des articles avec une TVA à 20% highVatPrices.

//Pour faire ça elle va parcourir les tableaux et appeler computeVat pour calculer les prix TTC
//de chaque prix dans les tableaux. Elle retourne le prix total de la commande.

// Pour tester :

// console.log(computePrice([10, 15], [20]));
// console.log(computePrice([13], [20, 50, 8]));
// console.log(computePrice([20], [20]));

function computeVat(price, vat = 1.2) {
  return price * vat;
}

function computePrice(lowVatPrices, highVatPrices) {
  let sum = 0;
  for (let i = 0; i < lowVatPrices.length; i++) {
    sum += computeVat(lowVatPrices[i], 1.1);
  }

  for (let i = 0; i < highVatPrices.length; i++) {
    sum += computeVat(highVatPrices[i], 1.2);
  }

  return sum;
}

console.log(computePrice([10, 15], [20]));
console.log(computePrice([13], [20, 50, 8]));
console.log(computePrice([20], [20]));
