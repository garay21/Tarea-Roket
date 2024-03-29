const {Router} = require('express')
const TreeController = require('../controllers /treeController.js')

// Route para las rutas 
const TreeRoute = new Router()

// ruta para obtener los detalles de los arboles en general
TreeRoute.get('/api/arboles',TreeController.getTrees)
TreeRoute.get('/api/arboles/:id',TreeController.getTree)
TreeRoute.post('/api/addComment', TreeController.addComment)
TreeRoute.get('/api/comments',TreeController.getComments)

module.exports = TreeRoute