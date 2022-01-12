/*un objeto en javascript tiene la estructura clave valor{} */
/*let miObjeto =
{
    //pares de clave valor
    nombre: 'uriel garcia';
};*/
//nota lleva punto y coma al final del las llaves

let nombre ='uriel garcia';
let edad = 25;
let direccion = 'mathzi2, guadalupe';
let numero = 2121;

console.log(nombre);

let persona=
{
    nombre: 'uriel garcia',
    edad: 25,
    direccion: 
    {
        ciudad: 'mathzi 2', 
        colonia: 'guadaulpue',
    },
    numero: [2121,44445],//como arreglo
    suma: function suma(num1,num2)
    {
        return num1 + num2;
    }, //asi se declara una funcion dentro de un objeto
    /* esta es otra manera de declarar una funcion dentro de un objeto
    suma : (num1,num2)=>
    {
        return num1 + num2;
    },
    */

}; /* para colocar distintas variables en un objeto, colocar una coma , despues de declarar cada variable, los atributos van con '' */

console.log(persona);

console.log(persona.nombre); /*para solo imprimir el atributo nombre del objeto */

console.log(persona.direccion.ciudad);/*para solo imprimir el atributo ciudad del objeto direccion que esta dentro del objeto persona */

console.log(persona.suma(4,5)); //para imprimir el valor de la funcion que esta dentro del objeto persona

