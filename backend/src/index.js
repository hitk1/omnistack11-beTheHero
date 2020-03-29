const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
console.log('Servidor online: 3333')