'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
$(document).ready(function () {
    $( "#toolbar-toggle" ).click(function() {
    $(".toolbar").toggleClass("hidden");
    $("#jquery").toggleClass("fa fa-arrow-down")
    $("#jquery").toggleClass("fa fa-arrow-up")
    });
})


const slide = ["/images/1.jpg" , "/images/2.jpg" ,"/images/3.jpg" ,"/images/4.jpg" ,"/images/5.jpg" ,"/images/6.jpg "];
const texte = ["Street Art" , "Australie", "Immeuble rouge", "Pollution lumineuse", "CyberPunk", "Paris"]
let numero = 0 ;

let image = document.getElementById("mon-image");
let montexte = document.getElementById("textechange");





function suivant() {
    numero++;
if ( numero > slide.length-1) {
    numero = 0
}
image.src = slide[numero]
montexte.innerHTML = texte[numero]
}

function precedent() {
    numero--;
    if ( numero == -1) {
        numero = 5
    }
    image.src = slide[numero]
    montexte.innerHTML = texte[numero]
}

function aleatoire() {


}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


