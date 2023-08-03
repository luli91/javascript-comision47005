/* 
estructura del if

if(condicion){
    codigo a ejecutar cuando la condicion es verdadera
}
*/
//Ejemplo 1:

// let edad = 15;

// if(edad < 18){
//   console.log("No puedes entrar a la fiesta ");
// }

// if(false){
//   console.log("entramos");
// }

// console.log("Finalizamos");

/* 
estructura del if else

if(condicion){
    codigo a ejecutar en caso de que la condicion sea verdadera
}else{
    codigo a ejecutar en caso de que la condicion no sea verdadera
}
*/
//Ejemplo 2:

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 18) {
//   alert("No puedes entrar a la fiesta");
// } else {
//   alert("Puedes entrar a la fiesta");
// }
// Ejemplo 3:
// let respuesta = prompt("terminaste la tarea?");

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
estrucutra del if else if

if(condicion1){
    codigo a ejecutar cuando la condicion1 sea verdadera
}else if(condicion2){
    codigo a ejecutar cuando la condicion2 sea verdadera
}else{
    codigio a ejecutar cuando ninguna de las condiciones sean verdaderas
}
*/
//Ejemplo 4:

// let edad = 20;

// if(edad < 14){
//   console.log("no puedes entrar");
// }else if(edad < 18){
//   console.log("puedes entrar con un adulto");
// }else{
//   console.log("puedes entrar a la fiesta");
// }

/* 
&& es verdadera cuando todos los elementos son verdaderos en caso contrario es falso
|| es verdadera cuando al menos uno de los elementos es verdadero en caso contratrio es falso
*/
//Ejemplo 5:

// let nombre = prompt("ingrese el nombre");
// let apellido = prompt("ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert(`su nombre es: ${nombre} ${apellido}`);
// } else {
//   alert("el nombre y el apellido se requieren");
// }

//Ejemplo 6:

// let edad = 45;

// console.log("su edad es: " + edad);
// console.log(`su edad es: ${edad}`);

//Ejercicio 7:

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert(`Hola ${nombre}`);
// } else {
//   alert(`No eres ana, eres ${nombre}`);
// }

//Ejercicio 8:

// let nombre = prompt("Ingrese el nombre");

// if (nombre != "" && (nombre === "ANA" || nombre === "ana")) {
//   alert(`Hola ${nombre}`);
// } else {
//   alert(`No eres ana, eres ${nombre}`);
// }

/* 
toUpperCase() pasa a mayúscula
toLowerCase() pasa a minúscula
*/


/*Ejercicio de clase:
Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(); compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresadosy las condiciones cumplidas
*/
let destino = prompt ("Ingrese destino");
let presupuesto = prompt ("Ingrese su presupuesto");

if (destino === "Paris" && presupuesto >= 150000) {
    alert(`Puedes viajar a París con tu presupuesto.`);
} else if (destino === "Paris" && presupuesto < 150000) {
    alert(`No puedes viajar a París con tu presupuesto actual.`);
} else {
    alert(`No estás planeando viajar a París.`);
}

/* EJERCICIO PARA PREENTREGA */

/*YO QUIERO QUE EL CLIENTE AL LLENAR EL FORMULARIO DE MI PAGINA WEB y quiera enviar el formulario mediante el boton, que al hacer click, NO SE ENVIE FORMULARIO SI NO INGRESO TODOS LOS DATOS Y QUE SALGA ALERT: NO COMPLETO LOS DATOS ..,  SI NO,OTRO ALERT: LA CONSULTA SE ENVIO CORRECTAMENTE  */
/*Primer paso: document.getElementById("submit") es una función que busca en el documento HTML un elemento con el id especificado, en este caso "submit", y devuelve una referencia a ese elemento. El punto (.) se utiliza para acceder a las propiedades y métodos de un objeto en JavaScript. En este caso, estamos accediendo al método addEventListener del elemento con id "submit". Este método se utiliza para agregar un evento de escucha al elemento. El primer parámetro de addEventListener es el tipo de evento que quieres escuchar, en este caso "click", y el segundo parámetro es la función que se ejecutará cuando se dispare el evento.*/
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("phone").value;
    let email = document.getElementById("Email").value;
    let mensaje = document.getElementById("message").value;
//Las variables nombre, telefono, email y mensaje contienen los valores ingresados por el usuario en los campos del formulario. Estos valores se obtienen utilizando la función document.getElementById para obtener una referencia a cada campo del formulario y luego accediendo a la propiedad value de cada campo para obtener el valor ingresado por el usuario.
    if (nombre === "" || telefono === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    } else {
        alert("La consulta se envió correctamente.");
        // Enviar el formulario
    }
});
