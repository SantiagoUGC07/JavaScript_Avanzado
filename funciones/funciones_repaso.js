function sumar(num1, num2)
{
    //operaciones o codigo a ejecutar
    return num1 + num2;
    console.log('hola desde la funcion');
}
function restar(num1, num2)
{
    document.write(`<br> la resta de ${num1} y ${num2} es ${num1-num2} <br>`);
}
let num1 = parseInt(prompt('Numero 1'));
let num2 = parseInt(prompt('Numero 2'));
let suma = sumar (num1, num2);


document.write(`la suma de ${num1} y ${num2} es ${suma} <br>`);
document.write('la suma de ' + num1 + ' y ' + num2 + ' es ' + suma);

restar(num1, num2);


