// un dato contiene una variable a la vez
// ** un arreglo es un conjunto de datos
// ** la fomra en que declaramos un arreglo
// es parecida a la forma de una variable
// ** sin embargo, debemos colocar los []
// despues del igual

// !! esto es un arreglo vacio, para poder llenarlo debemos colocar los datos separados por comas
// Ojo: siempre contar los indices desde 0
const alumnos = ["Erick", "Karina", "Patricia", "Kjaris", "Bruno"]
console.log("alumnos", alumnos);

const productos = ["Tablet", "laptops", "Smartphone", "Tv", "Radio"]

//** como acceder a un dato en especifico */
console.log(alumnos[2]);
console.log(alumnos[3]);

//**Para alterar los datos de un array o agregar */
 alumnos[0] = "Pepe"
 console.log("alumno reasignado", alumnos)

 alumnos[5] = "Juan"
 console.log("alumno reasignado", alumnos)

//**asi como se puede reasignar un dato en especifico, tambien podemos crear datos */ 

alumnos[5] = "Erick"
console.log("Creando un nuevo elemento", alumnos);
 //** Como saber cuantos elementos contiene un array */

 //** Los array tienen una funcion llamada length, la cual nos permite saber cuantos elementos tiene un array */
console.log("Cantidad de elementos", alumnos.length);

//** para agregar un elemento en la ultima posicion del array */
alumnos[alumnos.length] = "Juan";
console.log("Creando un nuevo elemento", alumnos);

//** Ysi quiero obtener el ultimo elemento de mi array? */
//** el .lenght retorna un number, se puede sumar o restar */
console.log("ultimo elemento", alumnos[alumnos.length -1]);

