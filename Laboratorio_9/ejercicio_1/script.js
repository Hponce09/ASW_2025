
let boton = document.getElementById('btn-multi');

function mensaje1(){
    alert("hola")
}

function mensaje2(){
    alert("ciao")
}

boton.addEventListener('click',mensaje1)
boton.addEventListener('click',mensaje2)

let tecla = document.getElementById('main-body')

function keyevent(e){
    var tipo = e.type
    var key =e.key
    console.log("telca:" + key + ", tipo: " + tipo)
    
}

tecla.addEventListener('keydown',keyevent)

let dato = document.getElementById('campo-texto')

function validar(e){

    var tecla = e.key

    console.log(tecla)
    if(tecla >= 0 && tecla <= 9){
        e.preventDefault()
        alert("Por favor usa sólo letras")
    }

}


dato.addEventListener('keydown',validar)

