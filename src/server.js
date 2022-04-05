const express = require('express')
//const path = require('path') //biblioteca já existende dentro do nodejs

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexão com o banco de dados
db.connect()

//Habilita server para receber dados via post(formulário)
app.use(express.urlencoded({extended: true})) 

//definindo as rotas
app.use('/api', routes)

//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))