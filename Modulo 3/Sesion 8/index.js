const express = require('express')
const app = express()
const port = 3000

const pregunta = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()}`)
    next()
}

app.use(pregunta)

app.get('/', (req, res) => 
    res.send('GET funcionando')
)

app.post('/', function(req, res) {
    res.send('POST funcionando')
})

app.put('/', function(req, res) {
    res.send('PUT funcionando')
})

app.delete('/', function(req, res) {
    res.send('Delete funcionando')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))