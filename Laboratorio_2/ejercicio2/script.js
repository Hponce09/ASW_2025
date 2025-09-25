
var aleatorio= Math.floor(Math.random() * 100) + 1;

console.log(aleatorio);

var intentos=0;

var numero=0;

for(var i = 0 ; i <= 6 ; i++ ){

    intentos++;
    numero= parseInt (prompt("ingresa el numero"));

    if(numero === aleatorio){
        alert("Es correcto necesitaste " + intentos + " intentos");
        break;
    }else if(i==6){
        alert("Has perdido. El número era " + aleatorio);
    }else if (numero<aleatorio) {
        alert("El numero es mayor");
    }else {
        alert("El numero es menor");
    }

}


