for (let i=0; i<5; i++){
    console.log('Practicando con el bucle for');
};


let ganancias = [3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875,  -7301, 3041, 686];
let suma = 0
for (let i=0; i<ganancias.length; i++){
    suma = suma + ganancias[i];
};

console.log(suma);

let lista = '';

let healingIsDifficult = [ 'Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously'];

for (let i=0; i<healingIsDifficult.length; i++){
    lista = lista + '' + healingIsDifficult[i];
}

console.log(lista);

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0; i<got.length; i++){
    console.log('Soy ' + got[i].nombre + ' ' + got[i].apellido + ' de la ciudad ' + got[i].ciudad);
};