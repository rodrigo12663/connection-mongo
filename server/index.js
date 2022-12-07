
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const router = require('./routes/notes')

const app = express()


app.engine('handlebars',handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./public'))

app.use(router)



module.exports = app





