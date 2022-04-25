//? Un objeto es una entidad independiente ahora, este tiene propiedades y atributos

//* Atributos de un carro
//! numero de puertas
//! color
//! placa
//! motor
//! cilindro
//! HP

//? Un objeto esta compuesto por un key (llave) y un value (valor)

//? creemos el objeto carro
const carro = {
    color: "azul",
    motor: 1.2,
    modelo: "GTR",
    marca: "Nissan",
    nuevo: true,
  };

  //? Objeto persona
const persona = {
    edad: 30,
    nombre: "Juanito",
    sexo: "Masculino",
    talla: 1.75,
    estadoCivil: "soltero",
    mayorDeEdad: true,
    dontateDeOrganos: true,
    dni: "722222",
    tatuajes: true,
    nacionalidad: "Peruano",
  };

//? como se puede acceder al atributo nombre
console.log("nombre", persona.nombre);
console.log("DNI", persona.dni);

//? asi se agrega mas atributos
//? una forma de agregar elementos a un objeto
persona.celular = "9999999"

console.log("persona"); 

//! 2da forma de agregar un elemento
//? agregar el elemento profresion
persona["profesion"] = "Ingeniero"

console.log("PERSONA CON PROFESION", persona);

//? 3era forma forma de crear objeto(antigua)
//? instanciando a la clase object
//? la clase object en Js es una clase la cual permite decir que esta variable sera un objeto

const casa = new Object();
casa["color"] = "Rosada";
casa.pintura = "Negro"

console.log("Casa", casa);

//! 3era forma de crear objeto, sirve para definir los keys

const laptop = new Object();
modelo = "macbook pro"
peso= "2.5"
color= "negro"


laptop[color] = "gris",

console.log("laptop", laptop)

//objeto celular

const celular = {
model: "iphone 11",
flexible: "false",
tamaño: "6.1",
gama: "alta",
precio: "120",
memoria: "8gb",
camaras: 2
};

//? asi se cambia el valor de un atributo
celular.camaras = 4;
celular.memoria = "128gb"

console.log("CELULAR", celular)

// funcion que retorne el nombre, la memoria y el precio del celular
//celular es un object
const mostrarDetalleCelular = (celularObjeto) => {
  return `El modelo es ${celularObjeto.model} y tiene ${celularObjeto.memoria} de espacio tan solo ${celularObjeto.precio}`;
};


console.log("objeto celular", mostrarDetalleCelular(celular));


//? destructuracion de objetos
const mostrarDetalleCelular2 = (celularObjeto) => {
  const {model, memoria, precio} = celularObjeto;
  return `El modelo es ${model} y tiene ${memoria} de espacio tan solo ${precio}`
}

console.log("objeto celular2", mostrarDetalleCelular2(celular));

//objeto usuario

const usuario = {
  nickName: "loquitoProgramador01",
  email: "loquito@gmail.com",
  password: "*******",
  carnetVacunacion: true,
  location: "Peru",
  level: "Pro",
  edad: 18
}

const validarUsuario = (validUsuario) => {
  const {location, nickName, level} = validUsuario;
  return location === "Peru"
  ?`Hola ${nickName}, si eres de ${location} eres un ${level}` : `oye ${nickName}, no eres peruano ctm`;
}

console.log("validando usuario", validarUsuario(usuario))