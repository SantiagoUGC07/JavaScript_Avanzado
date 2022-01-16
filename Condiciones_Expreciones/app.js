/* Operadores aritméticos */
/*
 + - / * % ()
*/
let operacion = 3 * 5 + (10-5);
console.log(operacion);
let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

//operadores relacionales <,>,>=,=>,==,===,!=,




console.log(7 == "7");//compara el valor
console.log(7 === "7"); //compara el valor y tipo de dato

console.log(7 != "7");
console.log(7 !== "7");

/*INCREMENTO Y DECREMENTO */
//+=, -=, *=, /=
//INCREMENTO SUMA
let incremento = 5;
/*este es un metodo de incremento */
//incremento += 5;
/*este es otro metodo de incremento */
incremento = incremento + 5;
console.log(incremento);

//DECREMENTO RESTA
incremento -= 5;
/*este es un metodo de incremento */
//incremento = incriemento - 5;
/*este es otro metodo de incremento */
console.log(incremento);

//MULTIPLICACION
incremento *= 5;
//incremento = incremento * 5;
console.log(incremento);

//DIVISION
incremento /= 5;
//incremento = incremento / 5;
console.log(incremento);

//OPERADOR UNARIO ++,-- para sumar uno y restar uno
let sumar = 0;
console.log(sumar + " linea 50");
sumar++;
console.log(sumar + " linea 52");
sumar++;
console.log(sumar);
sumar--;
sumar--;
console.log(sumar);

for(let i = 0; i < 10; i++)
{
 //codigo
}

/*variable = preincremento - primero modifica el valor y ya despues hace uso de la variable variable++ = postincremento - usando la variable y despues hace el incremento.*/

let num = 5;
console.log(num++);
console.log(num);

for(let i = 0; i < 5; i++)
{
    //iteracion
    //primer iteracion, se detiene
    console.log("este es el ciclo padre");
    for(let j = 0; j < 5; j++)
    {
        //hace sus iteraciones(repeticiones) propias
        console.log("Este es el ciclo hijo")
    }
}


