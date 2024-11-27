//https://kornog-dev.github.io/BRE03/js/dom-practice/consignes/ex-3/

let colorSelect = document.getElementById("color");
let sizeSelect = document.getElementById("size");
let form = document.querySelector("main > form");
let headerDOM = document.querySelector("article > header");
let articleDOM = document.querySelector("article > section");
console.log(articleDOM);

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("change", () => {
    if (colorSelect.value === "blue") {
      headerDOM.classList.remove("pink");
      headerDOM.classList.add("blue");
    } else {
      headerDOM.classList.remove("blue");
      headerDOM.classList.add("pink");
    }

    if (size.value === "small") {
      articleDOM.classList.remove("big");
      articleDOM.classList.add("small");
    } else {
      articleDOM.classList.remove("small");
      articleDOM.classList.add("big");
    }
  });
});
