const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const TreeRoute = require('./routes/treeRoute.js')
const PostlRoute = require('./routes/postulanteRoute.js')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.disable('x-powered-by')

//Rutas de la api
app.use(TreeRoute)
app.use(PostlRoute)

module.exports = app
