class Vehiculo{
    constructor (marca,modelo,velocidadMax){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidadMax=velocidadMax
    }

    getmarca(){
        return this.marca; 
    }

    getmodelo(){
        return this.modelo;
    }

    getvelocidadMax(){
        return this.velocidadMax;
    }


    acelerar(){

    }

    detener(){
        console.log ("El " + this.modelo + " se ha detenido.");
    }

}

class Auto extends Vehiculo{
    constructor(puertas) {
        this.puertas=puertas;
    }

    getpuertas(){
        return this.puertas;
    }

    

    
    }