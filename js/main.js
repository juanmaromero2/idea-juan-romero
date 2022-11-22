
// let cliente = prompt("Hola! ingrese su nombre");
// function saludar(cliente) {
//     alert("Bienvenido " + cliente + " a Gomeria La Sexta.")
// }
// saludar(cliente);

// alert("Esta es la sección de venta de neumaticos.");

// let neumatico = prompt("Desea comprar neumaticos?(si/no)");
// if (neumatico == "si"){
//     alert("Perfecto, en el siguiente paso indique la medida que busca.");
// } else if(neumatico == "no"){
//     alert("Disculpe no podemos ayudarlo.");
// } else {
//     alert("ayuda.");
// }

// // let medida = prompt("Ingrese la medida que busca.(de 13 a 17 pulgadas)");
// // switch (medida) {
// //     case "13 pulgadas":
// //         alert("Disponible: 165/70/13, 175/65/13.")
// //         breack;
// //     case "14 pulgadas":
// //         alert("Disponible: 175/65/14, 175/70/14, 185/60/14.")
// //         breack;
// //     case "15 pulgadas":
// //         alert("Disponible: 185/60/15, 195/65/15, 205/70/15.")
// //         breack;
// //     case "16 pulgadas":
// //         alert("Disponible: 205/55/16, 225/70/16, 265/65/16.")
// //         breack;
// //     case "17 pulgadas":
// //         alert("Disponible: 215/50/17, 225/55/17, 265/65/17.")
// //         breack;
// //     default:
// //         alert("No disponemos la medida solicitada.")
// // }

// let medida = prompt("Ingrese la medida que busca.(de 13 a 17 pulgadas)");
// // debe ingresar la medida con la palabra pulgadas, por ejemplo "14 pulgadas"
// const neumaticos = [
//     {cubierta: "13 pulgadas", precio: 25000},
//     {cubierta: "14 pulgadas", precio: 30000},
//     {cubierta: "15 pulgadas", precio: 35000},
//     {cubierta: "16 pulgadas", precio: 40000},
//     {cubierta: "17 pulgadas", precio: 45000},
// ];

// console.log(neumaticos.find((neumatico) => neumatico.cubierta === medida));

// const rueda = neumaticos.some((neumatico) => neumatico.cubierta === medida);
// console.log(rueda);
