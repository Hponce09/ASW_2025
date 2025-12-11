
class Vehiculo{
    #velocidad;
    #estadoMotor;
    constructor(velocidad,estadoMotor,marca,modelo){
        this.#velocidad = 12;
        this.#estadoMotor = 'apagado';
        this.modelo = modelo;
        this.marca = marca;
    }

    encenderMotor(estadoMotor){
        if (estadoMotor == "apagado"){
            this.#estadoMotor = "encendido";
            console.log("el estado anterior era " + estadoMotor + ", el nuevo estado es " + this.#estadoMotor )
        }
    }

    acelerar(incremento){
        let vehiculoactual = this.#velocidad;
        this.#velocidad += incremento ;
        console.log("La velocidad anterior era: " + vehiculoactual + ", la nueva velocidad es " + this.#velocidad)
        
    }
}

class coche extends Vehiculo{
    constructor(numeroPuertas, marca, modelo){
        super(12, 'apagado',marca,modelo);
        this.numeroPuertas = numeroPuertas;
    }

    acelerar(incremento){
        super.acelerar(incremento)
        console.log("el motor es muy bueno")
    }

    mostrarInformacion(){
        console.log(`[marca]: ${this.marca}, [numero de puertas]:${this.numeroPuertas}, [modelo]:${this.modelo}`);
    }

}

class bicicleta extends Vehiculo{
    constructor(marca,modelo){
        super(12, 'apagado',marca,modelo)
    }

    encenderMotor(){
        console.log("esta bicicleta no tiene motor")
    }

    acelerar(incremento){
        super.acelerar(incremento)
        console.log('las calorias quemadas son 120')
    }

    mostrarInformacion(){
        
        console.log(`[marca]: ${this.marca}, [modelo]: ${this.modelo}`)
    }

}

class moto{
    constructor(numeroRuedas,asientos){
        this.numeroRuedas = numeroRuedas;
        this.asientos = asientos;
    }

    mostrarInformacion(){
        console.log(`[ruedas]: ${this.numeroRuedas}, [modelo]: ${this.asientos}`)
    }
}

function inspeccionarVehiculo(vehiculo){
    vehiculo.mostrarInformacion()
}

let vehiculo1 = new Vehiculo(12,'apagado','ford',1998)
let bicicleta1 = new bicicleta('look',2009)
const carro1 = new coche(3,'bmw',1994)
let miMoto = new moto(3,1)

console.log("Ejercicio 1: Abstracción y Encapsulamiento")
vehiculo1.encenderMotor('apagado')
vehiculo1.acelerar(34)

console.log("Ejercicio 2: Herencia")
bicicleta1.encenderMotor()

console.log("Ejercicio 3: Polimorfismo (2,5 puntos)")
carro1.acelerar(21)
bicicleta1.acelerar(4)
bicicleta1.mostrarInformacion()
carro1.mostrarInformacion()

console.log("Ejercicio 4: Integración y Función Polimórfica")
//inspeccionarVehiculo(vehiculo1)
inspeccionarVehiculo(bicicleta1)
inspeccionarVehiculo(carro1)
inspeccionarVehiculo(miMoto)