const {Router} = require("express");
const bloques = require('../bloques')

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




module.exports = router
