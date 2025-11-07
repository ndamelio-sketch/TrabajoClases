let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let idPersonaje = queryStringObj.get('id');


fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
        let nombre = document.querySelector('#nombre');
        nombre.innerText = data.name
        let status = document.querySelector('#status');
        status.innerText = data.status
        let especie = document.querySelector('#especie');
        especie.innerText = data.species
        let imagen = document.querySelector('#imagen');
        imagen.src = data.image

	})
	.catch(function(error){
		console.log(error)
	})