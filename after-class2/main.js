// class Producto {
//   constructor(precio, nombre) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const productos = [];

// const producto1 = new Producto(1000, "pan");
// console.log(producto1);

// productos.push(new Producto(1000, "pan"));
// productos.push(new Producto(1300, "cafe"));

// let nombre = prompt("Ingrese el producto a consultar");

// while (nombre != "salir") {
//   let producto = productos.find((item) => item.nombre === nombre);

//   if (producto) {
//     let mensaje = `
//     Nombre: ${producto.nombre}
//     Precio: $${producto.precio}
//   `;

//     alert(mensaje);
//   } else {
//     alert("El producto no se encuentra disponible");
//   }

//   nombre = prompt("Ingrese el producto a consultar");
// }

// class Producto {
//   constructor(precio, nombre, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//   }

//   vender() {
//     if (this.cantidad === 0) {
//       console.log("Se acabo el producto");
//     } else {
//       this.cantidad -= 1; // this.cantidad = this.cantidad - 1
//     }
//   }
// }

// const producto1 = new Producto(1000, "pan", 5);
// console.log(producto1);

// producto1.vender();
// console.log(producto1);

// producto1.vender();
// producto1.vender();
// producto1.vender();
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

// producto1.vender();
// producto1.vender();
// producto1.vender();

//practicamos lo visto en el after
//Creo la clase Repuestos que tiene las propiedades que todos los objetos deberian tener
class Repuesto {
    constructor (precio, nombre, cantidad, marca, color, año){
        this.precio = precio;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.marca = marca;
        this.color = color;
        this.año = año;
    }
}

//creamos 3 arrays con el tipo de repuesto 
//Agregamos con el push objetos nuevos a cada tipo de array
const puertas = [];

puertas.push(new Repuesto(35000, "Puerta Delantera Izquierda", 1, "Peugeot", "blanco", 2009));
puertas.push(new Repuesto(41197, "Puerta Delantera Izquierda", 1, "Fiat", "rojo", 2018));
puertas.push(new Repuesto(41197, "Puerta Delantera Izquierda", 1, "Citroen", "gris", 2008));

const tapaDeBaul = [];
tapaDeBaul.push(new Repuesto(35000, "Tapa de baul",1, "Toyota", "blanco", 2016));
tapaDeBaul.push(new Repuesto(41197, "Tapa de baul", 1, "Citroen", "negro", 2009));
tapaDeBaul.push(new Repuesto(41197, "Tapa de baul", 1, "Renault", "gris", 2010));

const paragolpes =[];
paragolpes.push(new Repuesto(35000, "paragolpe delantero",1, "Toyota", "cromado", 2016));
paragolpes.push(new Repuesto(41197, "paragolpe delantero", 1, "Citroen", "negro", 2009));
paragolpes.push(new Repuesto(41197, "paragolpe delantero", 1, "Renault", "verde orcuro", 2010));

//Pedimos al usuario que oingrese la marca que quiere consultar
let marca = prompt("Ingrese la marca a consultar");
// Armamos tres variables para ir guardando los objetos filtrados de cada array que son iguales a la marca que ingreso prompt
//el metodo (funcion) filter crea nuevo array con todos los elementos que cumplen con la funcion, es decir, los que son iguales a la marca, item seria el parametro de la funcion y representa cada elemento del array
let puertasFiltradas = puertas.filter((item) => item.marca === marca);
let tapasFiltradas = tapaDeBaul.filter((item) => item.marca === marca);
let paragolpesFiltrados = paragolpes.filter((item) => item.marca === marca);
//Armamos un variable que tiene los 3 arrays que realizamos por la funcion filter, para unir los 3 arrays se utilizan los 3 puntos, para luego llamar todos los productos en total
let repuestosFiltrados = [...puertasFiltradas, ...tapasFiltradas, ...paragolpesFiltrados];
// LA condicion es: si por lo menos hay 1 producto (es decir, a lo largo de la variable repuestosFiltrados es mayor a 0) que muestre un alert con los repuestos disponibles de esa variable
if (repuestosFiltrados.length > 0) {
    let mensaje = "Repuestos disponibles:\n"; //\n es un carácter de escape que representa un salto de línea.
    //se utiliza el método forEach para recorrer el array repuestosFiltrados y con la funcion flecha generamos un mensaje que incluye información sobre cada repuesto disponible. (funcion de orden superior)
    // El parametro que se pasa en la funcion flecha (filtrado) representa cada elemento del array repuestosFiltrados, puede ser cualquier otro nombre
    repuestosFiltrados.forEach((Filtrado) => {
        //+= está concatenando (agregando) una cadena de texto al final de la variable mensaje
        mensaje += `
        Nombre: ${Filtrado.nombre}
        Precio: $${Filtrado.precio}
        Marca: ${Filtrado.marca}
        Año: ${Filtrado.año}
        Color: ${Filtrado.color}
    `;
    });
    alert(mensaje);
} else {
    alert("No hay repuestos disponibles para la marca ingresada");
}