console.log("Parte 1")
var datosUsuario=["hola",2,false];
console.log(datosUsuario);
console.log(datosUsuario[1]);
console.log("la cantidad de elentos son: "+datosUsuario.length)

console.log("Parte 2")
console.log("nuevos elementos al final: " + datosUsuario.push(3.4,"solicitar"))
console.log("ultimo elemento añadido: " + datosUsuario.pop())
console.log(datosUsuario.length)
console.log("Añadid al Principio: " + datosUsuario.unshift(9))
console.log("elementos desplazados: " + datosUsuario);
console.log("Eliminar del Principio: " + datosUsuario.shift(0))
console.log("nueva cantidad de elentos son: " + datosUsuario.length)

console.log("Parte 3")
var arrayExtra=[21,"Nike",true]
var arrayTotal=[datosUsuario,arrayExtra]
console.log(arrayTotal.concat(datosUsuario,arrayExtra))

var listaNumeros=[39,46,11,32,1,23,54]
listaNumeros.sort();
console.log(listaNumeros)

console.log(listaNumeros.sort(function(a,b){return a-b}));
console.log(listaNumeros.sort(function(a,b){return b-a}));


listaNumeros.splice(2,3)
console.log("splice delete: " + listaNumeros)

listaNumeros.splice(2,0,133,135);
console.log("splice add : " + listaNumeros)


console.log("Parte 4")
var cadena="variable que almacene una caden"

console.log(isNaN(cadena))
console.log(parseInt("2"))
console.log(parseFloat("3.5"))
console.log(String(12))

