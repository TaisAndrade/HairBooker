const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const routes = require('./routes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao banco de dados
db.connect();

// Configurar rotas
app.use('/api', routes);

// Teste de comunicação
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});