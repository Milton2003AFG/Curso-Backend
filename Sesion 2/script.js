//Ejercicio 1
class Bebe {
    constructor(nombre, meses) {
        this.nombre = nombre;
        this.meses = meses;
    }

    llorar() {
        console.log(`${this.nombre}, de ${this.meses} meses, está llorando.`);
    }

    dormir() {
        console.log(`${this.nombre}, de ${this.meses} meses, está durmiendo.`);
    }

    comer() {
        console.log(`${this.nombre}, de ${this.meses} meses, está comiendo.`);
    }
}

let antonio = new Bebe("Antonio", 3);
let sonia = new Bebe("Sonia", 5);
let javier = new Bebe("Javier", 8);

antonio.llorar();
sonia.dormir();
javier.comer();

//Ejercicio 2
let fechaActual = new Date();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`)

//Ejercicio 3
let Persona ={
    peso: 170,
    estatura: 1.75,

    imc (){
        return console.log(`El IMC de la persona es: ${this.peso/Math.pow(this.estatura,2)} lb/m^2`)
    }
}
Persona.imc();

//Ejercicio 1
function contarPalabras(array){
    let contadorPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if(contadorPalabras[palabra]){
                contadorPalabras[palabra]++;
            }else{
                contadorPalabras[palabra]=1;
            }
        })
    });
    return contadorPalabras;
}

let palabrasArray = ['Hola buenos dias', 'Hola buenas tardes', 'Hola buenas noches'];
let resultado = contarPalabras(palabrasArray);
console.log(resultado);

//Ejercicio 2
let productoA = {
    nombre: 'Camisa',
    precio: 25,
    cantidad: 5
};

let productoB = {
    nombre: 'Jeans',
    precio: 40,
    cantidad: 3
};

let costoTotalProductoA = productoA.precio * productoA.cantidad;
let costoTotalProductoB = productoB.precio * productoB.cantidad;
let costoTotal = costoTotalProductoA + costoTotalProductoB;

console.log(costoTotalProductoA);
console.log(costoTotalProductoB);
console.log(`Total: ${costoTotal}`);

//Ejercicio 3
let personas = [ 
    {nombre:'Sergio', edad: '33', ciudad: 'San Salvador'},
    {nombre:'Martha', edad: '35', ciudad: 'San Salvador'},
    {nombre:'Marleni', edad: '50', ciudad: 'Santa Tecla'},
    {nombre:'Sonia', edad: '25', ciudad: 'San Miguel'}
];

function filtrarPersonas(personasObjeto, ciudad){
    return personasObjeto.filter(persona => persona.edad > 30 && persona.ciudad === ciudad)
}

let personasFiltradas = filtrarPersonas(personas, "San Salvador")
console.log(personasFiltradas);

//Ejercicio 4
let numeros = [2, 5, 9, 12];

let cuadradosnewarray = numeros.map(numero => numero **2);
console.log(numeros);
console.log(cuadradosnewarray);

//Ejercicio 5
let arreglo = [1,2,3,4,5,6,7,8,9,10];
let sumaPares = 0;

for(let i=0; i < arreglo.length; i++){
    if(arreglo[i] % 2 === 0){
        sumaPares += arreglo[i];
    }
}

console.log(sumaPares);

//Ejercicio 6
let personas = [ 
    {nombre:'Sergio', edad: '33', ciudad: 'San Salvador'},
    {nombre:'Martha', edad: '35', ciudad: 'San Salvador'},
    {nombre:'Marleni', edad: '50', ciudad: 'Santa Tecla'},
    {nombre:'Sonia', edad: '25', ciudad: 'San Miguel'} 
];

function buscarPorNombre(arraypersona, nombre){
    return arraypersona.find(objeto => objeto.nombre === nombre)
}

let personaBuscada = buscarPorNombre(personas, 'Martha');
console.log(personaBuscada);

//Ejercicio 7
let personas = [ 
    {nombre:'Sergio', edad: '33', ciudad: 'San Salvador'},
    {nombre:'Martha', edad: '35', ciudad: 'San Salvador'},
    {nombre:'Marleni', edad: '50', ciudad: 'Santa Tecla'},
    {nombre:'Sonia', edad: '25', ciudad: 'San Miguel'} 
];

personas.sort((a,b) => {
    return a.nombre.localeCompare(b.nombre);
})
console.log(personas);

personas.sort((a,b) => {
    return a.edad - b.edad;
})
console.log(personas);

//Ejercicio 8
let personas = [ 
    {nombre:'Sergio', edad: '33', ciudad: 'San Salvador'},
    {nombre:'Martha', edad: '', ciudad: 'San Salvador'},
    {nombre:'Marleni', edad: '50', ciudad: 'Santa Tecla'},
    {nombre:'Sonia', edad: '25', ciudad: 'San Miguel'} 
];

function verificarPropiedades(){
    personas.forEach(persona =>{
        if(persona.edad === null || persona.edad === undefined || persona.edad === ''){
            console.log(`La propiedad edad de ${persona.nombre} está vacía`)
        }
    });
}

verificarPropiedades();

//Ejercicio 9
let listaDeCompras = {
    "Naranjas": 6,
    "Peras": 5,
    "Leche": 1,
    "Pan": 6,
    "Huevos": 12,
    "Arroz": 3
};

for (let producto in listaDeCompras) {
    console.log(`${producto}: ${listaDeCompras[producto]}`);
}

//Ejercicio 10
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Carlos", edad: 21 }
];

let profesores = [
    { nombre: "Laura", materia: "Matemáticas" },
    { nombre: "Pedro", materia: "Historia" },
    { nombre: "Ana", materia: "Ciencias" }
];

function combinarObjetos(a,b){
    let comunidadEducativa = [...a, ...b]
    return comunidadEducativa;
}

let comunidad = combinarObjetos(estudiantes, profesores);
console.log(comunidad);