// Lien vers les consignes : https://kornog-dev.github.io/BRE03/js/dom-practice/consignes/ex-5/

let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");
let form = document.querySelector("main >form");
let passwordMatchMessage = document.querySelector("main > form> p");
console.log(passwordMatchMessage);

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value === confirmPasswordInput.value) {
      console.log("c'est pareil");
      passwordInput.classList.toggle("valid");
      confirmPasswordInput.classList.toggle("valid");
    } else {
      passwordInput.classList.toggle("invalid");
      confirmPasswordInput.classList.toggle("invalid");
      passwordMatchMessage.classList.toggle("show");
    }
  });

  // Bonus perso : gestion icone oeil et visibilité du mot de passe

  let eyeIcons = document.querySelectorAll("#toggleConfirmPassword");
  console.log(eyeIcons);

  eyeIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      let eyeIconButton = event.target;
      let targetId = eyeIconButton.getAttribute("data-target");
      let targetInput = document.getElementById(targetId);

      if (targetInput.type === "password") {
        targetInput.type = "text";
        eyeIconButton.classList.replace("bi-eye-slash", "bi-eye");
      } else {
        targetInput.type = "password";
        eyeIconButton.classList.replace("bi-eye", "bi-eye-slash");
      }
    });
  });
});
