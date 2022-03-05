alert("Hola mundo")

const numero1 = 10
const numero2 = 20;

// el ; no importa si esta puesto

let resultado = 0;

resultado = numero1 + numero2;

//  alert: es una alerta en el navegador
// console.log: escribe un mensaje en al consola del navegador
// el + tiene dos propositos: sumar si son numbers y si son strings
// concatenarlos, osea unirlos.

console.log("resultado: " + numero1 + "+" + numero2 + "=" + resultado);
console.log("Sumatoria: ", resultado)

// existe el console.error y el console.warn
// error: para errores 
// warn:  para advertencias

console.error("suma error", resultado)
console.warn("division", resultado)

resultado = numero1 - numero2
console.warn("resultado ", resultado);

// calculadora con js
// restricciones: debemos validr la division por 0
// prompt:  es una ventana emergente que nos pide un valor
// y ese valor se guarda en una variable

const valor1 = prompt("ingrese un valor1");
const valor2 = prompt("ingrese un valor2");

//ingrese el tipo de operacion
//que puede ser suma , divison etc

const operacion = prompt("ingrese la operacion puede ser + - / *");
let resultadoCalculadora = 0

// parte inicial de la calculadora

if (operacion === "+") {
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado: ", resultadoCalculadora)
}

else if (operacion === "-") {
    resultadoCalculadora = +valor1 - +valor2;
    console.log("resultado: ", resultadoCalculadora)
}

else if (operacion === "*") {
    resultadoCalculadora = +valor1 * +valor2;
    console.log("resultado: ", resultadoCalculadora)
}

//el paso extra para la division

else if (operacion === "/") {
    if (+valor2 !== 0) {
        resultadoCalculadora = +valor1 / +valor2;
        console.log("Resultado: ", resultadoCalculadora)}
    else {console.warn("el divisor debe ser distinto a 0");}
    }

    //algoritmo para poder detectar si un numero es impar o par
//la forma en que se puede saber si un numero es par o impar
// es usando el %   por que es una operacion que brinda el residuo

const numeroMultiplo = 10;
if (numeroMultiplo % 2 === 0) {
    console.log("Numero par: ", numeroMultiplo)
}
 if (numeroMultiplo % 3 === 0) {
     console.log("Numero multiplo de 3", numeroMultiplo)
 }


// 2 numeros usando prompt y se imprime el numero mayor

const numeroOne = prompt("ingrese numero 1")
const numeroTwo = prompt("ingrese numero 2")

let mensajeRes = "Numero 2 es mayor"
 if (numeroOne > numeroTwo) {
     mensajeRes  = "numero 1 es mayor"
 }
 console.log(mensajeRes);
 