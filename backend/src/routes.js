const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

/**
 * Route session
 */
routes.post('/session',celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}),SessionController);

/**
 * Routes Users
 */
routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}), UserController.create);

routes.put('/edit-user',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization : Joi.number().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        email:Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}),UserController.update);

module.exports = routes;