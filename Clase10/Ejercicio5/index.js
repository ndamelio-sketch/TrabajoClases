alert('Bienvenidos a mi Sitio!');
let avanzar = confirm('¿Está seguro de querer avanzar?');
if (avanzar){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita";
} else {
     document.querySelector(".saludo").innerText = 'Lamentamos que no quieras continuar tu visita';
}
let nombre = prompt('Ingrese su nombre: ');
document.querySelector("h1").innerText = "Bienvenido " + nombre;
let edad = prompt('Cuántos años tenés?: ')

if (edad < 18){
    document.querySelector('.container-general').style.display = "none";
    document.querySelector('#accesoDenegado').style.display = 'block'
} else {
    let prog = confirm('Te gusta la programación?')
    if (prog){
        document.querySelector('.background-img').innerHTML = "<img src='./img/programmer.jpeg'/>"
    }
    else {
        document.querySelector('.background-img').innerHTML =  "<img src='./img/gatito.jpeg'/>"
    }
    let imagen = document.querySelector('.avatar')

    let imagen1 = prompt("Ingrese el url de su imagen: ")
    imagen.innerHTML = "<img src= " + imagen1 + "/>"

    let nombreP = prompt('Ingrese su nombre: ')
    let directorP = prompt('Ingrese al director: ')
    let duracionP = prompt('Ingrese la duracion: ')
    let actorP = prompt('Ingrese al actor: ')

    let pelicula = {
    nombre: nombreP,
    director: directorP,
    duracion: duracionP,
    actor: actorP,
    }
    document.querySelector('#nombre').innerHTML = pelicula.nombre
    document.querySelector('#director').innerHTML = pelicula.director
    document.querySelector('#duracion').innerHTML = pelicula.duracion
    document.querySelector('#actor').innerHTML = pelicula.actor



    document.querySelector('#pelicula').style.display = "block"


}