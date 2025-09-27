console.log("el alto de la pagina es de : " +window.innerHeight); 
console.log("el ancho de la pagina es de : " +window.innerWidth); 

window.alert("Bienvenido");

var referenciaVentana ;

function newWindow(){
    referenciaVentana= window.open(
        "http://www.youtube.com/",
        "Pagina_YOUTUBE"
    );
}

var nombre = prompt("Ingresa tu nombre: ");
var contenido= document.getElementById("name").innerHTML=nombre;

var resp;

function consulta(){
    resp = window.confirm("quieres cerrar la ventana");

    if(resp==true){
        window.close();
    }
}
