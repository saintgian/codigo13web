//? creen que un objeto puede contener una function?
const persona = {
    nombre: "Juanito",
    edad: 30,
    talla: 1.5,
    estadoCivil: "casada",
    calcularEdad: function () {
        console.log("calculando la edad");
    },
};

//* Primera forma de llamar a una funcion que esta dentro de un objeto
console.log("1era forma")
persona.calcularEdad();

//* Segunda forma
console.log("2da forma")
persona.calcularEdad;
//*Esta solo funciona si la funcion tiene un return

//TODO: 2do ejemplo:

const computadora = {
    color: "azul",
    marca: "HP",
    nuevo: true,
    mostrarDetalle: function () {
        console.log("color", this.color)
    },

    //! En los arrow function, this nos existe
mostrarDetalleCompleto: function () {console.log("Detalle", `Color: ${this.color} Marca: ${this.marca} es nuevo? ${this.nuevo ? "si" : "no"}`)}}

const computadora2 = {
    color: "amarillo",
    marca: "lenovo",
    nuevo: false,
    imprimirDetalle: function () {
        console.log(this.color)
    },
};

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();
computadora2.imprimirDetalle();


//? Objetos con array
const alumno = {
    nombre: "Juanito",
    notas: [10, 5, 8, 9],
    cursos: ["HTML", "CSS", "JS", "React"],
}
console.log("Notas", alumno.notas)

//? Creando un array cpon objetos
const alumnos = [
    {
        nombre: "Luciano",
        edad: 18,
        promedio: 15,
    },
    {
        nombre: "El pepe",
        edad: 21,
        promedio: 14,
        direccion: "Av siempre 123"
    }
];

//asi se imprime la nota de luciano
console.log(`Nota de ${alumnos[0].nombre}`, alumnos[0].promedio);

