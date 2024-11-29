// Exercice 3 : envoyer des informations

// let url = "https://maridoucet.sites.3wa.io/user-api/create-user";

// Vous allez utiliser fetch pour appeler l’URL ci-dessus et lui envoyer des informations pour créer un utilisateur avec la méthode POST.

// À cause de la façon dont était codée l’API que je réutilise pour ces exercices,
//vous allez devoir utiliser une solution fournie par JavaScript : les FormData
//(l’explication du pourquoi du comment viendra au moment du module PHP 😁).

// let formData = new FormData();
// formData.append('username', "Votre surnom");
// formData.append('firstName', "Votre prénom");
// formData.append('lastName', "Votre nom");
// formData.append('email', "Votre email 3WA");

// let body = {
//     method: 'POST',
//     body: formData
// };

// Dans le code ci-dessus remplacez les textes d’exemples par vos vraies valeurs,
//et vous pourrez ensuite passer ce body à fetch pour envoyer vos informations.

// Essayez de rappeler le fetch de votre exercice 2, vous devriez avoir des données supplémentaires :)

let formData = new FormData();
formData.append("username", "test");
formData.append("firstName", "test");
formData.append("lastName", "test");
formData.append("email", "test@test.com");

let body = {
  method: "POST",
  body: formData,
};

async function register() {
  let url = "https://maridoucet.sites.3wa.io/user-api/create-user";
  let response = await fetch(url, body);
  let data = await response.json();
  console.log(data);
}

register();
