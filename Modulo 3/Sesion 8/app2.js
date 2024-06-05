const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use(function (req, res, next) {
  if(req.method === 'POST' && !req.body.bebidas){
    return res.status(400).send('Falta contenido en el campo')
  }
  next()
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
  res.send('Dato registrado')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))