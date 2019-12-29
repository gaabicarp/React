const mongoose = require('mongoose')

mongoose.connect( process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const conexion = mongoose.connection
conexion.once('open',()=>console.log("Conectado perri"))