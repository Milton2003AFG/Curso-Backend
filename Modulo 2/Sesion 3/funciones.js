
//Exportar funciones
/* function agregar(a, b)  {
    return a+b;
}


function restar(a, b){
    return a-b
}

module.exports = {
    agregar,
    restar
} */

//Exportar clases
/* class Persona{
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }
    saludo(){
        console.log(`Hola mi nombre es ${this.nombre} con ${this.edad} años`)
    }
}

module.exports = Persona */

//Fecha
/* const {format} = require('date-fns')
function formatoFecha (fecha){
    return format(fecha, 'yyyy-MM-dd')
}

module.exports = formatoFecha */

//Import
export function suma(a,b){
    return a+b
}

export function resta(a,b){
    return a-b
}