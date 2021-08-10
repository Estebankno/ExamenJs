"uso strict";

// Obtener datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function (){
    //Que debes hacer ?
    //1. Hacer fetching de datos del siguiente link
    //2. Pasar los datos convertidos en JSON a la funcion "mostrarDatos()"
});

function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}