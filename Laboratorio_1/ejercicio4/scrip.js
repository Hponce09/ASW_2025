
        var nombre=prompt("ingresar nombre");
        var edad =prompt("ingresar edad");

       

       // var texto= "Hola "+nombre+", tienes "+edad+" años.";
        document.getElementById("saludo").innerText="Hola " + nombre + ", tienes " + edad + " años." ;

            if(edad>=18){
                alert("Puedes ingresar");
            }else{
                alert("Acceso denegado");
            }
