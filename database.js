const { Pool } = require('pg')

const pool = new Pool({
	user: process.env.POSTGRES_USR,
	host: process.env.POSTGRES_HOST,
	password: process.env.POSTGRES_PSSW,
	database: process.env.POSTGRES_DATABASE,
	port: process.env.POSTGRES_PORT
})

module.exports = pool