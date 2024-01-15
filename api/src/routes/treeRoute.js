const {Router} = require('express')
const TreeController = require('../controllers /treeController.js')

// Route para las rutas 
const TreeRoute = new Router()

// ruta para obtener los detalles de los arboles en general
TreeRoute.get('/arboles',TreeController.getT)

module.exports = TreeRoute