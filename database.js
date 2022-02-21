const Mongoose = require("mongoose");

Mongoose.connect('mongodb+srv://dorkosprono:rRbgESQlT9ahei6r@cluster0.qsqw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(db => console.log('DB'))
    .catch(err => console.error(err))