let añadir = document.getElementById("añadir");
añadir.addEventListener("click", añadirTarjeta);

let borrar = document.querySelector('#delete')
let cont = 0


function añadirTarjeta(){
    cont++
    let container = document.getElementById("container");
    console.log(container)
    container.innerHTML += `    <div class="tarjetas" id = "tarjetas">
    <h3>${cont} Modelo </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vitae?</p>
    <button onclick="eliminarElemento(this)" >DELETE</button>
</div>`
}

function eliminarElemento(e){
   e.parentNode.parentNode.removeChild(e.parentNode)

}