
//Funciones
/* const {agregar, restar} = require('./funciones')

const resultado = agregar(5,3)
const residuo = restar(5, 2)
console.log(`El resultado de la suma es: ${resultado}`)
console.log(`El resultado de la resta es: ${residuo}`) */

//Clase
/* const persona = require('./funciones')
const persona1 = new persona('Antonio', 35)
persona1.saludo() */

//Fecha
/* const fs = require('fs')
const formatoFecha = require('./funciones')

const hoy = new Date()
const formateo = formatoFecha(hoy)

fs.writeFileSync('fecha.txt', `La fecha de hoy es: ${formateo}`)

console.log('La fecha se ha guardado') */

//Import
import {suma, resta} from './funciones.js'

const resultadoSuma = suma(10, 2)
const resultadoResta = resta(18, 2)

console.log(`El resultado de la suma es ${resultadoSuma}`)
console.log(`El resultado de la resta es ${resultadoResta}`)