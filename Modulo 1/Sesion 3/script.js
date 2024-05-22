const { strictEqual } = require('assert');
const { parse } = require('path');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ejecutarEjercicio(opcion) {
    switch(opcion){
        case 1: 
            ejercicio1();
            break;

        case 2:
            ejercicio2();
            break;   

        case 3:
            ejercicio3();
            break;  

        case 4:
            ejercicio4();
            break;  

        case 5:
            ejercicio5();
            break;  

        case 6:
            ejercicio6();
            break;  

        case 7:
            ejercicio7();
            break;  

        case 8:
            console.log("Fin del programa");
            rl.close(); // Cerrar la interfaz de readline cuando se selecciona la opción 8
            break;

        default:
            console.log("Opción no válida. Por favor, selecciona una opción del 1 al 8.");
            mostrarMenu(); // Volver a mostrar el menú si se ingresa una opción no válida
            break;
    }
}

const nombresEjercicios = [
    "1: Numero positivo, negativo o cero",
    "2: Numero mayor",
    "3: Factorial de un numero",
    "4: Numero par o impar",
    "5: Colores primarios",
    "6: Meses",
    "7: Tipo de vehiculo",
    "8: Salir"
]

function mostrarMenu() {
    rl.question(`Selecciona una opción:\n${nombresEjercicios.join('\n')}\n`, (opcionSelec) => {
        opcion = parseInt(opcionSelec);
        ejecutarEjercicio(opcion);
    });
}

// Llamar al menú por primera vez para iniciar el programa
mostrarMenu();

// Ejercicio 1
function ejercicio1() {
    console.clear();
    function evaluar(numero) {
        if (numero >= 1) {
            return console.log(numero + " Es número positivo");
        } else if (numero <= -1) {
            return console.log(numero + " Es número negativo");
        } else {
            return console.log("El número es 0");
        }
    }

    rl.question("Ingrese un número: ", (numero) => {
        evaluar(numero);
        mostrarMenu();
    });
}

// Ejercicio 2
function ejercicio2() {
    console.clear();
    rl.question('Ingrese el primer número ', (numero1) => {
        rl.question('Ingrese el segundo número ', (numero2) => {
            rl.question('Ingrese el tercer número ', (numero3) => {
                evaluarNumero(numero1, numero2, numero3);
                mostrarMenu();
            });
        });
    });

    function evaluarNumero(numero1, numero2, numero3) {
        if (parseFloat(numero1) > parseFloat(numero2) && parseFloat(numero1) > parseFloat(numero3)) {
            return console.log(numero1 + " es mayor");
        } else if (parseFloat(numero2) > parseFloat(numero1) && parseFloat(numero2) > parseFloat(numero3)) {
            return console.log(numero2 + " es mayor");
        } else if (parseFloat(numero3) > parseFloat(numero1) && parseFloat(numero3) > parseFloat(numero2)) {
            return console.log(numero3 + " es mayor");
        }
    }
}

// Ejercicio 3
function ejercicio3() {
    console.clear();
    rl.question("Digite el numero a realizar el factorial: ", (n1) => {
        let resultado = 1;
        for (let i = 1; i <= parseFloat(n1); i++) {
            resultado *= i;
        }
        console.log("El factorial es: " + resultado);
        mostrarMenu();
    });
}

// Ejercicio 4
function ejercicio4() {
    console.clear();
    rl.question("Ingrese el numero a evaluar: ", (num) => {
        if (parseFloat(num) % 2 === 0) {
            console.log("El numero es par");
        } else {
            console.log("El numero es impar");
        }
        mostrarMenu();
    });
}

// Ejercicio 5
function ejercicio5() {
    console.clear();
    rl.question("Ingrese el primer color: ", (color1) => {
        rl.question("Ingrese el segundo color: ", (color2) => {
            if (color1 === "azul" && color2 === "amarillo") {
                console.log("La mezcla genera el color verde");
            } else if (color1 === "azul" && color2 === "rojo") {
                console.log("La mezcla genera el color morado");
            } else if (color1 === "rojo" && color2 === "amarillo") {
                console.log("La mezcla genera el color naranja");
            } else {
                console.log("La combinacion no se encuentra disponible");
            }
            mostrarMenu();
        });
    });
}

// Ejercicio 6
function ejercicio6() {
    console.clear();
    rl.question("Digite el numero de mes a conocer: ", (nMes) => {
        let nombresMes;
        switch (parseInt(nMes)) {
            case 1:
                nombresMes = "Enero";
                break;

            case 2:
                nombresMes = "Febrero";
                break;

            case 3:
                nombresMes = "Marzo";
                break;

            case 4:
                nombresMes = "Abril";
                break;

            case 5:
                nombresMes = "Mayo";
                break;

            case 6:
                nombresMes = "Junio";
                break;

            case 7:
                nombresMes = "Julio";
                break;

            case 8:
                nombresMes = "Agosto";
                break;

            case 9:
                nombresMes = "Septiembre";
                break;

            case 10:
                nombresMes = "Octubre";
                break;

            case 11:
                nombresMes = "Noviembre";
                break;

            case 12:
                nombresMes = "Diciembre";
                break;

            default:
                nombresMes = "Numero de mes no existe";
                break;
        }
        console.log(nombresMes);
        mostrarMenu();
    });
}

// Ejercicio 7
function ejercicio7() {
    console.clear();
    rl.question("Digite la categoria del vehiculo: ", (categoria) => {
        let tipoVehiculo;
        switch (categoria) {
            case 'Moto':
                tipoVehiculo = "Motocicleta";
                break;

            case 'Auto':
                tipoVehiculo = "Automovil";
                break;

            case 'Camion':
                tipoVehiculo = "Super Camion";
                break;

            case 'Bicicleta':
                tipoVehiculo = "Super Bicicleta";
                break;

            default:
                tipoVehiculo = "La categoria digitada no existe";
        }
        console.log(tipoVehiculo);
        mostrarMenu();
    });
}
