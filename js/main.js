const neumaticos = [
    {id: "cubierta01" ,
    marca: "Pirelli",
    medida:"165/70/13" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta02" ,
    marca: "Pirelli",
    medida:"175/70/13" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta03" ,
    marca: "Pirelli",
    medida:"175/65/14" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta04" ,
    marca: "Pirelli",
    medida:"185/60/14" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta05" ,
    marca: "Pirelli",
    medida:"195/70/14" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta06" ,
    marca: "Pirelli",
    medida:"185/65/15" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta07" ,
    marca: "Pirelli",
    medida:"195/55/15" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta08" ,
    marca: "Pirelli",
    medida:"195/60/15" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta09" ,
    marca: "Pirelli",
    medida:"205/65/15" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: 10000},
    {id: "cubierta10" ,
    marca: "Pirelli",
    medida:"195/55/16" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta11" ,
    marca: "Pirelli",
    medida:"205/55/16" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta12" ,
    marca: "Pirelli",
    medida:"225/70/16" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta13" ,
    marca: "Pirelli",
    medida:"215/45/17" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta14" ,
    marca: "Pirelli",
    medida:"245/50/17" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
    {id: "cubierta15" ,
    marca: "Pirelli",
    medida:"265/65/17" ,
    imagen: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAGx-Z5nW1uHjg3Xx8sAUaiUYCLiAQ7I6Sw&usqp=CAU",
    precio: "$10000"},
];

const conteinerTienda =  document.querySelector("#conteinerTienda");
let botonesComprar = document.querySelectorAll(".btn-agregar");
let numeroCantidad = document.querySelector("#numeroCantidad");
const conteinerCarrito = document.querySelector("#conteinerCarrito");

function agregarCubiertas(){
    neumaticos.forEach(neumaticos => {
        let div = document.createElement("div");
        div.classList.add("tienda");
        div.innerHTML = `
        <img class="imgTienda" src="${neumaticos.imagen}" alt="${neumaticos.medida}">
        <p>${neumaticos.marca}</p>
        <p>${neumaticos.medida}</p>
        <p>${neumaticos.precio}</p>
        <button class="btn-comprar" id="${neumaticos.id}">Comprar</button>
        `;
        conteinerTienda.append(div);
    })
    agregarBtnComprar ();
};
agregarCubiertas();




function agregarBtnComprar () {
    botonesComprar = document.querySelectorAll(".btn-comprar");

    botonesComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
};

const neumaticosEnCarrito = []

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;

    const neumaticoComprado = neumaticos.find(neumatico => neumatico.id === idBoton);
    
    if(neumaticosEnCarrito.some(neumatico => neumatico.id === idBoton)){
        const indice = neumaticosEnCarrito.findIndex(neumatico => neumatico.id === idBoton);
        neumaticosEnCarrito[indice].cantidad++;
    }
        else{
            neumaticoComprado.cantidad = 1;
            neumaticosEnCarrito.push(neumaticoComprado);
        };

        actualizarCantidad();

        localStorage.setItem("neumaticos-en-carrito", JSON.stringify(neumaticosEnCarrito));
}


function actualizarCantidad(){
    let nuevoNumeroCantidad = neumaticosEnCarrito.reduce((acc, neumatico) => acc + neumatico.cantidad, 0);
    numeroCantidad.innerText = nuevoNumeroCantidad;
}


/*********** llevar productos al carrito  ************/

const cubiertasCarrito = () => {
    conteinerCarrito.innerHTML = ``

    neumaticosEnCarrito.forEach((producto) =>{
        const div = document.createElement("div");
                div.className = "tienda";
                div.innerHTML = `
                <img class="imgTienda" src="${neumaticos.imagen}" alt="${neumaticos.medida}">
                    <p>${neumaticos.medida}</p>
                    <p>${neumaticos.precio}</p>
                `;
                conteinerCarrito.append(div);
    })
};
cubiertasCarrito();







// cubiertasCarrito.append(neumaticosEnCarrito);


// function cubiertasCarrito(){
//     neumaticosEnCarrito. forEach(carrito => {
//         let div = document.createElement("div");
//         div.classList.add("tienda");
//         div.innerHTML = `
//         <img class="imgTienda" src="${neumaticos.imagen}" alt="${neumaticos.medida}">
//             <p>${neumaticos.medida}</p>
//             <p>${neumaticos.precio}</p>
//         `;
//         conteinerCarrito.append(div);
//     })
// };
// cubiertasCarrito()