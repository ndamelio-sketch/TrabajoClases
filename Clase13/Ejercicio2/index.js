let peliculasFavoritas = ['Tron','Avengers','Star Wars'];
let peliculaFavorita = JSON.stringify(peliculasFavoritas[1]);
localStorage.setItem('peliculaFav', peliculaFavorita);
console.log(localStorage);
let recuperoStorage = localStorage.getItem('peliculaFav');
let peliculaRecuperada = JSON.parse(recuperoStorage);
console.log(recuperoStorage);

localStorage.clear()




