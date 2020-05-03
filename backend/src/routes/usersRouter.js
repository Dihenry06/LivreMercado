const routes = require('express').Router();
const tokenMiddleware = require('../middlewares/auth');

const { celebrate, Segments, Joi } = require('celebrate');

const UserController = require('../controllers/UserController');

routes.use(tokenMiddleware);

routes.get('/',(req,res)=>{
    return res.json({ id : req.userId});
})

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