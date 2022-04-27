//* Un bucle es una estructura repetitiva, es decir hacer algo muchas veces

//* los bucles son usados para usar arrays, por que un bucel me va a permitir
//* leer cada elemento independientemente.

//TODO: for, en español es para y es el bucle mas antiguo y conocido
//? ejem:

for (let i = 0; i < 10; i++) {
    console.log("Iterador", i);
}

//? let i=0; inicia la variable para el for.
//? i<10; el número de veces que se va a repetir la acción que esta dentro de for, en este caso es 10 veces.
//? i++; el contador que dice que avance de 1 en 1.

for (let i = 5; i < 20; i++) {
    console.log("Iterador", i);
}

const alumnos = ["Pepe", "Juana", "Stephanie", "Carlos", "Luis"];

for (i = 0; i < alumnos.length; i++) {
    console.log(alumnos[1]);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < numeros.length; j++) {
    //si solo se quiere imprimir los numero pares:
    if (numeros[j] % 2 === 0) {
        console.log(numeros[j]);
    }
}

const macbooks = [
    {
        img: "https://static.bhphoto.com/images/multiple_images/images500x500/1634584429_IMG_1625012.jpg",
        modelo: "Apple 16.2 MacBook Pro with M1 Pro Chip",
        ram: "16GB",
        ssd: "512GB",
        pantalla: "16.2",
    }
]

for (o = 0; o < macbooks.length; o++) {
    console.log(macbooks[o].marca)
}

//array de objetos de alumonos

const alumnos1 = [
    {
        nombre: "Pepe",
        edad: 21,
    },
    {
        nombre: "Juan",
        edad: 30,
    },
    {
        nombre: "Lucho",
        edad: 22,
    }
];

//* .lenght devuelve el numero de elementos de un array
//! recuerden que el indice de un array inicial en 0

// variable inicial - condicion de limite - de cuanto en cuanto se ahce la accion
for (let obj = 0; obj < alumnos1.lenght; obj++) {
    //obj es el numero que se incrementa de 1 en 1
    console.log("obj", obj);
    //console.log(alumnos[obj]);
    console.log(alumnos1[obj]);
    //como accedo a la propiedad de un objeto?
    console.log(alumnos1[obj].nombre);
    console.log("-----------------");
    console.log("Imprimir solo si la edad del alumno es menor a 30");

    if (alumnos1[obj].edad < 30) {
        console.log(alumnos1[obj]);
    }
}


//Escribe un programa  que pida una frase y escriba cuantas veces aparecen cada una de las vocales

const contarVocales = (frase) => {
    //saber cuando mide la frase
    const fraseMayuscula = frase.toUpperCase();

    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        const letra = fraseMayuscula[i];

        if (letra === "A" ||
            letra === "E" ||
            letra === "I" ||
            letra === "O" ||
            letra === "U") {
            contador = contador + 1;
            //contador ++ (es similar)
        }
    }

    console.log(`La frase tiene ${contador} vocales`);
}
    ;

contarVocales("Hola me llamo Juan");

// Escribir programa que escriba en Pantalla los divisores comunes de dos numeros dados

//Paso 1 hallar los numeros divisibles de 10
// que son: 1, 2, 5, 10
//para poder hallar los divisores de ese numero, se necesita un for


//supongamos que numero1 es 10
const hallarDivisoresComunes = (numero1, numero2) => {
    //Como puedo hallar los divisores de un numero
    //Para saber si un numero es divvidisble por otro el residuo debe ser 0
    //si quiero imprimir a los divisores, debo imprimir a i por que en cada vuelta el valor de i cambia.
    for (let i = 1; i < numero1; i++) {
        if (numero1 % i === 0) {
            console.log(i);
        }
    }
    for (let j = 1; j <= numero2; j++) {
        if (numero2 % j === 0) {
            console.log(j);
        }
    }
};

//Para que funcion sea operativa debe retomar un arreglo con los numeros que son divisores

const hallarDivisores = (numero) => {
    let divisores = [];

    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0){
            //Push sirve para agregar un elemento en la ultima posición a un array
            divisores.push(j);
        }
    }

    return divisores;
}

hallarDivisoresComunes(12, 18);