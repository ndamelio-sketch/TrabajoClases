let nombre = document.querySelector('#fullName')
let email = document.querySelector('#email')
let telefono = document.querySelector('#phone')
let contraseña = document.querySelector('#password')
let repetir = document.querySelector('#rePassword')

let formulario = document.querySelector(".contact-form")

let nombreError = document.querySelector('.fullName')
let emailError = document.querySelector('.email')
let telefonoError = document.querySelector('.phone')
let contraseñaError = document.querySelector('.password')
let repetirError = document.querySelector('.rePassword')



formulario.addEventListener('submit', function(event){
    event.preventDefault();
    if (nombre.value == ""){
        console.log("entre acsa");
        nombreError.innerHTML = "<p>No puede quedar vacío</p>"
        nombreError.style.display = 'block'
    }
    else if (email.value == ""){
        emailError.innerHTML = "<p>No puede quedar vacío</p>"
        nombreError.style.display = 'none'
        emailError.style.display = 'block'
    }
    else if (telefono.value.length < 8){
        telefonoError.innerHTML = "<p>Tiene que tener más de 8 caracteres</p>"
        emailError.style.display = 'none'
        telefonoError.style.display = 'block'
    }
    else if (contraseña.value.length < 3){
        contraseñaError.innerHTML = "<p>Tiene que tener más de 3 caracteres</p>"
        telefonoError.style.display = 'none'
        contraseñaError.style.display = 'block'
    }
    else if (repetir.value !== contraseña.value){
        repetirError.innerHTML = "<p>No coincide con la contraseña</p>"
        repetirError.style.display = 'block'
        contraseñaError.style.display = 'none'
    }
    else {this.submit()}
})

