const express = require('express')
const routes = express.Router()

const OngController = require('./controlllers/OngController')
const IncidentController = require('./controlllers/IncidentController')
const ProfileController = require('./controlllers/ProfileController')
const SessionController = require('./controlllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes