const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ejercicio 1
rl.question('Ingrese su nombre: ',(nombre) => {
    rl.question('Ingrese su apellido: ', (apellido) =>{
        console.log(`Hola mi nombre es ${nombre} ${apellido}`)
    })  
})

//Ejercicio 2
rl.question('Ingrese una cadena de texto: ', (cadena) =>{
    console.log(`Número de caracteres: ${cadena.length}`)
})

//Ejercicio 3
rl.question('Ingrese una palabra ', (palabra) =>{
    console.log(palabra.toUpperCase());
})

//Ejercicio 4
rl.question('Ingrese una frase: ', (frase) =>{
    rl.question('Ingrese la palabra que desea reemplazar: ', (palabraCambiar) =>{
        rl.question('Ingrese la nueva palabra: ', (nuevaPalabra) =>{
            const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevaPalabra)
            console.log('Frase modificada: ', fraseModificada)
        })
    })
})

//Ejercicio 5
rl.question('Ingrese una cadena: ', (cadena) =>{
    const inicio = 6;
    const longitud = 5;
    const subcadena = cadena.substring(inicio, inicio + longitud);
    console.log(`Subcadena es: ${subcadena}`);
})

//Ejercicio 6
rl.question('Ingrese una frase: ', (frase) =>{
    const palabras = frase.split(' ');
    console.log(`Numero de palabras: ${palabras.length}`);
})

//Ejercicio 7
rl.question('Ingrese una cadena: ', (cadena) =>{
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`cadenaInvertida: ${cadenaInvertida}`);
})

//Ejercicio 8
rl.question('Ingresa una palabra: ', (palabra) =>{
    const palabraInvertida = palabra.split('').reverse().join('');
    if(palabra === palabraInvertida){
        console.log(`${palabra} es un palíndromo`)
    }else{
        console.log(`${palabra} no es un palíndromo`)
    }
})

//Ejercicio 9
rl.question('Ingrese una palabra: ', (palabra) =>{
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length:0;
    console.log(`Numero de vocales: ${numeroVocales}`);
})

//Ejercicio 10
rl.question('Ingrese una frase: ', (frase) =>{
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    console.log(`Frase capitalizada: ${fraseCapitalizada}`);
})
