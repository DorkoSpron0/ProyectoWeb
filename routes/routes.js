const {Router} = require("express");
const bloques = require('../bloques')
const Comms = require('../models/comments')

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
    const coments = await Comms.find()
    res.render('coms',{coments})
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

router.post('/create-card', async (req,res) => {
    const {title,description,author} = req.body
    const cum = new Comms({title,description,author})
    await cum.save()
    res.redirect('/')
})




module.exports = router
