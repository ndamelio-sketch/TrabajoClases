let misDatos = {
    nombre: "Nahuel",
    apellido: 'Damelio',
    edad: 19,
    dni: '47451223',
    comidasFavoritas: ['milanesa', 'hamburguesa', 'fideos'],
    saludar: function (){
        return 'Hola mi nombre es ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años. Mi primer comida favorita es ' + this.comidasFavoritas[0];
    }
} 

console.log(misDatos.saludar());

let auto = {
    marca: 'Ford',
    modelo: 'Focus', 
    año: '2015',
    color: 'blanco',
    posicion: 0,
    avanzar: function(num){
        return this.posicion = this.posicion + num;
    },
    retroceder: function (num){
        return this.posicion = this.posicion - num;
    }
}

auto.avanzar(1);
console.log(auto.posicion);

auto.retroceder(2);
console.log(auto.posicion);

let autoNuevo = {
    marca: 'Ford',
    modelo: 'Focus', 
    año: '2015',
    color: 'blanco',
    posicion: 0,
    moverse: function(num){
        return this.posicion = this.posicion + num;
    }
}

autoNuevo.moverse(-2);
console.log(autoNuevo.posicion);

