const {Router} = require('express')
const PostulanteController = require('./../controllers /PostulanteController.js') 
// Route para las rutas 
const PostulanteRoute = new Router()

// ruta para obtener los detalles de los arboles en general
PostulanteRoute.post('/api/addPostulante',PostulanteController.addPostulante)
PostulanteRoute.get('/api/postulantes',PostulanteController.getPostulantes)

module.exports = PostulanteRoute