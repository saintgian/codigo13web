//** Una funcion es un conjuntos de soluciones para poder realizar tareas */

function nombredelafuncion() {
    // una vez declarada mi funcion, todo el codigo que haga
    // dentro de esta solo se va a ejecutar cuando llame a la funcion

    //esto no se va a ejecutar por que todo esta vacio
    console.log("Mi primera funcion")
}

//** para poder llamar a una funcion solo necesito escribir su nombre juntos a los parentesis */
// Una vez que llame a la funcion, esta va a ejecutar el codigo que tiene adentro
nombredelafuncion();

//? una funcion es creada para poder reutilizar codigo
//? una de las misiones de una funcion es hacer trabajo repetitivo
//? al estar este trabajo en una funcion solo necesito escribir el codigo una vez
//? y luego llamar a la funcion que necesite.

// TODO: Una funcion puede recibir parametros (son variables que se le pasan a la funcion) y
// TODO: estos parametros van dentro de los parentesis de la funcion

//function sumar(numero1, numero2) {
    //* numero1, numero2 son parametros de la funcion sumar
    //* con los parametros yo puedo hacer lo que quiera
    //const suma = +numero1 + +numero2;
    //console.log("La suma es:", suma);
//}

/* function sumar(numero1, numero2){
// primero se convierte los parametros a numeros
const convertNumero1 = +numero1;
const convertNumero2 = +numero2;
// typeof es una funcion de js la cual me permite saber el tipo de dato de una variable
//console.log(typeof convertNumero1);
//console.log(typeof convertNumero2);
//}

const suma = convertNumero1 + convertNumero2;

//si suma es nan (nan es undefined) debo imprimir un mensaje de error
//isNaN(parametro) me permite saber si un numero nan

if (isNaN(suma)) {
console.log("Error: No se puede sumar");
//* return: es una paralabra reservada que nos permite regresar un valor 
//* y ademas indica el final de una funcion
// si entra al if y ve el return la funcion termina aca, es decir no va a ejecutar mas codigo
return;
}
console.log("Suma", suma);
} */

//* Operador ternario, es una especie de if else que solo sirve cuando se necesita ejecutar una linear
//! La estructura de un operador ternario es la siguiente
// condicion ? true (si es true puede ejecutar una linea) : false (si es false puede ejecutar una linea)


function sumar(numero1, numero2) {
    const suma = +numero1 + +numero2;
    return isNaN(suma) ? "Error: no se puede sumar" : suma;
}

//! Cuando yo llame a sumar yo debo pasarle numero1 y numero2
//! el orden en que yo le paso los parametros, sera el orden en que los reciba
sumar(50,20);
sumar(70,20);
sumar(100,20);
sumar("Hola",20);
sumar(450,20);

//** ahora usando un prompt */

const num1 = +prompt("Ingrese el primer numero1");
const num2 = +prompt("Ingrese el primer numero2");
sumar(num1, num2);

//** asi se llama a una funcion dentro de otra */

// TODO: function de expresion
//! es tener una function detro de una variable
//! es conocida como function anonima
const resta = function (numero1, numero2) {
    const calcResta = +numero1 - +numero2;

    return isNaN(calcResta) ? "Error: no se puede restar" : calcResta;
}

// Ejemplo2

const multiplicacion = function (numero1, numero2) {
    const calcMultiplicacion = +numero1 - +numero2;
    return isNaN(calcMultiplicacion) ? "Error:no se puede multiplicar": calcMultiplicacion
}

//* Arrow function => funciones flecha
//* es una function parecida a la funcion anonima o de expresion, sin embargo no
//* hace falta una la palabra function para declarar esta.
//* Otro punto importante es que una funcion flecha no puede usar ´this´ 
//* Esto es la diferencia entre una funcion y un arrow function
//? asi se declara un arrow function 

const dvision = (numero1, numero2) => {
if(numero2===0){
    return "Error: no se puede dividir por 0"
}
const calcDivision = +numero1 / +numero2;
return isNaN(calcDivision) ? "Error: no se puede dividir" : calcDivision;
}
console.log(division(10,"0"));
console.log("Division: ", division(10,2));

//? cuando nuestro arrow function solo reciba un parametro
const saludar = (nombre, apellido) => {
    /* return "Hola mi nombre es" + nombre; */
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`
}

console.log(saludar("Juan", "Perez"));

//? cuando un arrow function no recibe parametros no hace falta poner parentesis

const functionSinParametros = () => {
    return "Hola mundo";

}

//? Arrow function inline
//? este tipo de funcion solo funciona cuando quiere ejecutar una linea de codigo
const hello = () => "Hola mundo inline"

//sabemos que cuando declaro una variable ese nombre ya no se puede usa
const calcularEsMayor = () => {
    const edad = 18;
    const nombre= "Pepe";
    console.log(edad);
}

const mostrarEdad = () => {
    const edad = 18;
   const nombre = "Juana"
    console.log(edad);
};

//? RECOMENDACIONES
//? los nombres de las funcionnes deben ser verbos, por que siempre realizan una accion

//? ejemplo 
function sumar (){}
function calcularResta() {}
function actualizarNombre () {}

//? no se pasa mas de 3 parametros 
//* LOs parametros de una funcion pueden ser de cualquier tipo
//* Se aceptan arrays

const alumnosTecsup = ["Juan","Pedro", "Maria", "Ana", "Juana"];
function listarAlumnos(alumnos) {
    console.log("Alumnos Tecsup", alumnos);
}
listarAlumnos(alumnosTecsup);

//? Recomendación: si se ve un codigo repetido, llevarlo a funcion

function validarSiEsNumero(numero) {
    return isNaN(numero) ? `Mensaje Error: no se puede ${tipo}` : numero;
}
