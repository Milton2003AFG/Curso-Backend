import fs from 'fs'
import chalk from 'chalk'

const cargarNotas = () => 
{
    try
    {
        const dataBuffer = fs.readFileSync('notas.json');
        const dataJSON = dataBuffer.toString();
        
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [];
    }
};

const guardarNotas = notas =>
{
    const dataJSON = JSON.stringify(notas);
    fs.writeFileSync('notas.json', dataJSON);
};


const agregarNotas = (title, body) => 
{
    const notas = cargarNotas();
    const duplicarNotas = notas.find(nota => nota.title === title);

    if(!duplicarNotas)
    {
        notas.push
        ({
            title,
            body
        });

        guardarNotas(notas);
        console.log("Nota agregada");
    }
    else
    {
        console.log("Nota no agregada");
    }
};

const eliminarNotas = title =>
{
    const notas = cargarNotas();
    const notasAConservar = notas.find(nota => nota.title !== title);
    
    if(notas.length > notasAConservar.length)
    {
        guardarNotas(notasAConservar);
        console.log(chalk.green.inverse("Nota eliminada"));
    }
    else
    {
        console.log(chalk.red.inverse("Nota no eliminada"));
    }
};

const listarNotas = () => 
{
    const notas = cargarNotas();
    console.log(chalk.inverse("Tus notas"));

    notas.forEach(nota => 
    {
        console.log(nota.title);    
    });
};

const leerNotas = title => 
{
    const notas = cargarNotas();
    const nota = notas.find(nota => nota.title === title);

    if(nota)
    {
        console.log(chalk.inverse(nota.title));
        console.log(chalk.blue(nota.body));
    }
    else
    {
        console.log(chalk.red.inverse("Nota no encontrada"));
    }
};

const editarNota = (title, newBody) => {
    const notas = cargarNotas();
    const noteIndex = notas.findIndex((note) => note.title === title);

    if (noteIndex !== -1) {
        notas[noteIndex].body = newBody;
        guardarNotas(notas);
        console.log(chalk.green.inverse('Nota editada'));
    } else {
        console.log(chalk.red.inverse('Nota no encontrada'));
    }
};

export
{
    agregarNotas,
    eliminarNotas,
    listarNotas,
    leerNotas,
    editarNota
}