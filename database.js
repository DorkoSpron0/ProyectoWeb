const Mongoose = require("mongoose");

Mongoose.connect(process.env.MONGODB_URI)
    .then(db => console.log('DB'))
    .catch(err => console.error(err))