const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

let products = [];

app.get('/products', (req, res) => {
    res.json(products);
})


app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length+1,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        inStock: req.body.inStock
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

app.put('/products/:id', (req, res) => {
    const productid = parseInt(req.params.id)
    const product = product.find(t => t.id === productid)
    if(product){
        product.title = req.body.title || product.title
        product.completed = req.body.completed != undefined ? req.body.completed : product.completed
        res.json()
    }else {
        res.status(404).send('No se actualizó el producto')
    }
})


app.listen(port, () => {
    console.log(`Servidor corriendo en la url http://localhost:${port}`)
})