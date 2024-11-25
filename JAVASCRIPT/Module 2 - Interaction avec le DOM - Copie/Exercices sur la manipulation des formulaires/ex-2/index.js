//Faites en sorte que lorsque votre champ de saisie de texte change, le contenu du champ textarea s’affiche dans le p.

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx2");
  let paragraph = document.querySelector("#textPreview > p");

  form.addEventListener("input", (event) => {
    let input = event.target;
    let txt = document.createTextNode(input.value);
    paragraph.appendChild(txt);
  });
});
