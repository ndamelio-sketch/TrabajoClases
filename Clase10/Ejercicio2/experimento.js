let nombre = prompt('Ingrese su nombre: ');
alert(nombre);
let edad = prompt('Ingrese su edad: ');
alert(edad);
let fanDeportes = confirm('Le gustan los deportes?');
alert(fanDeportes);
alert('Muchas gracias ' + nombre + ' por responder nuestras preguntas.');
let usuario = {
    nombre,
    edad,
    fanDeportes,
    deportistaProfesional: function () {
        if (fanDeportes) {
            return 'Si, soy fan de los deportes.'
        } else {
            return 'No soy tan fan aún de los deportes'
        }
    }
    
};
console.log(usuario.deportistaProfesional());


