let niveau = 40;




    while (niveau <100L) {
        niveau = prompt("valeur capteur");
        
    }
    
    
    fermerVanneEau ();
    
    allumerChauffage ();
    
    while (temperature <60) {
        temperature = prompt ('capteur temperature');
    }
    
    
    eteindreChauffage ();


