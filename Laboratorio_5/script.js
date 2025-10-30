console.log('1. Ejercicios con Matrices');
console.log('1.1. Creación de una Matriz');

const inventario=[
    ['peras',9,1.3],
    ['manzanas',18,1.9],
    ['durasnos',20,2]
];

console.log(inventario);

console.log('1.2. Acceso y Modificación Matricial ');

console.log("producto: " + inventario[1][0]);
console.log("precio: " + inventario[1][2]);

console.log("numero de elementos en la matriz " + inventario.length);
console.log("numero de elementos en la fila " + inventario[1].length);

for(var i = 0 ; i <= inventario.length-1 ; i++ ){
    
    console.log("elemento de la lista: "+ (i+1) +" nombre del producto: "+inventario[i][0]);
};

console.log('2. Ejercicios con Funciones');
console.log('2.1. Función para Cálculo de Inventario');

var total1=inventario [0][1]* inventario[0][2];
console.log(total1);

function calcularValorTotal(matriz){
 var total=0;

    for (var i = 0 ; i <= matriz.length-1 ; i++) {
        //console.log("Estoy accediendo a la lista num" + i + ":");
        //console.log(matriz[i]) ;
        total+= matriz[i][1]*matriz[i][2];
    }
    return "este es el total: "+total;
}


console.log (calcularValorTotal(inventario));

console.log('2.2. Ejercicios con Funciones anonimas');

var ordenarPorPrecio=function(a,b){return b[2]-a[2]};

console.log(inventario);
console.log(inventario.sort(ordenarPorPrecio));

console.log("3. Prototype");
console.log("3.1. Adición de un Método al Prototype");

Array.prototype.obtenerUltimoElemento = function() {
    if(this.length<1){
        return -1; 
    }
        return this[this.length-1]
}
console.log("en el caso del 'this' que representa el array debemos ponerlo en el return con la funcion length-1 para que apunte al ultimo elemento del array");
const myArray=[12,1,'2',3,4,'juan'];
console.log("Tamaño del array: " + myArray.length);
console.log(myArray);
console.log(myArray.obtenerUltimoElemento());
console.log("Tamaño del array: " + myArray.length);
