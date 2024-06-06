const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let datos = []
let nextId = 1

const validateData = (req, res, next) => {
    const { nombre, edad, genero, departamento } = req.body

    if (!nombre || !edad || !genero || !departamento) {
        return res.status(400).json({ error: 'Faltan datos en el cuerpo de la solicitud' })
    }

    if (typeof edad !== 'number') {
        return res.status(400).json({ error: 'Edad debe ser un número' })
    }
    next()
}

app.get('/datos', (req, res) => 
    res.json(datos)
)

app.post('/datos', validateData, (req, res) => {
    const newDato = {
        id: nextId,
        nombre: req.body.nombre,
        edad: req.body.edad,
        genero: req.body.genero,
        departamento: req.body.departamento
    }
    datos.push(newDato)
    nextId++
    res.status(201).json(newDato)
})

app.put('/datos/:id', validateData, (req, res) => {
    const datoId = parseInt(req.params.id)
    const dato = datos.find(d => d.id === datoId)

    if (dato) {
        dato.nombre = req.body.nombre || dato.nombre
        dato.edad = req.body.edad || dato.edad
        dato.genero = req.body.genero || dato.genero
        dato.departamento = req.body.departamento || dato.departamento

        res.json(dato);
    } else {
        res.status(404).send('Datos no encontrados');
    }
})

app.delete('/datos/:id', (req, res) => {
    const datoId = parseInt(req.params.id)
    const dato = datos.findIndex(d => d.id === datoId)

    if(dato !== -1){
        datos.splice(dato, 1)
        res.status(204).send();
    } else {
        res.status(404).send('Producto no encontrado');
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))