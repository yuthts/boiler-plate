const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hsoyeong925:hmj8488sy@boiler-plate.tk17l.mongodb.net/?retryWrites=true&w=majority&appName=boiler-plate')
.then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 안녕하세요~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
