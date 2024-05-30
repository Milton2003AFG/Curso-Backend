const express = require('express');
const axios = require('axios');


const app = express();
const port = 3000;
const URL = 'https://jsonplaceholder.typicode.com/todos';

app.use(express.json());

app.get('/todos', async (req, res) => {
    try{
        const respuesta = await axios.get(URL);
        res.json(respuesta.data);
    }catch(error){
        console.error('Error al obtener los datos', error.mesasage);
        res.status(500).json({error: 'Error interno del servidor'});
    }
})

app.get('/todos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const respuesta = await axios.get(URL + `/${id}`);
        const response = respuesta.data;
        res.json({title: response.title});
    }catch(error) {
        console.error('Error al obtener los datos', error.mesasage);
        res.status(500).json({error: 'Error interno del servidor'});
    }
})

app.get('/todos/title/:title', async (req, res) => {
    const title = req.params.title;
    try{
        const respuesta = await axios.get(URL);
        const response = respuesta.data.find(res => res.title === title);
        if(response){
            res.json(response);
        }else {
            res.status(404).json('No se encontró el dato');
        }
    }catch(error) {
        console.error('Error al obtener los datos', error.mesasage);
        res.status(500).json({error: 'Error interno del servidor'});    }
})

app.get('/cinco', async(req, res) => {
    try {
        const respuesta = (await axios.get(URL)).data;
        let datos = [];
        for(let i = 0; i<5; i++){
            datos.push(respuesta[i]);
        }
        res.json(datos);
    }catch(error){
        console.error('Error al obtener los datos', error.mesasage);
        res.status(500).json({error: 'Error interno del servidor'});
    }
})

app.listen(port, () => {
    console.log(`Servidor en ejecución en http:localhost:${port}`);
})