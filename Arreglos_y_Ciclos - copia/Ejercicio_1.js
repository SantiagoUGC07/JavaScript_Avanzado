/*para promedio de los numeros de un arreglo */
let numeros = [10, 9, 8, 7, 8, 8, 9, 7];
let promedio = 0;
numeros.forEach((elemento) =>
{
    promedio += elemento;
});

promedio /= numeros.length;
document.write("El promedio es: "+ promedio);