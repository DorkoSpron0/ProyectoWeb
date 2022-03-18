const {Router} = require("express");
const bloques = require('../bloques')
//const Comms = require('../models/comments')
const pool = require('../database.js')

const router = Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/bloques', (req,res) => {
    res.render('bloques', {bloques})
})

router.get('/Interes', (req,res) => {
    res.send('Interes')
})

router.get('/comentarios', async (req,res) => {
    const resp = await pool.query('SELECT * FROM posts')
    res.json(resp.rows)
})

router.get('/create-card', (req,res) => {
    res.render('newCard')
})

router.get('/viewCard/:id', (req,res) => {
    const id = req.params.id
    for(var i = 0; i < bloques.length; i++){
        if(bloques[i].data.id == id){
            const bloque = bloques[i].data;
            res.render('bloques_id', {bloque})
        }
    }
    
})

router.post('/comentarios', async (req,res) => {
    const {title,description,author} = req.body
    const resp = await pool.query('INSERT INTO posts(title,description,author) VALUES ($1,$2,$3)', [title,description,author])
    res.json(resp)
})




module.exports = router
