let titulo = document.getElementById('titulo');
console.log(titulo);

titulo.textcontent="Hola mundo desde java script"
/*la manera de cambiar un titulo desde JS */

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
/*
parrafos[0].textContent = 'parrafos escritos desde javascript'; */
/*la manera de cambiar un parrafo desde JS con arreglos el cero es el numero de la linea de parrafo */
/*
for(let i=0; i<parrafos.length; i++)
{
    parrafos[i].textContent = 'parrafo' + i + 'escrito desde javascript';
}*/
/*para cambiar el texto de todos los parrafos */

let email = document.getElementById("email");
let password = document.getElementById("password");

function getInformation()
{
    console.log(email.value);
    console.log(password.value);
}
/*esta funcion puede mostrar el valor del email y password */








