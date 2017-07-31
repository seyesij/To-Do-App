const express = require('express');
const todoRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const todosController = require('../controllers/todos-controller');

todoRoutes.get('/', todosController.index);
todoRoutes.post('/', authHelpers.loginRequired, todosController.create);

todoRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('todos/todo-add', {
    currentPage: 'add',
  });
});

todoRoutes.get('/:id', todosController.show);
todoRoutes.get('/:id/edit', authHelpers.loginRequired, todosController.edit);
todoRoutes.put('/:id', authHelpers.loginRequired, todosController.update);
todoRoutes.delete('/:id', authHelpers.loginRequired, todosController.delete);

module.exports = todoRoutes;
