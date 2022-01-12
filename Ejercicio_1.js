
let titulo = document.getElementById("titulo");
function getInformation()
{
    let nombre = prompt("escribe tu nombre"); /*toma el valor de la variable string */
    
   titulo.textContent = "Hola "+ nombre;
   
}