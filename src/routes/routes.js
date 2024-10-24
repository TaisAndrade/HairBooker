const express = require('express');
const router = express.Router();
const db = require('./database').getDb();

// Rota para cadastro de usuários
router.post('/api/cadastrar', (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  // Verificação básica dos campos
  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
  }

  const query = `
    INSERT INTO usuarios (nome, sobrenome, email, senha)
    VALUES (?, ?, ?, ?) 
  `;

  const params = [nome, sobrenome, email, senha];

  db.run(query, params, function(err) {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar o usuário.' });
    }

    res.status(201).json({ success: true, message: 'Usuário cadastrado com sucesso!', id: this.lastID });
  });
});

// Função de validação de login
router.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.get(query, [email], (err, usuario) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ success: false, message: 'Erro no servidor' });
    }

    if (!usuario) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
    }

    if (usuario.senha === senha) {
      return res.status(200).json({ success: true, message: 'Login bem-sucedido', usuario });
    } else {
      return res.status(401).json({ success: false, message: 'Senha incorreta' });
    }
  });
});


// Buscar agendamentos com filtro opcional de mês
router.get('/api/agendamentos', (req, res) => {
  const { mes } = req.query; // Obtendo o mês da query string

  let query = 'SELECT * FROM agendamentos';
  const params = [];

  // Se o mês for fornecido, adiciona um filtro
  if (mes) {
    query += ' WHERE strftime("%m", data_agendamento) = ?';
    params.push(mes);
  }

  db.all(query, params, (err, agendamentos) => {
    if (err) {
      console.error('Erro ao buscar agendamentos:', err);
      return res.status(500).json({ success: false, message: 'Erro ao buscar agendamentos' });
    }

    res.status(200).json({ success: true, agendamentos });
  });
});


// INSERT Agendamentos
router.post('/api/agendamentos', (req, res) => {
  const { nome, sobrenome, telefone, data, servico, horario } = req.body;

  // Verificação básica dos campos
  if (!nome || !sobrenome || !telefone || !data || !servico || !horario) {
    return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
  }

  const query = `
    INSERT INTO agendamentos (nome, sobrenome, telefone, data_agendamento, servico, horario)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const params = [nome, sobrenome, telefone, data, servico, horario];

  db.run(query, params, function(err) {
    if (err) {
      console.error('Erro ao inserir agendamento:', err);
      return res.status(500).json({ success: false, message: 'Erro ao criar agendamento.' });
    }

    res.status(201).json({ success: true, message: 'Agendamento criado com sucesso!', id: this.lastID });
  });
});


// DELETE Agendamentos
router.delete('/api/agendamentos/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM agendamentos WHERE id = ?';
  db.run(query, id, function(err) {
    if (err) {
      console.error('Erro ao cancelar agendamento:', err);
      return res.status(500).json({ success: false, message: 'Erro ao cancelar agendamento' });
    }

    res.status(200).json({ success: true, message: 'Agendamento cancelado com sucesso' });
  });
});

module.exports = router;
