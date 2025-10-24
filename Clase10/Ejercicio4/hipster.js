let hip = {
    nacionalidad: "Argentino",
    profesion: 'Musico',
    km: "2",
};
let nacionalidad1 = prompt('Ingrese su nacionalidad: ');
let profesion1 = prompt('Ingrese su profesión: ');
let km1 = prompt('Cuántos km corre por día?: ');
function filosofoHipster(nacionalidad, profesion, km) {
    if (hip.nacionalidad == nacionalidad1 && hip.profesion == profesion1 && hip.km == km1){
        return "Soy un filósofo hipster."
    } else {
        return 'Aún no soy filósofo hipster.'
    }
};
console.log(filosofoHipster());
