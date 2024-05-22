
const fs = require('fs')


/* fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if(err){
        console.error('Error al leer el archivo', err)
    }else {
        console.log('CONTENIDO DEL ARCHIVO: ', data)
    }
}) */

/* const contenido = "Este es el nuevo contenido"
fs.writeFile('archivo.txt', contenido, err => {
    if(err){
        console.error('Error al escribir el archivo')
    }else{
        console.log('El archivo esta escrito')
    }
}) */

/* const archivo = 'archivo.txt'

const contenidoAgregado = '\n Este es un contenido agregado'

fs.appendFile(archivo, contenidoAgregado, (err) => {
    if(err){
        console.error('Error al agregar el contenido')
    }else {
        console.log('Contenido agregado')
    }
}) */

/* const ruta = 'C:\Users\milto\Documents\Universidad Info\Curso Backend\Modulo 1\Sesion 1\Ejercicios\script.js'

fs.readFile(ruta, 'utf8', (err, data) => {
    if(err){
        console.error('Erro al leer el archivo')
    }else {
        console.log('El archivo esta leido')
    }
}) */

const path = require('path')
const readline = require('readline')

/* const documentos = path.join(process.env.Home || process.env.USERPROFILE, 'Documents')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Nombre de la carpeta a crear', (carpeta) => {
    const nuevaCarpeta = path.join(documentos, carpeta)
    fs.mkdir(nuevaCarpeta, {recursive: true}, (err) => {
        if(err){
            console.err('Error al crear la carpeta ', err)
        }else{
            console.log('Carpeta creada exitosamente')
        }
    })
}) */

const documentos = path.join(process.env.Home || process.env.USERPROFILE, 'Documents')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Nombre de la carpeta a eliminar: ', (carpeta) => {
    const carpetadel = path.join(documentos, carpeta)
    fs.rmdir(carpetadel, {recursive: true}, (err) => {
        if(err){
            console.err('Error al crear la carpeta ', err)
        }else{
            console.log('Carpeta eliminada exitosamente')
        }
    })
})