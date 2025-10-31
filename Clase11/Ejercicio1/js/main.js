// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    titulo.addEventListener('mouseover', function(){
        let nombre = prompt("¿CÓMO TE LLAMÁS?")
   
 
        let saludo = document.querySelector('#saludo');
        saludo.style.textTransform = 'uppercase';
        if (nombre == undefined) {
            saludo.innerText = "BIENVENID@ USUARIO"
        } else{
            saludo.innerText = "BIENVENID@ " + nombre
        };

        titulo.style.display = 'none';
        let bienvenida = document.querySelector('.bienvenida span')
        bienvenida.style.display = 'block';
        
        bienvenida.addEventListener('click', function(){
            let bienvenidaC = document.querySelector('.bienvenida')
            bienvenidaC.style.display = 'none'
            let personajes = document.querySelector('.personajes')
            personajes.style.display = 'flex';
        })
        
        let seleccion = document.querySelector('.personaje-seleccionado')

        let bart = document.querySelector('#bart');
        bart.addEventListener('click', function(){
            bart.style.backgroundColor = 'yellow'
        })
        let lisa = document.querySelector('#lisa');
        lisa.addEventListener('dblclick', function(){
            lisa.style.backgroundColor = 'yellow'
        })
        let homero = document.querySelector('#homero');
        homero.addEventListener('click', function(){
            homero.style.backgroundColor = 'yellow'
        })
        let marge = document.querySelector('#marge');
        marge.addEventListener('mouseover', function(){
            marge.style.backgroundColor = 'yellow'
        })
        let maggie = document.querySelector('#maggie');
        maggie.addEventListener('mouseout', function(){
            maggie.style.backgroundColor = 'yellow'
        })
        let milhouse = document.querySelector('#milhouse');
        milhouse.addEventListener('click', function(){
            milhouse.style.backgroundColor = 'yellow'
        })
        let burns = document.querySelector('#burns');
        burns.addEventListener('mouseover', function(){
            burns.style.backgroundColor = 'yellow'
        })
        let bobPatinio = document.querySelector('#bobPatinio');
        bobPatinio.addEventListener('dblclick', function(){
            bobPatinio.style.backgroundColor = 'yellow'
        })
        let flanders = document.querySelector('#flanders');
        flanders.addEventListener('mouseover', function(){
            flanders.style.backgroundColor = 'yellow'
        })
        let duffman = document.querySelector('#duffman');
        duffman.addEventListener('dblclick', function(){
            duffman.style.backgroundColor = 'yellow'
        })
        let gorgory = document.querySelector('#gorgory');
        gorgory.addEventListener('mouseover', function(){
            gorgory.style.backgroundColor = 'yellow'
        })
        let nelson = document.querySelector('#nelson');
        nelson.addEventListener('click', function(){
            nelson.style.backgroundColor = 'yellow'
        })
    })
});

    
    

    /* Asignarle evento a la variable boton */
    /* let boton = ; */
 