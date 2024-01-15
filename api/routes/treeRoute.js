const {Router} = require('express')
const TreeController = require('../controllers /treeController.js')

const TreeRoute = new Router()

TreeRoute.get('/arboles',TreeController.getT)

module.exports = TreeRoute