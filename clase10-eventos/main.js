//const boton = document.getElementById("boton");

//primera forma para definir un evento
// boton.addEventListener("click", () => {
//   alert("Click");
// });

//segunda forma para definir un evento
// boton.onclick = () => {
//   console.log("click");
// };

// let evento = prompt("Ingrese el evento");

// boton.addEventListener(evento, () => {
//   alert("Click");
// });

// const saludar = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => saludar("andres"));


//PRACTICA DE LO VISTO EN CLASE
// QUIERO UTILIZAR EL EVENTO CLICK PARA QUE AL TOCAR EL BOTON, 
const boton = document.getElementById("load-more-button");
boton.addEventListener("click", () => {
    // Aca puede cargar más productos desde el servidor
    alert("Click");
    });


// otro ejemplo pero para aplicar a mi proyecto
//evento para el boton agregar al carrito

//querySelectorAll selecciono todos los elementos button que estan dentro de la clase.boxprod. Nos retorna una lista con esos elementos
let addToCart = document.querySelectorAll(".boxProd button")
let productIds = ["product1", "product2", "product3"];
//recorro el array con el for 
for (let i = 0; i < addToCart.length; i++){
    //accedemos al elemento que busco el for y lo colocamos en la variable buton
    let button = addToCart[i];
    //utilizo el método addEventListener para agregar un evento de tipo click al elemento button
button.addEventListener("click", () => {
    //se utiliza el índice del botón en la lista de botones para acceder al id del arreglo productIds
    let idProduct = productIds[i];
    //obtengo ese elemento de la variable anterior con getElementByID
    let productElement = document.getElementById(idProduct);
    //utilizo el método querySelector en el elemento productElement para obtener el primer elemento h5, luego se utiliza la propiedad textContent para obtener el texto dentro de este elemento
    let productName = productElement.querySelector("h5").textContent;
    //realizo lo mismo en esta variable con la diferencia que utilizo el método replace para eliminar el símbolo de moneda ($) porque este símbolo no es un número y la función parseFloat no lo convierte ahsta no eliminarlo. PArseFloat lo utilizo para despues realizar calculos matematicos a futuro. ej: si quiero sumar la cantidad de productos del carrito.
    let productPrice = parseFloat(productElement.querySelector("p").textContent.replace("$", ""));
    alert("Se agrego correctamente");
})
}

