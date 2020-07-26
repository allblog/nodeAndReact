const express = require('express');
const routes = express.Router();
const ContatosController = require('./controller/contatoController');

routes.get('/contato', ContatosController.index);
routes.get('/contato/:id', ContatosController.show);
routes.post('/contato', ContatosController.store);
routes.delete('/contato/:id', ContatosController.destroy);

module.exports = routes;
