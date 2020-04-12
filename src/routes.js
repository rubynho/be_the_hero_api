const express = require('express')

const OngController = require('./controllers/OngController')
const OngValidator = require('./validations/OngValidator')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngValidator.create, OngController.create)

module.exports = routes
