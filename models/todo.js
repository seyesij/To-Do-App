const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
  return db.query('SELECT * FROM todos');
}

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
  `, [id]);
}

Todo.create = (todo, userid) => {
  return db.one(`
    INSERT INTO todos
    (title, category, status, description, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [todo.title, todo.category, todo.status, todo.description, userid]);
}

Todo.update = (todo, id) => {
  return db.one(`
    UPDATE todos SET
    title = $1,
    category = $2,
    status = $3,
    description = $4
    WHERE id = $5
    RETURNING *
  `, [todo.title, todo.category, todo.status, todo.description, id]);
}

Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todos
    WHERE id = $1
  `, [id]);
}

module.exports = Todo;




