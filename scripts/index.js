console.log("Bienvenido al segudno curso de JavaScript");
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const escuela = document.querySelector('.escuela');
const selectores = document.querySelector('#selectores');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    escuela,
    selectores,
    input
})


function suma(num1,num2) {
    return num1 + num2;
}

function resta(nu1, nu2){
    const resta = suma(nu1,nu2);
    console.log('La resta es ' + resta);
}

resta(2,2);

const incertarTexto = document.querySelector('#incertarTexto');
incertarTexto.innerText = 'Incertar Texto en HTML desde JavaScript';
incertarTexto.innerText= ''; //Eliminar el Texto
incertarTexto.classList.add('color', 'verde'); //Agregar una clase desde JavaScript
incertarTexto.classList.remove('verde'); //Eliminar Clase desde JavaScript

const imagen = document.createElement('img'); //Crear un elemanto desde JavaScript
imagen.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Color_circle_%28hue-sat%29.png/310px-Color_circle_%28hue-sat%29.png');
//Se crea las propiedad de la imng con setAttibute
console.log(imagen); //Imprimimos la iamen

imgJava.append(imagen); //Ponemos la imagen en HTML para que la veoa todos 

const nombre = document.querySelector('#nombre'); //Reconocer datos
const edad = document.querySelector('#edad'); //Reconocer datos
const formulario = document.querySelector('#formulario');
const botonEnviar = document.querySelector('#buttonEnviar');

botonEnviar.addEventListener('click', botonClick);
//formulario.addEventListener('submit', botonClick);
function botonClick(event){ //Se crea una funcion pata hacer el llamado del Button
    console.log('Escuchando el Boton'); //enencir el fromulario
    //event.preventDefault(); //Enviar el fromulario sin recargar la pagina
    nomRes.innerText = nombre.value; //Incerta el texto guardado
    edadRes.innerText = edad.value; //Incertar la edad gaurdada
}

