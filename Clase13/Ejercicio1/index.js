let miNombre = ['Nahuel',
                'Damelio',
               ];

let userName = JSON.stringify(miNombre);
localStorage.setItem('nombreEnLocal', userName);
console.log(localStorage);

let recuperoStorage = localStorage.getItem('nombreEnLocal');
let alumnosRecuperados = JSON.parse(recuperoStorage);
console.log(alumnosRecuperados);

