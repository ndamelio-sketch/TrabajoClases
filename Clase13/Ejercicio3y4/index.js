let peliculasFavoritas = ['Tron','Avengers','Star Wars'];
let peliculaJson = JSON.stringify(peliculasFavoritas);
localStorage.setItem('favoritos', peliculaJson);
console.log(localStorage);
let recuperoStorage = localStorage.getItem('favoritos');
let peliculasRecuperadas = JSON.parse(recuperoStorage);
peliculasRecuperadas.push('Cars');
peliculaJson = JSON.stringify(peliculasRecuperadas);
localStorage.setItem('favoritos', peliculaJson);
console.log(localStorage);

localStorage.clear()
