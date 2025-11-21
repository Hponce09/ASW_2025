document.cookie = "usuario=ana";
document.cookie ='idioma = catalan';
document.cookie ='pais = españa';



let arrayCookies = document.cookie.split(';');
for(let cookie1 of arrayCookies){
    console.log(cookie1);
}

let nombre = document.getElementById('name')
let birtday = document.getElementById('date')
let country = document.getElementById('pais')
let data = document.getElementById('datos')
let boton = document.getElementById('boton')

function mostrar(){
    data.innerHTML="soy " + nombre.value + ", naci el " + birtday.value + ", y soy de " + country.value;
}

boton.addEventListener('click', mostrar)
let oldText = document.getElementById('mensaje')

let nuevaLista = document.createElement('ul')
let nuevoElemento = document.createElement('li')

nuevoElemento.innerHTML = 'Nuevo Mensaje'
oldText.replaceWith(nuevaLista)
nuevaLista.append(nuevoElemento)

let condiciones = document.getElementById('acepto_condiciones')

let valido = 'rgb(2, 131, 2)';
let notValido = 'rgb(255, 0, 0)';



function validar(){
    if(condiciones.checked){
        document.body.style.backgroundColor= valido
    }else{
        document.body.style.backgroundColor= notValido
    }
    
    localStorage.setItem('clave_Fija',condiciones.checked.toString())

}

function estadoGuardado(){
    let condicioRecuperada = localStorage.getItem('clave_Fija')
    if(condicioRecuperada === 'true'){
        document.body.style.backgroundColor = valido;
    }else{
        document.body.style.backgroundColor= notValido

    }
}

estadoGuardado()

condiciones.addEventListener('change',validar)


