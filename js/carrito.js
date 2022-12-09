const ruedasEnCarrito = JSON.parse(localStorage.getItem("neumaticos-en-carrito"));

const productosCarrito = document.querySelector("#conteiner-carrito");

if (ruedasEnCarrito){

    ruedasEnCarrito.foreach((rueda) => {
        const div = document.createElement("div");
        div.classList.add("tienda")
        div.innerHTML = `
        <img class="imgTienda" src="${neumaticos.imagen}" alt="${neumaticos.medida}">
            <p>${neumaticos.medida}</p>
            <p>${neumaticos.precio}</p>
        `
    })
} else {

};
ruedasEnCarrito.append(div);

{/* <img class="imgTienda" src="${neumaticos.imagen}" alt="${neumaticos.medida}">
<p>${neumaticos.marca}</p>
<p>${neumaticos.medida}</p>
<p>${neumaticos.precio}</p> */}