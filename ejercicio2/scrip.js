   var nombre="andres";
            var x=3;
            var y=4;
            var z=false;

            var texto="la variable x es: "+x;
            var texto2="la variable y es: "+y;

           document.getElementById("numero x").innerText = texto;
           document.getElementById("numero y").innerText =  texto2;

            function suma(){
                console.log(x+y);
            }

            function resta(){
                console.log(y-x);
            }

            function multiplicacion(){
                console.log(x*y);
            }

            function division(){
                console.log(y/x);
            }

            function porcentaje(){
                console.log(y/100*x);
            }