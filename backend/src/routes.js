const routes = require('express').Router();

routes.get('/', (req,res) => res.send('ola'));

module.exports = routes;