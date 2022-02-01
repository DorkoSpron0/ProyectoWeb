const express = require('express');
require('./database')
const app = express()

app.set('port', process.env.PORT || 8080);
app.set('view engine','ejs')
app.set('views', './views')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/routes'))

app.listen(app.get('port'), () => {
	console.log(`Server Started ${app.get('port')}`);
})
