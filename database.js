const { Pool } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'pendejo4172286',
	database: 'inemapstest01',
	port: '5432'
})

module.exports = pool