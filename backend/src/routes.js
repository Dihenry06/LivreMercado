const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');

routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}), UserController.create);

module.exports = routes;