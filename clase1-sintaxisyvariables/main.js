// comentario de linea

/* 
comentario
de
bloque
*/

//forma recomendada para declarar variables
// let edad = 15;
// let nombre = "andres";
// nombre = "juan";

//forma no recomendada para declarar variables
// var numero = 34;

// constantes
// const CONSTANTE = 5;

// camelCase  =>  nombreGrandeBonito
// snake_case =>  nombre_grande_bonito
// PascalCase =>  NombreGrandeBonito

// let numeroUno = 5;
// let numeroDos = 10;

// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;
// let resultadoDivision = numeroUno / numeroDos;

// console.log("Resultado suma", resultadoSuma);
// console.log("Resultado resta", resultadoResta);
// console.log("Resultado multiplicacion", resultadoMultiplicacion);
// console.log("Resultado division", resultadoDivision);

// let saludo = "Hola";
// let nombre = "Camila";
// let saludoCompleto = saludo + " " + nombre;

// console.log(saludoCompleto);

let nombre = prompt("Ingrese su nombre");
alert("Hola " + nombre);

// let numero = prompt("Ingrese un numero");
// alert(parseInt(numero) + 10);

// let numero = 8;
// let nombre = "andres";

// console.log(typeof numero);
// console.log(typeof nombre);

//1er ej en clase: Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
let name = prompt("Ingrese su nombre");
alert("Hola" +" "+ nombre);
//2do ej: Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let numero = prompt("Ingrese un numero");
alert(parseInt(numero) + 10);
//3er ej: Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
let texto1 = prompt("Introduce el primer texto");
let texto2 = prompt("Introduce el segundo texto");
let textoConcatenado = texto1 + " " + texto2;
alert(textoConcatenado);