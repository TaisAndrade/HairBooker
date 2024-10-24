const sqlite3 = require('sqlite3').verbose();

let db;

function connect() {
  db = new sqlite3.Database('../sqlite/HairBooker_DB', (err) => { // Caminho para o banco
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conectado ao banco de dados SQLite.');
    }
  });
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
