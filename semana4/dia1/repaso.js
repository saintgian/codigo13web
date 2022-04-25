//* tipos de datos
//*string
//*number
//*boolean
//*undefined: sin valor agregado


//? ejemplo de string
const mensaje = "Hola";
var pepito = "Saludando";
let nombre = "Dario";

//?ejemplos de number
const nombreNumber = +"nombre"
console.log("tipos de variable", typeof nombreNumber);
//! typeof solo sirve para decirme que tipo de dato es una variable
//! Js sabe que tipo es en base al valor de la variable

const edadMayor = 21;
let edad = 10;
const numero = 45;

//?ejemplos de booleanos(solo es verdadero o falso)
let estado = true;
let sexo = true;
let rpta = true
let aprobado = false

//?cuando una variable no tiene un valor asignado, js interpreta
//?que es un undefined
let componentes;
console.log("por siacaso :v", typeof componentes)
let apellido;
let nota;
let nombr;


//?toString(): esta funcion se va a encargar la variable de transformar una variable a tipo string
let dineroEnElBanco = 10;
//como transformar ese number a string
dineroEnElBanco.toString
console.log("por sicaso2", typeof dineroEnElBanco.toString())

//?ejemplo
//?cuando hacemos una peticion y queremos enviarle datos al servidor nos dice
//?que tipo de datos requiere
//?quiero crear un usuario
//?nomre, apellido, edad, celular
//?string, string, number, number
//* edad.toString()
//* celular.toString()

//? Arreglo de alumnos
//? Arreglo de notas
//? array de  juegos

let alumnos = ["Luis", "karen", "Pedro", "Raul"];
let notas = [20, 16, 18, 15];
let juegos = ["domino", "sapito", "cuerda", "starcraft"];

//?como imprimir el siguiente mensaje
//Luis tiene 20 años y juega domino:
console.log(`${alumnos[0]} tienes ${notas[0]} en programacion y juega ${juegos[0]}`);

//Karen tiene 18 en programacin y juega sapito
console.log(`${alumnos[1]} tiene ${notas[2]} en programación y juega ${juegos[1]}`);

//?funciones
//!arrow function que reciba 2 parametros y me rote el cuadrado de ambos numeros
//* cuadrado de 2 = 2*2
//* cuadrado de 3 = 3*3

//?math, es una libreria de de Js la cual nos permite hacer operaciones matematicas
//?math.pow se usa para poder elevar un numero a la potencia, recibe 2 parametros
//?parametro1 = numero parametro2 = potencia
//math.pow(numero,2)

//! Tip: se debe usar funcion de una linea cuando la solucion sea corta si es algo extenso preferible
//! usar las lineas que haga falta

/* const calcularCuadrados = (num1, num2) => {
return `El cuadrado del primer numero es: ${Math.pow(num1, 3)}
\nEl cuadrado del segundo numero es: ${num2 ** 2}`;
}; */

//! Crear una funcion la cual pida el nombre, apellido y edad y retorne un mensaje de saludo
// const saludar = (nombre, apellido, edad) => {
//   return `Hola ${nombre} ${apellido} de ${edad} años.`;
// };

//! Crear un arrow funcion el cual retorne el area de un rectangulo
// const calcularAreaRectangulo = (base, altura) => {
//   return +base * +altura;
// };

//* Una funcion siempre debe retornar algo y para eso usamos return, hay casos especiales en lo que no
//* hace falta

//* El console.log se usa para probar nada mas, ademas son temporales solo se usan para probar y
//* luego deberian borrarse

//? Del operador ternario

//* Creemos una funcion que reciba la edad y retorne si es mayor
const esMayor = (edad) => {
    if (edad >= 18) {
      return `es mayor de edad ${edad}`;
    } else {
      return "es menor de edad";
    }
  };

  const esMayor2 = (edad) => {
    return edad >= 18 ? "es mayor de edad" : "es menor de edad";
  };

//! Crear una funcion que reciba un array y si el length de array es mayor a 5 entonces retorna
//! "arreglo grander" si no retorna "arreglo peque"
//? usando el operador ternario

const medirArray = (array) =>
  array.lenght > 5 ? "Arreglo grande" : "Arreglo pequeño";

const definirSiArrayEsGrandeOPeque = (arreglo) => {
  return arreglo.length > 5 ? "Es grande" : "es pequeño";
};

//? Arrow funcion inline
//? solo funciona cuando voy a ejecutar una sola linea de codigo

// const saludar = (nombre) => `Hola ${nombre}`;

// const saludar = (nombre) => {
//   const nombre = nombre + " pepe";
//   return `Hola ${nombre}`;
// };