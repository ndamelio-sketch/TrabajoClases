function rectangulo (altura,ancho){
    return altura * ancho;
}

function triangulo (altura,base){
    return (altura * base) / 2;
}

function dolarHoy (ars){
    return ars / 1405;
}

function precioFinal (precio){
    return precio * 1.21;
}

function mitad (numero){
    return numero / 2;
}

function sumar (num1,num2){
    return num1 + num2;
}
function multiplicar (num1,num2){
    return num1 * num2;
}
function restar (num1,num2){
    return num1 - num2;
}
function dividir (num1,num2){
    return num1 / num2;
}




function siguiente(numero) {
  return numero + 1;
}

function doble(numero) {
  return 2 * numero;
}

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
let resultado = siguienteDelDoble(2);
console.log(resultado);

function anterior(numero) {
  return numero - 1;
}

function triple(numero){
    return numero * 3;
}

function anteriorDelTriple(numero) {
    return anterior(triple(numero));
}