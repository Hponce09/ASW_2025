class paises{
    constructor(nombre,poblacion,area,ciudades){
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.area = area;
        this.ciudades = ciudades;

    }

    incrementarPoblacion(cantidad){
        this.poblacion+=cantidad;
        return this.poblacion; 
    }

    densidad(){
        let densidadCalculada=this.poblacion;
        return densidadCalculada/=this.area;
    }

    compararArea(otroPais) {
        (this.area>otroPais.area) ? console.log(this.nombre + " es mas grande que " + otroPais.nombre) : console.log(otroPais.nombre + " es mas grande que " + this.nombre);
    }

    mostrarCiudades(){

        this.ciudades.forEach(element => 
            console.log(element)
        )

        /*for(let ciiudad of this.ciudades){
            console.log(ciiudad)
        }*/
    }

    mostrarCiudadesPorLetra(){
        this.ciudades.forEach((element) => {
            let letter=element.trim().split("")
                console.log()
            letter.forEach(caracter =>{
                console.log(caracter)
            })
            
            /*[...element].forEach(caracter =>{
                console.log(caracter)
            })*/
        });
    }

}

let pais1=new paises("argentina",24,50.456,['buenos aires', 'cordoba']);
let otroPais=new paises('brasil', 49, 78.765,['rio','sau pablo','brasilia'])


console.log(pais1.incrementarPoblacion(2));
console.log(otroPais.incrementarPoblacion(10))

console.log("densidad " + pais1.densidad())
console.log("densidad " + otroPais.densidad())

console.log(pais1.compararArea(otroPais));
console.log(otroPais.compararArea(pais1));

console.log(pais1.mostrarCiudades())
console.log(otroPais.mostrarCiudades())

console.log(pais1.mostrarCiudadesPorLetra());
console.log(otroPais.mostrarCiudadesPorLetra());