var spel1 
var spel2 
var spel3 
var randomNr
var visaSpelet = document.getElementById("spelet");
var visaStart = document.getElementById("starta");
var visaTryAgain = document.getElementById("tryAgain")
var i = 0

/* Visar spelet*/
function starta() {
            visaSpelet.style.display = 'block';
    }

/* Funktion som sköter spelet */
function spela(){
    /* Loop som kör 3 gånger*/
    while(i<3){
        /* Hämtar spelarens gissningar*/
        spel1 =  document.getElementById("spel1").value;
        spel2 =  document.getElementById("spel2").value;
        spel3 =  document.getElementById("spel3").value;
    
        /* Skapar ett slumpnummer mellan 0 och talet i koden*/
        randomNr = Math.floor(Math.random() *37);
        /* Visar vinnande nummer*/
        document.getElementById("nummer").innerHTML = "Vinnande nummer är "+randomNr 
        /* Kollar om spelade nummer är samma slumpnummer.*/
        if(spel1 == randomNr){
            /* Om ja, visas "Rätt gissat" i div med id="resultat" */
            document.getElementById("resultat").innerHTML = "Rätt gissat!"; 
        }
        else if(spel2 == randomNr){
            document.getElementById("resultat").innerHTML = "Rätt gissat!"; 
        }
        else if(spel3 == randomNr){
            document.getElementById("resultat").innerHTML = "Rätt gissat!"; 
        }
            else{
            /* Om nej, visas "Försök igen" i div med id="resultat" */
            document.getElementById("resultat").innerHTML = "Försök igen"
        }
        i++; /* Ökar "i" med 1*/
        return; /*avbryter funktionen*/ 
    }
    /*Döljer spelet*/ 
    visaSpelet.style.display = 'none';
    /*Döljer startknapp*/ 
    visaStart.style.display = 'none';
    /*Visar Försök igen knapp*/ 
    visaTryAgain.style.display = 'block';
    /*Visar pop-up*/ 
    alert("Game over")
} 