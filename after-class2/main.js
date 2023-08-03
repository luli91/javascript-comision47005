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

let marca = prompt("Ingrese la marca a consultar");

let puertasFiltradas = puertas.filter((item) => item.marca === marca);
let tapasFiltradas = tapaDeBaul.filter((item) => item.marca === marca);
let paragolpesFiltrados = paragolpes.filter((item) => item.marca === marca);

let repuestosFiltrados = [...puertasFiltradas, ...tapasFiltradas, ...paragolpesFiltrados];

if (repuestosFiltrados.length > 0) {
    let mensaje = "Repuestos disponibles:\n"; //\n es un carácter de escape que representa un salto de línea.
    repuestosFiltrados.forEach((Repuesto) => {
        //La línea mensaje += está concatenando (agregando) una cadena de texto al final de la variable mensaje
        mensaje += `
        Nombre: ${Repuesto.nombre}
        Precio: $${Repuesto.precio}
        Marca: ${Repuesto.marca}
        Año: ${Repuesto.año}
        Color: ${Repuesto.color}
    `;
    });
    alert(mensaje);
} else {
    alert("No hay repuestos disponibles para la marca ingresada");
}