// un arreglo de 10 personas

const personas1 = [
    "jose", "maria", "Juan", "Luis", "Pedro", "Julia", "Erick", "Julian", "Rosa", "Mario"
];

let personas2 = [
    "Juan", "Maria", "Pedro", "Luis", "alberto", "Juana", "mario", "Pedrito", "Luisa", "alberta"
];

//comprobando cuantos elementos tiene un arreglo 

console.log("Personas1", personas1.length);
console.log("Personas2", personas2.length)

// modificar de personas1 el indice 6 y llamarlo juanito
personas1[6] = "Juanito";

/* let valores = [10, 10.5, true, "Hola, 0.5"] */
const valores2 = [true, "hola", 100, 3.69, "false"]
const valores = [1]

//funcion que retorne el 5to valor de un array
function obtenerSegundoValor(valores) {
/* if(valores[1] === undefined) {
    return "Error: posicion no encontrada"
}
return valores[1]
//falta validar si la posicion existe
//una forma seria ver si valores[1] === undefined entonces retorna error */
return valores[1] === undefined
? "Error: Posicion no encotrada"
: valores[1]

}

console.log(obtenerSegundoValor(valores))

//? UNDEFINED: hace referencia a una variable vacia
//* cuando declaramos una variable y no la asignamos, esta por default es undefined
//? esta variable al no tener un valor js no puede saber que tipo es, como no sabe
//? que tipo, le dice que es undefined

let nombre;
console.log("nombre", nombre);

//new array
// los array vacios son variables las cuales empiezan vacias y en base a algo se pueden

// Esto es la declaracion de un array vacion
/* let carros = new Array(); */

//la nueva forma es la siguiente
let carrosNuevos = []

//llenar un array desde una funcion
//vamos a crear una funcion la cual se encargue de llenar el array carrosNuevos

const llenarCarrosNuevos = (nuevoValor) => {
//hya una funcion de js llamada push(parametro) la cual recibe un valor y la coloca al final del arreglo
//* esto le añade el nuevoValor a array carrosNuevos

//! El push solo funciona si el array es un arreglo
carrosNuevos.push(nuevoValor);
}

llenarCarrosNuevos("Mercedes GLA");
llenarCarrosNuevos("BMW M4")
llenarCarrosNuevos("Tesla")
llenarCarrosNuevos("Ford")
//este array seria un elemento de carros nuevos, por ende es una array dentro de una array
llenarCarrosNuevos("Tiko")

console.log(carrosNuevos)

//! funcion que diga si un numero es impar o par to
