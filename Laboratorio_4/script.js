console.log("Parte 1")
var datosUsuario=["hola",2,false];
console.log("Array 'datosUsuario': " + datosUsuario);
console.log("Segundo elemento del array: " + datosUsuario[1]);
console.log("Cantidad de elementos son: "+datosUsuario.length)

console.log("Parte 2")
console.log("Dos nuevos elementos añadidos al final: " + datosUsuario.push(3.4,"solicitar"))
console.log("Ultimo elemento añadido es: " + datosUsuario.pop())
console.log(datosUsuario.length)
console.log("Elemento añadido al Principio por unshift(): " + datosUsuario.unshift(9))
console.log("Comprabacion de elementos desplazados: " + datosUsuario);
console.log("Obtener y eliminar del principio por shift(): " + datosUsuario.shift(0))
console.log("Comprabacion de la cantidad de elementos son: " + datosUsuario.length)

console.log("Parte 3")
var arrayExtra=[21,"Nike",true]
var arrayTotal=[datosUsuario,arrayExtra]
console.log("Concatenación de arrays")
console.log(arrayTotal.concat(datosUsuario,arrayExtra))

var listaNumeros=[39,46,11,32,1,23,54]
listaNumeros.sort();
console.log("Ordenación Simple: " + listaNumeros)

console.log("Ordenación Personalizada: ")
console.log("Ascendente: " + listaNumeros.sort(function(a,b){return a-b}));
console.log("Decendente: " + listaNumeros.sort(function(a,b){return b-a}));

console.log("Modificación de Contenido: ")
listaNumeros.splice(1,2)
console.log("splice delete: " + listaNumeros)

listaNumeros.splice(3,0,133,135);
console.log("splice add : " + listaNumeros)


console.log("Parte 4 Funciones Predefinidas de validación y conversión")
var cadena="variable que almacene una caden"

console.log("No es un numero: " + isNaN(cadena))
console.log("parseInt: " + parseInt("2"))
console.log("parseFloat: " + parseFloat("3.5"))
console.log("String(): " + String(12))

console.log('---------------')
const temperatureFahrenheit=[32,68,95,104,212];
console.log(temperatureFahrenheit);
const temperatureCelsius= temperatureFahrenheit.map(temperature => (temperature-32)*(5/9));

console.log(temperatureCelsius);
let suma=0;

temperatureCelsius.forEach(temperature=>suma+=temperature);
console.log(suma);

const animales=['elephant','ant', 'bison','dog','camel'];
console.log(animales);
console.log(animales.slice(2));
console.log("inicio y fin: " + animales.slice(2,-1));


