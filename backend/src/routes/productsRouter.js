const routes = require('express').Router();
const tokenMiddleware = require('../middlewares/auth');

const { celebrate, Segments, Joi } = require('celebrate');

const ProductController = require('../controllers/ProductController');

routes.use(tokenMiddleware);

routes.get('/', () => {

})

