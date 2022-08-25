const conn = require('./connection');

const insert = (task) => conn.execute(
  'INSERT INTO task (nome, descricao) VALUES (?, ?)', [task.nome, task.descricao],
);

const findAll = () => conn.execute('SELECT * FROM task');

const findById = (id) => conn.execute('SELECT * FROM task WHERE id = ?', [id]);

const update = (task, id) => conn.execute(
  'UPDATE task SET (nome = ?, descricao = ?, WHERE id = ?)', [task.nome, task.descricao, id],
);

const remove = (id) => conn.execute('DELETE FROM task WHERE id = ?', [id]); 

module.exports = { insert, findAll, findById, update, remove };