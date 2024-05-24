import inquirer from "inquirer";

//Ejercicio

const preguntaInicial = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Introduce tu nombre'
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Introduce tu edad',
        validate: function (value) {
            const valid = !isNaN(value) && value >= 0;
            return valid || 'Por favor introduce un número válido';
        }
    }
];

const preguntaCorreo = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo electrónico',
        validate: function (value) {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion){
                return true
            }
            return 'Por favor introduce un correo válido'
        }
    },
    {
        type: 'password',
        name: 'contraseña',
        message: 'Ingrese su contraseña',
        mask: '*'
    }
];

/* const preguntaSesion = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo electrónico',
        validate: function (value) {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion){
                return true
            }
            return 'Por favor introduce un correo válido'
        }
    },
    {
        type: 'password',
        name: 'contraseña',
        message: 'Ingrese su contraseña',
        mask: '*'
    }              
] */

inquirer.prompt(preguntaInicial).then((respuesta) => {
    if (respuesta.edad >= 18) {      
        inquirer.prompt(preguntaCorreo).then((respuestaCorreo) => {
            console.clear()
            console.log(`Inicia Sesion`);
            inquirer.prompt(preguntaCorreo).then((respuestaSesion) => {
                if(respuestaSesion.correo === respuestaCorreo.correo && respuestaSesion.contraseña === respuestaCorreo.contraseña){
                    console.log(`Bienvenido ${respuesta.nombre} con correo ${respuestaSesion.correo}`)
                }else{
                    console.log('Contraseña o correo inválidos')
                }
            })
        });
    } else {
        console.log('Edad incorrecta. La edad debe ser mayor o igual a 18 años.');
    }
});




/* const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo: ',
        validate: function (value) {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if(validacion){
                return true
            }
            return 'Por favor introduce un correo válido'
        }
    }
]

inquirer.prompt(pregunta).then((respuesta) => {
    console.log(`Correo ingresado: ${respuesta.correo}`)
})
.catch((error) => {
    console.log('Error al ingresar el correo', error)
})
 */

/* inquirer.prompt([
    {
        type: 'checkbox',
        name: 'frutas',
        message: 'Selecciona tus frutas favoritas',
        choices: ['Manzana', 'Banana', 'Uvas', 'Naranja']
    }
])

.then((respuesta) => {
    console.log('Frutas selecionadas: ', respuesta.frutas.join(', '))
    if(respuesta.frutas.includes ('Manzana') && respuesta.frutas.includes('Banana')){
        console.log('Licuado Fresco')
    }else if(respuesta.frutas.includes ('Manzana') && respuesta.frutas.includes('Naranja')){
        console.log('Licuado Ácido')
    }else if(respuesta.frutas.includes ('Banana') && respuesta.frutas.includes('Naranja')){
        console.log('Licuado Jumex')
    }else if(respuesta.frutas.includes ('Uvas') && respuesta.frutas.includes('Manzana')){
        console.log('Licuado Exótico')
    }
}) */

/* const pregunta = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Digame su nombre'
    },
    {
        type: 'confirm',
        name: 'confirmacion',
        message: 'Seguro ese es el nombre?'
    },
    {
        type: 'list',
        name: 'color',
        message: 'Cual es tu color favorito?',
        choices: ['Rojo', 'Verde', 'Azul', 'Amarillo']
    },
    {
        type: 'checkbox',
        name: 'intereses',
        message: 'Selecciona una opcion de interes',
        choices: ['Programacion', 'Diseño', 'Base de Datos', 'Redes']
    },
    {
        type: 'password',
        name: 'contraseña',
        message: 'Ingrese su contraseña',
        mask: '*'
    }
]

inquirer.prompt(pregunta).then((respuesta) => {    
    if(respuesta.confirmacion){
        console.log('Confirmacion exitosa')
        console.log(`Hola ${respuesta.nombre}`)
        console.log(`Tu color favorito es: ${respuesta.color}`)
        console.log(`Tus intereses son: ${respuesta.intereses.join(', ')}`)
        console.log(`Tu contraseña es: ${respuesta.contraseña}`)
    }else{
        console.log('No se confirmo el nombre')
    }
}) */

