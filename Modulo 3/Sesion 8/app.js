const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use(express.json())

app.get('/ejemplo', (req, res) => res.send('Hello World!'))

app.post('/ejemplo', (req, res) => {
    res.send(`Datos recibidos: ${JSON.stringify(req.body)}`)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo salio mal')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))