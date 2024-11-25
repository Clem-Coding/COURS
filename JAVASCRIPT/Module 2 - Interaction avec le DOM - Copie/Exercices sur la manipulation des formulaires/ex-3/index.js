//Faites en sorte que lorsque vous soumettez le formulaire, votre script ajoute un li
//contenant votre nouvelle tâche à la suite de l’ul#taskList.

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("formEx3");
  let list = document.getElementById("taskList");
  let task = document.getElementById("task");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let itemList = document.createElement("li");
    let txt = document.createTextNode(task.value);
    itemList.appendChild(txt);
    list.appendChild(itemList);
  });
});
