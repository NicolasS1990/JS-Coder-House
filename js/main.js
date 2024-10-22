/*console.log("hola")
const nombre = prompt("ingrese un nombre");
console.log(nombre)

alert("Bienvenido "  + nombre)*/

// Ejemplo con decimales 


/*const precio1 = parseFloat (prompt(" Ingrese precio 1 del supermercado"));
const precio2 = parseFloat (prompt("Ingrese precio 2 del supermercado"));

console.log();
console.log(precio2);

const suma = precio1 + precio2;

console.log("La suma es: " + suma);*/  

/* IF */

/*const nombre = prompt("Ingrese un nombre");

if (nombre == "Pepe"){
    console.log("Hola pepe");
}else {
    console.log("Hola persona que no es Pepe");
}*/

/*if....else if*/

/*const precio = parseInt(prompt ("Ingrese un precio"))

if (precio == 100){
    alert ("valor correcto")
}else if ( precio < 100){
    alert ("el precio tiene que ser mayor")
}else{
    alert ("Precio mayor a 100")
    console.log(precio);
}
*/
/*
const nombre = "Pepe";
const edad = 25;

if ((nombre == "Pepe")&&(edad == 20)) {
    console.log("El nombre es Pepe y su edad es 20");
 
}else{
    console.log("El nombre no es Pepe o no tiene 20");
}*/


const nombre = prompt ("Ingrese un nombre"); // Pedro o Juan
const edad = parseInt (prompt("Ingrese la edad")); // >=18

if ((nombre == "Juan" || nombre == "Pedro") && (edad >= 18)){
    console.log("Hola " +nombre );
}else {
    console.log("Acceso denegado");
}

/*const numero = 10; 
const noEsNumero10 = !numero;*/