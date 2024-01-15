const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const TreeRoute = require('./routes/treeRoute.js')

const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.disable('x-powered-by')

//Rutas de la api
app.use(TreeRoute)

module.exports = app
