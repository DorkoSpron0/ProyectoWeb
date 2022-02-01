const Mongoose = require("mongoose");

Mongoose.connect('mongodb://localhost/ProyectoWeb')
    .then(db => console.log('DB'))
    .catch(err => console.error(err))