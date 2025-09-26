
const dateOut =prompt("Fecha de nacimiento DD/MM/YYYY"); 

const [day,month,year]= dateOut.split('/');

const date = new Date(year,month-1,day);
//const opciones= { year: "numeric", month: "long", day: "numeric"};

console.log(date.toLocaleDateString("es-ES"));

var actualdate=new Date();
console.log(actualdate.toLocaleDateString("es-ES"));

var edad= actualdate-date;

var days = edad / 86400000 ;
var años = days / 365 ;

var edadActual= Math.floor(años); 


console.log(edadActual);

alert("Naciste: " + date.toLocaleDateString("es-ES") + ", tienes " + edadActual + " años.");