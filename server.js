const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const app = require('./app')

const Db = process.env.DATABASE

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongooseDB connected")
})


app.listen(process.env.PORT, ()=>{
    console.log('Connected')
})