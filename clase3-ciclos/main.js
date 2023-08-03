/* 
estructura del bucle for

for(desde; hasta; actualizacion){
    codigo a repetir
}
*/
//i++ === i = i + 1

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//   console.log(7 * i);
// }

// console.log(7 * 1);
// console.log(7 * 2);
// console.log(7 * 3);
// console.log(7 * 4);
// console.log(7 * 5);
// console.log(7 * 6);
// console.log(7 * 7);
// console.log(7 * 8);
// console.log(7 * 9);
// console.log(7 * 10);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// for(let i = 1; i <= 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//   if(i === 5 || i === 7){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del bucle WHILE

while(condicion){
    codigo a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true; CUIDADO BUCLE INFINITO

// while(repetir){
//   console.log("hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

//Ejemplo de lo visto en clase realizado por mi: 

// let codigoIngresado = prompt("Ingresa el código de descuento:");
// let codigoValido = "AUTOPARTES10";

// while (codigoIngresado != codigoValido) {
//     alert ("código incorrecto");
//     codigoIngresado = prompt("Ingresa el código de descuento:");
// }
// alert("Descuento 30% en toda nuestra tienda")


/* 
estructura del do while

do{
    codigo a ejecutar por primera vez y siempre que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("entramos");
// }

// do {
//   console.log("entramos");
// } while (repetir);

/* 
estrucutra del switch

switch(valor){
    case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;
    case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;
    .
    .
    .
    default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los valores anteriores
    break
}
*/

// let moneda = prompt("Ingrese el codigo de la moneda");

// switch (moneda) {
//   case "ars":
//     alert("Moneda de argentina");
//     break;

//   case "clp":
//     alert("Moneda de chile");
//     break;

//   case "cop":
//     alert("Moneda de colombia");
//     break;

//   default:
//     alert("Moneda no reconocida");
//     break;
// }

// let entrada = prompt("Ingresar un nombre");

// while ( entrada != "ESC") {
//     switch (entrada) {
//         case "ANA":
//         alert("Hola ANA");
//         break;

//         case "JUAN":
//         alert("Hola JUAN");
//         break;

//     default:
//         alert("Quién eres?");
//         break;
//     }
//     entrada = prompt("Ingresar un nombre");
// }


const intentosMaximos = 3;
let intentos = 0;
let codigoIngresado = '';
const codigoValido = "AUTOPARTES20";
let codigoValidoIngresado = false;

for (intentos = 0; intentos < intentosMaximos && !codigoValidoIngresado; intentos++) {
    /*el ciclo se repetirá mientras el número de intentos sea menor que el número máximo de intentos y mientras el usuario no haya ingresado el código válido. */
    codigoIngresado = prompt("Ingresa el código de descuento:");
    // El valor ingresado por el usuario se almacena en la variable codigoIngresado. Luego, se utiliza una sentencia if...else para verificar si el código ingresado es igual al código válido almacenado en la variable codigoValido
    if (codigoIngresado === codigoValido) {
    alert("¡Código válido! Has obtenido un 20% de descuento en tu compra.");
    codigoValidoIngresado = true;
    /*se establece la variable codigoValidoIngresado en true para indicar que el usuario ha ingresado el código válido */
    } else {
    alert("Código incorrecto. Inténtalo de nuevo.");
    }
}

if (!codigoValidoIngresado) {
    /* si es distinto a  true porque codigoValidoIngresado lo establecimos en true en la linea 177 en el momento que se ingresa correctamente el codigo  */
    alert("Lo siento, has agotado tus intentos. No has obtenido el descuento.");
    /*si el usuario no ingresa el código válido después de 3 intentos, el ciclo for terminará y la variable codigoValidoIngresado seguirá siendo false */
}