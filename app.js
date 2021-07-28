const express = require('express')
const db = require('./dbConnection')

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {

  res.render('index')

});

// Adicionar tarefa
app.post('/', (req, res) => {
  
  const tarefa = req.body.tarefa
  res.redirect('/')

});

// Deletar tarefa
app.get('/del/:id', async (req, res) => {

  const id = req.params.id
  res.redirect('/')

})

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});