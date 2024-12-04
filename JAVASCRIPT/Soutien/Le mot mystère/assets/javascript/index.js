document.addEventListener("DOMContentLoaded", function () {
  let mysteryWordGame = {
    word: "",
    tries: 5,
    letters: [],
  };

  async function getWord() {
    const url = "https://random-word-api.herokuapp.com/word?lang=fr&length=8";
    let response = await fetch(url);
    let data = await response.json();
    return data[0];
  }

  async function initializeGame() {
    let wordFromAPI = await getWord();
    console.log("Le mot récupéré est :", wordFromAPI);
    mysteryWordGame.word = wordFromAPI;
  }

  // ETAPE 3
  let keyboardKeys = document.querySelectorAll("#keyboard li");
  let counter = document.querySelector("h3>span");
  let letterBoxes = document.querySelectorAll("#word > ul >li");
  console.log("les cases", letterBoxes);

  for (let key of keyboardKeys) {
    key.addEventListener("click", function (event) {
      letterClick = true;
      let typedLetter = event.target.textContent.toLowerCase();
      let word = cleanWord(mysteryWordGame.word);
      mysteryWordGame.letters += typedLetter;
      console.log(mysteryWordGame);
      key.classList.add("disabled");

      if (word.includes(typedLetter)) {
        console.log(`le mot ${word} contient bien la lettre ${typedLetter}`);

        for (let i = 0; i < word.length; i++) {
          if (word[i] === typedLetter) {
            letterBoxes[i].textContent = word[i];
          }
        }
      } else {
        console.log("la lettre n'existe pas");
        mysteryWordGame.tries -= 1;
        counter.textContent = mysteryWordGame.tries;
      }

      if (counter.textContent === "0") {
        let computerAsk = window.prompt("Faîtes une proposition de mot");

        if (computerAsk === mysteryWordGame.word) {
          window.alert("C'est gagné");
        } else {
          window.alert("C'est perdu");
        }
      } else {
        if (checkIfWordComplete(mysteryWordGame)) {
          window.alert("Félicitations, vous avez gagné !");
        }
      }
    });
  }

  function checkIfWordComplete(mysteryWordGame) {
    let letterBoxes = document.querySelectorAll("#word li");
    let letters = 0;

    for (let i = 0; i < mysteryWordGame.word.length; i++) {
      if (mysteryWordGame.word[i] === letterBoxes[i].textContent) {
        letters++;
      }
    }

    if (letters === 8) {
      return true;
    }

    console.log(letters);

    return false;
  }

  function cleanWord(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "é" ||
        string[i] === "è" ||
        string[i] === "ê" ||
        string[i] === "ë"
      ) {
        newString += "e";
      } else if (string[i] === "à" || string[i] === "â") {
        newString += "a";
      } else if (string[i] === "ç") {
        newString += "c";
      } else if (string[i] === "î" || string[i] === "ï") {
        newString += "i";
      } else if (string[i] === "ô") {
        newString += "o";
      } else if (string[i] === "ù" || string[i] === "û") {
        newString += "u";
      } else {
        newString += string[i];
      }
    }
    return newString;
  }

  initializeGame();
});

// // ALTERNATIVE 2
// function cleanWord(string) {
//   const replacements = {
//     é: "e",
//     è: "e",
//     ê: "e",
//     ë: "e",
//     à: "a",
//     â: "a",
//     ç: "c",
//     î: "i",
//     ï: "i",
//     ô: "o",
//     ù: "u",
//     û: "u",
//   };
//   return string.replace(/[éèêëàâçîïôùû]/g, (char) => replacements[char]);
// }
