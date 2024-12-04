// Lien vers les consignes : https://kornog-dev.github.io/BRE03/js/dom-practice/consignes/ex-5/

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const form = document.querySelector("main >form");
const passwordMatchMessage = document.querySelector("main > form> p");

/************************************************************/
/*                      FUNCTIONS                           */
/************************************************************/

function validatePasswordMatch() {
  passwordMatchMessage.classList.remove("show");
  passwordInput.classList.remove("valid", "invalid");
  confirmPasswordInput.classList.remove("valid", "invalid");

  if (passwordInput.value === confirmPasswordInput.value) {
    passwordInput.classList.add("valid");
    confirmPasswordInput.classList.add("valid");
  } else {
    passwordInput.classList.add("invalid");
    confirmPasswordInput.classList.add("invalid");
    passwordMatchMessage.classList.add("show");
  }
}

// BONUS PERSO#1 :  visibilité du mot de passe

let eyeIcons = document.querySelectorAll("#toggleConfirmPassword");

function togglePasswordVisibility() {
  eyeIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const eyeIconButton = event.target;
      const targetId = eyeIconButton.getAttribute("data-target");
      const targetInput = document.getElementById(targetId);

      if (targetInput.type === "password") {
        targetInput.type = "text";
        eyeIconButton.classList.replace("bi-eye-slash", "bi-eye");
      } else {
        targetInput.type = "password";
        eyeIconButton.classList.replace("bi-eye", "bi-eye-slash");
      }
    });
  });
}

// BONUS PERSO#2 :  Gestion sécurité du mot de passe

const lengthInfo = document.querySelector(".length");
const lowerCase = document.querySelector(".lowercase");
const upperCase = document.querySelector(".uppercase");
const specialCharacter = document.querySelector(".special");
const number = document.querySelector(".number");

function evaluatePassword() {
  const pwd = passwordInput.value;

  if (pwd.length >= 8) {
    lengthInfo.classList.remove("invalid");
    lengthInfo.classList.add("valid");
  } else {
    lengthInfo.classList.remove("valid");
    lengthInfo.classList.add("invalid");
  }
  if (/[a-z]/.test(pwd)) {
    lowerCase.classList.remove("invalid");
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
    lowerCase.classList.add("invalid");
  }

  if (/[A-Z]/.test(pwd)) {
    upperCase.classList.remove("invalid");
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
    upperCase.classList.add("invalid");
  }

  if (/[0-9]/.test(pwd)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (/[0-9]/.test(pwd)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (/[[@$!%*?&]/.test(pwd)) {
    specialCharacter.classList.remove("invalid");
    specialCharacter.classList.add("valid");
  } else {
    specialCharacter.classList.remove("valid");
    specialCharacter.classList.add("invalid");
  }
}

/************************************************************/
/*                      Main Programm                       */
/************************************************************/

document.addEventListener("DOMContentLoaded", function () {
  togglePasswordVisibility();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePasswordMatch();
  });

  passwordInput.addEventListener("input", (event) => {
    event.preventDefault();
    evaluatePassword();
  });
});
