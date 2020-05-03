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
 * Route new user
 */
routes.post('/new/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        fullname : Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}), UserController.create);

routes.use('/users',require('./routes/usersRouter'));

module.exports = routes;