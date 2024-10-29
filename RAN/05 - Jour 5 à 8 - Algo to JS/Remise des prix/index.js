let  prix = [10, 20, 22, 56, 41, 50];
console.log ("les prix sans les remises", prix)
let prixRemise = [];
for (let i = 0; i < prix.length; i++) {
 prixRemise.push (prix[i]- (prix[i]*0.1))
  
  /* manière de faire avec la consigne de base 
  prix[i] = (prix[i]- (prix[i]*0.1))
  console.log ("Les prix remisés : ",prix[i]) */
}

console.log("les prix avec la remise de 10% :", prixRemise);
