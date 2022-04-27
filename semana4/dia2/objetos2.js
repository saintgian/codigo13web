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
    mostrarDetalleCompleto: function () { console.log("Detalle", `Color: ${this.color} Marca: ${this.marca} es nuevo? ${this.nuevo ? "si" : "no"}`) }
}

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

//* En una web siempre estan presentes los array de objetos

const laptops = [
    {
        marca: "Lenovo",
        nombre: "Ide Centre AIO 13",
        vendedor: "Falabella",
        precioOferta: 1599,
        precioNormal: 3599,
        calaficaciones: 2,
        caracteristicas: {
            procesador: "i3",
            tarjetaDeVideo: "integrada",
            discoDuro: "1TB",
            discoDuroSolido: "no apica"
        }
    },
    {
        marca: "Acer",
        nombre: "AN515 15.6",
        vendedor: "Falabella",
        precioOferta: 3599,
        precioNormal: 4999,
        calaficaciones: 5,
        caracteristicas: {
            procesador: "i5",
            tarjetaDeVideo: "gtx 1650",
            discoDuro: "No tiene",
            discoDuroSolido: "256",
        }
    }
]

console.log(laptops);

//? los keys pueden llegar a ser numeros ¿?
const listaDeUtiles = {
    1: "Hojas Bond",
    2: "Plumones",
    3: "Lapiceros",
};

console.log(listaDeUtiles["1"]);
console.log(listaDeUtiles["2"]);


//? Objetos dentro de objetos

const components = {
    nombre: "Lenovo Ipad",
    caracteristicas: {
        ram: 16,
        tarjeta: "3090 super",
        memoria: 512,
        extra: {
            pantalla: "4k",
        },
        1: {
            teclado: "español",
        }
    }
};

console.log("Tarjeta", components.caracteristicas.tarjeta);
console.log("Pantalla", components.caracteristicas.extra.pantalla);

//imprimir el valor de teclado
console.log("Teclado", components.caracteristicas["1"].teclado);

//* Array de objetos de la pagina https://www.bhphotovideo.com/

const macbooks = [
    {
        img: "https://static.bhphoto.com/images/multiple_images/images500x500/1634584429_IMG_1625012.jpg",
        modelo: "Apple 16.2 MacBook Pro with M1 Pro Chip",
        ram: "16GB",
        ssd: "512GB",
        pantalla: "16.2",
    }
]


console.log(macbooks);