// Faites en sorte que lorsque le formulaire est soumis, vous affichiez une alerte qui annonce : “Le formulaire a été soumis !”

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx1");
  form.addEventListener("submit", () => {
    window.alert("Le formulaire a été soumis !");
  });
});
