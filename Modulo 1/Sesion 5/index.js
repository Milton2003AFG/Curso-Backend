const operation = (numero1, numero2, callback) => {
    return setTimeout(() => {
        callback(numero1, numero2)
    }, 2000);
}

operation(5, 7, (a, b) => {
    console.log(a*b)
})

const operacion = (num1, num2, callback) => {
    setTimeout(() => {
       callback(num1, num2) 
    }, 5000);
}

operacion( 10, 20, (a, b) => {
    console.log(`La multiplicacion es:  ${a*b}`)
})