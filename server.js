const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const productRouter = require('./routes/coffee');

const app = express()
PORT = process.env.PORT || 3001

app.use('/', productRouter)

app.listen(PORT, () => {console.log(`Server listening on ${PORT}.`)})
