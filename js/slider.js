'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
const slide = ["/images/1.jpg" , "/images/2.jpg" ,"/images/3.jpg" ,"/images/4.jpg" ,"/images/5.jpg" ,"/images/6.jpg "];
const texte = ["Street Art" , "Australie", "Immeuble rouge", "Pollution lumineuse", "CyberPunk", "Paris"]
let numero = 0 ;

let image = document.getElementById("mon-image");
let montexte = document.getElementById("textechange");
let pause = false;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
$(document).ready(function () {
    $( "#toolbar-toggle" ).click(function() {
    $(".toolbar").toggleClass("hidden");
    $("#jquery").toggleClass("fa fa-arrow-down")
    $("#jquery").toggleClass("fa fa-arrow-up")
    });
    $("#slider-toggle").click(function(){
        $("#stop").toggleClass("fa fa-play")
        $("#stop").toggleClass("fa fa-stop")
    })
})

// let toolbarToggle = document.getElementById("toolbar-toggle");
// let toolbar = document.getElementsByClassName("toolbar");

// toolbarToggle.addEventListener("click", () => {
//     if(getComputedStyle(toolbar).display != "none") {
//         toolbar.style.display = "none";
//     } else {
//         toolbar.style.display = "block";
//     }
// })



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
    let numerotempo = Math.floor(Math.random() * slide.length)
while (numero == numerotempo ) {
    numerotempo = Math.floor(Math.random() * slide.length)
  
}
image.src = slide[numerotempo]
montexte.innerHTML = texte[numerotempo]
}

function automatique() {
    if ( pause == false)
    {
        pause = true 
    } else {
        pause = false
    }
}
setInterval(function () {
    if ( pause == true ) {
        numero++;
        if (numero > slide.length-1) {
            numero = 0;
          }
          image.src = slide[numero]
          montexte.innerHTML = texte[numero]
    }}, 2000);

      

// function changeSlide(sens) {
//     numero = numero + sens;
//     if ( numero < 0 ) {
//         numero = slide.length-1;
//     }
//     if ( numero > slide.length-1) {
//         numero = 0;
//     }

//     document.getElementById("slider-next").src = slide[numero];
//     document.getElementById("slider-previous").src = slide[numero];

// }


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


