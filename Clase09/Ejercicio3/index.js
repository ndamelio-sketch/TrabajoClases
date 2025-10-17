let ironman = {
    nombre: 'IronMan',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar Misiles', 'Disparar Láser'],
    energia: 100,
    getPoder1: function (num){
        this.energia = this.energia - 10;
        return 'Poder Elegido de ' + this.nombre + ': ' + this.poderes[num] + ' . Energía restante: ' + this.energia + ' .';
    },
};

console.log(ironman.energia);
console.log(ironman.getPoder1(2));


let hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ['Aplastar', 'Gritar', 'Golpear'],
    energia: 100,
    getPoder2: function (num){
        this.energia = this.energia - 10;
        return 'Poder Elegido de ' + this.nombre + ': ' + this.poderes[num] + ' . Energía restante: ' + this.energia + ' .';
    },
};

console.log(hulk.energia);
console.log(hulk.getPoder2(2));