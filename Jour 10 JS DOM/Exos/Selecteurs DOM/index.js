document.addEventListener('DOMContentLoaded', function () {
    
    console.log ("test")
    // Exercice 1 : Sélectionner et afficher le footer en utilisant sa classe
    
    let footerDOM = document.querySelector (".footer")
    console.log ("le footer",footerDOM)

    // Exercice 2 : Sélectionner et afficher le paragraphe à l'intérieur du footer
    
    let footerParagraphDOM = document.querySelector(".footer p")
     console.log ("le paragraphe dans le footer",footerParagraphDOM)
     
     


    // Exercice 3 : Sélectionner et afficher tous les paragraphes de la page
let paragraphsDOM = document.querySelectorAll("p")
console.log("tous les paragraphes",paragraphsDOM)



    // Exercice 4 : Sélectionner et afficher les paragraphes du premier article
  let articlesDOM = document.querySelectorAll ("article") 
  console.log ("tous les articles", articlesDOM)
  
  let firstArticleDOM =articlesDOM[0]
  console.log ("le premier article",firstArticleDOM )
  
    
let paragraphsFirstArticleDOM = firstArticleDOM.querySelectorAll("p")
console.log("tous les paragraphes du 1er article",paragraphsFirstArticleDOM)





    // Exercice 5 : Sélectionner le dernier paragraphe du 1er article
    
    // Solution 1
    // let lastParagrapheOfFirstArticle = paragraphsFirstArticleDOM[1]
    // console.log ("le dernier paragrpahe du premier article", lastParagrapheOfFirstArticle)
    
     // OU alternative 1 s'il y a beaucoup de paragraphes , on se base sur la longueur du tableau - 1 (- 1 va direct sélectionner le dernier index du tableau)
  let lastParagrapheOfFirstArticle =paragraphsFirstArticleDOM[paragraphsFirstArticleDOM.length -1]
  console.log ("le dernier paragrpahe du premier article", lastParagrapheOfFirstArticle)
    
    // OU alternative 2
    // let lastParagrapheOfFirstArticle = paragraphsDOM[1]
    // console.log ("le dernier paragrpahe du premier article", lastParagrapheOfFirstArticle)
    
    

    
    
});
