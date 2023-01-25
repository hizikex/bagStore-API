 const express = require('express');
 const dotenv = require('dotenv');
 dotenv.config({path: './config/config.env'})

 const authRoute = require('./routes/router')


const app = express();

app.use(express.json());

app.use('/api', authRoute);

app.use('/', (req, res) => {
    res.status(200).send("My API is working")
});

module.exports = app