const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
require('./database')
const app = express()

app.set('port', process.env.PORT || 4000);
app.set('view engine','ejs')
app.set('views', './views')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.use(morgan('dev'))

app.use('/', require('./routes/routes'))

app.listen(app.get('port'), () => {
	console.log(`Server Started ${app.get('port')}`);
})
