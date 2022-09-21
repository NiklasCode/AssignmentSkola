



var spel1 

var randomNr

function knapp() {
   
}

function spela(){
    
    spel1 =  document.getElementById("spel1").value;
    spel2 =  document.getElementById("spel2").value;
    spel3 =  document.getElementById("spel3").value;
    


  randomNr = Math.floor(Math.random() *4);
    
  document.getElementById("nummer").innerHTML = "Vinnande nummer är "+randomNr 

    if(spel1 == randomNr){
        document.getElementById("resultat").innerHTML = "Rätt gissat!"; 
    }
    else if(spel2 == randomNr){
        document.getElementById("resultat").innerHTML = "Rätt gissat!"; 
    }
    else if(spel3 == randomNr){
        document.getElementById("resultat").innerHTML = "Rätt gissat!"; 
    }
        else{
        document.getElementById("resultat").innerHTML = "försök igen"
    }
    
}


