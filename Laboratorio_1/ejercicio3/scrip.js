
     var edad=prompt("cual es tu edad?");

       if(edad>=18){
            alert("es mayor de edad");
       }else{
            alert("es menor de edad");
       }

       for(var i=1;i<=10;i++){
            console.log(i);
       }

       var password=parseInt(prompt("ingresa contraseña"));
       
       while(password!==1234){
            password=parseInt(prompt("ingresa contraseña nuevamente"));
       }

       alert("correcto");