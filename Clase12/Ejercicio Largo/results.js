let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let resultado = queryStringObj.get('q');

fetch(`https://rickandmortyapi.com/api/character/?name=${resultado}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
		let personajes = document.querySelector('.resultados')
		let characters = ""
        for (let i=0; i<data.results.length; i++) {
        characters += `
        <article>
          <img src='${data.results[i].image}' alt=''>
          <a href="./detalle.html?id=${data.results[i].id}"><p>Name: ${data.results[i].name}</p></a>
          <p>Status: ${data.results[i].status} </p>
        </article>`
        }
        personajes.innerHTML = characters
        console.log(characters)
        console.log(data.results.length)
	})
	.catch(function(error){
		console.log(error)
	})

    